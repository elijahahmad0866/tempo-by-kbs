import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Calendar, MapPin, ExternalLink } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Personal Training Services Los Angeles | Hypertrophy, Mobility & Performance",
  description:
    "Personal training services in Los Angeles: 1-on-1 in-person coaching, online programs, LIFT group classes at Gymtonic. Hypertrophy, mobility, and athletic performance.",
  alternates: {
    canonical: "https://tempobykb.com/services",
  },
};

const features = [
  "Bespoke target/goal setting",
  "Personalised program",
  "Weekly 1-1 check-ins",
  "Personal workout calendar",
  "Expert instruction, supervision and safety",
  "Body measurement tracking",
  "Progress photo opportunity",
  "Exercise reference videos",
  "Priority online support",
  "Nutrition guidance and support — including macro tracking",
  "Communication, knowledge and motivational support throughout your fitness journey",
];

const onlinePrograms = [
  {
    title: "8 Week Shred",
    sub: "Full Body Sculpt",
    description:
      "A comprehensive 8-week program targeting full-body composition change. Structured progressive overload, cardio protocols, and nutrition guidelines to maximize your shred.",
  },
  {
    title: "8 Week Mobility Me",
    sub: "Restore & Rebuild",
    description:
      "Eight weeks of dedicated mobility and corrective movement work. Perfect for athletes recovering from injury, desk workers, or anyone ready to move better and feel free.",
  },
  {
    title: "10 Week 'Like That.'",
    sub: "Athletic Performance",
    description:
      "The full-performance block. Ten weeks of sport-specific training — speed, power, agility, and endurance — designed to make you perform at your absolute peak.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Page Hero — banner image ─── */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "320px",
          overflow: "hidden",
          marginTop: "72px",
        }}
      >
        <Image
          src="/prkj.png"
          alt="KB personal trainer Los Angeles battle rope training"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Dark blue overlay 30% */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15,23,42,0.30)",
          }}
        />
        {/* Title on top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "3rem 5vw",
            maxWidth: "1280px",
            margin: "0 auto",
            left: 0,
            right: 0,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontWeight: "600",
              marginBottom: "0.75rem",
            }}
          >
            Services
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: "400",
              lineHeight: "0.95",
              color: "#FFFFFF",
              letterSpacing: "0.01em",
            }}
          >
            TRAIN WITH
            <br />
            PURPOSE
          </h1>
        </div>
      </section>

      {/* ─── 1-on-1 Coaching ─── */}
      <section
        aria-labelledby="coaching-heading"
        className="hex-bg"
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
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
              marginBottom: "0.75rem",
            }}
          >
            1-on-1 Coaching
          </p>
          <h2
            id="coaching-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              marginBottom: "3rem",
            }}
          >
            Fully Personalized, Fully Committed
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            <ScrollReveal>
              <ServiceCard
                title="In-Person Training"
                description="Train side-by-side at private gym locations in Los Angeles. KB provides expert instruction, real-time form correction, and the intensity that only comes from in-person accountability."
                tag="On-Site"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServiceCard
                title="Online Training"
                description="A fully custom coaching experience delivered remotely. Includes program design, video feedback, weekly check-ins, and everything you need to crush your goals from any gym — or home."
                tag="Remote"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Online Programs ─── */}
      <section
        aria-labelledby="programs-heading"
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "#0F172A",
          borderTop: "none",
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
              marginBottom: "0.75rem",
            }}
          >
            Online Programs
          </p>
          <h2
            id="programs-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "#FFFFFF",
              marginBottom: "3rem",
            }}
          >
            Structured Programs, Proven Results
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {onlinePrograms.map((prog, i) => (
              <ScrollReveal key={prog.title} delay={i * 0.1}>
                <ServiceCard
                  title={prog.title}
                  description={prog.description}
                  tag={prog.sub}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Additional Services ─── */}
      <section
        aria-labelledby="additional-heading"
        className="hex-bg"
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
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
              marginBottom: "0.75rem",
            }}
          >
            Additional Services
          </p>
          <h2
            id="additional-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              marginBottom: "3rem",
            }}
          >
            Specialist Sessions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            <ScrollReveal>
              <ServiceCard
                title="Stretch Sessions"
                description="Targeted assisted stretching and mobility work to release tension, improve range of motion, and support recovery. Available as standalone or add-on sessions."
                tag="Recovery"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServiceCard
                title="House Calls"
                description="In-person strength training and stretching delivered to your home. Convenient, private, and just as effective — KB brings the gym to you."
                tag="In-Person"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── What You Get ─── */}
      <section
        aria-labelledby="features-heading"
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
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
              marginBottom: "0.75rem",
            }}
          >
            Every Program Includes
          </p>
          <h2
            id="features-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              marginBottom: "3rem",
            }}
          >
            What You Get
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {features.map((feat) => (
              <ScrollReveal key={feat}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "2.5rem",
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "3px",
                  }}
                >
                  <CheckCircle
                    size={16}
                    style={{
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {feat}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Consultations ─── */}
      <section
        aria-labelledby="consult-heading"
        style={{
          padding: "6rem 1.5rem",
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
            gap: "3rem",
          }}
        >
          <div>
            <h2
              id="consult-heading"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: "400",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              In-Person Consultation
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.8",
              }}
            >
              Your initial consultation will include a body analysis, lifestyle and
              nutrition evaluation, and a thorough conversation outlining your
              fitness aspirations. This program will be designed just for you, to
              ensure success in achieving your specific physical goals.
            </p>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: "400",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              Health &amp; Fitness Assessment
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.8",
              }}
            >
              This assessment will measure the quality of your posture, movement
              and performance, assisting me in developing a customized fitness
              program to enhance your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Gym Locations ─── */}
      <section
        aria-labelledby="locations-heading"
        style={{
          padding: "6rem 1.5rem",
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
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
              marginBottom: "0.75rem",
            }}
          >
            Locations
          </p>
          <h2
            id="locations-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
              marginBottom: "3rem",
            }}
          >
            Private Gym Locations
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {/* Gymtonic */}
            <div
              style={{
                backgroundColor: "var(--color-bg)",
                padding: "2.5rem",
                borderTop: "2px solid var(--color-accent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Gymtonic
              </h3>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: "1.75rem",
                }}
              >
                <MapPin
                  size={14}
                  style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }}
                />
                3249 S La Cienaga Blvd, Los Angeles, CA 90016
              </p>

              {/* Class Schedule */}
              <div style={{ marginBottom: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                  }}
                >
                  LIFT — Class Schedule
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    "Tuesday · 7:15 PM",
                    "Thursday · 7:15 PM",
                    "Saturday · 9:30 AM",
                  ].map((slot) => (
                    <div
                      key={slot}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        color: "var(--color-text-muted)",
                        fontSize: "0.875rem",
                      }}
                    >
                      <Calendar
                        size={13}
                        style={{ color: "var(--color-accent)", flexShrink: 0 }}
                      />
                      {slot}
                    </div>
                  ))}
                </div>
              </div>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.825rem",
                  lineHeight: "1.7",
                  marginBottom: "1.5rem",
                }}
              >
                A dynamic, timed strength class designed to keep you moving with
                purpose. Rotate through bench work, TRX cables, and core focused
                mat exercises; building functional strength, stability and control.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "0.35rem 0.9rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    border: "1px solid var(--color-accent)",
                    borderRadius: "2px",
                    fontWeight: "600",
                  }}
                >
                  Available on ClassPass
                </span>
                <a
                  href="#"
                  aria-label="Pay for class via QuickBooks"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.9rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0F172A",
                    backgroundColor: "var(--color-accent)",
                    borderRadius: "6px",
                    fontWeight: "600",
                  }}
                >
                  Pay for Class
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* One Elite — Coming Soon */}
            <div
              style={{
                backgroundColor: "var(--color-bg)",
                padding: "2.5rem",
                borderTop: "2px solid var(--color-border)",
                opacity: 0.65,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  border: "1px solid var(--color-border)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "2px",
                  fontWeight: "600",
                }}
              >
                Coming Soon
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                One Elite Training Hollywood
              </h3>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: "1.5rem",
                }}
              >
                <MapPin
                  size={14}
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                6933 Santa Monica Blvd, Suite 30, Los Angeles, CA 90038
              </p>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                }}
              >
                Tempo by KB is expanding to Hollywood. Stay tuned for class
                schedules and booking availability at this premium location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section
        style={{
          padding: "7rem 1.5rem",
          textAlign: "center",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "400",
            color: "var(--color-text-primary)",
            marginBottom: "2rem",
            letterSpacing: "0.01em",
          }}
        >
          READY TO COMMIT?
        </h2>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "1rem 3rem",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: "600",
            color: "#0F172A",
            backgroundColor: "var(--color-accent)",
            borderRadius: "6px",
            boxShadow: "0 4px 14px rgba(212,160,23,0.4)",
          }}
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
