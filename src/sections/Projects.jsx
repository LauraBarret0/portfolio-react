import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  // {
  //   title: "ENEM Focus",
  //   description:
  //     "Plataforma de estudos para organizar simulados, acompanhar o desempenho e otimizar a preparação para o ENEM.",
  //   image: "/projects/project1.png",
  //   tags: ["React", "TypeScript", "Node.js"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Task Manager",
  //   description:
  //     "Aplicação para gerenciar tarefas, definir prioridades e acompanhar o progresso das atividades diárias.",
  //   image: "/projects/project2.png",
  //   tags: ["React", "JavaScript", "CSS"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "Portfólio Pessoal",
    description:
      "Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e minha trajetória na Engenharia de Software.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "EmailJS" ],
    link: "https://portfolio-laurabarreto.vercel.app/",
    github: "https://github.com/LauraBarret0/portfolio-react",
  },
  {
    title: "Caires & Barreto",
    description:
      "Landing page institucional desenvolvida para o escritório Caires & Barreto Advogados Associados, com o objetivo de apresentar o escritório, suas áreas de atuação, seus sócios e facilitar o contato com potenciais clientes.",
    image: "/projects/project4.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://cairesebarreto.vercel.app/",
    github: "https://github.com/LauraBarret0/cairesebarreto",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          {/* <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projetos em destaque
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projetos em
            <span className="font-serif italic font-normal text-white">
              {" "}
              destaque.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Uma seleção dos meus trabalhos mais recentes, reunindo projetos pessoais e acadêmicos.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton >
                <a href="https://github.com/LauraBarret0" target="_blank">View All Projects</a>
                <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
