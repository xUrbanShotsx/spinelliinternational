"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

type Frame = {
  src: string;
  image?: string;
  logo?: string;
  label?: string;
};

const FRAMES: Frame[] = [
  { src: "/frame1.mp4", image: "/chelsea-bg.jpg", logo: "/chelsea-logo.png" },
  { src: "/frame2.mp4", image: "/altitude-bg.jpg", logo: "/altitude-logo.png" },
  { src: "/frame3.mp4", label: "Frame 3" },
];

function VideoFrame({ frame }: { frame: Frame }) {
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
      style={{ position: "relative", height: "100%", overflow: "hidden", cursor: "pointer" }}
    >
      {/* Static image (greyscale default, hidden on hover) */}
      {frame.image && (
        <Image
          src={frame.image}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 34vw"
          style={{
            objectFit: "cover",
            filter: "grayscale(1) contrast(1.4) brightness(0.85)",
            opacity: hovered ? 0 : 1,
            transition: `opacity 0.7s ${EASE}`,
          }}
        />
      )}

      {/* Video (hidden until hover) */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          filter: frame.image ? "grayscale(0)" : hovered ? "grayscale(0)" : "grayscale(1)",
          opacity: frame.image ? (hovered ? 1 : 0) : 1,
          transition: `opacity 0.7s ${EASE}, filter 0.7s ${EASE}`,
        }}
      >
        <source src={frame.src} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      {!frame.image && (
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.25)",
          opacity: hovered ? 0 : 1,
          transition: `opacity 0.7s ${EASE}`,
          pointerEvents: "none",
        }} />
      )}

      {/* Logo (centred) */}
      {frame.logo && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "scale(0.95)" : "scale(1)",
          transition: `opacity 0.5s ${EASE}, transform 0.5s ${EASE}`,
          pointerEvents: "none",
        }}>
          <Image
            src={frame.logo}
            alt="Chelsea Residences by DAMAC"
            width={320}
            height={200}
            style={{ width: "clamp(260px,32vw,480px)", height: "auto", objectFit: "contain" }}
          />
        </div>
      )}

      {/* Text label */}
      {frame.label && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "flex-end",
          padding: "clamp(16px,2vw,28px)",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "translateY(6px)" : "translateY(0)",
          transition: `opacity 0.5s ${EASE}, transform 0.5s ${EASE}`,
          pointerEvents: "none",
        }}>
          <p style={{
            color: "#fff",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "clamp(10px,1vw,13px)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {frame.label}
          </p>
        </div>
      )}
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
        {FRAMES.map((f) => (
          <VideoFrame key={f.src} frame={f} />
        ))}
      </div>
    </section>
  );
}
