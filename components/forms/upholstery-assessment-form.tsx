"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { upholsteryAssessmentSchema, type UpholsteryAssessmentData } from "@/lib/validation"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function UpholsteryAssessmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileCount, setFileCount] = useState(0)

  const form = useForm<UpholsteryAssessmentData>({
    resolver: zodResolver(upholsteryAssessmentSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  })

  async function onSubmit(data: UpholsteryAssessmentData) {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (!fileInput?.files?.length) {
      toast.error("Please upload at least one photo")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/upholstery-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.error || "Failed to submit assessment")
        return
      }

      toast.success(result.message)
      form.reset()
      setFileCount(0)
    } catch (error) {
      toast.error("An error occurred. Please try again.")
      console.error("Assessment form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Upload Photos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFileCount(e.target.files?.length || 0)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
          />
          {fileCount > 0 && <p className="text-sm text-muted-foreground mt-2">{fileCount} file(s) selected</p>}
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the upholstery type and any stains or damage..." rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12"
        >
          {isSubmitting ? "Submitting..." : "Submit Photos for Assessment"}
        </Button>
      </form>
    </Form>
  )
}
