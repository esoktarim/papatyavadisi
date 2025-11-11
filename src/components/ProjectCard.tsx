import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  features: string[];
  id: string;
  language: "tr" | "en";
}

const ProjectCard = ({ image, title, location, features, id, language }: ProjectCardProps) => {
  const content = {
    tr: { explore: "Detayları Gör" },
    en: { explore: "View Details" },
  };

  return (
    <Link
      to={`/ev/${id}`}
      className="group block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A664]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-[22px]"
      aria-label={`${title} ${content[language].explore}`}
    >
      <Card className="overflow-hidden border border-border bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] flex flex-col h-full w-full cursor-pointer rounded-[22px]">
      {/* Image */}
        <div className="relative h-64 md:h-72 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
        
        {/* Location Tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm z-10">
          <MapPin className="w-4 h-4 text-[#C7A664]" />
          <span className="text-sm font-medium text-foreground">{location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-white flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-semibold text-foreground">{title}</h3>
        
        {/* Features */}
        <ul className="space-y-2.5 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="text-[#C7A664] mt-1 font-bold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
          <div className="mt-auto w-full flex items-center justify-between rounded-full border border-[#C7A664] px-4 py-2.5 text-[#C7A664] transition-all duration-300 group-hover:bg-[#C7A664] group-hover:text-white">
            <span className="text-sm font-semibold tracking-[0.02em]">
              {content[language].explore}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
      </div>
    </Card>
    </Link>
  );
};

export default ProjectCard;
