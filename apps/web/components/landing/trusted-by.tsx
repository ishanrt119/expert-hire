'use client';

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8">
          Trusted by candidates interviewing at top companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          <div className="text-xl font-black tracking-tighter text-zinc-800 dark:text-zinc-200">
            STARTUP
          </div>
          <div className="text-xl font-bold tracking-widest text-zinc-800 dark:text-zinc-200">
            TECH.CO
          </div>
          <div className="text-2xl font-serif italic text-zinc-800 dark:text-zinc-200">
            Enterprise
          </div>
          <div className="text-xl font-semibold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
            <span className="w-4 h-4 bg-zinc-800 dark:bg-zinc-200 rounded-full inline-block" />
            AI Labs
          </div>
          <div className="text-xl font-medium tracking-tight text-zinc-800 dark:text-zinc-200">
            SaaS Inc.
          </div>
        </div>
      </div>
    </section>
  );
}
