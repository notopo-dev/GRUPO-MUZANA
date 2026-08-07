import { team } from "@/lib/site-data";
import { UserRound } from "lucide-react";

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Nossa equipe de sucesso
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Profissionais que cuidam do seu condomínio
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
            >
              <div className="relative h-64 overflow-hidden bg-surface">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={`Foto de ${p.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-navy-gradient">
                    <UserRound className="size-20 text-navy-foreground/40" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}