"use client";

import { useRef } from "react";
import Image from "next/image";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const CARDS = [
  {
    title: "Higher Rental\nYields",
    body: "Investors can earn rental yields of up to 8–10% annually, surpassing many global markets.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
    alt: "Dubai Marina aerial",
  },
  {
    title: "Tax Free\nEnvironment",
    body: "The UAE offers zero income, capital gains, and wealth tax, maximising returns for investors.",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=900&q=80",
    alt: "Dubai architecture",
  },
  {
    title: "UAE Golden\nVisa Benefits",
    body: "Real estate investments in Dubai can grant you long-term residency and exclusive Golden Visa benefits.",
    image: "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?w=900&q=80",
    alt: "UAE Golden Visa",
  },
  {
    title: "Premium\nHealthcare",
    body: "With strong healthcare investments, Dubai supports your health and wellbeing at the highest standard.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    alt: "Premium healthcare",
  },
  {
    title: "World-Class\nInfrastructure",
    body: "From airports to smart transport, Dubai's infrastructure leads the world in connectivity and innovation.",
    image: "https://images.unsplash.com/photo-1538964173425-93a69a2a6f5c?w=900&q=80",
    alt: "Dubai infrastructure",
  },
  {
    title: "Strategic\nLocation",
    body: "Positioned between East and West, Dubai offers unmatched access to global markets and time zones.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80",
    alt: "Dubai global hub",
  },
];

export default function WhyDubaiSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const cardW = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  }

  return (
    <section style={{ background: "#fff", padding: "clamp(64px,8vw,112px) 0" }}>
      {/* Heading */}
      <h2 style={{
        textAlign: "center",
        fontFamily: "var(--font-serif, serif)",
        fontSize: "clamp(13px,1.1vw,16px)",
        fontWeight: 400,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#0a0a08",
        marginBottom: "clamp(40px,5vw,72px)",
      }}>
        Why Dubai?
      </h2>

      {/* Scroll track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(24px,5vw,72px)",
          paddingRight: "clamp(24px,5vw,72px)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {CARDS.map((c) => (
          <div
            key={c.title}
            style={{
              flex: "0 0 clamp(300px,32vw,480px)",
              height: "clamp(380px,48vw,620px)",
              position: "relative",
              overflow: "hidden",
              scrollSnapAlign: "start",
              borderRadius: 4,
            }}
          >
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(max-width: 768px) 90vw, 32vw"
              style={{ objectFit: "cover" }}
            />
            {/* gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
            }} />
            {/* text */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "clamp(20px,2.5vw,36px)",
            }}>
              <p style={{
                color: "#fff",
                fontFamily: "var(--font-serif, serif)",
                fontSize: "clamp(20px,2.2vw,30px)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1.15,
                marginBottom: 10,
                whiteSpace: "pre-line",
              }}>
                {c.title}
              </p>
              <p style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "clamp(12px,1vw,14px)",
                lineHeight: 1.6,
                maxWidth: 320,
              }}>
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div style={{
        display: "flex",
        gap: 12,
        marginTop: "clamp(28px,3vw,44px)",
        paddingLeft: "clamp(24px,5vw,72px)",
      }}>
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            onClick={() => scroll(dir)}
            aria-label={dir === -1 ? "Previous" : "Next"}
            style={{
              width: 44, height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(10,10,8,0.2)",
              background: "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              transition: `background 0.3s ${EASE}, border-color 0.3s ${EASE}`,
              fontSize: 16,
              color: "#0a0a08",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#0a0a08";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#0a0a08";
            }}
          >
            {dir === -1 ? "←" : "→"}
          </button>
        ))}
      </div>
    </section>
  );
}
