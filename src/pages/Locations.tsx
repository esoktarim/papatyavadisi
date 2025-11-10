import { MapPin, Navigation, Car, Train, Plane } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import konumImage from "@/assets/konum.webp";
import heroImage from "@/assets/11.png";

interface LocationsProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Locations = ({ language, onLanguageChange }: LocationsProps) => {
  const content = {
    tr: {
      title: "Lokasyonlar",
      subtitle: "Stratejik konumda, doğanın kalbinde",
      mainLocation: {
        title: "Papatya Vadisi Konumu",
        description: "Kadirli'nin Bağdaş Yaylası'nda, doğa ile şehrin buluştuğu noktada yer alan villa konut projesi.",
        address: "Bağdaş Yaylası, Kadirli",
      },
      distances: [
        {
          icon: MapPin,
          title: "Kadirli İlçesi",
          distance: "43 km",
          description: "Yakın ilçe merkezi",
        },
        {
          icon: Train,
          title: "Toprakkale Tren İstasyonu",
          distance: "1.5 saat",
          description: "Demiryolu erişimi",
        },
        {
          icon: Car,
          title: "D-400 Karayolu",
          distance: "Yakın",
          description: "Ana ulaşım arteri",
        },
        {
          icon: Plane,
          title: "Çukurova Havalimanı",
          distance: "2,5 saat",
          description: "Havalimanı erişimi",
        },
      ],
      features: {
        title: "Konum Avantajları",
        items: [
          "Sedir ormanları ile çevrili",
          "Temiz hava ve doğal yaşam",
          "Şehir merkezine kolay erişim",
          "Stratejik ulaşım noktalarına yakın",
        ],
      },
    },
    en: {
      title: "Locations",
      subtitle: "Strategically located in the heart of nature",
      mainLocation: {
        title: "Papatya Vadisi Location",
        description: "A premium residential project located at Osmaniye's Bağdaş Plateau, where nature meets the city.",
        address: "Bağdaş Plateau, Osmaniye",
      },
      distances: [
        {
          icon: MapPin,
          title: "Kadirli District",
          distance: "43 km",
          description: "Nearby district center",
        },
        {
          icon: Train,
          title: "Toprakkale Train Station",
          distance: "1.5 hours",
          description: "Railway access",
        },
        {
          icon: Car,
          title: "D-400 Highway",
          distance: "Nearby",
          description: "Main transport artery",
        },
        {
          icon: Plane,
          title: "Çukurova Airport",
          distance: "2.5 hours",
          description: "Airport access",
        },
      ],
      features: {
        title: "Location Advantages",
        items: [
          "Surrounded by cedar forests",
          "Clean air and natural life",
          "Easy access to city center",
          "Close to strategic transport points",
        ],
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Papatya Vadisi Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 container-luxury text-center px-4">
            <h1 className="heading-1 mb-6 text-white animate-fade-up">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed px-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {t.subtitle}
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#C7A664]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#B89654]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </section>

        {/* Main Location */}
        <section className="section-padding">
          <div className="container-luxury max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Location Info */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#C7A664] bg-white p-0 animate-fade-up">
                <div className="absolute top-6 right-6 z-10">
                  <span className="inline-flex items-center gap-2 bg-[#C7A664] text-white px-4 py-2 rounded-full font-semibold text-sm border border-white">
                    <MapPin className="w-4 h-4" />
                    {language === "tr" ? " Konum" : "Location"}
                  </span>
                </div>
                
                {/* Image */}
                <div className="w-full h-48 md:h-64 overflow-hidden">
                  <img
                    src={konumImage}
                    alt="Papatya Vadisi Konumu"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-800">{t.mainLocation.title}</h2>
                  <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">{t.mainLocation.description}</p>
                  <div className="flex items-center gap-2 text-base md:text-lg text-slate-700">
                    <Navigation className="w-5 h-5 text-[#C7A664]" />
                    <span>{t.mainLocation.address}</span>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent shadow-xl animate-fade-up h-full" style={{ animationDelay: "150ms" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5!2d36.16997!3d37.674205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzI3LjEiTiAzNsKwMTAnMTEuOSJF!5e0!3m2!1str!2str!4v1697123456789"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "400px", border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Papatya Vadisi Location"
                  className="w-full h-full"
                />
                {/* Direct Link Button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#C7A664] text-[#C7A664] hover:text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300 border border-[#C7A664]"
                  >
                    <Navigation className="w-4 h-4" />
                    {language === "tr" ? "Haritada Görüntüle" : "View on Maps"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distance Cards */}
        <section className="section-padding bg-muted/30">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.distances.map((location, idx) => {
                const Icon = location.icon;
                return (
                  <div
                    key={idx}
                    className="bg-background p-6 rounded-xl border border-border hover:border-accent transition-smooth hover-scale animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-2">{location.title}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">{location.distance}</p>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-luxury max-w-4xl">
            <h2 className="heading-3 mb-8 text-center animate-fade-up">{t.features.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
              {t.features.items.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Locations;
