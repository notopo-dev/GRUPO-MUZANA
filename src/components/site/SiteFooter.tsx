import { Link } from "@tanstack/react-router";
import { logoUrl, contacts, wa, navLinks } from "@/lib/site-data";
import { MessageCircle, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoUrl} alt="Grupo Muzaranha" className="h-24 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Jurídico condominial e sindicatura profissional sob o mesmo grupo — segurança,
              transparência e valorização do seu patrimônio.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground">
              Links rápidos
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-navy-foreground/70 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[contacts.juridico, contacts.sindicatura].map((c) => (
                <li key={c.email}>
                  <p className="font-semibold text-navy-foreground/90">{c.label}</p>
                  <a
                    href={wa(c.whatsapp, "Olá! Vim pelo site do Grupo Muzaranha.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-2 text-navy-foreground/70 hover:text-gold"
                  >
                    <MessageCircle className="size-3.5" /> {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 break-all text-navy-foreground/70 hover:text-gold"
                  >
                    <Mail className="size-3.5 shrink-0" /> {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Grupo Muzaranha. Todos os direitos reservados.</p>
          <p>Dr. Daniel Palmiero Muzaranha — OAB/SP nº 162.002</p>
        </div>
      </div>
    </footer>
  );
}
