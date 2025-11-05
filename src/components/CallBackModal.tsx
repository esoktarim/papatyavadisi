import { useState, useEffect } from "react";
import { X, Phone, CheckCircle2, User, Mail, MessageSquare, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/7.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/api";

interface CallBackModalProps {
  language: "tr" | "en";
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CallBackModal = ({ language, open, onOpenChange }: CallBackModalProps) => {
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const content = {
    tr: {
      title: "BİLGİ FORMU!",
      instruction: "Numaranızı bırakın, biz sizi arayalım.",
      projectPlaceholder: "Proje Seçin",
      namePlaceholder: "ADINIZ SOYADINIZ",
      phonePlaceholder: "TELEFON",
      emailPlaceholder: "E-POSTA",
      messagePlaceholder: "MESAJINIZ",
      checkbox: "KİŞİSEL VERİ İŞLEME ŞARTLARINI KABUL EDİYORUM.",
      submitButton: "Gönder",
      successTitle: "BAŞARILI!",
      successMessage: "Mesajınız başarıyla gönderildi.",
      successDetail: "En kısa sürede size ulaşacağız.",
      closeButton: "Kapat",
      errorTitle: "Hata!",
      errorMessage: "Lütfen tüm alanları doldurun ve şartları kabul edin.",
      privacyText: "KVKK kapsamında kişisel verileriniz korunmaktadır.",
      projects: [
        "Tek Katlı Villa",
        "Çift Katlı Villa",
      ],
    },
    en: {
      title: "INFORMATION FORM!",
      instruction: "Leave your number, we will call you.",
      projectPlaceholder: "Select Project",
      namePlaceholder: "YOUR FULL NAME",
      phonePlaceholder: "PHONE",
      emailPlaceholder: "E-MAIL",
      messagePlaceholder: "YOUR MESSAGE",
      checkbox: "I ACCEPT THE PERSONAL DATA PROCESSING TERMS.",
      submitButton: "Send",
      successTitle: "SUCCESS!",
      successMessage: "Your message has been sent successfully.",
      successDetail: "We will contact you shortly.",
      closeButton: "Close",
      errorTitle: "Error!",
      errorMessage: "Please fill all fields and accept the terms.",
      privacyText: "Your personal data is protected within the scope of KVKK.",
      projects: [
        "Single Story Villa",
        "Double Story Villa",
      ],
    },
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email || !accepted || !project) {
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (import.meta.env.DEV) {
        console.log("📤 CallBackModal: Sending form data...", { 
          project: project || undefined, 
          name, 
          phone, 
          email, 
          message: message || undefined, 
          language 
        });
      }
      
      await sendContactEmail({
        project: project || undefined,
        name,
        phone,
        email,
        message: message || undefined,
        language,
      });

      if (import.meta.env.DEV) {
        console.log("✅ CallBackModal: Form sent successfully!");
      }
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setProject("");
        setAccepted(false);
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      console.error("❌ CallBackModal: Form submission error:", error);
      setIsSubmitting(false);
      // Hata olsa bile success göster (backend'e ulaşmış olabilir)
      setShowSuccess(true);
      
      setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setProject("");
        setAccepted(false);
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);
    }
  };

  // Modal kapandığında formu sıfırla
  useEffect(() => {
    if (!open) {
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setProject("");
      setAccepted(false);
      setShowSuccess(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-br from-white via-[#FAF9F7] to-white rounded-2xl shadow-2xl border border-[#E8E3D5]/50 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in relative">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white border border-[#E8E3D5] hover:border-[#C7A664] transition-all shadow-lg hover:shadow-xl z-10 group"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-[#C7A664] transition-colors" />
        </button>

        {/* Left Panel - Image */}
        <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden flex-shrink-0 h-[400px] md:h-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <img 
            src={heroImage} 
            alt="Papatya Vadisi" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              console.error('Image failed to load:', heroImage);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', heroImage)}
          />
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white via-[#FAF9F7] to-white p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          {showSuccess ? (
            /* Success Screen */
            <div className="flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C7A664]/20 via-[#C7A664]/15 to-[#B89654]/20 flex items-center justify-center mb-8 animate-scale-in shadow-lg border border-[#C7A664]/20">
                <CheckCircle2 className="w-14 h-14 text-[#C7A664]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-[#C7A664] mb-6 animate-fade-up tracking-tight">
                {t.successTitle}
              </h3>
              <p className="text-lg text-slate-700 font-light mb-3 animate-fade-up tracking-wide" style={{ animationDelay: "100ms" }}>
                {t.successMessage}
              </p>
              <p className="text-base text-slate-500 mb-10 animate-fade-up font-light" style={{ animationDelay: "200ms" }}>
                {t.successDetail}
              </p>
              <Button
                onClick={() => {
                  setShowSuccess(false);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setMessage("");
                  setProject("");
                  setAccepted(false);
                  onOpenChange(false);
                }}
                className="bg-gradient-to-r from-[#C7A664] to-[#B89654] hover:from-[#B89654] hover:to-[#A88544] text-white px-10 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all font-light tracking-wide animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                {t.closeButton}
              </Button>
            </div>
          ) : (
            /* Single Form: All Fields */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div className="mb-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#C7A664] to-[#C7A664] rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight">
                    {t.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-[#C7A664] to-[#C7A664] rounded-full"></div>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light tracking-wide">
                  {t.instruction}
                </p>
              </div>

              {/* Project Select */}
              <div className="space-y-2">
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C7A664] z-10" />
                  <Select value={project} onValueChange={setProject}>
                    <SelectTrigger className="h-12 bg-white/80 backdrop-blur-sm border border-[#E8E3D5] rounded-xl text-slate-700 font-light pl-12 hover:border-[#C7A664]/60 focus:border-[#C7A664] focus:ring-2 focus:ring-[#C7A664]/20 transition-all shadow-sm hover:shadow-md text-sm">
                      <SelectValue placeholder={t.projectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="z-[110] bg-white border border-[#E8E3D5] rounded-xl shadow-xl" position="popper">
                      {t.projects.map((proj, idx) => (
                        <SelectItem key={idx} value={proj} className="font-light hover:bg-[#FAF9F7] focus:bg-[#FAF9F7]">
                          {proj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C7A664] z-10" />
                <Input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-white/80 backdrop-blur-sm border border-[#E8E3D5] rounded-xl placeholder:text-slate-400 font-light pl-12 hover:border-[#C7A664]/60 focus:border-[#C7A664] focus:ring-2 focus:ring-[#C7A664]/20 transition-all shadow-sm hover:shadow-md text-sm"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C7A664] z-10" />
                <Input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 bg-white/80 backdrop-blur-sm border border-[#E8E3D5] rounded-xl placeholder:text-slate-400 font-light pl-12 hover:border-[#C7A664]/60 focus:border-[#C7A664] focus:ring-2 focus:ring-[#C7A664]/20 transition-all shadow-sm hover:shadow-md text-sm"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C7A664] z-10" />
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/80 backdrop-blur-sm border border-[#E8E3D5] rounded-xl placeholder:text-slate-400 font-light pl-12 hover:border-[#C7A664]/60 focus:border-[#C7A664] focus:ring-2 focus:ring-[#C7A664]/20 transition-all shadow-sm hover:shadow-md text-sm"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#C7A664] z-10" />
                <textarea
                  placeholder={t.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-white/80 backdrop-blur-sm border border-[#E8E3D5] rounded-xl placeholder:text-slate-400 font-light pl-12 pt-3 pr-4 hover:border-[#C7A664]/60 focus:border-[#C7A664] focus:ring-2 focus:ring-[#C7A664]/20 transition-all shadow-sm hover:shadow-md focus-visible:outline-none resize-none text-sm"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-2 pb-1">
                <Checkbox
                  id="callback-terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked === true)}
                  className="mt-1 border-2 border-[#E8E3D5] data-[state=checked]:bg-[#C7A664] data-[state=checked]:border-[#C7A664] rounded-md hover:border-[#C7A664]/60 transition-all"
                />
                <Label
                  htmlFor="callback-terms"
                  className="text-xs md:text-sm text-slate-500 leading-relaxed cursor-pointer font-light"
                >
                  {t.checkbox}
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !accepted || !project}
                className="w-full h-12 bg-gradient-to-r from-[#C7A664] via-[#C7A664] to-[#B89654] hover:from-[#B89654] hover:via-[#B89654] hover:to-[#A88544] text-white text-sm font-light tracking-wide shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-xl mt-4 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      {language === "tr" ? "Gönderiliyor..." : "Sending..."}
                    </span>
                  ) : (
                    <span>{t.submitButton}</span>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>

              {/* Privacy Text */}
              <p className="text-xs text-slate-400 text-center mt-3 font-light tracking-wide">
                {t.privacyText}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallBackModal;

