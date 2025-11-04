import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  features: string[];
  language: "tr" | "en";
}

const ProjectCard = ({ image, title, location, features, language }: ProjectCardProps) => {
  const content = {
    tr: { explore: "Keşfet" },
    en: { explore: "Explore" },
  };

  return (
    <Card className="group overflow-hidden border border-border bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full w-full">
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden rounded-t-lg flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
        
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
        <Button 
          variant="outline" 
          className="w-full group/btn justify-between border-[#C7A664] text-[#C7A664] hover:bg-[#C7A664] hover:text-white transition-all mt-auto"
        >
          <span>{content[language].explore}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
