import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NotFoundProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const NotFound = ({ language, onLanguageChange }: NotFoundProps) => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  const content = {
    tr: {
      title: "404",
      message: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
      homeButton: "Ana Sayfaya Dön",
    },
    en: {
      title: "404",
      message: "Page Not Found",
      description: "The page you are looking for does not exist or may have been moved.",
      homeButton: "Return to Home",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="container-luxury text-center">
          <h1 className="text-8xl font-bold mb-4 text-gold animate-fade-up">{t.title}</h1>
          <h2 className="text-3xl font-semibold mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t.message}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            {t.description}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gold text-background rounded-lg font-medium hover:bg-gold/90 transition-smooth animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {t.homeButton}
        </a>
      </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default NotFound;
