import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validation"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = contactFormSchema.parse(body)

    console.log("Contact form submission:", validatedData)

    return NextResponse.json({ message: "Thank you for contacting us. We'll get back to you soon!" }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}
