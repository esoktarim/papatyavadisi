import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/1.png";
import CallBackModal from "@/components/CallBackModal";

interface HeroProps {
  language: "tr" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const [callBackOpen, setCallBackOpen] = useState(false);
  const navigate = useNavigate();

  // Preload hero image immediately
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = heroImage;
    img.fetchPriority = "high";

    // Also add preload link
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroImage;
    if (link.setAttribute) {
      link.setAttribute("fetchpriority", "high");
    }
    document.head.appendChild(link);

    return () => {
      const existingLink = document.querySelector(`link[href="${heroImage}"]`);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const content = {
    tr: {
      title: ["Doğanın Kalbinde", "Hayalinizdeki Yaşam"],
      subtitle: "Tek ve çift katlı villalar, 24 ay %0 faiz fırsatıyla. Sosyal alanlar ve doğal güzelliklerle çevrili modern yaşam.",
      primaryCta: "Projeleri İncele",
      secondaryCta: "Sizi Arayalım",
      scrollText: "Keşfet",
    },
    en: {
      title: ["Your Dream Life", "in the Heart of Nature"],
      subtitle: "Single and double-story villas with 24-month 0% interest. Modern living surrounded by social amenities and natural beauty.",
      primaryCta: "Explore Projects",
      secondaryCta: "Call Me Back",
      scrollText: "Discover",
    },
  };

  const t = content[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: '145px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Architecture"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-left text-white -mt-56 md:-mt-64 ml-8 md:ml-12">
        <h1 className="heading-1 mb-8 max-w-4xl italic animate-fade-in-up">
          <div className="block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>{t.title[0]}</div>
          <div className="block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>{t.title[1]}</div>
        </h1>
      </div>

      {/* CTAs - At bottom where scroll indicator was */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 animate-fade-in">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="xl" 
            className="min-w-[200px] bg-[#C7A664] text-white hover:bg-[#B89654] border-none"
            onClick={() => navigate("/projeler")}
          >
            {t.primaryCta}
          </Button>
          <Button 
            variant="gold" 
            size="xl" 
            className="min-w-[200px] bg-transparent border-2 border-[#C7A664] text-white hover:bg-[#C7A664]"
            onClick={() => setCallBackOpen(true)}
          >
            {t.secondaryCta}
          </Button>
        </div>
      </div>

      {/* CallBack Modal */}
      <CallBackModal
        language={language}
        open={callBackOpen}
        onOpenChange={setCallBackOpen}
      />
    </section>
  );
};

export default Hero;
