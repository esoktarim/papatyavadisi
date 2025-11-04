import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LocationProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Location = ({ language, onLanguageChange }: LocationProps) => {
  const content = {
    tr: {
      title: "Lokasyon",
      subtitle: "Proje konum bilgileri",
    },
    en: {
      title: "Location",
      subtitle: "Project location information",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-luxury text-center">
            <h1 className="heading-1 mb-4 animate-fade-up">{t.title}</h1>
            <p className="text-lg text-muted-foreground animate-fade-up">{t.subtitle}</p>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Location;

