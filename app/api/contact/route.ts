import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://moldbustersfortworth.com",
      "https://www.moldbustersfortworth.com",
      ...(process.env.NODE_ENV === "development"
        ? ["http://localhost:3000"]
        : []),
    ];

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Unauthorized origin." },
        { status: 403 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (
      !name ||
      !email ||
      !message ||
      name.length > 150 ||
      email.length > 254 ||
      phone.length > 50 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please enter valid contact information." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Mold Busters Website <website@moldbustersfortworth.com>",
      to: ["info@moldbustersfortworth.com"],
      replyTo: email,
      subject: "New Mold Busters Website Inquiry",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Customer Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        { error: "Unable to send your request. Please call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}