import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface KVKKProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const KVKK = ({ language, onLanguageChange }: KVKKProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    tr: {
      title: "Kişisel Verilerin Korunması (KVKK)",
      subtitle: "Aydınlatma Metni",
      lastUpdate: "Son Güncelleme: 2025",
      sections: [
        {
          title: "1. Veri Sorumlusu",
          content: "Papatya Vadisi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla, kişisel verileriniz aşağıda belirtilen kapsamda işlenmektedir.",
        },
        {
          title: "2. İşlenen Kişisel Veriler",
          content: "İletişim formları, web sitesi ziyaretleri ve diğer iletişim kanalları aracılığıyla toplanan ad, soyad, telefon numarası, e-posta adresi, adres bilgisi ve diğer iletişim bilgileri işlenmektedir.",
        },
        {
          title: "3. Kişisel Verilerin İşlenme Amaçları",
          content: "Kişisel verileriniz, projelerimiz hakkında bilgi vermek, iletişim kurmak, müşteri hizmetleri sunmak, yasal yükümlülükleri yerine getirmek ve hizmet kalitesini artırmak amacıyla işlenmektedir.",
        },
        {
          title: "4. Kişisel Verilerin Aktarımı",
          content: "Kişisel verileriniz, yasal yükümlülüklerin yerine getirilmesi ve hizmet sunumu için gerekli olan durumlarda, yasal düzenlemelere uygun olarak ilgili kurum ve kuruluşlara aktarılabilir.",
        },
        {
          title: "5. Kişisel Verilerin Korunması",
          content: "Kişisel verileriniz, teknik ve idari güvenlik önlemleri alınarak korunmaktadır. Verilerinize yetkisiz erişim, kayıp, değiştirme veya ifşa edilmesi durumlarına karşı gerekli önlemler alınmaktadır.",
        },
        {
          title: "6. Haklarınız",
          content: "KVKK kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, yasal olmayan sebeplerle işlenmişse silinmesini veya yok edilmesini isteme, düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme, işlenmesine itiraz etme ve zarara uğraması halinde zararın giderilmesini talep etme haklarınız bulunmaktadır.",
        },
        {
          title: "7. İletişim",
          content: "KVKK kapsamındaki haklarınızı kullanmak için papatyavadisi80@gmail.com adresine e-posta gönderebilir veya 0536 647 48 10 numaralı telefonu arayabilirsiniz.",
        },
      ],
    },
    en: {
      title: "Personal Data Protection (GDPR/KVKK)",
      subtitle: "Privacy Notice",
      lastUpdate: "Last Update: 2025",
      sections: [
        {
          title: "1. Data Controller",
          content: "As Papatya Vadisi, we process your personal data as a data controller within the scope of the Personal Data Protection Law No. 6698 (KVKK).",
        },
        {
          title: "2. Processed Personal Data",
          content: "Personal data including name, surname, phone number, email address, address information and other contact information collected through contact forms, website visits and other communication channels are processed.",
        },
        {
          title: "3. Purposes of Processing Personal Data",
          content: "Your personal data is processed for the purposes of providing information about our projects, establishing communication, providing customer services, fulfilling legal obligations and improving service quality.",
        },
        {
          title: "4. Transfer of Personal Data",
          content: "Your personal data may be transferred to relevant institutions and organizations in accordance with legal regulations when necessary for the fulfillment of legal obligations and service delivery.",
        },
        {
          title: "5. Protection of Personal Data",
          content: "Your personal data is protected by taking technical and administrative security measures. Necessary measures are taken against unauthorized access, loss, modification or disclosure of your data.",
        },
        {
          title: "6. Your Rights",
          content: "Within the scope of KVKK, you have the right to learn whether your personal data is processed, to request information if processed, to learn the purpose of processing and whether they are used in accordance with their purpose, to know the third parties to whom they are transferred in the country or abroad, to request correction if processed incompletely or incorrectly, to request deletion or destruction if processed unlawfully, to request notification of correction, deletion and destruction operations to third parties to whom they are transferred, to object to processing and to demand compensation for damages if you suffer damage.",
        },
        {
          title: "7. Contact",
          content: "To exercise your rights under KVKK, you can send an email to papatyavadisi80@gmail.com or call +90 536 647 48 10.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="container-luxury max-w-4xl">
          <div className="mb-12 text-center animate-fade-up">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
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

export default KVKK;

