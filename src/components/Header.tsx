import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Phone, ChevronDown, Home, Menu, X } from "lucide-react";

interface HeaderProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const Header = ({ language }: HeaderProps) => {
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Preload logo immediately for instant display
  useEffect(() => {
    const logoPath = "/logo.png";
    const logoImg = new Image();
    logoImg.src = logoPath;
    logoImg.fetchPriority = "high";
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        if (mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(event.target as Node)) {
          return;
        }
        setIsMobileMenuOpen(false);
        setIsMobileProjectsDropdownOpen(false);
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

  const isHomePage = location.pathname === "/";
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-28 md:h-32 lg:h-36">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
            <img 
              src="/logo.png" 
              alt="Papatya Vadisi" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
              width="200"
              height="80"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </a>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Home Icon - Only show on non-home pages */}
            {!isHomePage && (
              <a
                href="/"
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 hover:border-[#C7A664]/40 text-slate-600 hover:text-[#C7A664] transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-[#C7A664]/10"
                aria-label={language === "tr" ? "Ana Sayfa" : "Home"}
                title={language === "tr" ? "Ana Sayfa" : "Home"}
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
              </a>
            )}
            {menuItems[language].map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.path} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                      className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-300 ${
                        isProjectsDropdownOpen
                          ? 'text-[#C7A664] bg-[#C7A664]/8'
                          : 'text-slate-800 hover:text-[#C7A664] hover:bg-slate-50/80'
                      }`}
                    >
                      <span className="relative">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                      {/* Active indicator */}
                      {isProjectsDropdownOpen && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#C7A664] rounded-full"></span>
                      )}
                    </button>
                    {isProjectsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-60 bg-white/98 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200/60 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C7A664]/5 to-transparent pointer-events-none"></div>
                        {projectOptions[language].map((option) => (
                          <a
                            key={option.path}
                            href={option.path}
                            onClick={() => setIsProjectsDropdownOpen(false)}
                            className="relative block px-6 py-3 text-[14px] font-medium text-slate-700 hover:text-[#C7A664] hover:bg-[#C7A664]/5 transition-all duration-200 group"
                          >
                            <span className="relative z-10">{option.label}</span>
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C7A664] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center"></span>
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
                  className={`group relative flex items-center px-5 py-3 rounded-xl text-[15px] font-semibold tracking-tight transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#C7A664]'
                      : 'text-slate-800 hover:text-[#C7A664] hover:bg-slate-50/80'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline animation */}
                  <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-[#C7A664] rounded-full transition-all duration-300 ${
                    isActive(item.path) ? 'w-10' : 'w-0 group-hover:w-10'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Right Side: Mobile Menu Button & Phone */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Phone */}
            <a
              href="tel:+905366474810"
              className="hidden md:flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#C7A664] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0536 647 48 10</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-[#C7A664] text-slate-700 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={2.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed top-28 left-0 right-0 bottom-0 bg-white overflow-y-auto z-[60] shadow-lg"
        >
            <div className="container-luxury py-6">
              <nav className="flex flex-col gap-1">
              {/* Home Icon - Only show on non-home pages */}
              {!isHomePage && (
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive('/')
                      ? 'bg-[#C7A664]/10 text-[#C7A664]'
                      : 'hover:bg-slate-50 hover:text-[#C7A664] text-slate-700'
                  }`}
                >
                  <Home className="w-5 h-5" strokeWidth={2.5} />
                  <span className="font-semibold text-sm">{language === "tr" ? "Ana Sayfa" : "Home"}</span>
                </a>
              )}
              {menuItems[language].map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.path} className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsMobileProjectsDropdownOpen(!isMobileProjectsDropdownOpen);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 w-full text-left ${
                          isMobileProjectsDropdownOpen
                            ? 'bg-[#C7A664]/10 text-[#C7A664]'
                            : 'hover:bg-slate-50 hover:text-[#C7A664] text-slate-700'
                        }`}
                      >
                        <span className="font-semibold text-sm">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileProjectsDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                      </button>
                      {isMobileProjectsDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-0.5 transition-all duration-200">
                          {projectOptions[language].map((option) => (
                            <a
                              key={option.path}
                              href={option.path}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileProjectsDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block px-4 py-2.5 rounded-lg hover:bg-[#C7A664]/10 hover:text-[#C7A664] transition-all duration-200 text-slate-600 text-sm font-medium"
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                      isActive(item.path)
                        ? 'bg-[#C7A664]/10 text-[#C7A664]'
                        : 'hover:bg-slate-50 hover:text-[#C7A664] text-slate-700'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              {/* Mobile Phone */}
              <a
                href="tel:+905366474810"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#C7A664] to-[#B89654] text-white hover:from-[#B89654] hover:to-[#A88544] transition-all duration-300 font-semibold text-sm mt-2 shadow-lg shadow-[#C7A664]/25"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
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
