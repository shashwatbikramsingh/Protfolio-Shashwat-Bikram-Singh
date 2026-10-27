import type { Metadata } from "next"
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ThreeBackground from "@/components/3d/ThreeBackground"

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shashwat Bikram Singh | Data Engineer & Software Developer Portfolio",
  description:
    "Personal engineering portfolio of Shashwat Bikram Singh. Featuring deep case studies on HackaMate, MEDEQUIP, PCA Classification Research (Springer Submission), Ghumau, and AlertNet.",
  keywords: [
    "Shashwat Bikram Singh",
    "Shashwat",
    "Portfolio",
    "Data Engineer",
    "Software Developer",
    "HackaMate",
    "MEDEQUIP",
    "PCA Classification",
    "Springer",
    "Ghumau",
    "AlertNet",
    "Next.js",
    "React",
    "Python",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} font-sans`}>
      <body className="relative min-h-screen bg-[#FAF6F0] text-[#2C1E18] antialiased selection:bg-[#E6D3C1] selection:text-[#2C1E18]">
        {/* Interactive 3D Canvas Background */}
        <ThreeBackground />

        {/* Tactile Ambient Texture */}
        <div className="pointer-events-none fixed inset-0 z-1 grain-overlay opacity-50" />

        {/* Global Structural Layout */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
