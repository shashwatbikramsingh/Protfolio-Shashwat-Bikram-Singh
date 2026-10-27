import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, BookOpen, Clock, CheckCircle2, Users, Layers } from "lucide-react"
import { Project } from "@/data/projects"

const PROJECT_MOCKUPS: Record<string, string> = {
  hackamate: "/images/hackamate_laptop_perfect.webp",
  medequip: "/images/medequip_device_perfect.webp",
  ghumau: "/images/ghumau_device_perfect.webp",
  alertnet: "/images/alertnet_device_perfect.webp",
}

export default function ProjectCard({ project }: { project: Project }) {
  const isHackaMate = project.id === "hackamate"
  const isOngoing = project.status?.toLowerCase().includes("ongoing")
  const isSpringer = Boolean(project.springerPublication)
  const mockupImage = PROJECT_MOCKUPS[project.id]

  return (
    <article className="group cream-gradient-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="earth-badge rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {project.status && (
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-mono font-semibold ${
                  isOngoing
                    ? "bg-amber-100/80 text-amber-900 border border-amber-300"
                    : isSpringer
                    ? "bg-emerald-100/80 text-emerald-900 border border-emerald-300"
                    : isHackaMate
                    ? "bg-[#2C1E18] text-[#FAF6F0]"
                    : "bg-[#2C1E18] text-[#FAF6F0]"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Optional Project Mockup Thumbnail */}
        {mockupImage && (
          <div className="mb-6 overflow-hidden rounded-2xl bg-[#EDE4DB]/60 border border-[#CEB8A5]/40 aspect-video relative flex items-center justify-center p-3">
            <div className="relative w-full h-full">
              <Image
                src={mockupImage}
                alt={`${project.title} Preview`}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        {/* Title & Tagline */}
        <div className="space-y-2">
          <Link href={`/projects/${project.id}`} className="group/title inline-block">
            <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#2C1E18] group-hover/title:text-[#B87333] transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover/title:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </h3>
          </Link>
          <p className="text-sm font-medium text-[#846353]">
            {project.tagline}
          </p>
        </div>

        {/* HackaMate Flagship Methods & Engineering Callout */}
        {isHackaMate && (
          <div className="mt-4 rounded-2xl bg-[#FAF6F0] p-4 border border-[#CEB8A5]/60 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B87333] flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>Flagship Platform Highlights</span>
              </span>
              <span className="earth-badge rounded-full px-2 py-0.5 text-[9px] font-mono">
                Production Architecture
              </span>
            </div>
            
            <ul className="space-y-1.5 text-xs text-[#573B2C]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#B87333] shrink-0 mt-0.5" />
                <span><strong>Developer Skill Matching:</strong> Multi-attribute compatibility scoring across frontend, backend & AI.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#B87333] shrink-0 mt-0.5" />
                <span><strong>Hackathon Directory:</strong> Interactive filtering by date, themes, categories, and prize tiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#B87333] shrink-0 mt-0.5" />
                <span><strong>Real-Time Sprint Dashboard:</strong> Team invitations, role allocation locks & milestone communication.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#B87333] shrink-0 mt-0.5" />
                <span><strong>Responsive Modern UI:</strong> Built with React, TypeScript, Tailwind CSS, and fluid motion design.</span>
              </li>
            </ul>
          </div>
        )}

        {/* Springer Research Callout if applicable */}
        {project.springerPublication && (
          <div className="mt-4 rounded-xl bg-emerald-50/70 p-3.5 border border-emerald-200/80 space-y-1 text-xs text-emerald-900">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-emerald-800">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Springer Research Paper Submitted</span>
            </div>
            <p className="text-[11px] leading-relaxed text-emerald-950 font-medium">
              &ldquo;{project.springerPublication.title}&rdquo;
            </p>
            <p className="text-[10px] text-emerald-800 font-semibold">
              Authors: {project.springerPublication.author}
            </p>
          </div>
        )}

        {/* Ongoing Project Callout if applicable */}
        {isOngoing && (
          <div className="mt-4 rounded-xl bg-amber-50/70 p-3 border border-amber-200/80 flex items-center gap-2 text-xs text-amber-900">
            <Clock className="h-4 w-4 text-amber-700 shrink-0" />
            <span className="font-medium text-[11px]">
              Currently under active development by Shashwat
            </span>
          </div>
        )}

        {/* Summary */}
        <p className="mt-4 text-sm leading-relaxed text-[#573B2C]">
          {project.summary}
        </p>

        {/* Key Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-[#F5EFEB]/70 p-4 border border-[#E6D8CC]/80">
          {(isHackaMate ? project.metrics.slice(0, 4) : project.metrics.slice(0, 2)).map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="text-base sm:text-lg font-serif font-bold text-[#2C1E18]">
                {m.value}
              </span>
              <p className="text-[10px] sm:text-[11px] font-medium text-[#846353] uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {(isHackaMate ? project.techStack : project.techStack.slice(0, 5)).map((tech, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-[#FAF6F0] px-2.5 py-1 text-[11px] font-medium text-[#573B2C] border border-[#E6D8CC]"
            >
              {tech}
            </span>
          ))}
          {!isHackaMate && project.techStack.length > 5 && (
            <span className="rounded-lg bg-[#FAF6F0] px-2 py-1 text-[11px] font-medium text-[#846353] border border-[#E6D8CC]">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-8 pt-6 border-t border-[#E6D8CC]/80 flex items-center justify-between">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] hover:text-[#B87333] transition-colors"
        >
          <span>Examine Project Brief</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <span className="text-xs text-[#846353] font-mono">
          workflow & tech
        </span>
      </div>
    </article>
  )
}
