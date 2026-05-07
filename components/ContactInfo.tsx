"use client";

import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconWrap: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "1px solid var(--color-border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "var(--color-accent)",
};

export default function ContactInfo() {
  return (
    <div>
      <h2
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: "400",
          color: "var(--color-text-primary)",
          marginBottom: "2rem",
        }}
      >
        Reach Out Directly
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <a
          href="mailto:hello@tempobykb.com"
          style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-muted)", fontSize: "0.95rem", transition: "color 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
        >
          <span style={iconWrap}><Mail size={16} /></span>
          hello@tempobykb.com
        </a>

        <a
          href="https://www.instagram.com/tempobykb"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-muted)", fontSize: "0.95rem", transition: "color 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)"; }}
        >
          <span style={iconWrap}><InstagramIcon size={16} /></span>
          @tempobykb
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
          <span style={iconWrap}><MapPin size={16} /></span>
          Los Angeles, CA
        </div>
      </div>

      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", lineHeight: "1.7" }}>
          <strong
            style={{
              color: "var(--color-accent)",
              fontWeight: "600",
              display: "block",
              marginBottom: "0.4rem",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Response Time
          </strong>
          Messages are typically answered within 24 hours. For immediate inquiries, DM on Instagram.
        </p>
      </div>
    </div>
  );
}
