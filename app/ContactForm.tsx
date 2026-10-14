
"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        maxLength={150}
        className="w-full border border-slate-300 rounded-xl px-4 py-3"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        maxLength={50}
        className="w-full border border-slate-300 rounded-xl px-4 py-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border border-slate-300 rounded-xl px-4 py-3"
      />

      <textarea
        name="message"
        placeholder="How can we help?"
        rows={5}
        required
        maxLength={5000}
        className="w-full border border-slate-300 rounded-xl px-4 py-3"
      />

      <button
        type="submit"
        disabled={sending}
        className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition disabled:opacity-50"
      >
        {sending ? "Sending..." : "Submit Request"}
      </button>

      {status === "success" && (
        <p role="status" className="text-green-700">
          Thank you! Your request has been submitted.
          We'll contact you as soon as possible.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-red-700">
          Your request could not be sent. Please call
          214-802-4655 for assistance.
        </p>
      )}
    </form>
  );
}
