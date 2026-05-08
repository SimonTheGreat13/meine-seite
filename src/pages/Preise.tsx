import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";

const plans = [
  {
    name: "Starter",
    price: "ab 1.490 €",
    desc: "Onepager mit klarem Fokus.",
    features: ["1 Seite", "Responsive Design", "Kontaktformular", "SEO Basis"],
  },
  {
    name: "Studio",
    price: "ab 3.490 €",
    desc: "Mehrseitige Webseite mit eigenem Look.",
    features: ["bis 6 Seiten", "Custom Design", "CMS-Anbindung", "SEO & Analytics"],
    highlight: true,
  },
  {
    name: "Maßgeschneidert",
    price: "auf Anfrage",
    desc: "Komplexe Projekte & Webanwendungen.",
    features: ["Individuelles Konzept", "Web App / Shop", "Integrationen", "Laufende Betreuung"],
  },
];

const Preise = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section>
          <GridWrapper>
            <GridContent>
              <div className="article-full-width text-center py-20 md:py-28">
                <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Preise
                </p>
                <h1 className="fluid-title mb-12">
                  <RotatingWord
                    words={["Fair.", "Transparent.", "Klar."]}
                    className="text-primary"
                  />
                </h1>
              </div>

              <div className="article-wrapper-constrained pb-24">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {plans.map((p) => (
                    <div
                      key={p.name}
                      className={`rounded-2xl border p-8 flex flex-col ${
                        p.highlight
                          ? "border-primary bg-card"
                          : "border-border bg-card/50"
                      }`}
                    >
                      <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
                      <p className="text-muted-foreground mb-6 text-sm">{p.desc}</p>
                      <p className="text-3xl md:text-4xl font-bold mb-8">{p.price}</p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {p.features.map((f) => (
                          <li key={f} className="text-sm md:text-base text-muted-foreground flex gap-3">
                            <span className="text-primary">—</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/kontakt"
                        className={`text-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-colors ${
                          p.highlight
                            ? "bg-primary text-primary-foreground hover:opacity-90"
                            : "bg-foreground text-background hover:bg-primary"
                        }`}
                      >
                        Anfragen
                      </Link>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-12">
                  Alle Preise zzgl. MwSt. Endpreis nach individuellem Angebot.
                </p>
              </div>
            </GridContent>
          </GridWrapper>
        </Section>
      </main>
    </div>
  );
};

export default Preise;
