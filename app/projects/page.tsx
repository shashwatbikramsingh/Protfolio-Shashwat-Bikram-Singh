import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Cpu, Layers, Sparkles, Workflow } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { PERSONAL_INFO } from "@/data/profile"
import ProjectCard from "@/components/sections/ProjectCard"

export const metadata = {
  title: "Projects & Architecture | Shashwat Bikram Singh",
  description: "Exhaustive project catalog featuring HackaMate, MEDEQUIP, PCA Classification Research (Springer Paper), Ghumau, and AlertNet.",
}

export default function ProjectsPage() {
  return (
    <div className="relative px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Back and Page Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#573B2C] hover:text-[#B87333] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <span className="earth-badge rounded-full px-3 py-1 text-xs font-mono">
            {PROJECTS.length} Selected Projects
          </span>
        </div>

        {/* Page Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
            Curated Engineering Index
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2C1E18]">
            Architectural Projects & Workflows
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#573B2C]">
            Detailed breakdowns of production platforms and research initiatives. Prioritized by flagship status: HackaMate (developer matchmaking platform), MEDEQUIP (full-stack medical e-commerce), PCA Classification Research (Springer research submission), Ghumau (travel platform), and AlertNet (disaster preparedness hackathon UI).
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Deep Dive Banner */}
        <div className="cream-gradient-card rounded-3xl p-8 md:p-12 border border-[#CEB8A5]/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Interested in collaborating with {PERSONAL_INFO.nickname}?
            </h3>
            <p className="text-sm text-[#573B2C]">
              Open for software engineering internships, data engineering collaborations, hackathon partnerships, and open-source initiatives.
            </p>
          </div>
          <Link
            href="/contact"
            className="brown-btn-primary shrink-0 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Start Conversation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
