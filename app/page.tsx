import type { Metadata } from "next";
import Image from "next/image";
import { Target, Video, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import FAQ from "@/components/FAQ";
import AccentLink from "@/components/AccentLink";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Personal Trainer Los Angeles | Tempo by KB",
  description:
    "NASM certified personal trainer in Los Angeles. Specializing in hypertrophy, mobility, and athletic performance. In-person training, online coaching, and group classes available.",
  alternates: {
    canonical: "https://tempobykb.com",
  },
};

const services = [
  {
    title: "IN PERSON TRAINING",
    description:
      "One-on-one sessions at private gym locations in Los Angeles. Includes house calls — KB comes to you for strength training and stretching in your own space.",
    tag: "Los Angeles",
  },
  {
    title: "ONLINE COACHING",
    description:
      "Full remote coaching with personalised programming, weekly check-ins, and priority support — train anywhere in the world on your schedule.",
    tag: "Remote",
  },
  {
    title: "CUSTOM PROGRAMS",
    description:
      "Fully tailored 8 and 10 week programs built around your specific goals — available for immediate purchase and instant access.",
    tag: "Self-Guided",
  },
  {
    title: "STRETCH SESSIONS",
    description:
      "Dedicated mobility and assisted stretching sessions designed to improve range of motion, reduce tension, and enhance overall movement quality.",
    tag: "Recovery",
  },
];

const features = [
  {
    icon: <Target size={28} />,
    title: "BESPOKE GOAL SETTING",
    description:
      "Personalised targets and milestones built entirely around your body, lifestyle, and ambitions.",
  },
  {
    icon: <Calendar size={28} />,
    title: "WEEKLY CHECK-INS",
    description:
      "Dedicated 1-on-1 accountability sessions every week to track progress and keep momentum high.",
  },
  {
    icon: <Video size={28} />,
    title: "EXERCISE REFERENCE VIDEOS",
    description:
      "Every movement in your program comes with a reference video so you always train with perfect form.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "NUTRITION SUPPORT",
    description:
      "Direct access to KB throughout your entire fitness journey — questions answered, guidance always on hand.",
  },
];

