import React from "react";

interface ScrollingBannerProps {
  language: "tr" | "en";
}

const ScrollingBanner = ({ language }: ScrollingBannerProps) => {
  const content = {
    tr: {
      sentence1: "Sosyal alanlar ve doğal güzelliklerle çevrili modern yaşam.",
      sentence2: "Tek ve çift katlı villalar, 24 ay %0 faiz fırsatıyla.",
    },
    en: {
      sentence1: "Modern living surrounded by social amenities and natural beauty.",
      sentence2: "Single and double-story villas with 24-month 0% interest.",
    },
  } as const;

  const texts = content[language];

  const sequence = [
    { type: "text" as const, value: texts.sentence1 },
    { type: "bullet" as const },
    { type: "text" as const, value: texts.sentence2 },
    { type: "bullet" as const },
  ];

  return (
    <div className="hidden md:block fixed top-32 md:top-36 left-0 right-0 z-40 bg-[#C7A664] text-white py-4 md:py-5 overflow-hidden border-b border-[#B89654]/30 shadow-sm">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap will-change-transform">
          {[0, 1, 2].map((iteration) => (
            <div
              key={iteration}
              className="flex items-center"
              aria-hidden={iteration > 0}
            >
              {sequence.map((item, idx) =>
                item.type === "text" ? (
                  <span
                    key={`${iteration}-text-${idx}`}
                    className="text-base md:text-lg font-medium px-10"
                  >
                    {item.value}
                  </span>
                ) : (
                  <span
                    key={`${iteration}-bullet-${idx}`}
                    className="text-base md:text-lg font-medium text-white/50 mx-5"
                  >
                    •
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
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

