import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Code, Cpu, Dumbbell, Headphones, Heart, Mountain, Sparkles, Terminal, Trophy, User } from "lucide-react"
import { PERSONAL_INFO } from "@/data/profile"
import { SKILL_CATEGORIES } from "@/data/experience"
import SocialConnector from "@/components/sections/SocialConnector"

export const metadata = {
  title: "About & Engineering Ethos | Shashwat Bikram Singh",
  description: "Detailed personal philosophy, technical foundations, skills matrix, and design values of Shashwat Bikram Singh.",
}

const BEYOND_CODE = [
  {
    icon: <Dumbbell className="h-4 w-4 text-[#B87333]" />,
    title: "Fitness & Training",
    desc: "Builds consistency, daily discipline, and focused mental clarity.",
  },
  {
    icon: <Headphones className="h-4 w-4 text-[#B87333]" />,
    title: "Music",
    desc: "Provides flow state for deep problem solving and algorithmic reasoning.",
  },
  {
    icon: <Mountain className="h-4 w-4 text-[#B87333]" />,
    title: "Travel & Outdoors",
    desc: "Exploring new places, cultural perspectives, and rugged Himalayan landscapes.",
  },
  {
    icon: <Sparkles className="h-4 w-4 text-[#B87333]" />,
    title: "Photography",
    desc: "Observing aesthetics, light, and visual composition in nature.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#573B2C] hover:text-[#B87333] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <span className="earth-badge rounded-full px-3 py-1 text-xs font-mono">
            Biographical Dossier
          </span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
            Personal Philosophy & Craft
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2C1E18]">
            Turning ideas into practical software, data systems & intelligent solutions.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#846353]">
            &ldquo;Same Mindset, Bigger Goals.&rdquo;
          </p>
        </div>

        {/* Narrative Biography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6 text-sm sm:text-base leading-relaxed text-[#573B2C]">
            {PERSONAL_INFO.bio.map((paragraph, idx) => (
              <p key={idx} className="cream-gradient-card rounded-2xl p-6 border border-[#CEB8A5]/60">
                {paragraph}
              </p>
            ))}

            <div className="cream-gradient-card rounded-2xl p-6 border border-[#CEB8A5]/60 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                Core Engineering Tenets
              </h3>
              <ul className="space-y-2 text-sm text-[#573B2C]">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#B87333]">•</span>
                  <span><strong>Zero unnecessary friction:</strong> Snappy user interactions, optimized database queries, and clean component states.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#B87333]">•</span>
                  <span><strong>Scientific depth:</strong> Mathematical rigor in PCA eigenvalue subspace projections, covariance analysis, and empirical ML validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#B87333]">•</span>
                  <span><strong>Pragmatic execution:</strong> Building tools like HackaMate, MEDEQUIP, and AlertNet that solve authentic problems for real people.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="md:col-span-4 cream-gradient-card rounded-3xl p-6 border border-[#CEB8A5]/60 space-y-4">
            <h4 className="font-serif text-xl font-bold text-[#2C1E18]">
              Quick Facts
            </h4>
            <div className="space-y-3 text-xs text-[#573B2C]">
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Full Name</span>
                <span className="text-[#2C1E18] font-medium">{PERSONAL_INFO.name}</span>
              </div>
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Location</span>
                <span className="text-[#2C1E18] font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Primary Focus</span>
                <span className="text-[#2C1E18] font-medium">Data Engineering, ML & Full-Stack Systems</span>
              </div>
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Academic Pursuit</span>
                <span className="text-[#2C1E18] font-medium">B.Tech CSE (2025–2029) • Jain University</span>
              </div>
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Hackathon Track</span>
                <span className="text-[#2C1E18] font-medium">Runner-Up • DSU Hackathon 2025</span>
              </div>
              <div>
                <span className="font-semibold text-[#846353] uppercase block">Direct Inquiries</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#B87333] hover:underline font-mono">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6D8CC]">
              <Link
                href="/contact"
                className="brown-btn-primary block w-full rounded-xl py-2.5 text-center text-xs font-semibold uppercase tracking-wider"
              >
                Send Direct Message
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Skills Matrix */}
        <div className="space-y-8 pt-8 border-t border-[#E6D8CC]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
              <Cpu className="h-4 w-4" />
              <span>Technical Foundations</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#2C1E18]">
              Comprehensive Skills & Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="cream-gradient-card rounded-3xl p-6 border border-[#CEB8A5]/60 space-y-4"
              >
                <h4 className="font-serif text-xl font-bold text-[#2C1E18]">
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg bg-[#FAF6F0] px-3 py-1.5 font-mono text-xs text-[#2C1E18] border border-[#E6D8CC]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Code Quad Section */}
        <div className="space-y-6 pt-8 border-t border-[#E6D8CC]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
              <Heart className="h-4 w-4" />
              <span>Personal Interests</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Beyond Code
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BEYOND_CODE.map((item, idx) => (
              <div key={idx} className="cream-gradient-card rounded-2xl p-5 border border-[#CEB8A5]/60 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5EFEB] border border-[#E6D8CC]">
                  {item.icon}
                </div>
                <h4 className="font-serif text-base font-bold text-[#2C1E18]">{item.title}</h4>
                <p className="text-xs text-[#573B2C] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Connectors on About page */}
        <div className="space-y-6 pt-8 border-t border-[#E6D8CC]">
          <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
            Connected Channels & Profiles
          </h3>
          <SocialConnector showDescription={false} />
        </div>

      </div>
    </div>
  )
}
