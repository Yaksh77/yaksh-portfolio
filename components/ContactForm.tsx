"use client";

import { useState } from "react";

type ApiResponse<T> = {
  status: "success" | "error";
  message?: string;
  data?: T;
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setResult({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(form.email)) {
      setResult({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const json = (await res.json()) as ApiResponse<null>;
      if (!res.ok || json.status !== "success") {
        throw new Error(json.message || "Failed to send message.");
      }

      setResult({
        type: "success",
        message: json.message ?? "Message sent successfully.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setResult({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-4"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-text-main">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-glass/70 bg-bg-glass/80 px-3 py-2 text-sm text-text-main outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            placeholder="Your name"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-text-main">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-border-glass/70 bg-bg-glass/80 px-3 py-2 text-sm text-text-main outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-text-main">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-border-glass/70 bg-bg-glass/80 px-3 py-2 text-sm text-text-main outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          placeholder="What are you building? Timelines, budget, scope, and links are helpful."
          required
        />
      </div>

      {result ? (
        <div
          className={`rounded-xl border px-3 py-2 text-xs ${
            result.type === "success"
              ? "border-emerald-500/60 bg-emerald-950/40 text-emerald-100"
              : "border-red-500/60 bg-red-950/40 text-red-100"
          }`}
        >
          {result.message}
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary disabled:opacity-70"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
        <p className="text-[11px] text-text-main">
          I usually reply within{" "}
          <span className="font-medium text-accent-cyan">24–48 hours</span>.
        </p>
      </div>
    </form>
  );
}
