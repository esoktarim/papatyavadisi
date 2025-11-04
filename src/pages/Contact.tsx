import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

interface ContactProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Contact = ({ language, onLanguageChange }: ContactProps) => {
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
            value: "0542 398 26 66",
            link: "tel:+905423982666",
          },
          {
            icon: Mail,
            label: "E-posta",
            value: "papatyavadisi80@gmail.com",
            link: "mailto:papatyavadisi80@gmail.com",
          },
          {
            icon: MapPin,
            label: "Adres",
            value: "Osmaniye Merkez, Osmaniye",
            link: null,
          },
          {
            icon: Clock,
            label: "Çalışma Saatleri",
            value: "Hafta içi 09:00 - 18:00",
            link: null,
          },
        ],
      },
      form: {
        title: "Bize Ulaşın",
        description: "Formu doldurun, en kısa sürede sizinle iletişime geçelim.",
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
            value: "0542 398 26 66",
            link: "tel:+905423982666",
          },
          {
            icon: Mail,
            label: "Email",
            value: "papatyavadisi80@gmail.com",
            link: "mailto:papatyavadisi80@gmail.com",
          },
          {
            icon: MapPin,
            label: "Address",
            value: "Osmaniye Center, Osmaniye",
            link: null,
          },
          {
            icon: Clock,
            label: "Working Hours",
            value: "Weekdays 09:00 - 18:00",
            link: null,
          },
        ],
      },
      form: {
        title: "Get in Touch",
        description: "Fill out the form and we will contact you as soon as possible.",
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

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="animate-fade-up">
                  <h2 className="font-serif text-2xl font-semibold mb-6">{t.info.title}</h2>
                  
                  <div className="space-y-6">
                    {t.info.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 animate-fade-up"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="font-medium hover:text-gold transition-smooth"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Preview */}
                <div className="rounded-xl overflow-hidden border border-border h-64 animate-fade-up" style={{ animationDelay: "400ms" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.39091284824!2d33.87!3d39.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d94e7f0a7a7a7f%3A0x3b0e7f0a7a7a7a7f!2zS8SxxZ_FnmVoaXI!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="bg-background rounded-xl border border-border p-8">
                  <h2 className="font-serif text-2xl font-semibold mb-2">{t.form.title}</h2>
                  <p className="text-muted-foreground mb-8">{t.form.description}</p>
                  
                  <LeadForm language={language} />
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

export default Contact;
