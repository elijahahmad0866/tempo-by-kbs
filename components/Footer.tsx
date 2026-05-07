"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

// Instagram icon (not in this lucide-react version)
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* ─── Top row ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.75rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
                color: "var(--color-text-primary)",
              }}
            >
              Tempo{" "}
              <span style={{ color: "var(--color-accent)", fontWeight: "300" }}>
                by KB
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: "600",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </p>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--color-text-muted)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: "600",
                marginBottom: "1.25rem",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href="mailto:hello@tempobykb.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-muted)";
                }}
              >
                <Mail size={15} />
                hello@tempobykb.com
              </a>
              <a
                href="https://www.instagram.com/tempobykb"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-muted)";
                }}
              >
                <InstagramIcon size={15} />
                @tempobykb
              </a>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                }}
              >
                <MapPin size={15} />
                Los Angeles, CA
              </span>
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p
            style={{ color: "var(--color-text-muted)", fontSize: "0.775rem" }}
          >
            © {new Date().getFullYear()} Tempo by KB. All rights reserved.
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
            }}
          >
            Los Angeles, CA · Est. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
