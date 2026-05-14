import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";
import heroHead from "@/assets/hero-head.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Header />

      {/* Floating head — half off the right edge, gentle sway */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 md:translate-x-1/2 z-0 animate-head-float-in"
      >
        <div className="animate-head-sway origin-center will-change-transform">
          <img
            src={heroHead}
            alt=""
            className="w-[60vw] max-w-[640px] min-w-[320px] h-auto select-none opacity-90 mix-blend-screen drop-shadow-[0_30px_80px_rgba(120,80,255,0.25)]"
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
