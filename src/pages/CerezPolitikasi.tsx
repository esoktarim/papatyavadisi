import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CerezPolitikasiProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const CerezPolitikasi = ({ language, onLanguageChange }: CerezPolitikasiProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    tr: {
      title: "Çerez Politikası",
      subtitle: "Cookie Policy",
      lastUpdate: "Son Güncelleme: 2025",
      sections: [
        {
          title: "1. Çerez Nedir?",
          content: "Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin düzgün çalışmasına, kullanıcı deneyimini iyileştirmesine ve site performansını analiz etmemize yardımcı olur.",
        },
        {
          title: "2. Hangi Çerezleri Kullanıyoruz?",
          content: "Web sitemizde zorunlu çerezler, performans çerezleri ve işlevsellik çerezleri kullanılmaktadır. Bu çerezler, web sitesinin temel işlevlerinin çalışması, kullanıcı tercihlerinin hatırlanması ve site performansının analiz edilmesi için gereklidir.",
        },
        {
          title: "3. Çerezlerin Kullanım Amacı",
          content: "Çerezler, web sitesinin düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek, site trafiğini analiz etmek ve kullanıcı tercihlerini hatırlamak amacıyla kullanılmaktadır.",
        },
        {
          title: "4. Çerez Yönetimi",
          content: "Tarayıcı ayarlarınızı kullanarak çerezleri kontrol edebilir, silebilir veya engelleyebilirsiniz. Ancak, bazı çerezler web sitesinin düzgün çalışması için zorunludur ve devre dışı bırakıldığında site işlevselliği etkilenebilir.",
        },
        {
          title: "5. Üçüncü Taraf Çerezler",
          content: "Web sitemizde, analiz ve pazarlama amaçlı üçüncü taraf hizmetler tarafından yerleştirilen çerezler kullanılabilir. Bu çerezler, ilgili üçüncü tarafın gizlilik politikasına tabidir.",
        },
        {
          title: "6. Çerez Tercihlerinizi Değiştirme",
          content: "Tarayıcınızın ayarlar menüsünden çerez tercihlerinizi yönetebilirsiniz. Çoğu tarayıcı, çerezleri kabul etme, reddetme veya bildirim almayı seçenekleri sunar.",
        },
        {
          title: "7. İletişim",
          content: "Çerez politikamız hakkında sorularınız için papatyavadisi80@gmail.com adresine e-posta gönderebilir veya 0542 398 26 66 numaralı telefonu arayabilirsiniz.",
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      subtitle: "Cookie Policy",
      lastUpdate: "Last Update: 2025",
      sections: [
        {
          title: "1. What are Cookies?",
          content: "Cookies are small text files that are saved to your device when you visit a website. Cookies help the website function properly, improve user experience and help us analyze site performance.",
        },
        {
          title: "2. Which Cookies Do We Use?",
          content: "Our website uses necessary cookies, performance cookies and functionality cookies. These cookies are necessary for the basic functions of the website to work, remember user preferences and analyze site performance.",
        },
        {
          title: "3. Purpose of Using Cookies",
          content: "Cookies are used to ensure the proper functioning of the website, improve user experience, analyze site traffic and remember user preferences.",
        },
        {
          title: "4. Cookie Management",
          content: "You can control, delete or block cookies using your browser settings. However, some cookies are necessary for the website to function properly and site functionality may be affected when disabled.",
        },
        {
          title: "5. Third Party Cookies",
          content: "Our website may use cookies placed by third-party services for analysis and marketing purposes. These cookies are subject to the relevant third party's privacy policy.",
        },
        {
          title: "6. Changing Your Cookie Preferences",
          content: "You can manage your cookie preferences from your browser's settings menu. Most browsers offer options to accept, reject or receive notifications about cookies.",
        },
        {
          title: "7. Contact",
          content: "For questions about our cookie policy, you can send an email to papatyavadisi80@gmail.com or call +90 542 398 26 66.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-40 pb-20">
        <div className="container-luxury max-w-4xl">
          <div className="mb-12 text-center animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 mb-2">{t.subtitle}</p>
            <p className="text-sm text-slate-500">{t.lastUpdate}</p>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="font-semibold text-xl text-[#C7A664] mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default CerezPolitikasi;

