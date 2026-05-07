"use client";

import { useState } from "react";

const subjects = [
  { value: "", label: "Select a subject..." },
  { value: "general", label: "General Inquiry" },
  { value: "consultation", label: "Book a Consultation" },
  { value: "class", label: "Class Info" },
  { value: "program", label: "Online Program" },
  { value: "house-call", label: "House Call" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up to a form backend (e.g. Resend, Formspree, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "3px",
    padding: "0.85rem 1rem",
    fontSize: "0.9rem",
    color: "var(--color-text-primary)",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-text-muted)",
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "2rem",
            fontWeight: "400",
            color: "var(--color-accent)",
            marginBottom: "1rem",
          }}
        >
          Message Received
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
          Thank you for reaching out. KB will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      {/* Name row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div>
          <label htmlFor="firstName" style={labelStyle}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--color-accent)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--color-border)";
            }}
          />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--color-accent)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--color-border)";
            }}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-border)";
          }}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" style={labelStyle}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-border)";
          }}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" style={labelStyle}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          style={{
            ...inputStyle,
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            paddingRight: "2.5rem",
            cursor: "pointer",
          }}
          onFocus={(e) => {
            (e.target as HTMLSelectElement).style.borderColor =
              "var(--color-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLSelectElement).style.borderColor =
              "var(--color-border)";
          }}
        >
          {subjects.map((s) => (
            <option
              key={s.value}
              value={s.value}
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Ask Away
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell KB about your goals, current fitness level, and anything else that&apos;s on your mind..."
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "130px",
          }}
          onFocus={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor =
              "var(--color-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor =
              "var(--color-border)";
          }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "1rem",
          fontSize: "0.8rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: "600",
          color: loading ? "var(--color-text-muted)" : "#0F172A",
          backgroundColor: loading ? "var(--color-border)" : "var(--color-accent)",
          border: "none",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "opacity 0.2s, transform 0.2s",
          fontFamily: "var(--font-body)",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
