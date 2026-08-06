import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 29, suffix: "+", label: "anos de advocacia" },
  { value: 26, suffix: "+", label: "anos em direito condominial" },
  { value: 100, suffix: "%", label: "atendimento personalizado" },
];

function useCountUp(target: number, shouldStart: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(target * easeOutQuart(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const [ready, setReady] = useState(false);
  const count = useCountUp(value, ready);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div className="border-r border-white/15 py-6 pr-4 last:border-r-0">
      <dt className="font-display text-3xl font-bold text-white tabular-nums sm:text-4xl">
        {count}
        <span>{suffix}</span>
      </dt>
      <dd className="mt-2 text-[11px] uppercase leading-snug tracking-wider text-white/60">
        {label}
      </dd>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-gradient">
      {/* Imagem de fundo desfocada — ambiente jurídico */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/duxxfpukn/image/upload/v1785946240/75de0749aa17d31912274fc15ba4545e_gkiz07.jpg')",
        }}
      />
      {/* Overlay azul-marinho para manter a identidade e garantir contraste do texto */}
      <div aria-hidden className="absolute inset-0 bg-navy-gradient/90" />

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-28 text-center sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <p
          className={`font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold/80 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Grupo Muzaranha · Advocacia Condominial
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl overflow-hidden text-4xl font-semibold leading-[1.15] text-navy-foreground sm:text-5xl lg:text-6xl">
          <span
            className={`block transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            Segurança jurídica e gestão
          </span>
          <span
            className={`block transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            profissional para o seu condomínio.
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/70 transition-all duration-700 ease-out sm:text-lg ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          Quase três décadas de Direito Condominial e uma sindicatura profissional
          transparente — jurídico e gestão sob o mesmo comando, atuando de forma
          preventiva para que o problema não chegue a existir.
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 ease-out sm:flex-row ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "540ms" }}
        >
          <Link
            to="/juridico"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Consultoria Jurídica
          </Link>
          <Link
            to="/sindicatura"
            className="group inline-flex items-center justify-center gap-2 border-b border-navy-foreground/30 px-1 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Sindicatura Profissional
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <dl
          className={`mx-auto mt-16 grid max-w-xl grid-cols-3 border-t border-white/15 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "620ms" }}
        >
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              active={mounted}
              delay={700 + i * 150}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}