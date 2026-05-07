"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headline = ["TEMPO BY", "KB"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ─── Full-bleed background image ─── */}
      <Image
        src="/kbpho/2A9A2403.jpg"
        alt="Kyneijee Wubah personal trainer Los Angeles resistance band training"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        sizes="100vw"
      />

      {/* ─── Gradient overlay — dark left, transparent right ─── */}
      <div
        aria-hidden="true"
        className="hero-gradient"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ─── Text block — anchored bottom-left ─── */}
      <div
        className="hero-text"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "6%",
          maxWidth: "55%",
          zIndex: 2,
        }}
      >
        {/* Mustard rule line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#D4A017",
            marginBottom: "1.25rem",
            transformOrigin: "left center",
          }}
        />

        {/* Tag line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D4A017",
            fontFamily: "var(--font-body)",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Personal Trainer · Los Angeles, CA
        </motion.p>

        {/* Headline — staggered word reveal */}
        <h1
          aria-label="Tempo by KB"
          style={{
            fontFamily: "var(--font-display), serif",
            lineHeight: "0.9",
            marginBottom: "1.5rem",
          }}
          className="hero-headline"
        >
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "block",
                color: word === "KB" ? "#D4A017" : "#FFFFFF",
                fontFamily: "var(--font-display), serif",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "17px",
            fontFamily: "var(--font-body)",
            lineHeight: "1.6",
            marginBottom: "2.5rem",
          }}
        >
          NASM Certified · PN1 Nutrition Coach · NYU Tisch BFA · Movement Artist.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-buttons"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link
            href="/contact"
            className="hero-btn-primary"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              backgroundColor: "#D4A017",
              color: "#0F172A",
              fontFamily: "var(--font-body)",
              fontWeight: "700",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: "6px",
              border: "2px solid transparent",
              boxShadow: "0 4px 20px rgba(212,160,23,0.45)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "0.88";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }}
          >
            Book a Consultation
          </Link>

          <Link
            href="/services"
            className="hero-btn-secondary"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              fontFamily: "var(--font-body)",
              fontWeight: "700",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: "6px",
              border: "2px solid rgba(255,255,255,0.6)",
              transition: "border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#FFFFFF";
              el.style.backgroundColor = "rgba(255,255,255,0.1)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.6)";
              el.style.backgroundColor = "transparent";
              el.style.transform = "translateY(0)";
            }}
          >
            View Services
          </Link>
        </motion.div>
      </div>

      {/* ─── Scroll indicator — fades on scroll ─── */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          translateX: "-50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 2,
          opacity: scrollIndicatorOpacity,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            position: "relative",
            width: "2px",
            height: "30px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "50%",
              backgroundColor: "#FFFFFF",
              borderRadius: "1px",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        .hero-headline {
          font-size: clamp(5rem, 10vw, 11rem);
        }

        @media (max-width: 767px) {
          .hero-gradient {
            background: rgba(0,0,0,0.75) !important;
          }
          .hero-text {
            left: 5% !important;
            bottom: 8% !important;
            max-width: 85% !important;
          }
          .hero-headline {
            font-size: clamp(3.5rem, 12vw, 5rem) !important;
          }
          .hero-buttons {
            flex-direction: column !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
