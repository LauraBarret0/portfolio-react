import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/LauraBarret0", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/laurabarret0/", label: "LinkedIn" },
];
const footerLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              LB<span>.</span>{" "}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Laura Barreto. All rights reserved.
            </p>
          </div>

          {/* Linnks */}
          <nav className=" flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p=2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                target="_blank" 
               
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
