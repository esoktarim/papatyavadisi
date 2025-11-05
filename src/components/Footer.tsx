import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  language: "tr" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    tr: {
      tagline: "Doğanın kalbinde modern yaşam",
      menu: {
        corporate: "Kurumsal",
        projects: "Projeler",
        locations: "Lokasyonlar",
        contact: "İletişim",
      },
      contactInfo: {
        title: "İletişim",
        phone: "0536 647 48 10",
        email: "papatyavadisi80@gmail.com",
        address: "Kadirli, Osmaniye",
      },
      legal: {
        privacy: "KVKK",
        cookies: "Çerez Politikası",
      },
      campaign: "24 ay %0 faiz fırsatı devam ediyor",
      copyright: "© 2025 Papatya Vadisi. Tüm hakları saklıdır.",
    },
    en: {
      tagline: "Lives that add value to the future",
      menu: {
        corporate: "Corporate",
        projects: "Projects",
        locations: "Locations",
        contact: "Contact",
      },
      contactInfo: {
        title: "Contact",
        phone: "0536 647 48 10",
        email: "papatyavadisi80@gmail.com",
        address: "Kadirli, Osmaniye",
      },
      legal: {
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
      },
      campaign: "0% interest opportunity until December 31st",
      copyright: "© 2025 Papatya Vadisi. All rights reserved.",
    },
  };

  const t = content[language];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581860677205&locale=tr_TR", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/papatyavadisi2025?igsh=MWFyMDZqcXExenM0Mg==", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1A1E28] via-[#252A35] to-[#1A1E28] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7A664] rounded-full blur-3xl"></div>
      </div>
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A664] to-transparent"></div>

      {/* Main Footer */}
      <div className="relative z-10 section-padding">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-5">
              <div>
                <a href="/" className="font-serif text-3xl font-light inline-block group">
                  <span className="text-white group-hover:text-[#C7A664] transition-colors duration-300">Papatya</span>
                  <span className="text-[#C7A664] group-hover:text-white transition-colors duration-300">vadisi</span>
                </a>
                <div className="h-[1px] w-16 bg-gradient-to-r from-[#C7A664] to-transparent mt-2"></div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light tracking-wide">{t.tagline}</p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                      className="group relative w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-[#C7A664] hover:border-[#C7A664] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#C7A664]/20"
                      aria-label={social.label || `Social link ${idx + 1}`}
                    >
                      <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="font-light text-lg mb-6 text-white relative pb-3">
                {language === "tr" ? "Menü" : "Menu"}
                <span className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-[#C7A664] to-transparent"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/kurumsal" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.menu.corporate}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projeler" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.menu.projects}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/lokasyonlar" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.menu.locations}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/iletisim" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.menu.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-light text-lg mb-6 text-white relative pb-3">
                {t.contactInfo.title}
                <span className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-[#C7A664] to-transparent"></span>
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C7A664]/20 group-hover:border-[#C7A664]/50 transition-all duration-300">
                    <Phone className="w-4 h-4 text-[#C7A664] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <a 
                    href={`tel:+90${t.contactInfo.phone.replace(/\s/g, "")}`} 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide"
                  >
                    {t.contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C7A664]/20 group-hover:border-[#C7A664]/50 transition-all duration-300">
                    <Mail className="w-4 h-4 text-[#C7A664] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <a 
                    href={`mailto:${t.contactInfo.email}`} 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide break-all"
                  >
                    {t.contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C7A664]/20 group-hover:border-[#C7A664]/50 transition-all duration-300 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C7A664] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-white/70 font-light tracking-wide leading-relaxed">{t.contactInfo.address}</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-light text-lg mb-6 text-white relative pb-3">
                {language === "tr" ? "Yasal" : "Legal"}
                <span className="absolute bottom-0 left-0 h-[1px] w-12 bg-gradient-to-r from-[#C7A664] to-transparent"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/kvkk" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.legal.privacy}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cerez-politikasi" 
                    className="text-white/70 hover:text-[#C7A664] transition-all duration-300 font-light tracking-wide group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#C7A664] group-hover:w-4 transition-all duration-300"></span>
                    {t.legal.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-10 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-[#C7A664]/50"></div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
            </div>
            <p className="text-white/50 text-xs font-light tracking-wide">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
