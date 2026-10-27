import React from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/data/profile"
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "@/components/ui/social-icons"

export default function SocialConnector({ showDescription = false }: { showDescription?: boolean }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <LinkedInIcon className="h-5 w-5" />
      case "github":
        return <GitHubIcon className="h-5 w-5" />
      case "instagram":
        return <InstagramIcon className="h-5 w-5" />
      default:
        return <Mail className="h-5 w-5" />
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between rounded-2xl border border-[#E6D8CC] bg-[#FFFFFF]/80 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333] hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#573B2C] border border-[#E6D8CC] transition-colors group-hover:bg-[#2C1E18] group-hover:text-[#FAF6F0] group-hover:border-[#2C1E18]">
              {getIcon(item.icon)}
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#846353] transition-all group-hover:bg-[#B87333] group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-base text-[#2C1E18] group-hover:text-[#B87333] transition-colors">
              {item.name}
            </h4>
            <p className="text-xs text-[#846353] font-mono mt-0.5 truncate">
              {item.handle}
            </p>
            {showDescription && (
              <p className="text-xs text-[#573B2C] mt-2 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
