import { useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import RotatingWord from "@/components/RotatingWord";
import { GridContent, GridWrapper } from "@/components/GridContainer";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:hallo@andomwebstudio.com?subject=${encodeURIComponent(
      formData.subject || "Anfrage über Webseite"
    )}&body=${body}`;
    toast({ title: "Danke!", description: "Dein Mailprogramm wird geöffnet." });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section>
          <GridWrapper>
            <GridContent>
              <div className="article-full-width text-center py-20 md:py-28">
                <p className="text-[0.75rem] md:text-[0.875rem] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                  Kontakt
                </p>
                <h1 className="fluid-title mb-12">
                  <RotatingWord
                    words={["Hallo.", "Schreib uns.", "Lass reden."]}
                    className="text-primary"
                  />
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[50ch] mx-auto">
                  Erzähl uns von deinem Projekt — wir melden uns innerhalb von 24 Stunden.
                </p>
              </div>

              <div className="article-wrapper-constrained pb-24">
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Betreff
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="px-12 py-4 text-sm uppercase tracking-[0.2em] font-semibold bg-foreground text-background hover:bg-primary transition-colors rounded-full"
                    >
                      Senden
                    </button>
                  </div>
                </form>

                <div className="text-center mt-16 text-muted-foreground">
                  <p className="mb-2">Oder direkt per E-Mail:</p>
                  <a
                    href="mailto:hallo@andomwebstudio.com"
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    hallo@andomwebstudio.com
                  </a>
                </div>
              </div>
            </GridContent>
          </GridWrapper>
        </Section>
      </main>
    </div>
  );
};

export default Kontakt;
