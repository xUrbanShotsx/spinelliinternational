import Link from "next/link";
import Reveal from "./components/Reveal";
import HeroVideo from "./components/HeroVideo";
import ScrollStatement from "./components/ScrollStatement";
import ProcessSection from "./components/ProcessSection";

export default function HomePage() {
  return (
    <>
      {/* HERO — video only */}
      <section className="hero dark" style={{ position: "relative", overflow: "hidden" }}>
        <HeroVideo />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div className="hero__grid" aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2 }} />
      </section>

      {/* STATEMENT */}
      <section className="section light">
        <div className="wrap statement">
          <ScrollStatement />
        </div>
      </section>

      {/* PROMO VIDEO */}
      <section style={{ background: "#d4bb7b", height: "100dvh", padding: "clamp(40px,5vw,72px)", display: "flex", flexDirection: "column" }}>
        <Reveal style={{ flex: 1, minHeight: 0 }}>
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/promo.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* MARQUEE */}
      <section className="marquee dark" aria-hidden="true">
        <div className="marquee__track">
          {["International", "Global Markets", "Cross-Border", "Off-Market", "International", "Global Markets", "Cross-Border", "Off-Market"].map((w, i) => (
            <span key={i}>{w}<i>✱</i></span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta light">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Work with us globally</Reveal>
          <Reveal as="h2" className="cta__title">
            Selling to<br />the world?
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn--dark">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
