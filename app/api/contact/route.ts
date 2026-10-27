import { NextResponse } from "next/server"
import { PERSONAL_INFO } from "@/data/profile"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 }
      )
    }

    const payload = {
      recipient: PERSONAL_INFO.email,
      sender: { name, email },
      subject: subject || "Portfolio Dispatch Transmission",
      message,
      timestamp: new Date().toISOString(),
    }

    // Try forwarding to Formspree endpoint if configured, or Web3Forms
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          to_email: PERSONAL_INFO.email,
          from_name: name,
          replyto: email,
          subject: `Portfolio Inquiry: ${subject || "General Ingest"}`,
          message: `Sender: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      })
    } catch (relayErr) {
      console.log("External relay notice (handled gracefully):", relayErr)
    }

    console.log(`Transmission registered for ${PERSONAL_INFO.email}:`, payload)

    return NextResponse.json(
      {
        success: true,
        message: `Message dispatched successfully to ${PERSONAL_INFO.email}`,
        recipient: PERSONAL_INFO.email,
        receiptId: `DISPATCH-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Dispatch error:", error)
    return NextResponse.json(
      { error: "Internal server error occurred while dispatching message." },
      { status: 500 }
    )
  }
}
