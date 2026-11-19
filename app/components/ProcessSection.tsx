"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const EASE = "cubic-bezier(0.22,1,0.36,1)";
const SPRING = "cubic-bezier(0.34,1.56,0.64,1)";

const STEPS = [
  {
    n: 1,
    title: "Consult",
    desc: "We learn your brief, budget and goals — then introduce the right Dubai projects before they reach the open market.",
  },
  {
    n: 2,
    title: "Acquire",
    desc: "We handle negotiation, payment plans and all paperwork. You get direct developer pricing with no added fees.",
  },
  {
    n: 3,
    title: "Handover",
    desc: "We stay with you from exchange through to keys — managing every milestone so nothing is missed.",
  },
];

export default function ProcessSection() {
  const [visible, setVisible] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#fff", padding: "clamp(80px,12vw,160px) 0" }}>
      <div className="wrap">

        <div className="process-header">
          <Reveal>
            <h2 className="process-headline">Simple process.<br />Proven results.</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="process-lede">
              From your first enquiry to handover day, we manage every step of your Dubai purchase.
            </p>
          </Reveal>
        </div>

        {/* Numbered track */}
        <div ref={trackRef} className="process-track" style={{ position: "relative" }}>
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: "50%",
              left: "15%",
              right: "15%",
              height: 1,
              background: "rgba(26,18,8,0.18)",
              transform: `scaleX(${visible ? 1 : 0})`,
              transformOrigin: "left center",
              transition: `transform 1.2s ${EASE}`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {STEPS.map((s, i) => (
            <div key={s.n} className="process-track__node">
              <div
                className="process-track__circle"
                style={{
                  transform: visible ? "scale(1)" : "scale(0)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.65s ${SPRING} ${i * 180}ms, opacity 0.4s ease ${i * 180}ms`,
                }}
              >
                {s.n}
              </div>
            </div>
          ))}
        </div>

        {/* Step cards — 3 equal columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(24px,4vw,56px)",
          marginTop: "clamp(32px,5vw,64px)",
        }}>
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              style={{
                transform: visible ? "translateY(0)" : "translateY(28px)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.75s ${EASE} ${200 + i * 110}ms, opacity 0.6s ease ${200 + i * 110}ms`,
              }}
            >
              <h3 style={{ fontSize: "clamp(20px,2vw,28px)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 12, color: "#1a1208" }}>{s.title}</h3>
              <p style={{ fontSize: "clamp(14px,1.1vw,16px)", lineHeight: 1.7, color: "rgba(26,18,8,0.6)", maxWidth: 320 }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
