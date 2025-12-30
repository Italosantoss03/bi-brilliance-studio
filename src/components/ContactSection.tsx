import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%C3%ADtalo-santos-269b242a4/",
      username: "Ítalo Santos",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Italosantoss03",
      username: "@Italosantoss03",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:Italosantos57053@gmail.com",
      username: "Italosantos57053@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Vamos transformar seus{" "}
            <span className="text-gradient">dados</span> em resultados?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Estou disponível para projetos de BI, consultoria e oportunidades 
            de trabalho. Entre em contato e vamos conversar!
          </p>

          {/* Social Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="card-glow border-glow rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <social.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{social.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {social.username}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl">
            <Send className="mr-2 w-5 h-5" />
            Enviar Mensagem
          </Button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default ContactSection;
