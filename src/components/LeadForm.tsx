import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/api";

interface LeadFormProps {
  language: "tr" | "en";
}

const LeadForm = ({ language }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [project, setProject] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    tr: {
      title: "Sizi Arayalım",
      subtitle: "Projelerimiz hakkında detaylı bilgi almak için iletişime geçin",
      projectLabel: "Proje Seçin",
      projectPlaceholder: "Bir proje seçiniz",
      phoneLabel: "Telefon Numaranız",
      phonePlaceholder: "+90 (5__) ___ __ __",
      nextButton: "İleri",
      submitButton: "Gönder",
      backButton: "Geri",
      kvkk: "KVKK kapsamında kişisel verileriniz korunmaktadır.",
      successTitle: "Başarılı!",
      successMessage: "En kısa sürede size ulaşacağız.",
      errorTitle: "Hata!",
      errorMessage: "Bir hata oluştu. Lütfen tekrar deneyin.",
      projects: [
        "Tek Katlı Villa",
        "Çift Katlı Villa",
      ],
    },
    en: {
      title: "We'll Call You",
      subtitle: "Get in touch for detailed information about our projects",
      projectLabel: "Select Project",
      projectPlaceholder: "Select a project",
      phoneLabel: "Your Phone Number",
      phonePlaceholder: "+90 (5__) ___ __ __",
      nextButton: "Next",
      submitButton: "Submit",
      backButton: "Back",
      kvkk: "Your personal data is protected under GDPR.",
      successTitle: "Success!",
      successMessage: "We will contact you shortly.",
      errorTitle: "Error!",
      errorMessage: "An error occurred. Please try again.",
      projects: [
        "Single Story Villa",
        "Double Story Villa",
      ],
    },
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !project) {
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
        console.log("📤 LeadForm: Sending form data...", { project, phone, language });
      }
      
      await sendContactEmail({
        project,
        phone,
        language,
      });

      if (import.meta.env.DEV) {
        console.log("✅ LeadForm: Form sent successfully!");
      }

      toast({
        title: t.successTitle,
        description: t.successMessage,
      });

      // Reset form
      setStep(1);
      setProject("");
      setPhone("");
    } catch (error) {
      console.error("❌ LeadForm: Form submission error:", error);
      toast({
        title: t.errorTitle,
        description: t.errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury max-w-xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="heading-2 mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project">{t.projectLabel}</Label>
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger id="project" className="w-full">
                    <SelectValue placeholder={t.projectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="z-50">
                    {t.projects.map((proj, idx) => (
                      <SelectItem key={idx} value={proj}>
                        {proj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="button"
                variant="hero"
                size="xl"
                className="w-full bg-[#C7A664] text-white hover:bg-[#B89654]"
                onClick={() => setStep(2)}
                disabled={!project}
              >
                {t.nextButton}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">{t.phoneLabel}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="xl"
                  className="flex-1"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                >
                  {t.backButton}
                </Button>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="flex-1 bg-[#C7A664] text-white hover:bg-[#B89654]"
                  disabled={!phone || isSubmitting}
                >
                  {isSubmitting ? (language === "tr" ? "Gönderiliyor..." : "Sending...") : t.submitButton}
                </Button>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center">{t.kvkk}</p>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
