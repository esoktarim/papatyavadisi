import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Gallery = ({ language, onLanguageChange }: GalleryProps) => {
  const content = {
    tr: {
      title: "Galeri",
      subtitle: "Projelerimizden görüntüler",
    },
    en: {
      title: "Gallery",
      subtitle: "Images from our projects",
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

export default Gallery;

