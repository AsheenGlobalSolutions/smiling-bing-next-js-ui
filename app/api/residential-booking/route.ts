import { type NextRequest, NextResponse } from "next/server"
import { residentialBookingSchema } from "@/lib/validation"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = residentialBookingSchema.parse(body)

    console.log("Residential booking submission:", validatedData)

    return NextResponse.json(
      { message: "Your booking request has been received. We'll confirm shortly!" },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}
