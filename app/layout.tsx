import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smiling Bins - Garbage Bin Cleaning in Newfoundland",
  description:
    "Smiling Bins brings freshness back to your garbage, recycling, and compost bins with eco-friendly cleaning services in Newfoundland. Professional high-pressure bin cleaning, carpet cleaning, pressure washing, and upholstery services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
