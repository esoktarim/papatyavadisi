import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, CheckCircle2, Calendar } from "lucide-react";
import project1 from "@/assets/2.png";
import project2 from "@/assets/3.png";
import project3 from "@/assets/project-3.jpg";

interface ProjectsPageProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const ProjectsPage = ({ language, onLanguageChange }: ProjectsPageProps) => {
  const [activeCategory, setActiveCategory] = useState<"sale" | "completed" | "future">("sale");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const content = {
    tr: {
      title: "PROJELER",
      categories: {
        sale: "Satıştaki Projeler",
        completed: "Tamamlanan Projeler",
        future: "Gelecek Projeler",
      },
      projects: {
        sale: [
          {
            title: "Papatyavadisi - Faz 1",
            location: "Osmaniye Merkez",
            image: project1,
          },
          {
            title: "Papatyavadisi - Faz 2",
            location: "Osmaniye Merkez",
            image: project2,
          },
        ],
        completed: [],
        future: [
          {
            title: "Papatyavadisi - Faz 3",
            location: "Osmaniye Merkez",
            image: project1,
          },
        ],
      },
    },
    en: {
      title: "PROJECTS",
      categories: {
        sale: "Projects for Sale",
        completed: "Completed Projects",
        future: "Future Projects",
      },
      projects: {
        sale: [
          {
            title: "Papatyavadisi - Phase 1",
            location: "Osmaniye Center",
            image: project1,
          },
          {
            title: "Papatyavadisi - Phase 2",
            location: "Osmaniye Center",
            image: project2,
          },
        ],
        completed: [],
        future: [
          {
            title: "Papatyavadisi - Phase 3",
            location: "Osmaniye Center",
            image: project1,
          },
        ],
      },
    },
  };

  const t = content[language];
  const activeProjects = t.projects[activeCategory];

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      {/* Hero Section - Dark Grey */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 pt-32 pb-16 md:pb-24">
        <div className="container-luxury">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 relative z-10">
            {t.title}
          </h1>
          
          {/* Watermark */}
          <div className="absolute top-32 left-0 text-[200px] md:text-[300px] font-bold text-white/5 select-none pointer-events-none">
            PAPATYA
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 relative z-10">
            {/* Satıştaki Projeler */}
            <button
              onClick={() => setActiveCategory("sale")}
              className={`group relative p-6 md:p-8 rounded-xl transition-all duration-300 ${
                activeCategory === "sale"
                  ? "bg-slate-700/90 shadow-2xl scale-105 border-2 border-[#C7A664]/30"
                  : "bg-slate-800/50 hover:bg-slate-800/70 border-2 border-transparent"
              }`}
            >
              <Building2 className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 transition-colors ${
                activeCategory === "sale" ? "text-[#C7A664]" : "text-white"
              }`} />
              <p className={`text-center font-semibold text-sm md:text-base transition-colors ${
                activeCategory === "sale" ? "text-white" : "text-white/80"
              }`}>
                {t.categories.sale}
              </p>
            </button>

            {/* Tamamlanan Projeler */}
            <button
              onClick={() => setActiveCategory("completed")}
              className={`group relative p-6 md:p-8 rounded-xl transition-all duration-300 ${
                activeCategory === "completed"
                  ? "bg-slate-700/90 shadow-2xl scale-105 border-2 border-[#C7A664]/30"
                  : "bg-slate-800/50 hover:bg-slate-800/70 border-2 border-transparent"
              }`}
            >
              <CheckCircle2 className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 transition-colors ${
                activeCategory === "completed" ? "text-[#C7A664]" : "text-white"
              }`} />
              <p className={`text-center font-semibold text-sm md:text-base transition-colors ${
                activeCategory === "completed" ? "text-white" : "text-white/80"
              }`}>
                {t.categories.completed}
              </p>
            </button>

            {/* Gelecek Projeler */}
            <button
              onClick={() => setActiveCategory("future")}
              className={`group relative p-6 md:p-8 rounded-xl transition-all duration-300 ${
                activeCategory === "future"
                  ? "bg-slate-700/90 shadow-2xl scale-105 border-2 border-[#C7A664]/30"
                  : "bg-slate-800/50 hover:bg-slate-800/70 border-2 border-transparent"
              }`}
            >
              <Calendar className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 transition-colors ${
                activeCategory === "future" ? "text-[#C7A664]" : "text-white"
              }`} />
              <p className={`text-center font-semibold text-sm md:text-base transition-colors ${
                activeCategory === "future" ? "text-white" : "text-white/80"
              }`}>
                {t.categories.future}
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid - White Background */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {activeProjects.map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer bg-white"
              >
                {/* Image */}
                <div className="relative h-[450px] md:h-[550px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
                  
                  {/* Watermark Overlay - Shows on other cards when one is hovered */}
                  {hoveredIndex !== null && hoveredIndex !== idx && (
                    <div className="absolute inset-0 bg-black/40 transition-all duration-500 z-20 flex items-center justify-center">
                      <div className="text-white/20 text-[120px] md:text-[150px] font-bold select-none pointer-events-none transform -rotate-12">
                        {idx % 2 === 0 ? "PAPATYA" : "OSMANİYE"}
                      </div>
                    </div>
                  )}
                  
                  {/* Title Overlay */}
                  <div className="absolute top-6 right-6 z-30">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 z-30">
                    <div className="w-7 h-7 rounded-full bg-[#C7A664]/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                    <span className="text-white font-bold text-sm md:text-base drop-shadow-2xl">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {activeProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">
                {language === "tr" ? "Henüz proje bulunmamaktadır." : "No projects available yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default ProjectsPage;
