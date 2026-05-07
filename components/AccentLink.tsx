"use client";

import Link from "next/link";

interface AccentLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { padding: "0.55rem 1.4rem", fontSize: "0.75rem" },
  md: { padding: "0.9rem 2.25rem", fontSize: "0.78rem" },
  lg: { padding: "1rem 3rem", fontSize: "0.8rem" },
};

export default function AccentLink({
  href,
  children,
  variant = "solid",
  size = "md",
}: AccentLinkProps) {
  const { padding, fontSize } = sizes[size];
  const isSolid = variant === "solid";

  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        padding,
        fontSize,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: "600",
        color: isSolid ? "#0F172A" : "#D4A017",
        backgroundColor: isSolid ? "var(--color-accent)" : "transparent",
        border: isSolid ? "none" : "2px solid #D4A017",
        borderRadius: "6px",
        boxShadow: isSolid ? "0 4px 14px rgba(212,160,23,0.4)" : "none",
        transition: "opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (isSolid) {
          el.style.opacity = "0.85";
        } else {
          el.style.backgroundColor = "#D4A017";
          el.style.color = "#0F172A";
        }
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        if (!isSolid) {
          el.style.backgroundColor = "transparent";
          el.style.color = "#D4A017";
        }
      }}
    >
      {children}
    </Link>
  );
}
