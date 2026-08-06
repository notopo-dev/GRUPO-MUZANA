import { useState } from "react";
import { MessageCircle, X, Scale, Building2 } from "lucide-react";
import { contacts, wa } from "@/lib/site-data";

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-60 rounded-2xl border border-border bg-card p-3 shadow-elegant">
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Falar por WhatsApp
          </p>
          {[
            { ...contacts.juridico, icon: Scale },
            { ...contacts.sindicatura, icon: Building2 },
          ].map((c) => (
            <a
              key={c.email}
              href={wa(c.whatsapp, "Olá! Vim pelo site do Grupo Muzaranha.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-foreground hover:bg-accent"
            >
              <c.icon className="size-4 text-primary" />
              <span>
                <span className="block font-medium">{c.label}</span>
                <span className="block text-xs text-muted-foreground">{c.phone}</span>
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar contatos" : "Abrir contatos de WhatsApp"}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform hover:scale-110"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
