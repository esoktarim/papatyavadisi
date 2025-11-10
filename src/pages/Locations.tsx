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
      hero: {
        primaryCta: "Konumu İncele",
        secondaryCta: "Yol Tarifi Al",
      },
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
      hero: {
        primaryCta: "Explore Location",
        secondaryCta: "Get Directions",
      },
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
        <section className="relative min-h-[65vh] md:min-h-[72vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Papatya Vadisi Location"
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C1018]/55 via-[#101724]/55 to-[#0C1018]/70" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#101724]/90 via-transparent to-transparent" />
            <div className="absolute -top-10 -right-24 w-64 h-64 bg-[#C7A664]/14 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-6 -left-20 w-72 h-72 bg-[#B89654]/18 blur-[130px] rounded-full pointer-events-none" />
          </div>

          <div className="relative z-10 container-luxury px-4">
            <div className="mx-auto max-w-3xl animate-fade-up">
              <div className="relative mx-auto max-w-[560px] rounded-[28px] border border-white/18 bg-white/8 px-8 py-9 text-center text-white shadow-[0_30px_70px_rgba(9,12,19,0.45)] backdrop-blur-[16px]">
                <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-serif font-semibold leading-tight drop-shadow-[0_20px_40px_rgba(9,12,19,0.55)]">
                  {t.title}
                </h1>
                <p className="mt-3 text-base sm:text-lg md:text-xl text-white/78 font-medium leading-relaxed">
                  {t.subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href="#premium-location"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] px-6 py-2.5 text-sm font-semibold tracking-tight text-white shadow-[0_16px_30px_rgba(168,133,68,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(168,133,68,0.42)]"
                  >
                    <Navigation className="w-4 h-4" strokeWidth={2.5} />
                    {t.hero.primaryCta}
                  </a>
                  <a
                    href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/6 px-6 py-2.5 text-sm font-semibold tracking-tight text-white/85 transition-all duration-300 hover:bg-white/12 hover:text-white hover:-translate-y-0.5"
                  >
                    <MapPin className="w-4 h-4" strokeWidth={2.5} />
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Location */}
        <section id="premium-location" className="section-padding bg-gradient-to-b from-[#F8F4EC] via-white to-[#F9F2E4]">
          <div className="container-luxury max-w-6xl">
            <div className="grid md:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-14 items-stretch">
              {/* Location Info */}
              <div className="relative animate-fade-up">
                <div className="absolute -inset-[1.5px] rounded-[26px] bg-gradient-to-br from-[#F5E7CC] via-white to-[#E7D4B3] opacity-80" />
                <div className="relative rounded-[24px] overflow-hidden bg-white shadow-[0_30px_70px_rgba(15,20,30,0.12)]">
                  <div className="relative h-52 md:h-64">
                    <img
                      src={konumImage}
                      alt="Papatya Vadisi Konumu"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div className="absolute left-6 bottom-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-white backdrop-blur-sm">
                      <MapPin className="w-4 h-4" strokeWidth={2.5} />
                      <span className="text-sm font-medium tracking-[0.14em] uppercase">
                        {language === "tr" ? "Konum" : "Location"}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="font-serif text-[32px] md:text-[36px] font-semibold text-[#2F2412] tracking-tight">
                        {t.mainLocation.title}
                      </h2>
                      <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#C7A664] to-transparent" />
                    </div>
                    <p className="text-base md:text-lg text-[#4A3D2A]/85 leading-relaxed">
                      {t.mainLocation.description}
                    </p>
                    <div className="flex flex-col gap-3 text-[#3A2E1F]">
                      <div className="inline-flex items-center gap-3">
                        <Navigation className="w-5 h-5 text-[#C7A664]" strokeWidth={2.4} />
                        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#A07B3D]/90">
                          {language === "tr" ? "Adres" : "Address"}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-[#2F2412]">
                        {t.mainLocation.address}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      <a
                        href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#C7A664] bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] px-5 py-3 text-sm font-semibold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(168,133,68,0.35)]"
                      >
                        <Navigation className="w-4 h-4" strokeWidth={2.5} />
                        {language === "tr" ? "Google Haritalar" : "Google Maps"}
                      </a>
                      <a
                        href="#distance-highlights"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#C7A664]/50 bg-white px-5 py-3 text-sm font-semibold tracking-tight text-[#3A2E1F] transition-all duration-300 hover:bg-[#F3E7D1] hover:border-[#C7A664]"
                      >
                        <Car className="w-4 h-4 text-[#B89654]" strokeWidth={2.5} />
                        {language === "tr" ? "Ulaşım Bilgileri" : "Transport Info"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div
                className="relative animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                <div className="absolute -inset-[1.5px] rounded-[26px] bg-gradient-to-br from-white via-[#DCC9A4]/60 to-white opacity-80" />
                <div className="relative h-full rounded-[24px] overflow-hidden bg-[#0F1623] shadow-[0_30px_70px_rgba(15,20,30,0.15)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5!2d36.16997!3d37.674205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzI3LjEiTiAzNsKwMTAnMTEuOSJF!5e0!3m2!1str!2str!4v1697123456789"
                    width="100%"
                    height="100%"
                    style={{ minHeight: "420px", border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Papatya Vadisi Location"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0F1623]/70 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 rounded-full bg-white px-5 py-2 text-[#0F1623] shadow-lg">
                    <span className="text-xs font-semibold tracking-[0.24em] uppercase">
                      {language === "tr" ? "Bağdaş Yaylası" : "Bağdaş Plateau"}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.32em] uppercase text-white/70">
                        {language === "tr" ? "Koordinatlar" : "Coordinates"}
                      </p>
                      <p className="text-lg font-semibold">
                        37.674205°N — 36.16997°E
                      </p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold tracking-tight text-white/90 transition-all duration-300 hover:bg-white/20"
                    >
                      <Navigation className="w-4 h-4" strokeWidth={2.4} />
                      {language === "tr" ? "Haritayı Aç" : "Open Map"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distance Cards */}
        <section id="distance-highlights" className="section-padding bg-gradient-to-b from-[#1A1E28] via-[#252A35] to-[#1A1E28]">
          <div className="container-luxury">
            <div className="text-center mb-14 space-y-4 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 backdrop-blur-sm">
                {language === "tr" ? "Ulaşım Özeti" : "Access Overview"}
              </span>
              <h3 className="text-3xl md:text-[34px] font-serif font-semibold text-white tracking-tight">
                {language === "tr" ? "Seçkin Noktalara Konforlu Uzaklıklar" : "Effortless Reach to Key Destinations"}
              </h3>
              <p className="max-w-3xl mx-auto text-sm sm:text-base text-white/70">
                {language === "tr"
                  ? "Şehrin merkezine, ulaşım arterlerine ve yatırım noktalarına dakikalar içinde erişen konumuyla Papatya Vadisi, günlük yaşamı ayrıcalıklı hale getiriyor."
                  : "Papatya Vadisi offers swift access to urban centers, transport hubs, and investment hotspots, turning everyday life into a refined experience."}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.distances.map((location, idx) => {
                const Icon = location.icon;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] px-6 py-7 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.12] hover:border-[#C7A664]/70 animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute -top-20 right-0 h-32 w-32 rounded-full bg-[#C7A664]/15 blur-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#C7A664] via-[#B89654] to-[#A88544] p-[14px] text-white shadow-[0_18px_30px_rgba(168,133,68,0.35)]">
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-2">
                      {location.title}
                    </h3>
                    <p className="text-[28px] font-bold text-[#F8ECD4] mb-1">
                      {location.distance}
                    </p>
                    <p className="text-sm text-white/70">
                      {location.description}
                    </p>
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
