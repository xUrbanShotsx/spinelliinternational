import Reveal from "./components/Reveal";
import HeroVideo from "./components/HeroVideo";
import ScrollStatement from "./components/ScrollStatement";
import ProcessSection from "./components/ProcessSection";
import WhyDubaiSection from "./components/WhyDubaiSection";

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

      {/* WHY DUBAI */}
      <WhyDubaiSection />

    </>
  );
}
