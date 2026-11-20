import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectById } from "../data";
import Reveal from "../../components/Reveal";
import EnquiryForm from "./EnquiryForm";
import PhotoGallery from "./PhotoGallery";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getProjectById(id);
  if (!p) return { title: "Project Not Found" };
  return {
    title: `${p.title}, ${p.suburb} — Spinelli International`,
    description: p.description,
  };
}

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProjectById(id);
  if (!p) notFound();

  const paragraphs = p.longDescription.split("\n\n");

  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        background: "#0a0a08",
      }}>
        <Image
          src={p.image}
          alt={p.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.88 }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,8,0.3) 0%, transparent 30%, rgba(10,10,8,0.5) 100%)",
          pointerEvents: "none",
        }} />
        {/* back link */}
        <div style={{ position: "absolute", top: 32, left: "var(--gutter)" }}>
          <Link href="/projects" style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            display: "inline-flex", alignItems: "center", gap: 8,
            textDecoration: "none",
          }}>
            ← All projects
          </Link>
        </div>
        {/* hero title overlay */}
        <div style={{
          position: "absolute", bottom: "clamp(48px,6vw,88px)", left: "var(--gutter)", right: "var(--gutter)",
        }}>
          <p style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)", marginBottom: 12,
          }}>
            {p.developer}
          </p>
          <h1 style={{
            fontSize: "clamp(36px,6vw,88px)",
            fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95,
            color: "#fff", marginBottom: 20,
          }}>
            {p.title}
          </h1>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              p.location,
              p.price,
              `Handover ${p.handover}`,
            ].map((item) => (
              <span key={item} style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid rgba(10,10,8,0.08)",
        padding: "clamp(28px,3.5vw,48px) var(--gutter)",
        display: "flex",
        gap: "clamp(32px,4vw,64px)",
        flexWrap: "wrap",
        alignItems: "center",
      }}>
        {[
          { label: "Developer", value: p.developer },
          { label: "Location", value: p.suburb },
          { label: "Units", value: p.bedrooms },
          { label: "Starting Price", value: p.price },
          { label: "Payment Plan", value: p.paymentPlan ?? "On request" },
          { label: "Handover", value: p.handover },
        ].map((s) => (
          <div key={s.label}>
            <p style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(10,10,8,0.35)", marginBottom: 6,
            }}>{s.label}</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#0a0a08", letterSpacing: "-0.01em" }}>{s.value}</p>
          </div>
        ))}
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#fff", padding: "clamp(80px,10vw,160px) 0" }}>
        <div className="wrap" style={{
          display: "grid",
          gridTemplateColumns: "1fr clamp(260px,32vw,480px)",
          gap: "clamp(48px,6vw,96px)",
          alignItems: "start",
        }}>
          <div>
            <Reveal>
              <p style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(10,10,8,0.35)", marginBottom: 40,
              }}>About this project</p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 30}>
                  <p style={{
                    fontSize: "clamp(15px,1.5vw,18px)",
                    lineHeight: 1.75, color: "#0a0a08",
                    fontWeight: i === 0 ? 500 : 400,
                    opacity: i === 0 ? 1 : 0.78,
                  }}>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
          {p.photos[1] && (
            <Reveal delay={80}>
              <div style={{
                position: "sticky", top: 120,
                aspectRatio: "3/4", overflow: "hidden", background: "#ece9e2",
              }}>
                <Image
                  src={p.photos[1]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 32vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#f8f7f4", padding: "clamp(64px,8vw,112px) 0" }}>
        <div className="wrap">
          <Reveal>
            <p style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(10,10,8,0.35)", marginBottom: 48,
            }}>Key features</p>
          </Reveal>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,280px), 1fr))",
            gap: "clamp(16px,2vw,24px)",
          }}>
            {p.features.map((f, i) => (
              <Reveal key={f} delay={i * 20}>
                <div style={{
                  padding: "clamp(20px,2.5vw,32px)",
                  background: "#fff",
                  borderLeft: "2px solid #d4bb7b",
                }}>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#0a0a08" }}>{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {p.photos.length > 0 && (
        <section style={{ background: "#fff", padding: "clamp(60px,8vw,120px) 0" }}>
          <div className="wrap">
            <Reveal>
              <p style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(10,10,8,0.35)", marginBottom: 40,
              }}>Gallery</p>
            </Reveal>
            <PhotoGallery photos={p.photos} address={p.title} />
          </div>
        </section>
      )}

      {/* ENQUIRY */}
      <section id="enquire" style={{
        background: "#fff",
        padding: "clamp(80px,10vw,140px) 0",
        borderTop: "1px solid rgba(10,10,8,0.08)",
      }}>
        <div className="wrap" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(48px,8vw,120px)",
          alignItems: "start",
        }}>
          <div>
            <Reveal>
              <p style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(10,10,8,0.35)", marginBottom: 32,
              }}>Enquire</p>
            </Reveal>
            <Reveal delay={40}>
              <h2 style={{
                fontSize: "clamp(36px,6vw,80px)",
                fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.92,
                color: "#0a0a08", marginBottom: 32,
              }}>
                Interested<br />in this<br />project?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{
                fontSize: "clamp(14px,1.4vw,17px)", lineHeight: 1.7,
                color: "rgba(10,10,8,0.5)", maxWidth: 380,
              }}>
                Send us a message and we&apos;ll be in touch within the hour.
                We can arrange a full project presentation, floor plan review and payment plan breakdown.
              </p>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <EnquiryForm address={p.title} suburb={p.suburb} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
