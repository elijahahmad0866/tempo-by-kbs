"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
          backgroundImage: "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem 0 1.5rem",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ─── Logo ─── */}
          <Link
            href="/"
            aria-label="Tempo by KB Home"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "2rem",
              letterSpacing: "0.04em",
              lineHeight: "1",
              display: "block",
              fontWeight: "700",
            }}
          >
            <span style={{ color: scrolled ? "#0F172A" : "#FFFFFF", fontFamily: "var(--font-display), serif" }}>Kyneijee</span>
            {" "}
            <span style={{ color: "#D4A017", fontFamily: "var(--font-display), serif" }}>· KB ·</span>
            {" "}
            <span style={{ color: scrolled ? "#0F172A" : "#FFFFFF", fontFamily: "var(--font-display), serif" }}>Wubah</span>
          </Link>

          {/* ─── Desktop Nav ─── */}
          <nav
            aria-label="Main navigation"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#D4A017",
                  fontWeight: "600",
                  paddingBottom: "2px",
                  borderBottom:
                    pathname === link.href
                      ? "3px solid #D4A017"
                      : "3px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                padding: "0.75rem 1.75rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#0F172A",
                backgroundColor: "var(--color-accent)",
                borderRadius: "6px",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              CONTACT
            </Link>
          </nav>

          {/* ─── Mobile Hamburger ─── */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: scrolled ? "var(--color-text-primary)" : "#FFFFFF",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ─── Mobile Overlay Menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "#FFFFFF",
              backgroundImage: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color:
                      pathname === link.href
                        ? "var(--color-accent)"
                        : "var(--color-text-primary)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link
                href="/contact"
                style={{
                  padding: "0.75rem 2rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  color: "#0F172A",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "6px",
                  display: "inline-block",
                  marginTop: "1rem",
                }}
              >
                CONTACT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
