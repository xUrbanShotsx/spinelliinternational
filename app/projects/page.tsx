import type { Metadata } from "next";
import Link from "next/link";
import type { Property } from "@/lib/types";
import Reveal from "../components/Reveal";
import ListingCard from "./ListingCard";
import { FAKE_LISTINGS } from "./data";

export const metadata: Metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const forSale: Property[] = FAKE_LISTINGS;

  return (
    <>
      {/* HERO */}
      <section className="page-hero dark">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Dubai developments</Reveal>
          <Reveal as="h1" className="page-hero__title" delay={60}>
            Current<br />projects.
          </Reveal>
          {forSale.length > 0 && (
            <Reveal delay={120}>
              <p style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12, letterSpacing: "0.08em",
                opacity: 0.5, marginTop: 32,
              }}>
                {forSale.length} {forSale.length === 1 ? "project" : "projects"} available
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* LISTINGS GRID */}
      <section className="section light">
        <div className="wrap">
          {/* 4-col grid: odd rows wide-left, even rows wide-right */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(32px,4vw,60px) clamp(12px,1.5vw,24px)",
          }}
            className="listings-grid"
          >
            {forSale.map((p, i) => {
              const group = Math.floor(i / 3);       // which row group (0,1,2…)
              const pos   = i % 3;                   // position within group (0,1,2)
              // Odd groups (0,2,…): first item is wide. Even groups (1,3,…): last item is wide.
              const isWide = group % 2 === 0 ? pos === 0 : pos === 2;
              return (
                <Reveal key={p.id} delay={Math.min((i % 3) * 70, 140)}
                  style={{ gridColumn: isWide ? "span 2" : "span 1" }}>
                  <ListingCard p={p} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* OFF-MARKET CTA */}
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
