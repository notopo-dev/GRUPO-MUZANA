import {
  Scale,
  ShieldCheck,
  Gavel,
  FileSignature,
  Coins,
  Landmark,
  CheckCircle2,
  TrendingUp,
  Users,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import { contacts, danielPhoto, wa } from "@/lib/site-data";

const credenciais = [
  "29 anos à serviço da advocacia",
  "Atuação preventiva e contenciosa",
  "Pós-graduado em Processo Civil",
  "Profundo conhecimento da rotina condominial",
  "Atendimento personalizado",
];

const exigencias = [
  "Recuperação de créditos",
  "Governança",
  "Compliance",
  "Segurança jurídica",
  "Controle de riscos",
];

const servicos = [
  {
    icon: ShieldCheck,
    title: "Assessoria Jurídica Preventiva",
    subtitle: "Síndicos, Conselhos e Administradoras",
    items: ["Advertências", "Notificações", "Consultas jurídicas", "Convenções e regimentos internos"],
  },
  {
    icon: Coins,
    title: "Combate à Inadimplência",
    subtitle: "A inadimplência impacta a saúde financeira do condomínio",
    items: [
      "Cobrança extrajudicial",
      "RENAJUD e SISBAJUD",
      "Execução judicial",
      "Pesquisa patrimonial",
    ],
  },
  {
    icon: Gavel,
    title: "Defesa do Condomínio",
    subtitle: "Atuação contenciosa em todas as esferas",
    items: [
      "Ações cíveis e demandas trabalhistas",
      "Responsabilidade civil",
      "Conflitos entre moradores",
      "Impugnações de assembleias",
    ],
  },
  {
    icon: FileSignature,
    title: "Contratos e Fornecedores",
    subtitle: "Redução de riscos para proteção do condomínio",
    items: ["Portaria e Limpeza", "Segurança", "Obras", "Manutenção"],
  },
];

const beneficios = [
  { icon: TrendingUp, label: "Redução de passivo" },
  { icon: Coins, label: "Recuperação de crédito" },
  { icon: Users, label: "Menos conflitos" },
  { icon: Landmark, label: "Melhor governança" },
  { icon: ShieldCheck, label: "Valorização patrimonial" },
];

const diferenciais = [
  "29 anos de experiência",
  "Especialista em Direito Condominial",
  "Atendimento personalizado e humano",
  "Linguagem acessível",
  "Cumprimento de SLA",
  "Visão estratégica",
];

export function Juridico() {
  return (
    <section id="juridico" className="scroll-mt-24 bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl bg-surface shadow-elegant">
              <img
                src={danielPhoto}
                alt="Dr. Daniel Palmiero Muzaranha, advogado especialista em Direito Condominial"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-base italic leading-relaxed text-foreground">
                “Há quase três décadas transformando conhecimento jurídico em segurança, governança,
                proteção patrimonial e relação acessível para condôminos e condomínios.”
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                Dr. Daniel Palmiero Muzaranha — OAB/SP 162.002
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
              <Scale className="size-3.5" /> Consultoria Jurídica Condominial
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Consultoria Jurídica Estratégica para Condomínio
            </h2>
            <p className="mt-4 text-lg font-medium text-primary">
              26+ anos de experiência em Direito Condominial
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Quase três décadas assessorando condomínios residenciais, comerciais, mistos e
              associações, com suporte jurídico estratégico para síndicos, administradoras e
              conselhos.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {credenciais.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa(contacts.juridico.whatsapp, "Olá! Gostaria de falar sobre consultoria jurídica condominial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-4" /> {contacts.juridico.phone}
              </a>
              <a
                href={`mailto:${contacts.juridico.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Mail className="size-4" /> {contacts.juridico.email}
              </a>
            </div>
          </div>
        </div>

        {/* O condomínio moderno exige mais */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-navy-gradient p-8 shadow-elegant sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-navy-foreground sm:text-3xl">
                O condomínio moderno exige mais
              </h3>
              <p className="mt-4 text-navy-foreground/70">
                Nossa missão é transformar o departamento jurídico em uma ferramenta de gestão.
              </p>
              <p className="mt-6 border-l-2 border-gold pl-4 font-display text-lg font-semibold text-navy-foreground">
                “Não atuamos apenas quando surge o problema. Atuamos para evitar que ele apareça!”
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {exigencias.map((e) => (
                <li
                  key={e}
                  className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3 text-sm font-medium text-navy-foreground"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Serviços */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Áreas de atuação
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="size-5" />
                </div>
                <h4 className="mt-5 text-lg font-bold text-foreground">{s.title}</h4>
                <p className="mt-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.subtitle}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-20 rounded-3xl bg-surface p-8 sm:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Benefícios para o condomínio e a gestão
            </h3>
            <p className="mt-3 text-muted-foreground">
              Maior tranquilidade para decidir e tranquilidade na gestão.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {beneficios.map((b) => (
              <div key={b.label} className="px-4 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <b.icon className="size-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{b.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
