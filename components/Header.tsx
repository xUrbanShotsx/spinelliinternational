"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isProjects = pathname.startsWith("/projects");
  const showWhiteBg = isProjects && scrolled;
  const headerColor = showWhiteBg ? "#0a0a08" : (isProjects || scrolled) ? "#d4bb7b" : "#fff";

  return (
    <>
      <header className="header" style={{
        color: headerColor,
        background: showWhiteBg ? "#fff" : "transparent",
        boxShadow: showWhiteBg ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        transition: "color 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <Link href="/" className="header__logo" aria-label="Spinelli Prestige home">
          <Image
            src="/logo.webp"
            alt="Spinelli Prestige"
            width={360}
            height={90}
            priority
            style={{ height: "clamp(52px,5.5vw,80px)", width: "auto" }}
          />
        </Link>
        <nav className="header__nav" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname.startsWith(l.href) ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <div className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
