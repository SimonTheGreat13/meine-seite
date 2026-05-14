import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";
import heroHead from "@/assets/hero-head.png";

const Index = () => {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;

    const MAX_Y = 18;
    const MAX_X = 10;
    const LERP = 0.08;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;
    let idleT = 0;
    let lastInteraction = performance.now();

    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

    const setTargetFromPoint = (x: number, y: number) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (x - cx) / (window.innerWidth / 2);
      const ny = (y - cy) / (window.innerHeight / 2);
      targetY = clamp(nx * MAX_Y, MAX_Y);
      targetX = clamp(-ny * MAX_X, MAX_X);
      lastInteraction = performance.now();
    };

    const onMove = (e: MouseEvent) => setTargetFromPoint(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setTargetFromPoint(t.clientX, t.clientY);
    };

    const tick = () => {
      const now = performance.now();
      const idle = isCoarse || now - lastInteraction > 1800;
      if (idle) {
        idleT += 0.012;
        targetY = Math.sin(idleT) * 8;
        targetX = Math.sin(idleT * 0.7) * 4;
      }
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      el.style.transform = `perspective(900px) rotateY(${currentY.toFixed(2)}deg) rotateX(${currentX.toFixed(2)}deg)`;
      raf = requestAnimationFrame(tick);
    };

    if (!isCoarse) window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Header />

      {/* Floating head — center-right, half off the edge, follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 translate-x-[30%] md:translate-x-[35%] z-0 animate-head-float-in"
      >
        <div ref={headRef} className="will-change-transform">
          <img
            src={heroHead}
            alt=""
            draggable={false}
            className="w-[55vw] max-w-[620px] min-w-[300px] h-auto select-none drop-shadow-[0_30px_80px_rgba(120,80,255,0.35)]"
          />
        </div>
      </div>

      <main className="flex-1 flex items-center relative z-10">
        <Section>
          <GridWrapper>
            <GridContent className="!mt-0 !mb-0">
              <div className="article-full-width text-center flex flex-col items-center py-24 md:py-32">
                <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Andom Web Studio
                </p>

                <h1 className="fluid-title mb-10">
                  Wir bauen
                  <br />
                  <RotatingWord
                    words={[
                      "Webseiten.",
                      "Marken.",
                      "Erlebnisse.",
                      "Ideen.",
                      "Zukunft.",
                    ]}
                    className="text-primary"
                  />
                </h1>

                <p className="text-muted-foreground text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-[55ch] mb-12">
                  Minimal. Schnell. Auf den Punkt.
                </p>

                <Link
                  to="/kontakt"
                  className="px-10 py-4 text-sm md:text-base uppercase tracking-[0.2em] font-semibold bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-full"
                >
                  Projekt starten
                </Link>
              </div>
            </GridContent>
          </GridWrapper>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="article-grid py-10">
          <div className="article-hero text-center text-xs md:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Andom Web Studio. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
