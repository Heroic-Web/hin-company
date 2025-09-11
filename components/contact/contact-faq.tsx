"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFAQ() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A basic website typically takes 1 day - 1 weeks, while more complex projects can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. All our projects include 2-4 weeks of free support, and we have ongoing maintenance plans available for long-term partnerships.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "We'll need details about your business goals, target audience, preferred features, design preferences, and any existing brand materials. Don't worry if you don't have everything ready - we'll guide you through the process.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "We can work with your existing brand guidelines and assets. If you don't have established guidelines, we can help create them as part of our design process.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "While we don't directly provide hosting, we can recommend reliable hosting providers and help with the setup process. We can also assist with domain registration and DNS configuration.",
    },
    {
      question: "What makes Heroic Web different?",
      answer:
        "Our combination of technical expertise, creative design, and strategic thinking sets us apart. We focus on building long-term partnerships and delivering solutions that drive real business results, not just pretty websites.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
