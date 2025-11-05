import { useEffect } from "react";
import Header from "@/components/Header";
import ScrollingBanner from "@/components/ScrollingBanner";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import heroImage from "@/assets/1.png";

interface IndexProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Index = ({ language, onLanguageChange }: IndexProps) => {
  // Preload hero image immediately when page loads - Critical for instant display
  useEffect(() => {
    // Preload public version first (bypasses Vite bundling)
    const img1 = new Image();
    img1.src = "/hero-image.png";
    img1.fetchPriority = "high";
    
    // Also preload bundled version as backup
    const img2 = new Image();
    img2.src = heroImage;
    img2.fetchPriority = "high";
    
    // Force immediate loading
    img1.onload = () => {
      // Image ready and cached
    };
    img2.onload = () => {
      // Backup image ready and cached
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
      <Footer language={language} />
      
      {/* Sticky Buttons */}
      <StickyButtons language={language} />
    </div>
  );
};

export default Index;
