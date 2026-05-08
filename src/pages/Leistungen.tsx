import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";

const services = [
  { nr: "01", title: "Webdesign", desc: "Klare, moderne Designs mit Fokus auf das Wesentliche." },
  { nr: "02", title: "Entwicklung", desc: "Schnelle, performante Webseiten mit sauberem Code." },
  { nr: "03", title: "Branding", desc: "Visuelle Identität, die im Gedächtnis bleibt." },
  { nr: "04", title: "SEO & Performance", desc: "Sichtbar bei Google, schnell für Besucher." },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section>
          <GridWrapper>
            <GridContent>
              <div className="article-full-width text-center py-20 md:py-28">
                <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Leistungen
                </p>
                <h1 className="fluid-title mb-12">
                  <RotatingWord
                    words={["Design.", "Code.", "Wirkung."]}
                    className="text-primary"
                  />
                </h1>
              </div>

              <div className="article-wrapper-constrained">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 pb-24">
                  {services.map((s) => (
                    <div key={s.nr} className="border-t border-border pt-8">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-sm font-medium text-muted-foreground tracking-widest">
                          {s.nr}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold">{s.title}</h2>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center pb-24">
                  <Link
                    to="/kontakt"
                    className="inline-block px-10 py-4 text-sm uppercase tracking-[0.2em] font-semibold bg-foreground text-background hover:bg-primary transition-colors rounded-full"
                  >
                    Anfrage senden
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

export default Leistungen;