const testimonials = [
  {
    quote:
      "After training with KB for 3 months, I feel like I'm finally back to my old self!! My strength is up, I'm safely doing tough moves with KB's instruction and help, and the internal voice saying \"I can't\" has become \"I definitely can!\".",
    name: "Paige Sandhu",
    detail: "2026",
  },
  {
    quote:
      "At 36, I had begun to struggle with shoulder and back pain, which made me hesitant to start weight training. However, KB's uncompromising attention to form didn't just mitigate the pain—it eliminated it. If you are considering her as a trainer, hesitate no longer. You will be better for having her in your corner.",
    name: "Kyle Naughton",
    detail: "2026",
  },
  {
    quote:
      "Thanks to her guidance, after even just a few months, I saw incredible results, both physically and mentally. I felt stronger, more confident, and genuinely excited to lift heavier and keep improving. What really sets her apart is not only her instruction, but also her commitment to instilling lifelong holistic health and fitness.",
    name: "Susan Ahmady",
    detail: "2026",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1 — HERO
      ══════════════════════════════════════════════════════ */}
      <Hero />

      {/* ══════════════════════════════════════════════════════
          2 — MARQUEE
      ══════════════════════════════════════════════════════ */}
      <Marquee />

      {/* ══════════════════════════════════════════════════════
          3 — SERVICES OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-heading"
        className="hex-bg"
        style={{
          padding: "6rem 0",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="sc">
          <div style={{ marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Services
            </p>
            <h2
              id="services-heading"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: "400",
                color: "var(--color-text-primary)",
                lineHeight: "0.95",
                letterSpacing: "0.01em",
              }}
            >
              SERVICES
            </h2>
          </div>

          <div className="grid-4" style={{ gap: "1.25rem" }}>
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.1}>
                <ServiceCard
                  title={svc.title}
                  description={svc.description}
                  tag={svc.tag}
                />
              </ScrollReveal>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <AccentLink href="/services" variant="outline">
              See All Services
            </AccentLink>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 — BENEFIT ROW 1: Video left · text right
              IMG_7633.MOV — Functional Strength
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="strength-heading"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "560px",
          borderTop: "1px solid var(--color-border)",
        }}
        className="benefit-row"
      >
        {/* Image side */}
        <div
          style={{
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/kbpho/2A9A2474.jpg"
            alt="Kyneijee Wubah personal trainer Los Angeles landmine functional strength training"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text side */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 4rem 4rem 3rem",
          }}
          className="benefit-text"
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Speciality 01
          </p>
          <h2
            id="strength-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              lineHeight: "0.95",
              letterSpacing: "0.01em",
              marginBottom: "1.5rem",
            }}
          >
            FUNCTIONAL
            <br />
            STRENGTH
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              lineHeight: "1.85",
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Building quality movement patterns while expanding range of motion
            is where we begin. Move with purpose, control and freedom — both
            in and outside of the gym.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column", maxWidth: "340px" }}>
            {["Control, tempo and bodily awareness", "Core engagement that supports and transfers force", "Stability and balance under load in motion"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <CheckCircle size={15} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5 — BENEFIT ROW 2: Text left · image right
              IMG_7747.jpeg — Mobility
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="mobility-heading"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "520px",
          borderTop: "1px solid var(--color-border)",
        }}
        className="benefit-row"
      >
        {/* Text side */}
        <div
          style={{
            backgroundColor: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 3rem 4rem 5vw",
          }}
          className="benefit-text"
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Speciality 02
          </p>
          <h2
            id="mobility-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              lineHeight: "0.95",
              letterSpacing: "0.01em",
              marginBottom: "1.5rem",
            }}
          >
            MOVE
            <br />
            WITHOUT
            <br />
            LIMITS
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              lineHeight: "1.85",
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Mobility isn&apos;t a warmup — it&apos;s the foundation every
            durable body is built on. Restore range of motion, fix structural
            imbalances, and move pain-free for life.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column", maxWidth: "340px" }}>
            {["Joint mobility & flexibility", "Corrective movement work", "Injury prevention techniques"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <CheckCircle size={15} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div
          className="mobility-image"
          style={{
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/kbpho/2A9A2617.jpg"
            alt="Kyneijee Wubah personal trainer Los Angeles lunge mobility training"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5b — BENEFIT ROW 3: Image left · text right — Endurance
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="endurance-heading"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "560px",
          borderTop: "1px solid var(--color-border)",
        }}
        className="benefit-row"
      >
        {/* Image side */}
        <div
          style={{
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/kbpho/2A9A2447.jpg"
            alt="Kyneijee Wubah personal trainer Los Angeles medicine ball endurance training"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 70%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text side */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 4rem 4rem 3rem",
          }}
          className="benefit-text"
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Speciality 03
          </p>
          <h2
            id="endurance-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              lineHeight: "0.95",
              letterSpacing: "0.01em",
              marginBottom: "1.5rem",
            }}
          >
            ENDURANCE
            <br />
            &amp; PERFORMANCE
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              lineHeight: "1.85",
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Athleticism is not a single quality. Build the cardiovascular base
            and metabolic capacity to perform at your peak, every session.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexDirection: "column", maxWidth: "340px" }}>
            {["Cardiovascular conditioning", "Metabolic circuit training", "Sport-specific programming"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <CheckCircle size={15} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6 — THE METHOD (3 pillars)
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="features-heading"
        style={{
          padding: "6rem 0",
          backgroundColor: "#0F172A",
        }}
      >
        <div className="sc">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              What You Get
            </p>
            <h2
              id="features-heading"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: "700",
                color: "#FFFFFF",
                lineHeight: "0.95",
                letterSpacing: "0.01em",
                marginBottom: "0.75rem",
              }}
            >
              WHAT YOU GET
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1rem",
                lineHeight: "1.7",
              }}
            >
              Everything included with every coaching package.
            </p>
          </div>

          <div className="grid-4">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 0.1}>
                <div className="feature-card-dark">
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212,160,23,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D4A017",
                      marginBottom: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {feat.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      letterSpacing: "0.02em",
                      marginBottom: "1rem",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      flex: 1,
                    }}
                  >
                    {feat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style>{`
          .feature-card-dark {
            background: #1E293B;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.08);
            border-top: 3px solid #D4A017;
            padding: 2.75rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            cursor: default;
          }
          .feature-card-dark:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 32px rgba(212,160,23,0.2);
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          7 — COACH BIO TEASER
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="coach-heading"
        className="hex-bg"
        style={{
          padding: "6rem 0",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          className="sc bio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Your Coach
            </p>
            <h2
              id="coach-heading"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                fontWeight: "400",
                color: "var(--color-text-primary)",
                lineHeight: "0.95",
                letterSpacing: "0.01em",
                marginBottom: "1.75rem",
              }}
            >
              MEET KB
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                marginBottom: "1.5rem",
              }}
            >
              My unique approach to fitness training stems from my vast
              experience as a movement artist, informed by my education in
              kinesiology, movement science, and athletic performance. As an
              active performer, with a Bachelor&apos;s of Fine Arts from NYU
              Tisch, my love for physicality is undying!
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                marginBottom: "1.5rem",
              }}
            >
              Today I am also a National Academy of Sports Medicine (NASM)
              Certified Personal Trainer, Precision Nutrition L1 Coach, Model
              and Movement Director. With over five years experience in the
              fitness arena and almost three years as a CPT, my specialties
              include hypertrophy, sports performance, weight loss, mobility,
              and overall health improvement.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                marginBottom: "2.5rem",
              }}
            >
              I am passionate about guiding individuals with the expertise and
              tools needed to become the best version of themselves, while
              empowering them just as fiercely! My clients gain greater access
              to healing movements that will sustain, mobilize and strengthen
              them for a lifetime.
            </p>
            <AccentLink href="/contact" variant="solid">
              Work with Me
            </AccentLink>
          </div>

          <ScrollReveal>
            <div
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/kbpho/92094137-9996-4BAC-A563-2EB46B82AD47.PNG"
                alt="Kyneijee Wubah personal trainer Los Angeles headshot"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .bio-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          8 — TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonials-heading"
        style={{
          padding: "7rem 1.5rem",
          backgroundColor: "var(--color-accent)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(15,23,42,0.6)",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Results
            </p>
            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: "400",
                color: "#0F172A",
                lineHeight: "0.95",
                letterSpacing: "0.01em",
              }}
            >
              CLIENT STORIES
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              alignItems: "stretch",
            }}
          >
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(15,23,42,0.08)",
                    borderRadius: "12px",
                    padding: "2.5rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: "0.25rem" }}
                    aria-label="5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#B8860B" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "#0F172A",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      fontStyle: "normal",
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "0.85rem",
                        color: "#0F172A",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#64748B",
                        marginTop: "0.2rem",
                      }}
                    >
                      {t.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9 — FAQ
      ══════════════════════════════════════════════════════ */}
      <div
        className="hex-bg"
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <FAQ />
      </div>

      {/* ══════════════════════════════════════════════════════
          10 — FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="cta-heading"
        style={{
          backgroundColor: "#0F172A",
          padding: "8rem 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle blue glow bg */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(212,160,23,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Work Together
          </p>
          <h2
            id="cta-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: "400",
              color: "#FFFFFF",
              lineHeight: "0.92",
              letterSpacing: "0.01em",
              marginBottom: "1.5rem",
            }}
          >
            READY TO
            <br />
            <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-display), serif" }}>MOVE?</span>
          </h2>
          <p
            style={{
              color: "rgba(245,245,240,0.55)",
              fontSize: "0.95rem",
              maxWidth: "440px",
              margin: "0 auto 3rem",
              lineHeight: "1.8",
            }}
          >
            Book a free 30-minute consultation. We&apos;ll build your program,
            set your goals, and get to work.
          </p>
          <AccentLink href="/contact" variant="solid" size="lg">
            Book a Free Consultation
          </AccentLink>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .benefit-row { grid-template-columns: 1fr !important; }
          .benefit-text { padding: 3rem 1.5rem !important; }
          .mobility-image { order: -1; }
          .benefit-video { max-height: 400px; min-height: 300px !important; }
        }
      `}</style>
    </>
  );
}
