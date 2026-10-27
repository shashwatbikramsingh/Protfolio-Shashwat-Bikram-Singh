import React from "react"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/profile"
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "@/components/ui/social-icons"

export default function Footer() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <LinkedInIcon className="h-4 w-4" />
      case "github":
        return <GitHubIcon className="h-4 w-4" />
      case "instagram":
        return <InstagramIcon className="h-4 w-4" />
      default:
        return <Mail className="h-4 w-4" />
    }
  }

  return (
    <footer className="relative z-10 w-full px-4 sm:px-6 py-6 md:py-8">
      {/* Floating Compact Dark Brown Container */}
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#3D2B22] bg-[#2C1E18] text-[#FAF6F0] p-6 sm:p-8 shadow-xl">
        {/* Contact Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#4A352B]">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0]">
              Connect with {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#DFCEBE] mt-1">
              Direct:{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-[#D4A373] hover:underline font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>
              {" "}• {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-[#573B2C] bg-[#3D2B22]/80 px-3 py-1.5 text-xs font-semibold text-[#FAF6F0] transition-all hover:border-[#D4A373] hover:bg-[#D4A373] hover:text-[#2C1E18]"
              >
                <span>{getIcon(item.icon)}</span>
                <span>{item.name}</span>
                <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* Clean Copyright Bar */}
        <div className="pt-4 text-center md:text-left text-xs text-[#CEB8A5]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
