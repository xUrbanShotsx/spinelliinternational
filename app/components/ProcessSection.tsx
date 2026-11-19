import Image from "next/image";
import Reveal from "./Reveal";

const FRAMES = [
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    alt: "Dubai skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
    alt: "Dubai luxury residence",
  },
  {
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85",
    alt: "Dubai waterfront",
  },
];

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
        {FRAMES.map((f, i) => (
          <Reveal key={f.alt} delay={i * 80} style={{ position: "relative", overflow: "hidden", height: "100%" }}>
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
