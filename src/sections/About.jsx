import { Code2, Server, Database, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "HTML, CSS, JavaScript, React, Typescript",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Python",
  },
  {
    icon: Database,
    title: "Banco de dados",
    description: "SQL Server, SQL",
  },
  {
    icon: GitBranch,
    title: "Ferramentas",
    description: "Git, GitHub, Scrum, Figma",
  },
];

export const About = () => {
  return (
    <section id="about" className="pt-32 pb-11 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Quem sou eu?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Estudante de Engenharia de Software
              <span className="font-serif italic font-normal text-white">
                {" "}
                apaixonada por tecnologia
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Atualmente, sou estudante de Engenharia de Software na FIAP,
                onde venho desenvolvendo meus conhecimentos e explorando
                diferentes áreas da tecnologia. Minha jornada acadêmica tem sido
                marcada por novos desafios, projetos práticos e muito
                aprendizado.
              </p>
              <p>
                No âmbito profissional, atuo na área de Sistemas, tendo contato
                com ferramentas como TOTVS Protheus e Microsoft SQL Server. Essa
                experiência tem me proporcionado uma visão prática sobre
                sistemas corporativos, bancos de dados e como a tecnologia pode
                contribuir para otimizar processos e solucionar problemas.
              </p>
              <p>
                Fora do ambiente acadêmico e profissional, gosto de estar com
                minha família, viajar, tocar instrumentos musicais e aproveitar
                meu tempo assistindo a filmes e séries. São atividades que me
                permitem criar boas memórias, conhecer novas experiências e
                explorar diferentes histórias.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "The future is scary, but you can't just keep running back to
                the past because it's familiar." -Robin Scherbatsky
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg  font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
