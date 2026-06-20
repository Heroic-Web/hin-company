"use client"

import type { ReactNode } from "react"
import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useDropzone } from "react-dropzone"
import {
  useForm,
  useWatch,
  type UseFormReturn,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  CheckCircle2,
  FileText,
  Loader2,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const services = [
  "Website Development",
  "Landing Page",
  "App Development",
  "Artikel SEO",
  "Desain Grafis",
  "AI & Machine Learning",
] as const

const goals = [
  "Meningkatkan penjualan",
  "Branding",
  "Mendapatkan leads",
  "Edukasi",
  "Internal perusahaan",
  "Otomatisasi proses",
  "Lainnya",
]

const visualStyles = [
  "Minimalis",
  "Modern",
  "Profesional",
  "Elegan",
  "Futuristik",
  "Formal",
  "Ceria",
]

const agreementItems = [
  "Saya menyatakan seluruh informasi yang diberikan benar.",
  "Saya memahami bahwa keterlambatan pengiriman materi dapat memengaruhi timeline proyek.",
  "Saya memahami revisi di luar ruang lingkup akan dikenakan biaya tambahan.",
  "Saya menyetujui penggunaan data untuk kebutuhan pengerjaan proyek.",
]

const schema = z.object({
  picName: z.string().min(3, "Minimal 3 karakter"),
  position: z.string().min(2, "Wajib diisi"),
  companyName: z.string().min(2, "Wajib diisi"),

  email: z.string().email("Email tidak valid"),

  whatsapp: z.string().min(8, "Nomor tidak valid"),

  companyAddress: z.string().min(10, "Alamat terlalu pendek"),

  operationalArea: z.string().min(2, "Wajib diisi"),

  currentWebsite: z.string().optional(),

  socialMedia: z.string().optional(),

  serviceType: z.enum(services),

  projectName: z.string().min(3),

  businessDescription: z.string().min(20),

  projectGoals: z.array(z.string()).min(1),

  launchTarget: z.string().min(1, "Wajib diisi"),

  targetAudience: z.string().min(10),

  competitors: z.string().optional(),

  referenceLinks: z.string().optional(),

  referenceReason: z.string().optional(),

  visualStyle: z.array(z.string()).min(1),

  primaryColor: z.string().min(2),

  tagline: z.string().optional(),

  additionalNotes: z.string().optional(),

  websitePages: z.string().optional(),

  websiteFeatures: z.string().optional(),

  appPlatform: z.string().optional(),

  seoKeywords: z.string().optional(),

  articleCount: z.string().optional(),

  designType: z.string().optional(),

  designSize: z.string().optional(),

  aiUseCase: z.string().optional(),

  aiIntegration: z.string().optional(),

  agreements: z.array(z.string()).min(4),
})

type FormValues = z.infer<typeof schema>

const defaultFormValues: FormValues = {
  picName: "",
  position: "",
  companyName: "",
  email: "",
  whatsapp: "",
  companyAddress: "",
  operationalArea: "",
  currentWebsite: "",
  socialMedia: "",
  serviceType: "Website Development",
  projectName: "",
  businessDescription: "",
  projectGoals: [],
  launchTarget: "",
  targetAudience: "",
  competitors: "",
  referenceLinks: "",
  referenceReason: "",
  visualStyle: [],
  primaryColor: "",
  tagline: "",
  additionalNotes: "",
  websitePages: "",
  websiteFeatures: "",
  appPlatform: "",
  seoKeywords: "",
  articleCount: "",
  designType: "",
  designSize: "",
  aiUseCase: "",
  aiIntegration: "",
  agreements: [],
}

export function ProjectBriefForm() {
  const [submitting, setSubmitting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),

    defaultValues: defaultFormValues,
  })

    const [
        picName,
        position,
        companyName,
        email,
        whatsapp,
        companyAddress,
        operationalArea,
        projectName,
        businessDescription,
        projectGoals,
        launchTarget,
        targetAudience,
        visualStyle,
        primaryColor,
        agreements,
        serviceType,
    ] = useWatch({
    control: form.control,
    name: [
        "picName",
        "position",
        "companyName",
        "email",
        "whatsapp",
        "companyAddress",
        "operationalArea",
        "projectName",
        "businessDescription",
        "projectGoals",
        "launchTarget",
        "targetAudience",
        "visualStyle",
        "primaryColor",
        "agreements",
        "serviceType",
    ],
    })

    useEffect(() => {
        const subscription = form.watch((value) => {
            localStorage.setItem(
            "hinai-project-brief",
            JSON.stringify(value)
            )
        })

        return () => subscription.unsubscribe()
    }, [form])

  useEffect(() => {
    if (typeof window === "undefined") return

    const saved = localStorage.getItem(
      "hinai-project-brief"
    )

    if (!saved) return

    try {
      const parsed = JSON.parse(saved)

        form.reset({
        ...form.getValues(),
        ...parsed,
        serviceType:
            services.includes(parsed.serviceType)
            ? parsed.serviceType
            : "Website Development",
        })
    } catch {}
  }, [form])

  const progress = useMemo(() => {
    const requiredFields = [
        picName,
        position,
        companyName,
        email,
        whatsapp,
        companyAddress,
        operationalArea,
        projectName,
        businessDescription,
        (projectGoals?.length ?? 0) > 0,
        launchTarget,
        targetAudience,
        (visualStyle?.length ?? 0) > 0,
        primaryColor,
        (agreements?.length ?? 0) === agreementItems.length,
    ]

    const completed = requiredFields.filter((field) => {
        if (typeof field === "boolean") return field

        return typeof field === "string"
        ? field.trim().length > 0
        : false
    }).length

    return Math.round(
        (completed / requiredFields.length) * 100
    )
    }, [
    picName,
    position,
    companyName,
    email,
    whatsapp,
    companyAddress,
    operationalArea,
    projectName,
    businessDescription,
    projectGoals,
    launchTarget,
    targetAudience,
    visualStyle,
    primaryColor,
    agreements,
    ])

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      maxSize: 20 * 1024 * 1024,

      accept: {
        "image/*": [".png", ".jpg", ".jpeg", ".svg"],
        "application/pdf": [".pdf"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          [".xlsx"],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          [".pptx"],
      },

        maxFiles: 10,

            onDrop: (acceptedFiles) => {
            setUploadedFiles((prev) => {
                const merged = [...prev, ...acceptedFiles]

                return merged.slice(0, 10)
            })

            toast.success(
                `${acceptedFiles.length} file berhasil ditambahkan`
            )
        },
    })

  async function onSubmit(values: FormValues) {
  try {
    setSubmitting(true)

    const body = new FormData()

    body.append("data", JSON.stringify(values))

    uploadedFiles.forEach((file) => {
      body.append("files", file)
    })

    const response = await fetch("/api/project-brief", {
      method: "POST",
      body,
    })

    if (!response.ok) {
      const error = await response.text()

      console.error("API Error:", error)

      throw new Error(error)
    }

    localStorage.removeItem("hinai-project-brief")

    form.reset(defaultFormValues)

    setUploadedFiles([])

    setCompleted(true)

    toast.success("Form berhasil dikirim 🚀")
  } catch (error) {
    console.error("Submit Error:", error)

    toast.error(
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat mengirim formulir"
    )
  } finally {
    setSubmitting(false)
  }
}

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="hinai-success rounded-3xl p-10 text-center"
      >
        <CheckCircle2 className="mx-auto mb-6 h-24 w-24 text-emerald-400" />

        <h2 className="mb-4 text-3xl font-bold">
          Formulir Berhasil Dikirim
        </h2>

        <p className="mx-auto max-w-2xl text-slate-300">
          Tim HINAI Tech akan meninjau kebutuhan
          proyek Anda dan segera menghubungi melalui
          email atau WhatsApp.
        </p>

        <Button
          className="hinai-submit-btn mt-8"
          onClick={() => window.location.reload()}
        >
          Buat Form Baru
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">
            Progress Pengisian
          </span>

          <span className="font-semibold text-cyan-400">
            {progress}%
          </span>
        </div>

        <Progress value={progress} />
      </div>

      <form
        onSubmit={form.handleSubmit(
            onSubmit,
            (errors) => {
            console.log(errors)
            toast.error("Masih ada field yang belum valid")
            }
        )}
        >
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Informasi Dasar Klien
            </SectionTitle>

            <Grid>
              <Field
                label="Nama Lengkap PIC"
                error={form.formState.errors.picName?.message}
              >
                <Input
                  className="hinai-input"
                  {...form.register("picName")}
                />
              </Field>

              <Field
                label="Jabatan"
                error={form.formState.errors.position?.message}
              >
                <Input
                  className="hinai-input"
                  {...form.register("position")}
                />
              </Field>

              <Field
                label="Perusahaan / Brand"
                error={form.formState.errors.companyName?.message}
              >
                <Input
                  className="hinai-input"
                  {...form.register("companyName")}
                />
              </Field>

              <Field
                label="Email"
                error={form.formState.errors.email?.message}
              >
                <Input
                  type="email"
                  className="hinai-input"
                  {...form.register("email")}
                />
              </Field>

              <Field
                label="WhatsApp"
                error={form.formState.errors.whatsapp?.message}
              >
                <Input
                  className="hinai-input"
                  {...form.register("whatsapp")}
                />
              </Field>

              <Field
                label="Wilayah Operasional"
                error={
                  form.formState.errors.operationalArea
                    ?.message
                }
              >
                <Input
                  className="hinai-input"
                  {...form.register("operationalArea")}
                />
              </Field>
            </Grid>

            <Field
              label="Alamat Perusahaan"
              error={
                form.formState.errors.companyAddress
                  ?.message
              }
            >
              <Textarea
                className="hinai-input"
                {...form.register("companyAddress")}
              />
            </Field>
          </CardContent>
        </Card>

        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Pilih Layanan
            </SectionTitle>

            <Field
                label="Pilih Layanan"
                error={form.formState.errors.serviceType?.message}
                >
                <Select
                    value={serviceType}
                    onValueChange={(value) =>
                    form.setValue(
                        "serviceType",
                        value as FormValues["serviceType"],
                        {
                        shouldValidate: true,
                        }
                    )
                    }
                >
                    <SelectTrigger className="hinai-input w-full">
                    <SelectValue placeholder="Pilih layanan" />
                    </SelectTrigger>

                    <SelectContent>
                    {services.map((service) => (
                        <SelectItem
                        key={service}
                        value={service}
                        >
                        {service}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </Field>
          </CardContent>
        </Card>

        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Informasi Umum Proyek
            </SectionTitle>

            <Field
              label="Nama Proyek"
              error={
                form.formState.errors.projectName
                  ?.message
              }
            >
              <Input
                className="hinai-input"
                {...form.register("projectName")}
              />
            </Field>

            <Field
              label="Ceritakan Bisnis Anda"
              error={
                form.formState.errors
                  .businessDescription?.message
              }
            >
              <Textarea
                rows={5}
                className="hinai-input"
                {...form.register(
                  "businessDescription"
                )}
              />
            </Field>

            <CheckboxGroup
              title="Tujuan Proyek"
              options={goals}
              values={projectGoals ?? []}
              onChange={(value) =>
                toggleArrayField(
                  value,
                  projectGoals ?? [],
                  "projectGoals"
                )
              }
            />
            <CheckboxGroup
                title="Gaya Visual"
                options={visualStyles}
                values={visualStyle ?? []}
                onChange={(value) =>
                    toggleArrayField(
                    value,
                    visualStyle ?? [],
                    "visualStyle"
                    )
                }
                />
            <Grid>
                <Field
                    label="Target Launching"
                    error={
                    form.formState.errors.launchTarget?.message
                    }
                >
                    <Input
                    type="date"
                    className="hinai-input"
                    {...form.register("launchTarget")}
                    />
                </Field>

                <Field
                    label="Warna Utama Brand"
                    error={
                    form.formState.errors.primaryColor?.message
                    }
                >
                    <Input
                    placeholder="Contoh: Biru Navy"
                    className="hinai-input"
                    {...form.register("primaryColor")}
                    />
                </Field>
                </Grid>

                <Field
                label="Target Audiens"
                error={
                    form.formState.errors.targetAudience?.message
                }
                >
                <Textarea
                    rows={4}
                    className="hinai-input"
                    placeholder="Usia, lokasi, pekerjaan, minat, dan kebutuhan audiens"
                    {...form.register("targetAudience")}
                />
                </Field>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
            <motion.div
                key={serviceType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
            >
                <p className="text-sm text-cyan-400">
                Form khusus untuk layanan:
                <span className="ml-2 font-semibold">
                    {serviceType}
                </span>
                </p>
                <ServiceSpecificFields
                serviceType={serviceType}
                form={form}
                />
            </motion.div>
        </AnimatePresence>

            <Grid>
            <Field label="Website Saat Ini">
                <Input
                className="hinai-input"
                placeholder="https://..."
                {...form.register("currentWebsite")}
                />
            </Field>

            <Field label="Media Sosial">
                <Input
                className="hinai-input"
                placeholder="@instagram"
                {...form.register("socialMedia")}
                />
            </Field>
            </Grid>

            <Field label="Kompetitor">
            <Textarea
                className="hinai-input"
                {...form.register("competitors")}
            />
            </Field>

            <Field label="Referensi Website / Desain">
            <Textarea
                className="hinai-input"
                {...form.register("referenceLinks")}
            />
            </Field>

            <Field label="Alasan Memilih Referensi">
            <Textarea
                className="hinai-input"
                {...form.register("referenceReason")}
            />
            </Field>

            <Field label="Tagline">
            <Input
                className="hinai-input"
                {...form.register("tagline")}
            />
            </Field>

            <Field label="Catatan Tambahan">
            <Textarea
                rows={5}
                className="hinai-input"
                {...form.register("additionalNotes")}
            />
            </Field>

        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Upload Asset
            </SectionTitle>

            <div
              {...getRootProps()}
              className={`hinai-upload-zone p-10 text-center ${
                isDragActive ? "drag-active" : ""
              }`}
            >
              <input {...getInputProps()} />

              <Upload className="mx-auto mb-4 h-10 w-10 text-cyan-400" />

              <p className="font-semibold">
                Drag & drop file atau klik di sini
              </p>

              <p className="mt-2 text-sm text-slate-400">
                PNG, JPG, SVG, PDF, DOCX, XLSX,
                PPTX
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="hinai-file-item"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-cyan-400" />

                      <span className="text-sm text-slate-300">
                        {file.name}
                      </span>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setUploadedFiles((prev) =>
                          prev.filter(
                            (_, i) => i !== index
                          )
                        )
                      }
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="hinai-glass">
          <CardContent className="space-y-5 p-6">
            <SectionTitle>
              Persetujuan
            </SectionTitle>

            {agreementItems.map((item) => (
              <label
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 p-4"
              >
                <Checkbox
                  checked={agreements?.includes(item) ?? false}
                  onCheckedChange={() =>
                    toggleArrayField(
                        item,
                        agreements ?? [],
                        "agreements"
                    )
                  }
                />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </label>
            ))}
          </CardContent>
        </Card>

        <Separator />

        <Button
          disabled={submitting}
          type="submit"
          className="hinai-submit-btn h-14 w-full text-base font-semibold"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Mengirim Formulir...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Kirim Formulir
            </>
          )}
        </Button>
      </form>
    </div>
  )

    function toggleArrayField(
        value: string,
        current: string[] = [],
        field: "projectGoals" | "visualStyle" | "agreements"
        ) {
        form.setValue(
            field,
            current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value],
            {
            shouldValidate: true,
            }
        )
    }
}

