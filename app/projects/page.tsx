import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Projects" };

const VIDEOS = [
  { src: "/frame1.mp4" },
  { src: "/frame2.mp4" },
  { src: "/frame3.mp4" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* STICKY VIDEO PANELS */}
      {VIDEOS.map((v, i) => (
        <div key={v.src} style={{ height: "100dvh" }}>
          <div style={{
            position: "sticky", top: 0, height: "100dvh",
            background: "#0a0a08",
            padding: "clamp(40px,5vw,72px)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ flex: 1, minHeight: 0, position: "relative", overflow: "hidden" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ))}

      {/* CTA */}
      <section className="section dark" style={{ background: "#d4bb7b" }}>
        <div className="wrap">
          <Reveal as="p" className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Pre-release access</Reveal>
          <Reveal as="h2" delay={60} style={{
            fontSize: "clamp(40px,8vw,120px)",
            fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.92,
            color: "#fff", marginBottom: 48,
          }}>
            Not everything<br />goes public.
          </Reveal>
          <Reveal delay={120}>
            <p style={{ maxWidth: 480, opacity: 0.85, color: "#fff", marginBottom: 40, lineHeight: 1.6 }}>
              We hold direct relationships with Dubai&apos;s leading developers — which means our clients
              access new project launches before the public release. Tell us your brief and we&apos;ll make the right introductions.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              padding: "18px 28px", border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 999, color: "#fff", fontWeight: 500,
              transition: "background 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s",
            }}>
              Register your interest <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
