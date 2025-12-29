const SkillsSection = () => {
  const skills = [
    { name: "Power BI", level: 95, category: "Visualização" },
    { name: "SQL", level: 90, category: "Dados" },
    { name: "Python", level: 75, category: "Programação" },
    { name: "Excel Avançado", level: 95, category: "Análise" },
    { name: "DAX", level: 85, category: "Fórmulas" },
    { name: "ETL/Power Query", level: 88, category: "Transformação" },
  ];

  const certifications = [
    {
      title: "Microsoft Power BI PL-300",
      issuer: "Microsoft",
      year: "2024",
    },
    {
      title: "SQL for Data Science",
      issuer: "Coursera",
      year: "2023",
    },
    {
      title: "Data Analytics Professional",
      issuer: "Google",
      year: "2023",
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Habilidades & Certificações
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Stack <span className="text-gradient">Técnico</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8">
              Competências Técnicas
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-display font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8">
              Certificações
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-glow border-glow rounded-xl p-6 flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-primary text-xl">
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education placeholder */}
            <div className="mt-8 p-6 rounded-xl border border-dashed border-border">
              <h4 className="font-semibold mb-2">Formação Acadêmica</h4>
              <p className="text-sm text-muted-foreground">
                Adicione sua graduação e especializações aqui
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
