"use client";

import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Approach", href: "/about" },
      { label: "Trusted Developers", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "Chelsea Residences", href: "/projects/chelsea" },
      { label: "Altitude by DAMAC", href: "/projects/altitude" },
      { label: "Canal Heights II", href: "/projects/canal-heights" },
      { label: "DAMAC Islands", href: "/projects/damac-islands" },
      { label: "Coral Reef", href: "/projects/coral-reef" },
      { label: "Couture by Cavalli", href: "/projects/couture-cavalli" },
    ],
  },
  {
    heading: "Investment",
    links: [
      { label: "Why Dubai", href: "/about" },
      { label: "UAE Golden Visa", href: "/about" },
      { label: "Tax-Free Returns", href: "/about" },
      { label: "Off-Market Access", href: "/contact" },
      { label: "Pre-Release Launches", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Buyer Advisory", href: "/contact" },
      { label: "Developer Introductions", href: "/contact" },
      { label: "Investment Strategy", href: "/contact" },
      { label: "Register Interest", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "prestige@spinellire.com", href: "mailto:prestige@spinellire.com" },
      { label: "02 4296 0047", href: "tel:+61242960047" },
      { label: "Spinelli Real Estate ↗", href: "https://www.spinellirealestate.com.au", external: true },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Dubai, UAE", href: "/contact" },
      { label: "Australia", href: "/contact" },
      { label: "Globally Connected", href: "/contact" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#0a0a08",
      color: "rgba(255,255,255,0.55)",
      fontFamily: "var(--font-sans), sans-serif",
    }}>
      {/* TOP BAR — logo + socials */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(36px,4vw,56px) clamp(24px,5vw,72px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        gap: 24,
        flexWrap: "wrap",
      }}>
        <Link href="/" aria-label="Spinelli International home">
          <Image
            src="/logo.webp"
            alt="Spinelli International"
            width={300}
            height={76}
            style={{ height: "clamp(44px,4.5vw,64px)", width: "auto", opacity: 0.9 }}
          />
        </Link>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: "rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                transition: "color 0.25s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#d4bb7b")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* LINK COLUMNS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,180px), 1fr))",
        gap: "clamp(32px,4vw,56px) clamp(24px,3vw,40px)",
        padding: "clamp(48px,6vw,80px) clamp(24px,5vw,72px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 18,
            }}>
              {col.heading}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {l.label}
                    </a>
                  ) : l.href.startsWith("mailto:") || l.href.startsWith("tel:") ? (
                    <a
                      href={l.href}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM BAR — legal */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        padding: "clamp(20px,2.5vw,32px) clamp(24px,5vw,72px)",
      }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Spinelli International. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((t) => (
            <Link
              key={t}
              href="/contact"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
