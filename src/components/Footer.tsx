import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
        projectMap: "Proje Haritası",
        press: "Basın",
        contact: "İletişim",
      },
      contactInfo: {
        title: "İletişim",
        phone: "0542 398 26 66",
        email: "papatyavadisi80@gmail.com",
        address: "Osmaniye Merkez, Osmaniye",
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
        projectMap: "Project Map",
        press: "Press & News",
        contact: "Contact",
      },
      contactInfo: {
        title: "Contact",
        phone: "0542 398 26 66",
        email: "papatyavadisi80@gmail.com",
        address: "Osmaniye Merkez, Osmaniye",
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
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="/" className="font-serif text-2xl font-semibold inline-block hover:text-accent transition-smooth">
                Papatya<span className="text-accent">vadisi</span>
              </a>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{t.tagline}</p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-smooth"
                      aria-label={`Social link ${idx + 1}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="font-semibold mb-4">{t.menu.corporate}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.menu.corporate}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.menu.projects}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.menu.projectMap}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.menu.press}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.menu.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">{t.contactInfo.title}</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:+90${t.contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-smooth">
                    {t.contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href={`mailto:${t.contactInfo.email}`} className="hover:text-accent transition-smooth">
                    {t.contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span>{t.contactInfo.address}</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">{t.legal.privacy}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.legal.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-smooth">
                    {t.legal.cookies}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
