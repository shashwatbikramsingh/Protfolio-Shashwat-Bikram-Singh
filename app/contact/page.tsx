"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Copy, Send, AlertCircle, Loader2 } from "lucide-react"
import { PERSONAL_INFO } from "@/data/profile"
import SocialConnector from "@/components/sections/SocialConnector"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
      } else {
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
        window.location.href = mailtoUrl
        setSubmitted(true)
      }
    } catch {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
      window.location.href = mailtoUrl
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            Get in Touch
          </span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
            Initiate Conversation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2C1E18]">
            Let&apos;s build something extraordinary together.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#573B2C]">
            Have an ambitious software system to build, an internship opportunity, or an inquiry regarding data engineering and software development? Drop a note below or reach out directly.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cream-gradient-card rounded-3xl p-6 sm:p-8 border border-[#CEB8A5]/60 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
                  Direct Channel
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2C1E18] mt-1">
                  Email
                </h3>
              </div>

              {/* Copyable Email Box */}
              <div className="rounded-2xl bg-[#FAF6F0] p-4 border border-[#E6D8CC] space-y-2">
                <span className="text-xs text-[#846353] uppercase font-semibold">Official Email</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-[#2C1E18] truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 rounded-lg bg-[#FFFFFF] px-3 py-1.5 text-xs font-medium text-[#573B2C] border border-[#CEB8A5] hover:border-[#2C1E18] transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#846353]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#573B2C]">
                <p>
                  Typical response time: &lt; 24 hours.
                </p>
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="cream-gradient-card rounded-3xl p-6 border border-[#CEB8A5]/60 space-y-2">
              <span className="text-xs font-mono text-[#846353] uppercase">Identity</span>
              <h4 className="font-serif text-xl font-bold text-[#2C1E18]">{PERSONAL_INFO.name}</h4>
              <p className="text-xs text-[#573B2C]">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-[#846353]">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="cream-gradient-card rounded-3xl p-6 sm:p-10 border border-[#CEB8A5]/60 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF6F0] text-[#B87333] border border-[#CEB8A5]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#573B2C] max-w-sm mx-auto">
                    Thank you for reaching out. {PERSONAL_INFO.nickname} will review your note and get back to you shortly.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", subject: "", message: "" })
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FFFFFF] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] hover:bg-[#FAF6F0]"
                    >
                      Send Another Note
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="brown-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
                    >
                      <span>Open in Mail Client</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
                      Send a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#573B2C]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#CEB8A5] bg-[#FFFFFF]/80 px-4 py-3 text-sm text-[#2C1E18] placeholder-[#846353]/50 focus:border-[#2C1E18] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#573B2C]">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#CEB8A5] bg-[#FFFFFF]/80 px-4 py-3 text-sm text-[#2C1E18] placeholder-[#846353]/50 focus:border-[#2C1E18] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#573B2C]">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Collaboration or Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#CEB8A5] bg-[#FFFFFF]/80 px-4 py-3 text-sm text-[#2C1E18] placeholder-[#846353]/50 focus:border-[#2C1E18] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#573B2C]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#CEB8A5] bg-[#FFFFFF]/80 px-4 py-3 text-sm text-[#2C1E18] placeholder-[#846353]/50 focus:border-[#2C1E18] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="brown-btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold uppercase tracking-wider disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Social Channels Ribbon */}
        <div className="space-y-6 pt-8 border-t border-[#E6D8CC]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
              Alternative Channels
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Connect on LinkedIn, GitHub & Direct Channels
            </h3>
          </div>
          <SocialConnector showDescription={false} />
        </div>

      </div>
    </div>
  )
}
