import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/3 left-[15%] opacity-20 animate-float">
        <BarChart3 size={48} className="text-primary" />
      </div>
      <div className="absolute top-1/2 right-[10%] opacity-20 animate-float delay-200">
        <Database size={40} className="text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-[20%] opacity-20 animate-float delay-400">
        <TrendingUp size={36} className="text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Especialista em Business Intelligence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Transformando{" "}
            <span className="text-gradient">dados</span>
            <br />
            em decisões estratégicas
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-200">
            Desenvolvo dashboards e soluções de BI que revelam insights 
            acionáveis e impulsionam resultados de negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl">
              Ver Projetos
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              Entre em Contato
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up opacity-0 delay-400">
            {[
              { value: "10+", label: "Projetos de BI" },
              { value: "50+", label: "Dashboards Criados" },
              { value: "5+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
