"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CareerApplication() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("career.application.title") || "Ready to Join Us?"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("career.application.description") ||
              "Don't see the perfect position? Send us your resume and tell us how you'd like to contribute to our team."}
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>{t("career.application.formTitle") || "General Application"}</CardTitle>
            <CardDescription>
              {t("career.application.formDescription") ||
                "Fill out the form below and we'll get back to you within 48 hours."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("career.application.firstName") || "First Name"}</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("career.application.lastName") || "Last Name"}</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("career.application.email") || "Email Address"}</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("career.application.phone") || "Phone Number"}</Label>
              <Input id="phone" type="tel" placeholder="+62 812 3456 7890" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">{t("career.application.position") || "Position of Interest"}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Senior Frontend Developer</SelectItem>
                  <SelectItem value="seo">SEO Content Specialist</SelectItem>
                  <SelectItem value="designer">UI/UX Designer</SelectItem>
                  <SelectItem value="backend">Backend Developer</SelectItem>
                  <SelectItem value="marketing">Digital Marketing Manager</SelectItem>
                  <SelectItem value="pm">Project Manager</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">{t("career.application.experience") || "Years of Experience"}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="2-3">2-3 years</SelectItem>
                  <SelectItem value="4-5">4-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("career.application.message") || "Tell us about yourself"}</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your experience, skills, and why you'd like to join our team..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">{t("career.application.resume") || "Resume/CV"}</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {t("career.application.uploadText") || "Click to upload or drag and drop your resume"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (max 5MB)</p>
              </div>
            </div>

            <Button className="w-full" size="lg">
              <Send className="mr-2 h-5 w-5" />
              {t("career.application.submit") || "Submit Application"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
