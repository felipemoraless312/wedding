import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nayely & Tadeo",
  description: "Celebra con nosotros el día más especial de nuestras vidas",
  generator: "v0.app",
  icons: {
    icon: "/nosotros.png",
    apple: "/nosotros.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}