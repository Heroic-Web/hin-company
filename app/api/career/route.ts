import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs" 

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log("API HIT")

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const formData = await req.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string
    const file = formData.get("resume") as File | null

    let attachments = []

    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File too large (max 5MB)" },
          { status: 400 }
        )
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    const { data, error } = await resend.emails.send({
      from: "Heroic Career <onboarding@resend.dev>",
      to: "almufid.business@gmail.com",
      replyTo: email,
      subject: `New Job Application - ${position}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>About:</strong></p>
        <p>${message}</p>
      `,
      attachments: attachments,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("Server error:", err)
    return NextResponse.json(
      { error: "The file is too large. Maximum allowed size is 5MB." },
      { status: 500 }
    )
  }
}