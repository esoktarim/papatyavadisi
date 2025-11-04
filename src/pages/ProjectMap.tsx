import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProjectMapProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const ProjectMap = ({ language, onLanguageChange }: ProjectMapProps) => {
  const content = {
    tr: {
      title: "Proje Haritası",
      subtitle: "Papatyavadisi projelerinin konumunu harita üzerinde görüntüleyin",
      location: {
        title: "Konum Bilgileri",
        address: "Osmaniye Merkez, Osmaniye",
        features: [
          "Şehir merkezine 10 dk",
          "Alışveriş merkezlerine yakın",
          "Doğa ile iç içe",
        ],
      },
      contact: {
        title: "İletişim",
        phone: "0366 474 80 10",
        email: "info@papatyavadisi.com",
      },
    },
    en: {
      title: "Project Map",
      subtitle: "View the location of Papatyavadisi projects on the map",
      location: {
        title: "Location Information",
        address: "Osmaniye Center, Osmaniye",
        features: [
          "10 min to city center",
          "Close to shopping malls",
          "Surrounded by nature",
        ],
      },
      contact: {
        title: "Contact",
        phone: "0366 474 80 10",
        email: "info@papatyavadisi.com",
      },
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

        {/* Map & Info */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2 animate-fade-up">
                <div className="rounded-xl overflow-hidden border border-border h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.39091284824!2d33.87!3d39.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d94e7f0a7a7a7f%3A0x3b0e7f0a7a7a7a7f!2zS8SxxZ_FnmVoaXI!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location Map"
                  />
                </div>
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-xl border border-border animate-fade-up" style={{ animationDelay: "100ms" }}>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{t.location.title}</h3>
                      <p className="text-muted-foreground">{t.location.address}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {t.location.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-xl border border-border animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <h3 className="font-serif text-xl font-semibold mb-4">{t.contact.title}</h3>
                  
                  <div className="space-y-4">
                    <a
                      href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-smooth"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{t.contact.phone}</span>
                    </a>
                    
                    <a
                      href={`mailto:${t.contact.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-smooth"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{t.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ProjectMap;
