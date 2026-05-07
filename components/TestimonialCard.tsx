interface TestimonialCardProps {
  name: string;
  result: string;
  quote: string;
  location?: string;
}

export default function TestimonialCard({ name, result, quote, location }: TestimonialCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        backgroundImage: "none",
        border: "1px solid var(--color-border)",
        borderTop: "3px solid #D4A017",
        borderRadius: "12px",
        padding: "3rem 2.75rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "340px",
        width: "100%",
      }}
    >
      {/* Large opening quote mark */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "5rem",
          lineHeight: "0",
          color: "#D4A017",
          display: "block",
          marginBottom: "2rem",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Result badge */}
      {result && (
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          {result}
        </div>
      )}

      {/* Quote text */}
      <blockquote
        style={{
          color: "var(--color-text-primary)",
          fontSize: "1.15rem",
          lineHeight: "1.9",
          fontStyle: "italic",
          fontFamily: "var(--font-display)",
          flex: 1,
        }}
      >
        {quote}
      </blockquote>

      {/* Attribution */}
      <footer style={{ marginTop: "2rem" }}>
        <p
          style={{
            color: "var(--color-text-primary)",
            fontSize: "1rem",
            fontWeight: "700",
          }}
        >
          {name}
        </p>
        {location && (
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "0.8rem",
              marginTop: "0.25rem",
              fontWeight: "600",
              letterSpacing: "0.06em",
            }}
          >
            {location}
          </p>
        )}
      </footer>
    </div>
  );
}
