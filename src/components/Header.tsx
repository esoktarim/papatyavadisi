import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Phone,
  ChevronDown,
  Home,
  Menu,
  X,
  Building2,
  Layers,
  Map,
  Mail,
} from "lucide-react";

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
  const mobileMenuRef = useRef<HTMLElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef<string>("");

  // Preload logo immediately for instant display
  useEffect(() => {
    const logoPath = "/logo.webp";
    const logoImg = new Image();
    logoImg.src = logoPath;
    logoImg.fetchPriority = "high";
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsProjectsDropdownOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        if (mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(target)) {
          return;
        }
        setIsMobileMenuOpen(false);
        setIsMobileProjectsDropdownOpen(false);
      }
    };

    if (isProjectsDropdownOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isProjectsDropdownOpen, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const body = document.body;
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
    previousBodyOverflowRef.current = body.style.overflow;
    body.style.overflow = "hidden";

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    let focusFrame: number | null = null;

    const focusFirstElement = () => {
      const focusableElements = mobileNavRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    };

    focusFrame = window.requestAnimationFrame(focusFirstElement);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMobileProjectsDropdownOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusableNodeList = mobileNavRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
        if (!focusableNodeList || focusableNodeList.length === 0) {
          return;
        }

        const focusableElements = Array.from(focusableNodeList).filter(
          (element) =>
            !element.hasAttribute("disabled") &&
            element.getAttribute("aria-hidden") !== "true"
        );

        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const isShiftPressed = event.shiftKey;
        const activeElement = document.activeElement as HTMLElement | null;

        if (!isShiftPressed && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        } else if (isShiftPressed && activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (focusFrame) {
        window.cancelAnimationFrame(focusFrame);
      }
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflowRef.current || "";
      previouslyFocusedElementRef.current?.focus?.();
    };
  }, [isMobileMenuOpen]);

  const menuItems = {
    tr: [
      { label: "Kurumsal", path: "/kurumsal", hasDropdown: false, icon: Building2 },
      { label: "Projeler", path: "/projeler", hasDropdown: true, icon: Layers },
      { label: "Lokasyonlar", path: "/lokasyonlar", hasDropdown: false, icon: Map },
      { label: "İletişim", path: "/iletisim", hasDropdown: false, icon: Mail },
    ],
    en: [
      { label: "Corporate", path: "/kurumsal", hasDropdown: false, icon: Building2 },
      { label: "Projects", path: "/projeler", hasDropdown: true, icon: Layers },
      { label: "Locations", path: "/lokasyonlar", hasDropdown: false, icon: Map },
      { label: "Contact", path: "/iletisim", hasDropdown: false, icon: Mail },
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
  const mobileItemBaseClasses =
    "relative flex items-center min-h-[48px] px-5 text-[15px] font-medium leading-[1.5] tracking-[0.01em] text-[#3A2E1F] transition-all duration-200 active:bg-[#F5E7CC]/70 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A664]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-[85] bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-28 md:h-32 lg:h-36">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
            <img 
              src="/logo.webp" 
              alt="Papatya Vadisi" 
              className="h-[70px] sm:h-[84px] md:h-[96px] lg:h-[108px] xl:h-[120px] w-auto object-contain transition-all duration-300 group-hover:opacity-90"
              width="215"
              height="88"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </a>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
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
                      className={`group relative flex items-center gap-2 px-5 py-3 rounded-xl text-[16px] font-semibold tracking-tight transition-all duration-300 ${
                        isProjectsDropdownOpen
                          ? 'text-[#C7A664] bg-[#C7A664]/12 shadow-inner shadow-[#C7A664]/10'
                          : 'text-[#2F2412] hover:text-[#C7A664]'
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
                      <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl shadow-2xl shadow-slate-900/15 border border-[#DCC9A4]/70 border-t-4 border-t-[#C7A664] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 transition-transform transform origin-top bg-gradient-to-br from-white via-white to-[#F8F0E1] backdrop-blur-md">
                        {projectOptions[language].map((option) => (
                          <a
                            key={option.path}
                            href={option.path}
                            onClick={() => setIsProjectsDropdownOpen(false)}
                            className="relative block px-6 py-3 text-[14px] font-medium text-[#3B2F1F] hover:text-[#C7A664] hover:bg-white/55 transition-all duration-300 group tracking-tight"
                          >
                            <span className="relative z-10">{option.label}</span>
                            <span className="absolute left-6 right-6 bottom-1 h-px bg-[#E8D9BD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                  className={`group relative flex items-center px-5 py-3 rounded-xl text-[16px] font-semibold tracking-tight transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#C7A664]'
                      : 'text-[#2F2412] hover:text-[#C7A664]'
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
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] text-white px-5 py-2.5 text-sm font-semibold tracking-tight shadow-md shadow-[#C7A664]/30 hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>0536 647 48 10</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group md:hidden relative z-[95] w-11 h-11 flex items-center justify-center rounded-2xl border border-[#293345]/80 bg-gradient-to-br from-[#111726] via-[#1C2435] to-[#0B1019] text-[#F8ECD4] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_18px_28px_rgba(12,16,25,0.55)] hover:shadow-[0_22px_34px_rgba(15,20,30,0.6)] after:absolute after:inset-[1.5px] after:rounded-[18px] after:bg-white/6 after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              aria-haspopup="dialog"
              aria-label="Menu"
            >
              <Menu className="relative w-5 h-5 text-[#F8ECD4] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FFF6DD]" strokeWidth={2.5} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-slate-900/15 backdrop-blur-[2px] transition-opacity"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileProjectsDropdownOpen(false);
            }}
            aria-hidden="true"
          />
          <div className="absolute top-28 left-0 right-0 bottom-0 overflow-y-auto">
            <div className="container-luxury py-6 h-full">
              <div
                id="mobile-navigation-panel"
                role="dialog"
                aria-modal="true"
                aria-label={language === "tr" ? "Mobil menü" : "Mobile menu"}
                ref={(node) => {
                  mobileMenuRef.current = node;
                  mobileNavRef.current = node;
                }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6D7B8]/80 bg-white shadow-xl shadow-slate-900/12"
              >
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E6D7B8]/70 bg-white/95 backdrop-blur-sm">
                  <span className="text-[15px] font-semibold tracking-[0.04em] text-[#3A2E1F]">
                    {language === "tr" ? "Menü" : "Menu"}
                  </span>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileProjectsDropdownOpen(false);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D7B8]/70 bg-white text-[#3A2E1F] shadow-sm shadow-slate-900/10 transition-all duration-200 hover:bg-[#F7EEDB] hover:text-[#C7A664] active:scale-95"
                    aria-label={language === "tr" ? "Menüyü kapat" : "Close menu"}
                  >
                    <X className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
                <nav
                  className="flex flex-col"
                  aria-label={language === "tr" ? "Ana menü" : "Main menu"}
                >
                  {/* Home Icon - Only show on non-home pages */}
                  {!isHomePage && (
                    <a
                      href="/"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileProjectsDropdownOpen(false);
                      }}
                      className={`${mobileItemBaseClasses} gap-3 border-b border-[#F0E2C6]/70 hover:bg-[#FCF6EA] hover:text-[#C7A664]`}
                    >
                      <Home className="w-5 h-5 text-[#C7A664]" strokeWidth={2.4} />
                      <span>{language === "tr" ? "Ana Sayfa" : "Home"}</span>
                    </a>
                  )}
                  {menuItems[language].map((item) => {
                    const Icon = item.icon;
                    if (item.hasDropdown) {
                      return (
                        <div key={item.path} className="flex flex-col border-b border-[#F0E2C6]/70">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setIsMobileProjectsDropdownOpen(!isMobileProjectsDropdownOpen);
                            }}
                            className={`${mobileItemBaseClasses} gap-3 justify-between hover:bg-[#FCF6EA] hover:text-[#C7A664]`}
                            aria-expanded={isMobileProjectsDropdownOpen}
                            aria-controls="mobile-projects-group"
                          >
                            <span className="flex items-center gap-3">
                              <Icon className="w-5 h-5 text-[#C7A664]" strokeWidth={2.4} />
                              <span>{item.label}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#3A2E1F] transition-transform duration-200 ${isMobileProjectsDropdownOpen ? "rotate-180" : ""}`}
                              strokeWidth={2.6}
                            />
                          </button>
                          <div
                            id="mobile-projects-group"
                            role="group"
                            aria-hidden={!isMobileProjectsDropdownOpen}
                            className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out bg-[#FBF4E5] ${isMobileProjectsDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                          >
                            <div className="py-1.5 space-y-0.5">
                              {projectOptions[language].map((option) => (
                                <a
                                  key={option.path}
                                  href={option.path}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMobileProjectsDropdownOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="relative block pl-11 pr-5 py-3 text-[14px] font-medium tracking-[0.01em] text-[#3A2E1F] transition-all duration-200 hover:bg-white/70 hover:text-[#C7A664]"
                                >
                                  <span className="absolute left-6 top-2.5 bottom-2.5 w-px bg-[#E6D7B8]" aria-hidden="true" />
                                  <span className="absolute left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C7A664]" aria-hidden="true" />
                                  <span>{option.label}</span>
                                </a>
                              ))}
                            </div>
                          </div>
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
                          setIsMobileProjectsDropdownOpen(false);
                        }}
                        className={`${mobileItemBaseClasses} gap-3 border-b border-[#F0E2C6]/70 hover:bg-[#FCF6EA] hover:text-[#C7A664] ${isActive(item.path) ? "bg-[#F7EEDB] text-[#C7A664]" : ""}`}
                      >
                        <Icon className="w-5 h-5 text-[#C7A664]" strokeWidth={2.4} />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-auto border-t border-[#E6D7B8]/80 bg-white">
                  <a
                    href="tel:+905366474810"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] text-white font-semibold tracking-[0.02em] transition-all duration-300 hover:from-[#B89654] hover:via-[#A88544] hover:to-[#99753A] hover:-translate-y-0.5 active:scale-[0.99]"
                    style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
                  >
                    <Phone className="w-5 h-5" strokeWidth={2.4} />
                    <span className="uppercase text-[13px] tracking-[0.18em] opacity-80">Ara</span>
                    <span className="text-[16px] font-semibold tracking-wide">0536 647 48 10</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
