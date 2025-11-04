import React from "react";

interface ScrollingBannerProps {
  language: "tr" | "en";
}

const ScrollingBanner = ({ language }: ScrollingBannerProps) => {
  const content = {
    tr: "Tek ve çift katlı villalar, 24 ay %0 faiz fırsatıyla. Sosyal alanlar ve doğal güzelliklerle çevrili modern yaşam.",
    en: "Single and double-story villas with 24-month 0% interest. Modern living surrounded by social amenities and natural beauty.",
  } as const;

  const text = content[language];

  return (
    <div className="fixed top-28 md:top-32 left-0 right-0 z-40 bg-[#C7A664] text-white py-2.5 overflow-hidden border-b border-[#B89654]/30 shadow-sm">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          <span className="text-sm md:text-base font-medium px-8">{text}</span>
          <span className="text-sm md:text-base font-medium text-white/50">•</span>
          <span className="text-sm md:text-base font-medium px-8">{text}</span>
          <span className="text-sm md:text-base font-medium text-white/50">•</span>
          <span className="text-sm md:text-base font-medium px-8">{text}</span>
          <span className="text-sm md:text-base font-medium text-white/50">•</span>
          <span className="text-sm md:text-base font-medium px-8">{text}</span>
          <span className="text-sm md:text-base font-medium text-white/50">•</span>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;

