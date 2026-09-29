interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** 子页面顶部 Hero */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="cinema-glow border-b border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="animate-fade-in-up max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-green">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}