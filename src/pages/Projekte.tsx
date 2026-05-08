import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";

const projects = [
  {
    number: "01",
    title: "Lumen Studio",
    category: "Branding & Webdesign",
    year: "2025",
    description:
      "Kompletter Markenauftritt und Website für ein Architekturstudio in Zürich.",
  },
  {
    number: "02",
    title: "Nord & Co.",
    category: "E-Commerce",
    year: "2025",
    description:
      "Premium Shop-Erlebnis für eine skandinavische Lifestyle-Marke — von Konzept bis Launch.",
  },
  {
    number: "03",
    title: "Atelier Mira",
    category: "Webentwicklung",
    year: "2024",
    description:
      "Portfolio-Website mit individuellen Animationen für eine internationale Künstlerin.",
  },
];

const Projekte = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section>
          <GridWrapper>
            <GridContent>
              <div className="article-full-width text-center py-20 md:py-28">
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
              </div>

              <div className="article-wrapper-constrained pb-24">
                <ul className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
                  {projects.map((p) => (
                    <li
                      key={p.number}
                      className="group py-10 md:py-14 transition-colors"
                    >
                      <div className="flex items-start gap-6 md:gap-10">
                        <span className="text-[0.75rem] md:text-[0.875rem] font-medium text-muted-foreground tracking-widest pt-2 shrink-0">
                          {p.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-4">
                            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                              {p.title}
                            </h2>
                            <span className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.2em] text-muted-foreground">
                              {p.year}
                            </span>
                          </div>
                          <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.2em] text-primary mb-4">
                            {p.category}
                          </p>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-20">
                  <Link
                    to="/kontakt"
                    className="inline-block px-12 py-4 text-sm uppercase tracking-[0.2em] font-semibold bg-foreground text-background hover:bg-primary transition-colors rounded-full"
                  >
                    Eigenes Projekt starten
                  </Link>
                </div>
              </div>
            </GridContent>
          </GridWrapper>
        </Section>
      </main>
    </div>
  );
};

export default Projekte;
