"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a personal trainer cost in Los Angeles?",
    answer:
      "Personal training rates in Los Angeles vary based on experience, specialization, and session format. Tempo by KB offers competitive pricing for in-person sessions, online coaching, and group classes via ClassPass. Contact us directly for a personalized quote that fits your goals and budget.",
  },
  {
    question: "What is hypertrophy training?",
    answer:
      "Hypertrophy training is a resistance training approach focused on maximizing muscle growth (hypertrophy). It typically involves moderate-to-heavy weights, controlled rep ranges (6–15 reps), and strategic progressive overload. KB specializes in hypertrophy alongside athletic performance, ensuring you build strength that looks and functions at an elite level.",
  },
  {
    question: "Do you offer online personal training?",
    answer:
      "Yes. Tempo by KB offers comprehensive online coaching programs, including custom 8-week and 10-week programs, weekly check-ins, personalized workout calendars, exercise reference videos, and ongoing nutrition guidance — all delivered remotely so you can train from anywhere.",
  },
  {
    question: "What gyms do you train at in LA?",
    answer:
      "KB currently trains clients at Gymtonic (3249 S La Cienaga Blvd, Los Angeles, CA 90016) and is expanding to One Elite Training Hollywood (6933 Santa Monica Blvd, Suite 30, Los Angeles, CA 90038 — coming soon). Group LIFT classes at Gymtonic are available via ClassPass on Tuesdays, Thursdays, and Saturdays.",
  },
  {
    question: "What is a NASM certified trainer?",
    answer:
      "NASM (National Academy of Sports Medicine) is one of the most respected fitness certifications in the industry. A NASM Certified Personal Trainer has demonstrated proficiency in exercise science, program design, client assessment, and corrective movement — giving you confidence that your training is grounded in evidence-based practice.",
  },
  {
    question: "Do you offer nutrition coaching?",
    answer:
      "Yes. KB holds a Precision Nutrition Level 1 (PN1) certification, meaning nutrition guidance is woven into all coaching packages. This includes macro tracking education, meal planning support, and behavioral coaching to help your nutrition habits align with your fitness goals.",
  },
  {
    question: "Can I do house call sessions?",
    answer:
      "Yes. KB offers in-home personal training sessions for clients who prefer to train in the privacy of their own space. House call sessions cover strength training and assisted stretching — KB brings the expertise and programming directly to you. Contact us to discuss availability and logistics in the Los Angeles area.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: "6rem 0" }}
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
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
            Common Questions
          </p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "400",
              color: "var(--color-text-primary)",
            }}
          >
            Everything You Need to Know
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "var(--color-text-primary)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.975rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: "var(--color-accent)",
                    marginTop: "2px",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: "1.8",
                        paddingBottom: "1.5rem",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