function ServiceSpecificFields({
  serviceType,
  form,
}: {
  serviceType: FormValues["serviceType"]
  form: UseFormReturn<FormValues>
}) {
  switch (serviceType) {
    case "Website Development":
    case "Landing Page":
      return (
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Detail Website
            </SectionTitle>

            <Field label="Halaman yang Dibutuhkan">
              <Textarea
                className="hinai-input"
                placeholder="Beranda, Tentang Kami, Portofolio, Kontak"
                {...form.register("websitePages")}
              />
            </Field>

            <Field label="Fitur yang Dibutuhkan">
              <Textarea
                className="hinai-input"
                placeholder="WhatsApp, Blog, Booking, Live Chat"
                {...form.register("websiteFeatures")}
              />
            </Field>
          </CardContent>
        </Card>
      )

    case "App Development":
      return (
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Detail Aplikasi
            </SectionTitle>

            <Field label="Platform">
              <Input
                className="hinai-input"
                placeholder="Android, iOS, Web App"
                {...form.register("appPlatform")}
              />
            </Field>

            <Field label="Fitur Utama">
              <Textarea
                className="hinai-input"
                placeholder="Login, Chat, Dashboard"
                {...form.register("websiteFeatures")}
              />
            </Field>
          </CardContent>
        </Card>
      )

    case "Artikel SEO":
      return (
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Detail Artikel SEO
            </SectionTitle>

            <Grid>
              <Field label="Target Keyword">
                <Input
                  className="hinai-input"
                  placeholder="jasa website bandung"
                  {...form.register("seoKeywords")}
                />
              </Field>

              <Field label="Jumlah Artikel">
                <Input
                  type="number"
                  className="hinai-input"
                  {...form.register("articleCount")}
                />
              </Field>
            </Grid>
          </CardContent>
        </Card>
      )

    case "Desain Grafis":
      return (
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Detail Desain Grafis
            </SectionTitle>

            <Grid>
              <Field label="Jenis Desain">
                <Input
                  className="hinai-input"
                  placeholder="Logo, Banner, Feed Instagram"
                  {...form.register("designType")}
                />
              </Field>

              <Field label="Ukuran Desain">
                <Input
                  className="hinai-input"
                  placeholder="1080 × 1080 px"
                  {...form.register("designSize")}
                />
              </Field>
            </Grid>
          </CardContent>
        </Card>
      )

    case "AI & Machine Learning":
      return (
        <Card className="hinai-glass">
          <CardContent className="space-y-6 p-6">
            <SectionTitle>
              Detail AI & Machine Learning
            </SectionTitle>

            <Field label="Use Case AI">
              <Textarea
                className="hinai-input"
                placeholder="Chatbot, prediksi penjualan"
                {...form.register("aiUseCase")}
              />
            </Field>

            <Field label="Integrasi">
              <Input
                className="hinai-input"
                placeholder="WhatsApp, CRM, ERP"
                {...form.register("aiIntegration")}
              />
            </Field>
          </CardContent>
        </Card>
      )

    default:
      return null
  }
}

function SectionTitle({
  children,
}: {
  children: ReactNode
}) {
  return (
    <h2 className="hinai-section-title">
      {children}
    </h2>
  )
}

function Grid({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {children}
    </div>
  )
}

function Field({
  label,
  children,
  error,
}: {
  label: string
  children: ReactNode
  error?: string
}) {
  return (
    <div className="space-y-2">
      <label className="hinai-label">
        {label}
      </label>

      {children}

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

function CheckboxGroup({
  title,
  options,
  values,
  onChange,
}: {
  title: string
  options: string[]
  values: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-4">
      <p className="hinai-label">
        {title}
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className={`hinai-option-card ${
              values.includes(option)
                ? "active"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={values.includes(option)}
                onCheckedChange={() =>
                  onChange(option)
                }
              />

              <span>{option}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}