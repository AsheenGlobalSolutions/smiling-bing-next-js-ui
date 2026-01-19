import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export const residentialBookingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter a valid address"),
  rooms: z.string().min(1, "Please select number of rooms"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
})

export const upholsteryAssessmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type ResidentialBookingData = z.infer<typeof residentialBookingSchema>
export type UpholsteryAssessmentData = z.infer<typeof upholsteryAssessmentSchema>
