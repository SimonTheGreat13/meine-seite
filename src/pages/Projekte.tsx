import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import RotatingWord from "@/components/RotatingWord";
import hvschwaben from "@/assets/project-hvschwaben.png";
import seferclean from "@/assets/project-sefer-clean.png";
import danisAtelier from "@/assets/project-danis-atelier.png";

const projects = [
  {
    number: "01",
    title: "www.hvschwaben.de",
    category: "Hausverwaltung",
    year: "2025",
    description:
      "Webauftritt für eine Hausverwaltung — klar strukturiert, vertrauensvoll und auf die Bedürfnisse von Eigentümern und Mietern ausgerichtet.",
    url: "https://www.hvschwaben.de",
    image: hvschwaben,
  },
  {
    number: "02",
    title: "www.sefer-clean.de",
    category: "Facility Management",
    year: "2025",
    description:
      "Moderne Unternehmensseite für einen Facility-Management-Dienstleister — mit Fokus auf Leistungen, Referenzen und schnelle Kontaktaufnahme.",
    url: "https://www.sefer-clean.de",
    image: seferclean,
  },
  {
    number: "03",
    title: "www.danis-atelier.de",
    category: "Kunst & Portfolio",
    year: "2025",
    description:
      "Portfolio-Website für eine Künstlerin — eine ruhige Bühne für Werke, Ausstellungen und persönliche Geschichten.",
    url: "https://www.danis-atelier.de",
    image: danisAtelier,
  },
];

const Projekte = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Intro */}
        <section className="px-5 md:px-16 lg:px-20 py-20 md:py-28 text-center">
          <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Portfolio
          </p>
          <h1 className="fluid-title mb-12">
            <RotatingWord
              words={["Projekte.", "Marken.", "Kunden.", "Arbeiten."]}
              className="text-primary"
            />
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[50ch] mx-auto">
            Eine Auswahl aktueller Arbeiten — fokussiert, präzise, mit Liebe zum Detail.
          </p>
        </section>

        {/* Scroll-synced showcase */}
        <section className="px-5 md:px-16 lg:px-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1400px] mx-auto">
            {/* Sticky image column */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-xl">
                  {projects.map((p, i) => (
                    <img
                      key={p.number}
                      src={p.image}
                      alt={p.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                        i === activeIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span>{projects[activeIndex].category}</span>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-col">
              {projects.map((p, i) => (
                <article
                  key={p.number}
                  ref={(el) => (sectionRefs.current[i] = el)}
                  className="min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center py-16 border-b border-border last:border-b-0"
                >
                  {/* Mobile image */}
                  <div className="lg:hidden mb-8 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-lg">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>

                  <span className="text-[0.75rem] md:text-[0.875rem] tracking-[0.3em] text-muted-foreground mb-6">
                    {p.number} — {p.year}
                  </span>
                  <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.2em] text-primary mb-4">
                    {p.category}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 break-words">
                    {p.title}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[55ch] mb-8">
                    {p.description}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-primary transition-colors w-fit border-b border-foreground hover:border-primary pb-1"
                  >
                    Live ansehen →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center mt-24">
            <Link
              to="/kontakt"
              className="inline-block px-12 py-4 text-sm uppercase tracking-[0.2em] font-semibold bg-foreground text-background hover:bg-primary transition-colors rounded-full"
            >
              Eigenes Projekt starten
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projekte;
