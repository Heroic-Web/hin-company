// src/app/api/project-brief/route.ts

import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL belum diatur"
  )
}

if (!serviceRoleKey) {
  throw new Error(
    "SUPABASE_SERVICE_ROLE_KEY belum diatur"
  )
}

const supabase = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
  "application/pdf",

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

  "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  "text/csv",
]

const MAX_FILE_SIZE = 20 * 1024 * 1024

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
}

function getFolderName(type: string) {
  if (type.startsWith("image/")) return "images"

  if (type.includes("pdf")) return "documents"

  if (type.includes("word")) return "documents"

  if (type.includes("sheet")) return "documents"

  if (type.includes("presentation")) return "documents"

  return "others"
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const rawData = formData.get("data")

    if (!rawData || typeof rawData !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Data formulir tidak ditemukan",
        },
        { status: 400 }
      )
    }

    const payload = JSON.parse(rawData)

    const files = formData.getAll("files") as File[]

    const companyName =
      payload.companyName || "unknown-company"

    const companySlug = slugify(companyName)

    const uploadedFiles = []

    for (const file of files) {
      if (!(file instanceof File)) continue

      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            success: false,
            message: `Format file ${file.name} tidak didukung`,
          },
          { status: 400 }
        )
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: `Ukuran file ${file.name} melebihi 20MB`,
          },
          { status: 400 }
        )
      }

      const extension =
        file.name.split(".").pop() || ""

      const folder = getFolderName(file.type)

      const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`

      const filePath = `${companySlug}/${folder}/${fileName}`

      const arrayBuffer = await file.arrayBuffer()

      const { error } = await supabase.storage
        .from("project-assets")
        .upload(filePath, arrayBuffer, {
          contentType: file.type,
          upsert: false,
        })

      if (error) {
        console.error(
          "SUPABASE STORAGE ERROR:",
          error
        )

        return NextResponse.json(
          {
            success: false,
            message: `Gagal upload file ${file.name}`,
          },
          { status: 500 }
        )
      }

      uploadedFiles.push({
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        path: filePath,
      })
    }

    const serviceDetails = {
      serviceType: payload.serviceType,
    }

    const { data, error } = await supabase
      .from("project_briefs")
      .insert({
        service_type: payload.serviceType,

        pic_name: payload.picName,

        position: payload.position,

        company_name: payload.companyName,

        email: payload.email,

        whatsapp: payload.whatsapp,

        company_address: payload.companyAddress,

        operational_area: payload.operationalArea,

        current_website:
          payload.currentWebsite,

        social_media: payload.socialMedia,

        project_name: payload.projectName,

        business_description:
          payload.businessDescription,

        project_goals:
          payload.projectGoals || [],

        launch_target:
          payload.launchTarget,

        target_audience:
          payload.targetAudience,

        competitors: payload.competitors,

        references: payload.references,

        reference_reason:
          payload.referenceReason,

        visual_style:
          payload.visualStyle || [],

        primary_color:
          payload.primaryColor,

        tagline: payload.tagline,

        assets: uploadedFiles,

        service_details: serviceDetails,

        additional_notes:
          payload.additionalNotes,

        agreements:
          payload.agreements || [],
      })
      .select("id")
      .single()

    if (error) {
      console.error(
        "SUPABASE DATABASE ERROR:",
        error
      )

      return NextResponse.json(
        {
          success: false,
          message:
            "Gagal menyimpan data ke database",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        id: data.id,
        message:
          "Form kebutuhan proyek berhasil dikirim",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(
      "PROJECT BRIEF API ERROR:",
      error
    )

    return NextResponse.json(
      {
        success: false,
        message:
          "Terjadi kesalahan pada server",
      },
      { status: 500 }
    )
  }
}