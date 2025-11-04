import { useState, useEffect, useRef } from "react";
import { Award, Shield, Leaf } from "lucide-react";
import projectVertical from "@/assets/5.png";

interface AboutSectionProps {
  language: "tr" | "en";
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const content = {
    tr: {
      sectionLabel: "PAPATYA VADİSİ HAKKINDA",
      headline: "tasarımdan hayata, güvenilir yapılar…",
      description:
        "Papatya vadisi olarak, Osmaniye'nin doğal güzellikleriyle uyum içinde, modern mimari anlayışıyla konforlu yaşam alanları yaratıyoruz. Her projemizde kalite, güven ve sürdürülebilirlik ön plandadır.",
      values: [
        {
          icon: Shield,
          title: "Güvenilirlik",
          description: "Her projede kalite garantisi",
        },
        {
          icon: Leaf,
          title: "Sürdürülebilirlik",
          description: "Çevreye duyarlı yapılar",
        },
        {
          icon: Award,
          title: "Mükemmellik",
          description: "Müşteri memnuniyeti odaklı tasarımlar",
        },
      ],
      stats: [
        { value: "60+", label: "Tamamlanan Proje" },
        { value: "500+", label: "Mutlu Müşteri" },
        { value: "10+", label: "Yıllık Deneyim" },
      ],
      servicesTitle: "hizmet alanlarımız:",
      services: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          ),
          label: "MİMARİ PROJELER",
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6H9m0 0v3m0-3v-3m0 3h.75m3 0h.75m-3 0h.75m-3 0h.75m3 0v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3h.75m-10.5 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75" />
            </svg>
          ),
          label: "İNŞAAT VE TAAHHÜT",
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
          ),
          label: "SATIŞ HİZMETLERİ",
        },
      ],
    },
    en: {
      sectionLabel: "ABOUT PAPATYA VADISI",
      headline: "from design to life, reliable structures…",
      description:
        "As Papatya Vadisi, we create comfortable living spaces that harmonize with Osmaniye's natural beauty through modern architectural understanding. Quality, trust, and sustainability are at the forefront in every project.",
      values: [
        {
          icon: Shield,
          title: "Reliability",
          description: "Quality guarantee in every project",
        },
        {
          icon: Leaf,
          title: "Sustainability",
          description: "Environmentally conscious structures",
        },
        {
          icon: Award,
          title: "Excellence",
          description: "Award-winning architectural designs",
        },
      ],
      stats: [
        { value: "10+", label: "Completed Projects" },
        { value: "500+", label: "Happy Customers" },
        { value: "15+", label: "Years Experience" },
      ],
      servicesTitle: "our service areas:",
      services: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          ),
          label: "ARCHITECTURAL PROJECTS",
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6H9m0 0v3m0-3v-3m0 3h.75m3 0h.75m-3 0h.75m-3 0h.75m3 0v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3h.75m-10.5 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75m3 0v3m0-3v-3m0 3v3m0-3v-3m0 3h.75" />
            </svg>
          ),
          label: "CONSTRUCTION & COMMITMENT",
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
          ),
          label: "SALES SERVICES",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #C7A664 2px, #C7A664 4px)`,
          backgroundSize: '100% 8px'
        }}></div>
      </div>

      <div className="container-luxury max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        {/* Section Label */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[#C7A664] text-xs md:text-sm font-semibold tracking-[0.08em] uppercase inline-block">
            {t.sectionLabel}
          </span>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-[72px] relative">
          {/* Vertical Dividers */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-[#E5E7EB]" style={{ transform: "translateX(-50%)" }}></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-[#E5E7EB]" style={{ transform: "translateX(-50%)" }}></div>

          {/* Left Column - Headline & Description */}
          <div className={`mb-12 md:mb-0 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-[1.15] tracking-tight hover:text-[#C7A664] transition-colors duration-300" style={{ fontFamily: "'Inter', 'Neue Haas Grotesk', system-ui, sans-serif" }}>
              {t.headline}
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] leading-[1.75] mb-8" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {t.description}
            </p>

            {/* Values Section */}
            <div className="space-y-4 mt-8">
              {t.values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C7A664]/10 flex items-center justify-center group-hover:bg-[#C7A664] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#C7A664] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111827] mb-1 text-sm">{value.title}</h4>
                      <p className="text-sm text-[#6B7280]">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Column - Services */}
          <div className={`mb-12 md:mb-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-8 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {t.servicesTitle}
              <span className="block mt-2 w-16 h-0.5 bg-[#C7A664]"></span>
            </h3>
            <div className="space-y-5">
              {t.services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 group cursor-default hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#C7A664]/5 flex items-center justify-center text-[#111827] mt-0.5 group-hover:bg-[#C7A664] transition-all duration-300">
                    <div className="scale-75 group-hover:scale-100 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-[#111827] tracking-wide uppercase group-hover:text-[#C7A664] transition-colors duration-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-3 gap-4">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#111827] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#6B7280] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Single Vertical Image Card */}
          <div className={`md:flex items-start transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="w-full">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] group relative">
                <img
                  src={projectVertical}
                  alt={language === "tr" ? "Papatya Vadisi Dikey Görsel" : "Papatya Vadisi Vertical Image"}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

