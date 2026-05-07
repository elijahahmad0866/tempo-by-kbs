import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Book a Personal Trainer in Los Angeles | Tempo by KB",
  description:
    "Book a free consultation with KB, NASM certified personal trainer in Los Angeles. In-person training, online coaching, and group classes available. Contact us today.",
  alternates: {
    canonical: "https://tempobykb.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section
        className="hex-bg"
        style={{
          padding: "10rem 1.5rem 5rem",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: "400",
              lineHeight: "0.95",
              color: "var(--color-text-primary)",
              letterSpacing: "0.01em",
            }}
          >
            LET&apos;S
            <br />
            <span style={{ color: "var(--color-accent)" }}>CONNECT</span>
          </h1>
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section
        aria-labelledby="contact-heading"
        style={{
          padding: "5rem 1.5rem 8rem",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
