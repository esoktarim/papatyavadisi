import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/11.png";
import CallBackModal from "@/components/CallBackModal";

interface HeroProps {
  language: "tr" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const [callBackOpen, setCallBackOpen] = useState(false);
  const navigate = useNavigate();

  // Aggressive preload hero image immediately - Critical for instant display
  useEffect(() => {
    // Preload bundled version multiple times to ensure it's cached
    for (let i = 0; i < 5; i++) {
      const img = new Image();
      img.src = heroImage;
      img.fetchPriority = "high";
    }
    
    // Also preload public version as backup
    const publicImg = new Image();
    publicImg.src = "/hero-image.png";
    publicImg.fetchPriority = "high";
  }, [heroImage]);

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
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: '145px' }}>
      {/* Background Image - Use img tag directly for instant, non-progressive loading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Architecture"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          style={{
            willChange: 'auto',
            imageRendering: 'auto'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Try public version as fallback
            if (!target.src.includes('/hero-image.png')) {
              target.src = "/hero-image.png";
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-left text-white -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-4xl italic animate-fade-in-up">
          <div className="block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>{t.title[0]}</div>
          <div className="block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>{t.title[1]}</div>
        </h1>
      </div>

      {/* CTAs - At bottom where scroll indicator was */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 sm:gap-4 animate-fade-in">
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
