import { Calendar, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/2.png";
import project2 from "@/assets/3.png";
import project3 from "@/assets/project-3.jpg";

interface PressProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Press = ({ language, onLanguageChange }: PressProps) => {
  const content = {
    tr: {
      title: "Basın & Haberler",
      subtitle: "Papatyavadisi'nden son haberler ve gelişmeler",
      news: [
        {
          date: "15 Aralık 2024",
          title: "Papatyavadisi Faz 2 Satışa Açıldı",
          excerpt: "Doğanın kalbinde modern yaşamın yeni adresi Papatyavadisi'nin ikinci fazı büyük ilgi görüyor.",
          image: project1,
        },
        {
          date: "1 Aralık 2024",
          title: "24 Ay %0 Faiz Kampanyası Başladı",
          excerpt: "Yılın en avantajlı kampanyası ile hayalinizdeki villaya sahip olmanın tam zamanı.",
          image: project2,
        },
        {
          date: "20 Kasım 2024",
          title: "Örnek Daireler Gezilmeye Açıldı",
          excerpt: "3+1 ve 4+1 örnek villalarımız ziyaretçilerini bekliyor. Modern mimari ve doğal malzemeler bir arada.",
          image: project3,
        },
      ],
      cta: "Daha Fazla Haber",
    },
    en: {
      title: "Press & News",
      subtitle: "Latest news and developments from Papatyavadisi",
      news: [
        {
          date: "December 15, 2024",
          title: "Papatyavadisi Phase 2 Now on Sale",
          excerpt: "The second phase of Papatyavadisi, the new address of modern living in the heart of nature, is receiving great interest.",
          image: project1,
        },
        {
          date: "December 1, 2024",
          title: "24 Months 0% Interest Campaign Started",
          excerpt: "It's the perfect time to own your dream villa with the most advantageous campaign of the year.",
          image: project2,
        },
        {
          date: "November 20, 2024",
          title: "Model Homes Open for Viewing",
          excerpt: "Our 3+1 and 4+1 model villas are waiting for visitors. Modern architecture and natural materials together.",
          image: project3,
        },
      ],
      cta: "More News",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container-luxury text-center">
            <h1 className="heading-1 mb-4 animate-fade-up">{t.title}</h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.news.map((item, idx) => (
                <article
                  key={idx}
                  className="group bg-background rounded-xl overflow-hidden border border-border hover:border-gold transition-smooth hover-scale animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time>{item.date}</time>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-smooth">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="group/btn">
                      <span>{language === "tr" ? "Devamını Oku" : "Read More"}</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Press;
