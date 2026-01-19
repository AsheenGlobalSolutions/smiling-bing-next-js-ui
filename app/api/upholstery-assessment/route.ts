import { type NextRequest, NextResponse } from "next/server"
import { upholsteryAssessmentSchema } from "@/lib/validation"
import { z } from "zod" // Declare the z variable

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = upholsteryAssessmentSchema.parse(body)

    console.log("Upholstery assessment submission:", validatedData)

    return NextResponse.json(
      { message: "Your photos have been submitted. We'll review and send a quote within 24 hours!" },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}
