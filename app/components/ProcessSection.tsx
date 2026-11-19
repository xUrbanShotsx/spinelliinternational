import Reveal from "./Reveal";

const FRAMES = ["/frame1.mp4", "/frame2.mp4", "/frame3.mp4"];

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
        {FRAMES.map((src, i) => (
          <Reveal key={src} delay={i * 80} style={{ position: "relative", overflow: "hidden", height: "100%" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={src} type="video/mp4" />
            </video>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
