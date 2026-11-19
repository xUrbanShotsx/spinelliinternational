import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAKE_LISTINGS } from "./data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{
        paddingTop: "clamp(120px,14vw,180px)",
        paddingBottom: "clamp(40px,5vw,72px)",
        paddingLeft: "clamp(24px,5vw,72px)",
        paddingRight: "clamp(24px,5vw,72px)",
        background: "#fff",
      }}>
        <p style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(10,10,8,0.35)",
          marginBottom: 20,
        }}>
          Dubai developments
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif, serif)",
          fontSize: "clamp(40px,6vw,96px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
          color: "#0a0a08",
        }}>
          Projects
        </h1>
      </section>

      {/* CARD GRID */}
      <section style={{
        background: "#fff",
        padding: "0 clamp(24px,5vw,72px) clamp(80px,10vw,140px)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,420px), 1fr))",
          gap: "clamp(16px,2vw,28px)",
        }}>
          {FAKE_LISTINGS.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                background: "#ece9e2",
              }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  className="project-card-img"
                />
                {/* gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
                  pointerEvents: "none",
                }} />
                {/* text */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "clamp(20px,2.5vw,32px)",
                }}>
                  <p style={{
                    color: "#fff",
                    fontFamily: "var(--font-serif, serif)",
                    fontSize: "clamp(18px,2vw,26px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}>
                    {p.title}
                  </p>
                  <p style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}>
                    {p.suburb}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#d4bb7b",
        padding: "clamp(80px,10vw,140px) clamp(24px,5vw,72px)",
      }}>
        <p style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.65)", marginBottom: 24,
        }}>
          Pre-release access
        </p>
        <h2 style={{
          fontSize: "clamp(40px,8vw,120px)",
          fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.92,
          color: "#fff", marginBottom: 40,
        }}>
          Not everything<br />goes public.
        </h2>
        <p style={{
          maxWidth: 480, opacity: 0.85, color: "#fff",
          marginBottom: 40, lineHeight: 1.6,
          fontSize: "clamp(14px,1.4vw,17px)",
        }}>
          We hold direct relationships with Dubai&apos;s leading developers — which means our clients
          access new project launches before the public release. Tell us your brief and we&apos;ll make the right introductions.
        </p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: 14,
          padding: "18px 28px", border: "1px solid rgba(255,255,255,0.6)",
          borderRadius: 999, color: "#fff", fontWeight: 500,
          textDecoration: "none",
        }}>
          Register your interest <span>→</span>
        </Link>
      </section>
    </>
  );
}
