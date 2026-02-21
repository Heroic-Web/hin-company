"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Upload, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface CareerApplicationProps {
  selectedPosition: string
}

export function CareerApplication({ selectedPosition }: CareerApplicationProps) {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  })

  useEffect(() => {
    if (selectedPosition) {
      setFormData(prev => ({ ...prev, position: selectedPosition }))
    }
  }, [selectedPosition])

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    if (!formData.firstName) return "First name is required"
    if (!formData.lastName) return "Last name is required"
    if (!formData.email) return "Email is required"
    if (!formData.phone) return "Phone number is required"
    if (!formData.position) return "Position is required"
    if (!formData.experience) return "Experience is required"
    if (!formData.message) return "Please tell us about yourself"
    if (!file) return "Please upload your CV"
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    const data = new FormData()
    data.append("firstName", formData.firstName)
    data.append("lastName", formData.lastName)
    data.append("email", formData.email)
    data.append("phone", formData.phone)
    data.append("position", formData.position)
    data.append("experience", formData.experience)
    data.append("message", formData.message)
    if (file) {
      data.append("resume", file)
    }

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: data,
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || "Failed to submit application")
        setLoading(false)
        return
      }

      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      })
      setFile(null)

    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="career-application-form" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Submit Your Application
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in your details carefully. Our HR team will review your application and contact you shortly.
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader>
            <CardTitle>Career Application Form</CardTitle>
            <CardDescription>
              Please ensure all information is accurate before submitting.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e)=>handleChange("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e)=>handleChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e)=>handleChange("email", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <Label>Phone Number</Label>
                <Input
                  value={formData.phone}
                  onChange={(e)=>handleChange("phone", e.target.value)}
                />
              </div>

              {/* Position */}
              <div>
                <Label>Position of Interest</Label>
                <Select
                  value={formData.position}
                  onValueChange={(value)=>handleChange("position", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Co-Founder">Co-Founder</SelectItem>
                    <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                    <SelectItem value="Digital Marketing Specialist">Digital Marketing Specialist</SelectItem>
                    <SelectItem value="Content Writer">Content Writer</SelectItem>
                    <SelectItem value="Project Manager">Project Manager</SelectItem>
                    <SelectItem value="Project Manager">Social Media Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div>
                <Label>Years of Experience</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value)=>handleChange("experience", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 Years</SelectItem>
                    <SelectItem value="2-3">2-3 Years</SelectItem>
                    <SelectItem value="4-5">4-5 Years</SelectItem>
                    <SelectItem value="6-10">6-10 Years</SelectItem>
                    <SelectItem value="10+">10+ Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Label>Tell Us About Yourself</Label>
                <Textarea
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={(e)=>handleChange("message", e.target.value)}
                />
              </div>

              {/* Upload CV */}
              <div>
                <Label>Upload CV (PDF / DOC / DOCX)</Label>
                <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary transition">
                  <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e)=>setFile(e.target.files?.[0] || null)}
                  />
                </div>
                {file && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Selected file: {file.name}
                  </p>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Application submitted successfully!
                </div>
              )}

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
