import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfter } from "@/lib/site-data";

function Compare({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-surface"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={`${title} — depois`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={`${title} — antes`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-foreground">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-foreground">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-navy-foreground"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-foreground text-navy shadow-elegant">
          <MoveHorizontal className="size-5" />
        </span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Prova social visual
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Antes e Depois</h2>
          <p className="mt-3 text-muted-foreground">
            Casos reais de melhorias realizadas em condomínios administrados. Arraste a linha para
            comparar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {beforeAfter.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <Compare before={item.before} after={item.after} title={item.title} />
              <figcaption className="px-2 py-4">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
