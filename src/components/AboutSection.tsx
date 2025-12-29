import { Code, Database, LineChart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: LineChart,
      title: "Análise de Dados",
      description: "Transformo dados brutos em insights claros e acionáveis",
    },
    {
      icon: Database,
      title: "Integração de Dados",
      description: "Conecto múltiplas fontes para visão 360° do negócio",
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Dashboards interativos e automatizados",
    },
    {
      icon: Lightbulb,
      title: "Estratégia",
      description: "Soluções orientadas a resultados de negócio",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Profissional de BI focado em{" "}
              <span className="text-gradient">resultados</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Estudante de Análise e Desenvolvimento de Sistemas na Uninassau, 
                atualmente no 7º período, com especialização em Power BI e SQL.
              </p>
              <p>
                Minha abordagem combina expertise técnica em ferramentas como 
                Power BI e SQL com uma visão orientada ao negócio, 
                garantindo que cada dashboard entregue valor real.
              </p>
              <p>
                Apaixonado por transformar dados brutos em insights acionáveis 
                que impulsionam a tomada de decisão estratégica.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                <span className="text-sm text-muted-foreground">Localização:</span>
                <span className="ml-2 text-foreground font-medium">Brasil</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                <span className="text-sm text-muted-foreground">Disponível para:</span>
                <span className="ml-2 text-primary font-medium">Projetos</span>
              </div>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glow border-glow rounded-xl p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
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

export default AboutSection;
