import { useState, useEffect, useRef } from "react";
import { Award, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import familyImage from "@/assets/9.webp";

interface CorporateProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Corporate = ({ language, onLanguageChange }: CorporateProps) => {
  const [activeSection, setActiveSection] = useState("hakkimizda");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const ref = sectionRefs.current[key];
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const content = {
    tr: {
      title: "Kurumsal",
      subtitle: "Doğanın kalbinde modern yaşam",
      nav: {
        hakkimizda: "Hakkımızda",
        rakamlar: "Rakamlarla Papatya Vadisi",
        misyon: "Misyon ve Vizyon",
        kalite: "Kalite Politikası",
      },
      about: {
        title: "Hakkımızda",
        quote: "Kadirli'nin Bağdaş Yaylası'nda, doğa ile şehrin buluştuğu noktada yer alan Papatya Vadisi, sedir ormanları ile çevrili, temiz hava ve huzurlu bir yaşam alanı sunmaktadır. Modern mimari, geniş teraslar ve doğa odaklı planlama ile sessiz, güvenli ve ayrıcalıklı bir yaşam deneyimi sunuyoruz.",
        description: "Papatya Vadisi olarak, müşterilerimize değer katan, doğayla uyumlu ve sürdürülebilir projeler geliştirmekteyiz. Tüm projelerimizi kendi öz kaynaklarımızla hayata geçiriyor, yüksek eğitimli ve deneyimli kadromuzla inşaat tekniklerini en üst düzeyde uyguluyoruz. Üstün kalite ve güvenilirlik ilkeleri doğrultusunda sektördeki konumumuzu pekiştirmiş, gelecekteki hedefimiz olarak uluslararası projelerle bu standardı daha da ileriye taşımayı planlıyoruz.",
      },
      stats: {
        title: "Rakamlarla Papatya Vadisi",
        subtitle: "Başarımızın Sayıları",
        items: [
          {
            icon: Users,
            title: "KONUT",
            value: "50+",
            unit: "",
            color: "from-green-500 to-green-600",
          },
          {
            icon: Award,
            title: "SOSYAL ALAN",
            value: "10+",
            unit: "",
            color: "from-orange-500 to-orange-600",
          },
          {
            icon: TrendingUp,
            title: "PROJE",
            value: "60",
            unit: "",
            color: "from-purple-500 to-purple-600",
          },
          {
            icon: Award,
            title: "TECRÜBE",
            value: "10+",
            unit: "YIL",
            color: "from-red-500 to-red-600",
          },
        ],
      },
      missionVision: {
        mission: {
          title: "Misyon",
          text: "Doğru alanda doğru ve kaliteli projeler üreterek, insan yaşamına ve çevreye değer katan bir yaklaşımla, ilkesi her zaman en son teknikleri kullanarak sağlam, fonksiyonel ve estetik yapılar inşa etmek olan ve kullanıcı memnuniyetini birinci planda tutan bir anlayışın adıdır Papatya Vadisi.",
        },
        vision: {
          title: "Vizyon",
          text: "Papatya Vadisi; imzasını attığı her projede kalitenin ve güvenin tercih edilen adresi olacaktır.",
        },
      },
      quality: {
        title: "Kalite Politikası",
        paragraphs: [
          "Papatya Vadisi olarak, altyapı ve üstyapı projelerinde ilgili standartlara, teknik şartnamelere, idari ve yasal düzenlemelere tam uyum sağlıyoruz. İnşaat teknikleri, sanat, bilgi ve iletişim teknolojilerindeki yenilikleri projelerimize entegre ediyoruz.",
          "Müşteri memnuniyetini, müşteri ihtiyaç ve beklentilerini göz önünde bulundurarak, tüm çalışanların aktif katılımıyla, kaynakların ekonomik, etkili ve verimli kullanımıyla, ürün ve hizmetlerin zamanında teslimiyle sağlıyoruz. Yönetim sistemlerini sürekli iyileştirerek kalite standartlarını yükseltiyoruz.",
          "Sektörde lider, gelişime açık ve yenilikçi kimliğimizi güçlendirmeyi, ulusal ve uluslararası rekabette Papatya Vadisi markasının sürdürülebilirliğini sağlamayı hedefliyoruz.",
        ],
      },
      policies: {
        environment: {
          title: "Çevre Politikası",
          paragraphs: [
            "Papatya Vadisi olarak, çevreye duyarlı ve sürdürülebilir bir yaklaşım benimsemekteyiz. Doğal kaynakları verimli kullanarak, çevresel etkileri en aza indirmeyi ve gelecek nesillere yaşanabilir bir dünya bırakmayı amaçlıyoruz. Tüm faaliyetlerimizde çevre mevzuatına ve ilgili yasal düzenlemelere tam uyum sağlıyoruz.",
            "Çalışanlarımızı ve iş ortaklarımızı çevre bilinci konusunda eğiterek, çevreye saygılı ve sorumlu bir çalışma kültürü oluşturuyoruz. Yenilikçi ve çevre dostu teknolojiler kullanarak, projelerimizde sürdürülebilir çözümler sunuyoruz.",
          ],
        },
        ohs: {
          title: "İSG Politikası",
          paragraphs: [
            "Papatya Vadisi olarak, iş sağlığı ve güvenliğini en öncelikli değerlerimizden biri olarak görüyoruz. Çalışanlarımızın sağlığını ve güvenliğini korumak için tüm yasal gerekliliklere ve uluslararası standartlara tam uyum sağlıyoruz. Güvenli bir çalışma ortamı oluşturmak amacıyla risk değerlendirmeleri yapıyor ve önleyici tedbirler alıyoruz.",
            "Çalışanlarımızı iş sağlığı ve güvenliği konusunda sürekli olarak eğiterek, farkındalıklarını artırıyoruz. İş kazalarını ve meslek hastalıklarını en aza indirmek için sürekli iyileştirme çalışmaları yapıyor, tüm projelerimizde güvenli ve sağlıklı bir çalışma kültürü oluşturmayı hedefliyoruz.",
          ],
        },
      },
      
    },
    en: {
      title: "Corporate",
      subtitle: "Modern living in the heart of nature",
      nav: {
        hakkimizda: "About Us",
        tanitim: "Promotional Film",
        rakamlar: "Papatya Vadisi by Numbers",
        misyon: "Mission and Vision",
        kalite: "Quality Policy",
      },
      about: {
        title: "About Us",
        quote: "Located at Osmaniye's Bağdaş Plateau, where nature meets the city, Papatya Vadisi offers a living space surrounded by cedar forests, clean air, and peaceful environment. We provide a quiet, safe, and privileged living experience with modern architecture, wide terraces, and nature-oriented planning.",
        description: "As Papatya Vadisi, we develop projects that add value to our customers, are compatible with nature, and sustainable. We realize all our projects with our own resources and apply construction techniques at the highest level with our highly educated and experienced staff. We have strengthened our position in the sector in line with superior quality and reliability principles, and our future goal is to carry this standard even further with international projects.",
      },
      stats: {
        title: "Papatya Vadisi by Numbers",
        subtitle: "Our Success in Numbers",
        items: [
          {
            icon: Users,
            title: "HOUSING",
            value: "50+",
            unit: "",
            color: "from-green-500 to-green-600",
          },
          {
            icon: Award,
            title: "SOCIAL AREA",
            value: "10+",
            unit: "",
            color: "from-orange-500 to-orange-600",
          },
          {
            icon: TrendingUp,
            title: "PROJECT",
            value: "3",
            unit: "",
            color: "from-purple-500 to-purple-600",
          },
          {
            icon: Award,
            title: "EXPERIENCE",
            value: "10+",
            unit: "YEARS",
            color: "from-red-500 to-red-600",
          },
        ],
      },
      missionVision: {
        mission: {
          title: "Mission",
          text: "Papatya Vadisi is the name of an approach that produces the right and quality projects in the right area, adds value to human life and the environment, always uses the latest techniques to build solid, functional and aesthetic structures, and prioritizes user satisfaction.",
        },
        vision: {
          title: "Vision",
          text: "Papatya Vadisi; will be the preferred address of quality and trust in every project it signs.",
        },
      },
      quality: {
        title: "Quality Policy",
        paragraphs: [
          "As Papatya Vadisi, we fully comply with relevant standards, technical specifications, administrative and legal regulations in infrastructure and superstructure projects. We integrate innovations in construction techniques, art, information and communication technologies into our projects.",
          "We ensure customer satisfaction by considering customer needs and expectations, with the active participation of all employees, economic, effective and efficient use of resources, and timely delivery of products and services. We continuously improve management systems and raise quality standards.",
          "We aim to strengthen our identity as a leader, open to development and innovative in the sector, and ensure the sustainability of the Papatya Vadisi brand in national and international competition.",
        ],
      },
      policies: {
        environment: {
          title: "Environmental Policy",
          paragraphs: [
            "As Papatya Vadisi, we adopt an environmentally sensitive and sustainable approach. We aim to use natural resources efficiently, minimize environmental impacts, and leave a livable world for future generations. We fully comply with environmental legislation and relevant legal regulations in all our activities.",
            "We create an environmentally respectful and responsible work culture by educating our employees and business partners about environmental awareness. We offer sustainable solutions in our projects by using innovative and environmentally friendly technologies.",
          ],
        },
        ohs: {
          title: "OHS Policy",
          paragraphs: [
            "As Papatya Vadisi, we consider occupational health and safety as one of our highest priority values. We fully comply with all legal requirements and international standards to protect the health and safety of our employees. We conduct risk assessments and take preventive measures to create a safe working environment.",
            "We continuously increase the awareness of our employees by continuously training them on occupational health and safety. We aim to create a safe and healthy work culture in all our projects by continuously improving work to minimize work accidents and occupational diseases.",
          ],
        },
      },
      certificates: {
        title: "Certificates",
        items: [
          {
            name: "ISO 9001",
            description: "Quality Management System",
          },
          {
            name: "ISO 14001",
            description: "Environmental Management System",
          },
        ],
      },
    },
  };

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Use requestAnimationFrame to batch DOM reads and prevent forced reflow
    requestAnimationFrame(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Header ve sticky menü yüksekliğini hesaba kat
      const headerHeight = 80; // Header yüksekliği
      const stickyNavHeight = 60; // Sticky navigation yüksekliği
      const offset = headerHeight + stickyNavHeight + 20; // Ekstra boşluk
      
        // Batch all DOM reads together
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    });
  };

  return (
    <div className="min-h-screen geometric-pattern">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          ref={(el) => (sectionRefs.current["hero"] = el)}
          className="relative section-padding bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE3] overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-luxury text-center relative z-10">
            <div className="inline-block mb-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 bg-[#C7A664]/10 backdrop-blur-sm text-[#C7A664] px-6 py-2 rounded-full font-semibold text-sm border border-[#C7A664]/20">
                {language === "tr" ? "Kurumsal" : "Corporate"}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2416] mb-4 sm:mb-6 leading-[1.2] tracking-[-0.02em] animate-fade-up" style={{ animationDelay: "100ms" }}>
              {t.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5A5247] font-light max-w-3xl mx-auto leading-relaxed px-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Sub Navigation */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8E3D5] shadow-sm">
          <div className="container-luxury">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 py-5">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`px-5 py-2 text-sm md:text-base font-light transition-all duration-300 relative ${
                    activeSection === key
                      ? "text-[#C7A664]"
                      : "text-[#5A5247] hover:text-[#C7A664]"
                  }`}
                >
                  {label}
                  {activeSection === key && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A664] to-transparent"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* About Section */}
        <section
          id="hakkimizda"
          ref={(el) => (sectionRefs.current["hakkimizda"] = el)}
          className="section-padding bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE3] relative overflow-hidden"
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #C7A664 2px, #C7A664 4px)`,
              backgroundSize: '100% 8px'
            }}></div>
          </div>
          
          <div className="container-luxury max-w-7xl relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C2416] mb-4 tracking-[-0.02em]">
                {t.about.title}
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent mx-auto"></div>
            </div>
            
            <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center transition-all duration-1000 ${isVisible["hakkimizda"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              {/* Image Section - Left Side */}
              <div className="relative animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="relative">
                  {/* Decorative Circle Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/80 to-white/40 rounded-full blur-xl"></div>
                  <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-[#E8E3D5]/50">
                    <div className="relative rounded-full overflow-hidden aspect-square">
                      <img 
                        src={familyImage} 
                        alt={language === "tr" ? "Papatya Vadisi Ailesi" : "Papatya Vadisi Family"}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient for premium look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#C7A664]/5 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C7A664]/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#B89654]/10 rounded-full blur-2xl"></div>
                </div>
              </div>
              
              {/* Content Section - Right Side */}
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <blockquote className="text-2xl md:text-3xl font-light text-[#2C2416] leading-relaxed italic border-l-4 border-[#C7A664] pl-6 py-4">
                  "{t.about.quote}"
                </blockquote>
                
                <p className="text-lg md:text-xl text-[#5A5247] leading-relaxed font-light">
                  {t.about.description}
                </p>
                
                {/* Decorative Accent */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-[1px] w-16 bg-gradient-to-r from-[#C7A664] to-transparent"></div>
                  <div className="w-2 h-2 rounded-full bg-[#C7A664]"></div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C7A664] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="rakamlar"
          ref={(el) => (sectionRefs.current["rakamlar"] = el)}
          className="section-padding bg-white"
        >
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C2416] mb-4 tracking-[-0.02em]">
                {t.stats.title}
              </h2>
              <p className="text-lg text-[#5A5247] font-light mb-4">{t.stats.subtitle}</p>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent mx-auto"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {t.stats.items.map((stat, idx) => {
                const Icon = stat.icon;
                const isVisibleItem = isVisible["rakamlar"];
                
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-white to-[#FAF8F3] p-8 rounded-2xl border border-[#E8E3D5] hover:border-[#C7A664] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 text-center group ${
                      isVisibleItem ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C7A664] to-[#B89654] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs font-semibold text-[#5A5247] mb-4 uppercase tracking-wider">
                      {stat.title}
                    </h3>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E8E3D5] to-transparent mb-4" />
                    <p className="text-3xl md:text-4xl font-light text-[#2C2416] mb-2">
                      {stat.value}
                    </p>
                    {stat.unit && (
                      <p className="text-sm text-[#6B675F] font-light">{stat.unit}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          id="misyon"
          ref={(el) => (sectionRefs.current["misyon"] = el)}
          className="section-padding bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE3]"
        >
          <div className="container-luxury max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div
                className={`bg-white rounded-2xl border border-[#E8E3D5] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 ${
                  isVisible["misyon"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2416] mb-6 tracking-[-0.02em]">
                  {t.missionVision.mission.title}
                </h2>
                <div className="h-[1px] w-16 bg-gradient-to-r from-[#C7A664] to-transparent mb-6"></div>
                <p className="text-lg text-[#5A5247] leading-relaxed font-light">{t.missionVision.mission.text}</p>
              </div>
              
              <div
                className={`bg-white rounded-2xl border border-[#E8E3D5] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 ${
                  isVisible["misyon"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2416] mb-6 tracking-[-0.02em]">
                  {t.missionVision.vision.title}
                </h2>
                <div className="h-[1px] w-16 bg-gradient-to-r from-[#C7A664] to-transparent mb-6"></div>
                <p className="text-lg text-[#5A5247] leading-relaxed font-light">{t.missionVision.vision.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy Section */}
        <section
          id="kalite"
          ref={(el) => (sectionRefs.current["kalite"] = el)}
          className="section-padding bg-white"
        >
          <div className="container-luxury max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C2416] mb-4 tracking-[-0.02em]">
                {t.quality.title}
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent mx-auto"></div>
            </div>
            
            <div
              className={`bg-gradient-to-br from-[#FAF8F3] to-white rounded-2xl border border-[#E8E3D5] p-8 md:p-12 shadow-sm space-y-8 transition-all duration-1000 ${
                isVisible["kalite"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {t.quality.paragraphs.map((paragraph, idx) => (
                <div
                  key={idx}
                  className="flex gap-4"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-[#C7A664] to-transparent rounded-full"></div>
                  <p className="text-lg text-[#5A5247] leading-relaxed font-light">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section
          ref={(el) => (sectionRefs.current["policies"] = el)}
          className="section-padding bg-gradient-to-br from-[#C7A664] via-[#B89654] to-[#C7A664] relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-luxury max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 text-white transition-all duration-1000 ${
                  isVisible["policies"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 tracking-[-0.02em]">
                  {t.policies.environment.title}
                </h2>
                <div className="h-[1px] w-16 bg-gradient-to-r from-white/50 to-transparent mb-6"></div>
                {t.policies.environment.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed mb-4 font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 text-white transition-all duration-1000 ${
                  isVisible["policies"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 tracking-[-0.02em]">
                  {t.policies.ohs.title}
                </h2>
                <div className="h-[1px] w-16 bg-gradient-to-r from-white/50 to-transparent mb-6"></div>
                {t.policies.ohs.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed mb-4 font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer language={language} />
    </div>
  );
};

export default Corporate;
