import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

interface ContactProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Contact = ({ language, onLanguageChange }: ContactProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    tr: {
      title: "İletişim",
      subtitle: "Size en kısa sürede dönüş yapmak için buradayız",
      info: {
        title: "İletişim Bilgileri",
        items: [
          {
            icon: Phone,
            label: "Telefon",
            value: "0536 647 48 10",
            link: "tel:+905366474810",
            description: "7/24 ulaşabilirsiniz",
          },
          {
            icon: Mail,
            label: "E-posta",
            value: "papatyavadisi80@gmail.com",
            link: "mailto:papatyavadisi80@gmail.com",
            description: "Hızlı yanıt garantisi",
          },
          {
            icon: MapPin,
            label: "Adres",
            value: "Bağdaş Yaylası, Kadirli",
            link: "https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA",
            description: "Osmaniye",
          },
          {
            icon: Clock,
            label: "Çalışma Saatleri",
            value: "Hafta içi 09:00 - 18:00",
            link: null,
            description: "Cumartesi 09:00 - 14:00",
          },
        ],
      },
      form: {
        title: "Bize Ulaşın",
        description: "Formu doldurun, en kısa sürede sizinle iletişime geçelim.",
      },
      cta: {
        title: "Hemen İletişime Geçin",
        subtitle: "Projelerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin",
      },
    },
    en: {
      title: "Contact",
      subtitle: "We are here to get back to you as soon as possible",
      info: {
        title: "Contact Information",
        items: [
          {
            icon: Phone,
            label: "Phone",
            value: "0536 647 48 10",
            link: "tel:+905366474810",
            description: "Available 24/7",
          },
          {
            icon: Mail,
            label: "Email",
            value: "papatyavadisi80@gmail.com",
            link: "mailto:papatyavadisi80@gmail.com",
            description: "Quick response guarantee",
          },
          {
            icon: MapPin,
            label: "Address",
            value: "Bağdaş Plateau, Kadirli",
            link: "https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA",
            description: "Osmaniye",
          },
          {
            icon: Clock,
            label: "Working Hours",
            value: "Weekdays 09:00 - 18:00",
            link: null,
            description: "Saturday 09:00 - 14:00",
          },
        ],
      },
      form: {
        title: "Get in Touch",
        description: "Fill out the form and we will contact you as soon as possible.",
      },
      cta: {
        title: "Get in Touch Now",
        subtitle: "Contact us to learn more about our projects",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE3] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container-luxury text-center px-4">
            <div className="inline-block mb-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 bg-[#C7A664]/10 backdrop-blur-sm text-[#C7A664] px-6 py-2 rounded-full font-semibold text-sm border border-[#C7A664]/20">
                <MessageSquare className="w-4 h-4" />
                {language === "tr" ? "İletişim" : "Contact"}
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

        {/* Contact Info Cards */}
        <section className="section-padding bg-white">
          <div className="container-luxury max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#2C2416] mb-3 sm:mb-4">
                {t.info.title}
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
              {t.info.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-white to-[#FAF8F3] rounded-2xl border border-[#E8E3D5] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C7A664]/10 to-[#C7A664]/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#C7A664] group-hover:to-[#B89654] transition-all duration-300">
                      <Icon className={`w-8 h-8 text-[#C7A664] group-hover:text-white transition-colors duration-300`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-semibold text-sm text-[#5A5247] uppercase tracking-wide mb-2">{item.label}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block font-medium text-[#2C2416] mb-2 hover:text-[#C7A664] transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-[#2C2416] mb-2">{item.value}</p>
                    )}
                    <p className="text-sm text-[#6B675F] font-light">{item.description}</p>
                    
                    {/* Hover Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE3]">
          <div className="container-luxury max-w-4xl">
            <div className="bg-white rounded-2xl border border-[#E8E3D5] shadow-xl p-8 md:p-12 text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C7A664] to-[#B89654] flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-[#2C2416] mb-4">
                {t.cta.title}
              </h2>
              <p className="text-lg text-[#5A5247] font-light mb-8 max-w-2xl mx-auto">
                {t.cta.subtitle}
              </p>
              <button 
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C7A664] via-[#C7A664] to-[#B89654] hover:from-[#B89654] hover:via-[#B89654] hover:to-[#A88544] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                {language === "tr" ? "Mesaj Gönder" : "Send Message"}
              </button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-white">
          <div className="container-luxury max-w-6xl">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2416] mb-4">
                {language === "tr" ? "Konumumuz" : "Our Location"}
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C7A664] to-transparent mx-auto"></div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8E3D5] shadow-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5!2d36.16997!3d37.674205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzI3LjEiTiAzNsKwMTAnMTEuOSJF!5e0!3m2!1str!2str!4v1697123456789"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Papatya Vadisi Location"
                className="w-full"
              />
              {/* Direct Link Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#C7A664] text-[#C7A664] hover:text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300 border border-[#C7A664]"
                >
                  <MapPin className="w-4 h-4" />
                  {language === "tr" ? "Haritada Görüntüle" : "View on Maps"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
      
      {/* Contact Modal */}
      <ContactModal
        language={language}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Contact;
