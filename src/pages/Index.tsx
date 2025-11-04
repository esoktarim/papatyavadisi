import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import ScrollingBanner from "@/components/ScrollingBanner";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import TrustStats from "@/components/TrustStats";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

// Lazy load ContactModal
const ContactModal = lazy(() => import("@/components/ContactModal"));

interface IndexProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Index = ({ language, onLanguageChange }: IndexProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Check if modal was shown in last 24-48 hours
    const modalData = localStorage.getItem("papatyavadisi-modal-seen");
    if (modalData) {
      try {
        const { timestamp } = JSON.parse(modalData);
        const now = Date.now();
        const hoursPassed = (now - timestamp) / (1000 * 60 * 60);
        
        // 36 saat (24-48 arası ortalama) geçmediyse modal'ı gösterme
        if (hoursPassed < 36) {
          return;
        }
      } catch {
        // Eski format (string), yeni formata geç
        localStorage.removeItem("papatyavadisi-modal-seen");
      }
    }

    let opened = false;

    // Time-based trigger: 6-8 saniye sonra
    const timeTimer = setTimeout(() => {
      if (!opened) {
        setModalOpen(true);
        opened = true;
      }
    }, 7000); // 7 saniye (6-8 arası ortalama)

    // Scroll-based trigger: %30-40 scroll
    const handleScroll = () => {
      if (opened) return;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      if (scrollPercentage >= 30 && scrollPercentage <= 40) {
        setModalOpen(true);
        opened = true;
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <ScrollingBanner language={language} />
      <Hero language={language} />
      <AboutSection language={language} />
      <Projects language={language} />
      <FeaturedProject language={language} />
      <TrustStats language={language} />
      <LeadForm language={language} />
      <Footer language={language} />
      
      {/* Sticky Buttons */}
      <StickyButtons language={language} />
      
      <Suspense fallback={null}>
        {modalOpen && (
          <ContactModal
            language={language}
            open={modalOpen}
            onOpenChange={(open) => {
              setModalOpen(open);
              if (!open) {
                // Modal kapatıldığında timestamp kaydet (36 saat bastır)
                localStorage.setItem("papatyavadisi-modal-seen", JSON.stringify({
                  timestamp: Date.now()
                }));
              }
            }}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Index;
