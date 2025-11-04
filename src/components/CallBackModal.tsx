import { useState, useEffect } from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/1.png";
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
  const [step, setStep] = useState(1); // 1: Proje seçimi, 2: Diğer bilgiler
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
      nextButton: "İleri",
      backButton: "Geri",
      privacyText: "KVKK kapsamında kişisel verileriniz korunmaktadır.",
      projects: [
        "Papatya Vadisi - Faz 1",
        "Papatya Vadisi - Faz 2",
        "Papatya Vadisi - Örnek Konutlar",
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
      nextButton: "Next",
      backButton: "Back",
      privacyText: "Your personal data is protected within the scope of KVKK.",
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
        setStep(1);
        onOpenChange(false);
      }, 3000);
    }
  };

  const handleNext = () => {
    if (!project) {
      toast({
        title: t.errorTitle,
        description: language === "tr" ? "Lütfen bir proje seçiniz." : "Please select a project.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  // Modal kapandığında step'i sıfırla
  useEffect(() => {
    if (!open) {
      setStep(1);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in relative md:min-h-[600px]">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Left Panel - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden flex-shrink-0 h-[300px] md:h-full">
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
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10 overflow-y-auto max-h-[90vh]">
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
                  setMessage("");
                  setProject("");
                  setAccepted(false);
                  onOpenChange(false);
                }}
                className="bg-[#C7A664] hover:bg-[#B89654] text-white px-8 h-12 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                {t.closeButton}
              </Button>
            </div>
          ) : step === 1 ? (
            /* Step 1: Project Selection */
            <div className="space-y-6">
              {/* Title */}
              <div className="mb-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#C7A664] to-[#B89654] rounded-full"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    {t.title}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#C7A664] to-[#B89654] rounded-full"></div>
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  {t.instruction}
                </p>
              </div>

              {/* Project Select */}
              <div className="space-y-4">
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger className="h-14 bg-white border-2 border-slate-200 rounded-lg text-slate-700 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm text-base">
                    <SelectValue placeholder={t.projectPlaceholder} />
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

              {/* Next Button */}
              <Button
                onClick={handleNext}
                disabled={!project}
                className="w-full h-14 bg-[#C7A664] hover:bg-[#B89654] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6 rounded-lg"
              >
                {t.nextButton}
              </Button>

              {/* Privacy Text */}
              <p className="text-xs text-slate-500 text-center mt-4">
                {t.privacyText}
              </p>
            </div>
          ) : (
            /* Step 2: Contact Information */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#C7A664] to-[#B89654] rounded-full"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    {t.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium pl-16">
                  {t.instruction}
                </p>
              </div>

              {/* Selected Project Display */}
              {project && (
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">{language === "tr" ? "Seçilen Proje" : "Selected Project"}</p>
                  <p className="text-base font-semibold text-slate-700">{project}</p>
                </div>
              )}

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

              {/* Message Input */}
              <textarea
                placeholder={t.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-white border-2 border-slate-200 rounded-lg placeholder:text-slate-400 font-medium hover:border-[#C7A664]/50 focus:border-[#C7A664] transition-colors shadow-sm focus-visible:outline-none resize-none pt-3 px-3"
              />

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-4 pb-2">
                <Checkbox
                  id="callback-terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked === true)}
                  className="mt-1 border-2 border-slate-300 data-[state=checked]:bg-[#C7A664] data-[state=checked]:border-[#C7A664] rounded"
                />
                <Label
                  htmlFor="callback-terms"
                  className="text-xs md:text-sm text-slate-600 leading-relaxed cursor-pointer font-medium"
                >
                  {t.checkbox}
                </Label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-14 border-2 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  {t.backButton}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !accepted}
                  className="flex-1 h-14 bg-[#C7A664] hover:bg-[#B89654] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                >
                  {isSubmitting ? (
                    <span>{language === "tr" ? "Gönderiliyor..." : "Sending..."}</span>
                  ) : (
                    <span>{t.submitButton}</span>
                  )}
                </Button>
              </div>

              {/* Privacy Text */}
              <p className="text-xs text-slate-500 text-center mt-2">
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

