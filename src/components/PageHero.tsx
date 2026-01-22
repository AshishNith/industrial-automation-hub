interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-industrial-dark via-primary to-industrial-dark">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
