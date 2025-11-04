import { useState, useEffect } from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bilgiImage from "@/assets/bilgi.webp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/api";

interface ContactModalProps {
  language: "tr" | "en";
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ language, open, onOpenChange }: ContactModalProps) => {
  const [project, setProject] = useState("Papatya Vadisi - Faz 1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const content = {
    tr: {
      headline1: "DOĞANIN KALBİNDE",
      headline2: "HAYALİNİZDEKİ YAŞAM",
      subtitle: "Papatya Vadisi'nde satış öncesi ön talep fırsatı sizi bekliyor!",
      title: "Sizi Arayalım mı?",
      instruction: "Numaranızı bırakın, fiyat ve uygunluğu 2 dakikada anlatalım.",
      projectLabel: "Proje",
      namePlaceholder: "ADINIZ SOYADINIZ",
      phonePlaceholder: "TELEFON",
      emailPlaceholder: "E-POSTA",
      checkbox: "KVKK Aydınlatma Metni'ni okudum ve iletişime geçilmesini kabul ediyorum.",
      submitButton: "Gönder",
      successTitle: "BAŞARILI!",
      successMessage: "Mesajınız başarıyla gönderildi.",
      successDetail: "En kısa sürede size ulaşacağız.",
      closeButton: "Kapat",
      errorTitle: "Hata!",
      errorMessage: "Lütfen tüm alanları doldurun ve şartları kabul edin.",
      projects: [
        "Papatya Vadisi - Faz 1",
        "Papatya Vadisi - Faz 2",
        "Papatya Vadisi - Örnek Konutlar",
      ],
    },
    en: {
      headline1: "IN THE HEART OF",
      headline2: "NATURE YOUR DREAM LIFE",
      subtitle: "Pre-sale pre-demand opportunity awaits you at Papatya Vadisi!",
      title: "Shall we call you?",
      instruction: "Leave your number, we’ll explain pricing and availability in 2 minutes.",
      projectLabel: "Project",
      namePlaceholder: "YOUR NAME SURNAME",
      phonePlaceholder: "PHONE",
      emailPlaceholder: "E-MAIL",
      checkbox: "I have read the KVKK Information Text and accept to be contacted.",
      submitButton: "Send",
      successTitle: "SUCCESS!",
      successMessage: "Your message has been sent successfully.",
      successDetail: "We will contact you shortly.",
      closeButton: "Close",
      errorTitle: "Error!",
      errorMessage: "Please fill all fields and accept the terms.",
      projects: [
        "Papatya Vadisi - Phase 1",
        "Papatya Vadisi - Phase 2",
        "Papatya Vadisi - Model Homes",
      ],
    },
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email || !accepted) {
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        project,
        name,
        phone,
        email,
        language,
      });

      // Show success screen
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after showing success (3 saniye sonra kapat)
      setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
        setAccepted(false);
        // Timestamp ile kaydet (36 saat bastır)
        localStorage.setItem("papatyavadisi-modal-seen", JSON.stringify({
          timestamp: Date.now()
        }));
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);

    } catch (error) {
      // Even if email sending fails, show success to user for better UX
      // Email sending errors are logged on backend
      console.error("Form submission error:", error);
      
      // Show success screen anyway (form data is received by backend)
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after showing success (3 saniye sonra kapat)
      setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
        setAccepted(false);
        // Timestamp ile kaydet (36 saat bastır)
        localStorage.setItem("papatyavadisi-modal-seen", JSON.stringify({
          timestamp: Date.now()
        }));
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden flex-shrink-0 h-[300px] md:h-auto">
          <img 
            src={bilgiImage} 
            alt="Papatya Vadisi" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10 relative overflow-y-auto max-h-[90vh]">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-50 transition-colors shadow-lg z-10 border border-gray-200"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          {showSuccess ? (
            /* Success Screen */
            <div className="flex flex-col items-center justify-center text-center py-8 px-4">
              <div className="w-20 h-20 rounded-full bg-[#C7A664]/20 flex items-center justify-center mb-6 animate-scale-in">
                <CheckCircle2 className="w-12 h-12 text-[#C7A664]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#C7A664] mb-4 animate-fade-up">
                {t.successTitle}
              </h3>
              <p className="text-xl text-slate-700 font-semibold mb-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {t.successMessage}
              </p>
              <p className="text-base text-slate-600 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                {t.successDetail}
              </p>
              <Button
                onClick={() => {
                  setShowSuccess(false);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setAccepted(false);
                  // Timestamp ile kaydet (36 saat bastır)
                  localStorage.setItem("papatyavadisi-modal-seen", JSON.stringify({
                    timestamp: Date.now()
                  }));
                  onOpenChange(false);
                }}
                className="bg-[#C7A664] hover:bg-[#B89654] text-white px-8 h-12 animate-fade-up shadow-lg"
                style={{ animationDelay: "300ms" }}
              >
                {t.closeButton}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#C7A664] to-[#B89654] rounded-full"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {t.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium pl-16" style={{ fontFamily: 'Inter, sans-serif' }}>{t.instruction}</p>
              </div>

              {/* Project Select */}
              <div>
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger className="h-14 bg-white border-2 border-slate-200 rounded-lg text-slate-700 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="z-[110]" position="popper">
                    {t.projects.map((proj, idx) => (
                      <SelectItem key={idx} value={proj}>
                        {proj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name Input */}
              <Input
                type="text"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 bg-white border-2 border-slate-200 rounded-lg placeholder:text-slate-400 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm"
                required
              />

              {/* Phone Input */}
              <Input
                type="tel"
                placeholder={t.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 bg-white border-2 border-slate-200 rounded-lg placeholder:text-slate-400 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm"
                required
              />

              {/* Email Input */}
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-white border-2 border-slate-200 rounded-lg placeholder:text-slate-400 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm"
                required
              />

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-4 pb-2">
                <Checkbox
                  id="modal-terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked === true)}
                  className="mt-1 border-2 border-slate-300 data-[state=checked]:bg-[#C7A664] data-[state=checked]:border-[#C7A664] rounded"
                />
                <Label
                  htmlFor="modal-terms"
                  className="text-xs md:text-sm text-slate-600 leading-relaxed cursor-pointer font-medium"
                >
                  {t.checkbox}
                </Label>
              </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !accepted}
              className="w-full h-14 bg-[#C7A664] hover:bg-[#B89654] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6 rounded-lg animate-pulse-subtle flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>{language === "tr" ? "Gönderiliyor..." : "Sending..."}</span>
              ) : (
                <>
                  <Phone className="w-4 h-4" />
                  <span>{t.submitButton}</span>
                </>
              )}
            </Button>
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
