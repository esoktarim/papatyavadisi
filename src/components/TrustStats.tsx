import { Building2, Award, Users, TrendingUp } from "lucide-react";

interface TrustStatsProps {
  language: "tr" | "en";
}

const TrustStats = ({ language }: TrustStatsProps) => {
  const content = {
    tr: {
      title: "Güvenilir Deneyim",
      subtitle: "Yarım asırı aşkın tecrübe ile sektörde öncüyüz",
      stats: [
        { icon: Building2, value: "50+", label: "Yıl Deneyim" },
        { icon: TrendingUp, value: "2M+", label: "m² İnşaat Alanı" },
        { icon: Users, value: "15K+", label: "Mutlu Aile" },
        { icon: Award, value: "98%", label: "Zamanında Teslim" },
      ],
    },
    en: {
      title: "Trusted Experience",
      subtitle: "Leading the industry with over half a century of experience",
      stats: [
        { icon: Building2, value: "50+", label: "Years Experience" },
        { icon: TrendingUp, value: "2M+", label: "m² Construction Area" },
        { icon: Users, value: "15K+", label: "Happy Families" },
        { icon: Award, value: "98%", label: "On-Time Delivery" },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-2 mb-4">{t.title}</h2>
          <p className="text-lg text-primary-foreground/80">{t.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-5xl font-bold">{stat.value}</p>
                  <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
