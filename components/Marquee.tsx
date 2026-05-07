// Marquee — large display text (Cormorant Garamond), dark navy background, mustard color.
// 4 copies of the phrase ensure the -50% translate creates a seamless loop.
const phrase = "MOVE WITH PURPOSE  ·  TRAIN WITH TEMPO  ·  ";
const repeated = [phrase, phrase, phrase, phrase];

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        overflow: "hidden",
        padding: "1.5rem 0",
        backgroundColor: "#0F172A",
        width: "100vw",
        maxWidth: "100%",
      }}
    >
      <div
        className="animate-marquee"
        style={{ animationDuration: "35s" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: "700",
              fontFamily: "var(--font-display), serif",
              color: "#D4A017",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
