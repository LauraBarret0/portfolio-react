import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Github",
  "Python",
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/LauraBarret0", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/laurabarret0/", label: "LinkedIn" },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/90 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">Practice.</span>
                <br />
                Love.
                <br />
                <span className="font-serif italic font-normal text-white">
                  Creativity.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Olá! Sou Laura Barreto, estudante de Engenharia de Software pela FIAP e estou
                construindo minha trajetória no universo da tecnologia.
              </p>
            </div>
            {/* CTA's */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="cursor-pointer">
                <Button size="lg" className="cursor-pointer">
                  Vamos Conversar <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              {/* <AnimatedBorderButton>
                {" "}
                <Download className="w-5 h-5" /> Download CV
              </AnimatedBorderButton> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Onde me encontrar: </span>
              {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                target="_blank" 
              >
                <social.icon className="w-5 h-5" />
              </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animatefade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tecnologias que utilizo
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
