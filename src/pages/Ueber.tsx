import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";

const Ueber = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section>
          <GridWrapper>
            <GridContent>
              <div className="article-full-width text-center py-20 md:py-28">
                <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Über uns
                </p>
                <h1 className="fluid-title mb-12">
                  <RotatingWord
                    words={["Klar.", "Fokussiert.", "Persönlich."]}
                    className="text-primary"
                  />
                </h1>
              </div>

              <div className="article-wrapper-constrained pb-24">
                <div className="max-w-[60ch] mx-auto space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  <p>
                    Andom Web Studio ist ein unabhängiges Studio für Webdesign
                    und Entwicklung. Wir arbeiten mit Marken, Gründer:innen und
                    Teams, die ihre digitale Präsenz ernst nehmen.
                  </p>
                  <p>
                    Unsere Arbeit ist minimal, präzise und auf das Wesentliche
                    reduziert — ohne Schnörkel, ohne Lärm.
                  </p>
                  <p>
                    Jedes Projekt wird individuell betreut. Vom ersten Gespräch
                    bis zum Launch und darüber hinaus.
                  </p>
                </div>
              </div>
            </GridContent>
          </GridWrapper>
        </Section>
      </main>
    </div>
  );
};

export default Ueber;
