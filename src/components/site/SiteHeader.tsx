import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { logoUrl, contacts, wa, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  // Transparente sobre a Hero escura só na Home e só no topo da página.
  // Em qualquer outra página, ou assim que rola, o header é sólido claro.
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reavalia o scroll ao trocar de rota (evita ficar "preso" em transparente/sólido)
  useEffect(() => {
    setScrolled(window.scrollY > 24);
  }, [pathname]);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-navy/10 bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] backdrop-blur-md supports-[backdrop-filter]:bg-white/90",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3 py-2.5">
          <img
            src={logoUrl}
            alt="Grupo Muzaranha — Jurídico Condominial e Sindicatura"
            className={cn(
              "w-auto transition-all duration-300",
              scrolled || !isHome ? "h-11 sm:h-12" : "h-14 sm:h-16 lg:h-[4.25rem]",
              // A logo é clara (branca) — em fundo sólido claro ela precisa de um filtro escuro
              !transparent && "brightness-0",
            )}
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "!text-gold" }}
              className={cn(
                "relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                transparent
                  ? "text-navy-foreground/80 hover:text-navy-foreground"
                  : "text-navy/70 hover:text-navy",
              )}
            >
              {l.label}
            </Link>
          ))}

          <a
            href={wa(contacts.juridico.whatsapp, "Olá! Vim pelo site do Grupo Muzaranha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-gold-foreground transition-colors hover:bg-gold/90"
          >
            <MessageCircle className="size-4" strokeWidth={2} />
            Fale Conosco
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={cn(
            "rounded-sm p-2 lg:hidden",
            transparent ? "text-navy-foreground" : "text-navy",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Menu mobile — sempre sólido claro, independente do estado do header, para garantir legibilidade */}
      <div
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-white/98 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-navy/5 py-3.5 text-base font-medium text-navy/80 transition-colors last:border-b-0 hover:text-gold",
                open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0",
              )}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={wa(contacts.juridico.whatsapp, "Olá! Vim pelo site do Grupo Muzaranha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wide text-gold-foreground"
          >
            <MessageCircle className="size-4" />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}