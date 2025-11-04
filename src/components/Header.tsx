import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface HeaderProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projeler";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    tr: [
      { label: "Kurumsal", path: "/kurumsal" },
      { label: "Projeler", path: "/projeler" },
      { label: "Lokasyonlar", path: "/lokasyonlar" },
      { label: "İletişim", path: "/iletisim" },
    ],
    en: [
      { label: "Corporate", path: "/kurumsal" },
      { label: "Projects", path: "/projeler" },
      { label: "Locations", path: "/lokasyonlar" },
      { label: "Contact", path: "/iletisim" },
    ],
  };

  // Header always has light background as per design
  const headerBg = "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <a href="/" className="flex items-center transition-smooth hover:opacity-80">
            <img 
              src={logo} 
              alt="Papatya Vadisi" 
              className="h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </a>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems[language].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: Language + Phone */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 gap-1 z-50">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onLanguageChange("tr");
                }}
                className={`font-semibold text-sm transition-all duration-200 px-3 py-1.5 rounded-md min-w-[40px] ${
                  language === "tr" 
                    ? "bg-[#C7A664] text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                TR
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onLanguageChange("en");
                }}
                className={`font-semibold text-sm transition-all duration-200 px-3 py-1.5 rounded-md min-w-[40px] ${
                  language === "en" 
                    ? "bg-[#C7A664] text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                EN
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+905423982666"
              className="hidden md:flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0542 398 26 66</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
