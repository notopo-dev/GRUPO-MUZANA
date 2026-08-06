import { useState } from "react";
import { MessageCircle, Mail, Phone, Send, Scale, Building2 } from "lucide-react";
import { contacts, wa } from "@/lib/site-data";

const interesses = ["Jurídico", "Sindicatura", "Ambos"] as const;

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    condominio: "",
    telefone: "",
    email: "",
    interesse: "Jurídico" as (typeof interesses)[number],
    mensagem: "",
  });

  const destino =
    form.interesse === "Sindicatura" ? contacts.sindicatura : contacts.juridico;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      "Olá! Vim pelo site do Grupo Muzaranha.",
      `Nome: ${form.nome}`,
      `Condomínio: ${form.condominio}`,
      `Telefone: ${form.telefone}`,
      `E-mail: ${form.email}`,
      `Interesse: ${form.interesse}`,
      `Mensagem: ${form.mensagem}`,
    ].join("\n");
    window.open(wa(destino.whatsapp, texto), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contato" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Fale com o Grupo Muzaranha
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Vamos cuidar do seu condomínio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Envie sua mensagem ou fale diretamente pelo WhatsApp com o canal desejado.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  id="nome"
                  required
                  className={field}
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="condominio"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Condomínio
                </label>
                <input
                  id="condominio"
                  className={field}
                  value={form.condominio}
                  onChange={(e) => setForm({ ...form, condominio: e.target.value })}
                  placeholder="Nome do condomínio"
                />
              </div>
              <div>
                <label
                  htmlFor="telefone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Telefone
                </label>
                <input
                  id="telefone"
                  required
                  className={field}
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 90000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                />
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-medium text-foreground">
                Tipo de interesse
              </legend>
              <div className="flex flex-wrap gap-2">
                {interesses.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setForm({ ...form, interesse: i })}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                      form.interesse === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                className={field}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conte brevemente como podemos ajudar."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Send className="size-4" /> Enviar pelo WhatsApp
            </button>
          </form>

          <div className="grid content-start gap-6">
            {[
              { ...contacts.juridico, icon: Scale, title: "Consultoria Jurídica Condominial" },
              { ...contacts.sindicatura, icon: Building2, title: "Muzaranha Sindicatura" },
            ].map((c) => (
              <div key={c.email} className="rounded-3xl bg-navy-gradient p-7 shadow-elegant">
                <div className="flex size-11 items-center justify-center rounded-xl bg-navy-foreground/10 text-gold">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-foreground">{c.title}</h3>
                <div className="mt-5 space-y-3 text-sm">
                  <a
                    href={wa(c.whatsapp, "Olá! Vim pelo site do Grupo Muzaranha.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-navy-foreground/85 hover:text-gold"
                  >
                    <MessageCircle className="size-4" /> {c.phone}
                  </a>
                  <a
                    href={`tel:+${c.whatsapp}`}
                    className="flex items-center gap-3 text-navy-foreground/85 hover:text-gold"
                  >
                    <Phone className="size-4" /> Ligar agora
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-3 break-all text-navy-foreground/85 hover:text-gold"
                  >
                    <Mail className="size-4 shrink-0" /> {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
