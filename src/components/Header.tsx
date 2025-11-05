import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Phone, ChevronDown, Home } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };

    if (isProjectsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectsDropdownOpen]);

  const menuItems = {
    tr: [
      { label: "Kurumsal", path: "/kurumsal", hasDropdown: false },
      { label: "Projeler", path: "/projeler", hasDropdown: true },
      { label: "Lokasyonlar", path: "/lokasyonlar", hasDropdown: false },
      { label: "İletişim", path: "/iletisim", hasDropdown: false },
    ],
    en: [
      { label: "Corporate", path: "/kurumsal", hasDropdown: false },
      { label: "Projects", path: "/projeler", hasDropdown: true },
      { label: "Locations", path: "/lokasyonlar", hasDropdown: false },
      { label: "Contact", path: "/iletisim", hasDropdown: false },
    ],
  };

  const projectOptions = {
    tr: [
      { label: "Tek Katlı Villa", path: "/ev/tek-katli-villa" },
      { label: "Çift Katlı Villa", path: "/ev/cift-katli-villa" },
    ],
    en: [
      { label: "Single-Story Villa", path: "/ev/tek-katli-villa" },
      { label: "Two-Story Villa", path: "/ev/cift-katli-villa" },
    ],
  };

  // Header always has light background as per design
  const headerBg = "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm";
  const isHomePage = location.pathname === "/";

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
            {/* Home Icon - Only show on non-home pages */}
            {!isHomePage && (
              <a
                href="/"
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-[#C7A664] text-slate-600 hover:text-[#C7A664] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#C7A664]/20"
                aria-label={language === "tr" ? "Ana Sayfa" : "Home"}
                title={language === "tr" ? "Ana Sayfa" : "Home"}
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C7A664]/0 to-[#C7A664]/0 group-hover:from-[#C7A664]/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </a>
            )}
            {menuItems[language].map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.path} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                      className="flex items-center gap-1 text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProjectsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {projectOptions[language].map((option) => (
                          <a
                            key={option.path}
                            href={option.path}
                            onClick={() => setIsProjectsDropdownOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-colors"
                          >
                            {option.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
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
