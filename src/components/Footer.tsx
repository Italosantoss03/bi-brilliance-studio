const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold text-gradient">
            {"<DataBI/>"}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com <span className="text-primary">♥</span> para dados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
