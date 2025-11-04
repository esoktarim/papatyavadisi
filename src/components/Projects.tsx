import ProjectCard from "./ProjectCard";
import project1 from "@/assets/2.png";
import project2 from "@/assets/3.png";

interface ProjectsProps {
  language: "tr" | "en";
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    tr: {
      title: "Satıştaki Projeler",
      subtitle: "Doğanın içinde modern villa yaşamı",
      projects: [
        {
          title: "Çift Katlı Villa",
          location: "Osmaniye Merkez",
          features: [
            "3+1",
            "144 m²",
            "Arsa büyüklüğü: 440 m²",
            "24 ay %0 faiz fırsatı",
          ],
        },
        {
          title: "Tek Katlı Villa",
          location: "Osmaniye Merkez",
          features: [
            "3+1",
            "144 m²",
            "Arsa büyüklüğü: 407 m²",
            "24 ay %0 faiz fırsatı",
          ],
        },
      ],
    },
    en: {
      title: "Projects for Sale",
      subtitle: "Modern villa life surrounded by nature",
      projects: [
        {
          title: "Two-Story Villa",
          location: "Osmaniye Center",
          features: [
            "3+1",
            "144 m²",
            "Land size: 440 m²",
            "24 months 0% interest",
          ],
        },
        {
          title: "Single-Story Villa",
          location: "Osmaniye Center",
          features: [
            "3+1",
            "144 m²",
            "Land size: 407 m²",
            "24 months 0% interest",
          ],
        },
      ],
    },
  };

  const t = content[language];
  const images = [project1, project2];

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-2 mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {t.projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`animate-fade-up flex w-full max-w-md ${idx === 1 ? 'ml-4 md:ml-8' : ''}`} 
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <ProjectCard
                image={images[idx]}
                title={project.title}
                location={project.location}
                features={project.features}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
