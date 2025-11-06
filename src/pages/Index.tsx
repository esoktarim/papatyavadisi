import { useEffect } from "react";
import Header from "@/components/Header";
import ScrollingBanner from "@/components/ScrollingBanner";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import heroImage from "@/assets/11.png";

interface IndexProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Index = ({ language, onLanguageChange }: IndexProps) => {
  // Aggressive preload hero image immediately when page loads - Critical for instant display
  useEffect(() => {
    // Preload bundled version (11.png) multiple times for aggressive caching
    for (let i = 0; i < 3; i++) {
      const img = new Image();
      img.src = heroImage;
      img.fetchPriority = "high";
    }
    
    // Also preload public version as backup
    const publicImg = new Image();
    publicImg.src = "/hero-image.png";
    publicImg.fetchPriority = "high";
  }, [heroImage]);

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <ScrollingBanner language={language} />
      <Hero language={language} />
      <AboutSection language={language} />
      <Projects language={language} />
      <FeaturedProject language={language} />
      <Footer language={language} />
      
      {/* Sticky Buttons */}
      <StickyButtons language={language} />
    </div>
  );
};

export default Index;
