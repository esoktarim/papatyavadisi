import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface SalesOfficeProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const SalesOffice = ({ language, onLanguageChange }: SalesOfficeProps) => {
  const content = {
    tr: {
      title: "Satış Ofisi",
      subtitle: "Size yardımcı olmak için buradayız",
      address: "Osmaniye Merkez, Osmaniye",
      phone: "0536 647 48 10",
      email: "papatyavadisi80@gmail.com",
      hours: "Hafta içi 09:00 - 18:00",
    },
    en: {
      title: "Sales Office",
      subtitle: "We are here to help you",
      address: "Osmaniye Center, Osmaniye",
      phone: "0536 647 48 10",
      email: "papatyavadisi80@gmail.com",
      hours: "Weekdays 09:00 - 18:00",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center mb-12">
              <h1 className="heading-1 mb-4 animate-fade-up">{t.title}</h1>
              <p className="text-lg text-muted-foreground animate-fade-up">{t.subtitle}</p>
            </div>

            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border border-border">
                <MapPin className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-semibold mb-2">Adres</h3>
                <p className="text-muted-foreground">{t.address}</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <Phone className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-gold">
                  {t.phone}
                </a>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <Mail className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-semibold mb-2">E-posta</h3>
                <a href={`mailto:${t.email}`} className="text-muted-foreground hover:text-gold">
                  {t.email}
                </a>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <Clock className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                <p className="text-muted-foreground">{t.hours}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default SalesOffice;

