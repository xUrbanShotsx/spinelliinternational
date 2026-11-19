"use client";

import { useRef, useState } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const FRAMES = [
  { src: "/frame1.mp4", label: "Frame 1" },
  { src: "/frame2.mp4", label: "Frame 2" },
  { src: "/frame3.mp4", label: "Frame 3" },
];

function VideoFrame({ src, label, delay }: { src: string; label: string; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  function onEnter() {
    setHovered(true);
    videoRef.current?.play();
  }

  function onLeave() {
    setHovered(false);
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          filter: hovered ? "grayscale(0)" : "grayscale(1)",
          transition: `filter 0.7s ${EASE}`,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay — fades out on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.25)",
        opacity: hovered ? 0 : 1,
        transition: `opacity 0.7s ${EASE}`,
        pointerEvents: "none",
      }} />

      {/* Label — fades out on hover */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "flex-end",
        padding: "clamp(16px,2vw,28px)",
        opacity: hovered ? 0 : 1,
        transform: hovered ? "translateY(6px)" : "translateY(0)",
        transition: `opacity 0.5s ${EASE} ${delay}ms, transform 0.5s ${EASE} ${delay}ms`,
        pointerEvents: "none",
      }}>
        <p style={{
          color: "#fff",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "clamp(10px,1vw,13px)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section style={{
      background: "#fff",
      height: "100dvh",
      padding: "clamp(40px,5vw,72px)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        flex: 1,
        minHeight: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(40px,5vw,72px)",
      }}>
        {FRAMES.map((f, i) => (
          <VideoFrame key={f.src} src={f.src} label={f.label} delay={i * 60} />
        ))}
      </div>
    </section>
  );
}
