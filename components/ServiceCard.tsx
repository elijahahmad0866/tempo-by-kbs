"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export default function ServiceCard({ icon, title, description, tag }: ServiceCardProps) {
  const hasIcon = !!icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "none",
        border: "1px solid var(--color-border)",
        borderTop: "3px solid #D4A017",
        borderRadius: "12px",
        padding: hasIcon ? "3rem 2.75rem" : "2rem 1.75rem",
        cursor: "default",
        position: "relative",
        overflow: "visible",
        minHeight: hasIcon ? "380px" : "260px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--color-accent)";
        (e.target as HTMLElement).style.boxShadow = "0 4px 24px rgba(212,160,23,0.14)";
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--color-border)";
        (e.target as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Tag badge — absolute top right */}
      {tag && !hasIcon && (
        <span
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            backgroundColor: "var(--color-accent-light)",
            border: "1px solid #D4A017",
            padding: "0.25rem 0.6rem",
            borderRadius: "4px",
            fontWeight: "700",
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
          }}
        >
          {tag}
        </span>
      )}

      {/* Icon mode */}
      {hasIcon && (
        <>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "var(--color-accent-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-accent)",
              flexShrink: 0,
              marginBottom: "2rem",
            }}
          >
            {icon}
          </div>
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#D4A017",
              marginBottom: "1.5rem",
            }}
          />
          {tag && (
            <span
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                backgroundColor: "var(--color-accent-light)",
                padding: "0.3rem 0.75rem",
                borderRadius: "2px",
                fontWeight: "600",
                marginBottom: "1rem",
                alignSelf: "flex-start",
              }}
            >
              {tag}
            </span>
          )}
        </>
      )}

      <h3
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: hasIcon ? "1.4rem" : "1.2rem",
          fontWeight: "700",
          marginBottom: "1rem",
          color: "var(--color-text-primary)",
          letterSpacing: hasIcon ? "0" : "0.02em",
          paddingRight: !hasIcon && tag ? "90px" : "0",
          overflow: "visible",
          whiteSpace: "normal",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: hasIcon ? "1rem" : "0.95rem",
          lineHeight: hasIcon ? "1.8" : "1.75",
          flex: 1,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
