import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Phone, ChevronDown, Home, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isProjectsDropdownOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectsDropdownOpen, isMobileMenuOpen]);

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
        <nav className="flex items-center justify-between h-32 md:h-36">
          {/* Logo */}
          <a href="/" className="flex items-center transition-smooth hover:opacity-80">
            <img 
              src={logo} 
              alt="Papatya Vadisi" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain"
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

          {/* Right Side: Mobile Menu Button & Phone */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-[#C7A664] text-slate-700 hover:text-white transition-all duration-300"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Phone */}
            <a
              href="tel:+905366474810"
              className="hidden md:flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0536 647 48 10</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed top-32 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-50 animate-in slide-in-from-top duration-300"
        >
          <div className="container-luxury py-4">
            <nav className="flex flex-col gap-2">
              {/* Home Icon - Only show on non-home pages */}
              {!isHomePage && (
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-colors text-slate-700"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">{language === "tr" ? "Ana Sayfa" : "Home"}</span>
                </a>
              )}
              {menuItems[language].map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.path} className="flex flex-col">
                      <button
                        onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                        className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-colors text-slate-700 font-medium"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProjectsDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {projectOptions[language].map((option) => (
                            <a
                              key={option.path}
                              href={option.path}
                              onClick={() => {
                                setIsProjectsDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block px-4 py-2 rounded-lg hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-colors text-slate-600 text-sm"
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
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-colors text-slate-700 font-medium"
                  >
                    {item.label}
                  </a>
                );
              })}
              {/* Mobile Phone */}
              <a
                href="tel:+905366474810"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#C7A664] text-white hover:bg-[#B89654] transition-colors font-medium mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>0536 647 48 10</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
