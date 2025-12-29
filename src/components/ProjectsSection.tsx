import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, ShoppingCart, Package } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard de Vendas Regional",
      category: "Análise de Vendas",
      icon: BarChart3,
      challenge:
        "A empresa não conseguia visualizar a performance de vendas por região em tempo real, dificultando decisões estratégicas de expansão.",
      solution:
        "Desenvolvi um dashboard interativo em Power BI integrado com SQL Server, com KPIs de vendas, margem e crescimento por região, com atualização automática diária.",
      impact:
        "Redução de 40% no tempo de análise gerencial e identificação de 3 regiões com potencial de crescimento não explorado.",
      tools: ["Power BI", "SQL Server", "DAX"],
      image: null, // Placeholder para o print
    },
    {
      id: 2,
      title: "Gestão de Inventário",
      category: "Operações",
      icon: Package,
      challenge:
        "Falta de visibilidade sobre níveis de estoque causava rupturas frequentes e excesso de capital parado.",
      solution:
        "Criei alertas automáticos de estoque baixo e dashboards de giro de estoque integrados com ERP via API.",
      impact:
        "Redução de 25% em rupturas de estoque e economia de R$ 200k em capital parado.",
      tools: ["Power BI", "Python", "API REST"],
      image: null,
    },
    {
      id: 3,
      title: "Performance E-commerce",
      category: "Digital Analytics",
      icon: ShoppingCart,
      challenge:
        "Dados de vendas online dispersos em múltiplas plataformas sem consolidação para análise.",
      solution:
        "Desenvolvi pipeline ETL que consolida dados de Shopify, Google Analytics e ERP em dashboard unificado.",
      impact:
        "Visão 360° do funil de vendas com aumento de 18% na taxa de conversão após insights de otimização.",
      tools: ["Power BI", "Power Query", "Shopify API"],
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Projetos de <span className="text-gradient">BI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada projeto representa um desafio real resolvido com dados, 
            gerando impacto mensurável para o negócio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow border-glow rounded-2xl overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image/Preview Area */}
                <div className="relative aspect-video lg:aspect-auto bg-muted/50 flex items-center justify-center min-h-[300px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <project.icon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Adicione o print do dashboard aqui
                      </p>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        🎯 O Desafio
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        💡 A Solução
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        📈 Impacto no Negócio
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary border border-border"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Projects CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Quer ver mais projetos ou discutir uma solução personalizada?
          </p>
          <Button variant="glow" size="lg">
            Entre em Contato
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
