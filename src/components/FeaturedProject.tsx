import { MapPin, Train, Plane } from "lucide-react";
import project1 from "@/assets/8.png";

interface FeaturedProjectProps {
  language: "tr" | "en";
}

const FeaturedProject = ({ language }: FeaturedProjectProps) => {
  const content = {
    tr: {
      tag: "Öne Çıkan Proje",
      title: "Papatya Vadisi Evleri",
      description:
        "Osmaniye'nin serin Bağdaş Yaylası'nda, sedir ormanları ve temiz hava ile şehir konforunu buluşturan seçkin konutlar. Modern mimari, geniş teraslar ve doğa odaklı planlama ile sessiz, güvenli ve ayrıcalıklı bir yaşam deneyimi.",
      cta: "Ödeme Planını Gör",
      transportation: "Ulaşım",
      distances: [
        { icon: MapPin, label: "Kadirli İlçesi", distance: "43 km" },
        { icon: Train, label: "Toprakkale Tren İstasyonu", distance: "1.5 saat" },
        { icon: Plane, label: "Çukurova Havalimanı", distance: "2,5 saat" },
      ],
    },
    en: {
      tag: "Featured Project",
      title: "Papatya Vadisi Evleri",
      description:
        "Select residences on the cool Bagdaş Plateau of Osmaniye, blending cedar forest air with city comfort. Modern architecture, wide terraces, and nature-oriented planning for a quiet, safe, and exclusive lifestyle.",
      cta: "View Payment Plan",
      transportation: "Transportation",
      distances: [
        { icon: MapPin, label: "Kadirli District", distance: "43 km" },
        { icon: Train, label: "Toprakkale Train Station", distance: "1.5 hours" },
        { icon: Plane, label: "Çukurova Airport", distance: "2.5 hours" },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-2xl" />
            <img
              src={project1}
              alt={t.title}
              className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              decoding="async"
            />
            <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm">
              {t.tag}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="heading-2 mb-4">{t.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                {t.transportation}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {t.distances.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
                    >
                      <Icon className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.distance}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
