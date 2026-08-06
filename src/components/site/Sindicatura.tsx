import {
  Building2,
  Target,
  Eye,
  HeartHandshake,
  Handshake,
  LineChart,
  RefreshCcw,
  Camera,
  FileSearch,
  Wallet,
  Presentation,
  Footprints,
  ShieldCheck,
  MessageCircle,
  Mail,
} from "lucide-react";
import { contacts, wa } from "@/lib/site-data";

const mvv = [
  {
    icon: Target,
    title: "Missão",
    text: "Transformar a administração condominial em uma experiência de confiança, eficiência e transparência, promovendo uma gestão profissional que valorize o patrimônio, fortaleça a convivência entre os moradores e proporcione segurança, organização e qualidade de vida. Atuar com ética, responsabilidade e comprometimento, antecipando soluções, prevenindo conflitos e conduzindo cada condomínio como se fosse único.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em sindicatura profissional, reconhecida pela excelência na gestão, pela transparência nas decisões e pela capacidade de transformar condomínios em comunidades mais organizadas, valorizadas e harmoniosas.",
  },
  {
    icon: HeartHandshake,
    title: "Valores",
    text: "Honestidade, respeito, humanidade e responsabilidade. Cuidar do patrimônio, dos recursos e da confiança depositada no trabalho como se fossem próprios, sempre pautados pela ética, transparência, compromisso e dedicação às pessoas.",
  },
];

const negociacao = [
  {
    icon: Handshake,
    title: "Negociação com fornecedores",
    text: "Habilidades avançadas de negociação para obter melhores preços, prazos e condições para o condomínio.",
  },
  {
    icon: LineChart,
    title: "Implementação de soluções",
    text: "Avaliação constante do mercado para identificar as melhores oportunidades de compra e contratação.",
  },
  {
    icon: RefreshCcw,
    title: "Monitoramento e reavaliação",
    text: "Processo contínuo, com reavaliações periódicas para manter custos otimizados e a qualidade dos serviços.",
  },
];

const motivos = [
  {
    title: "Práticas humanizadas",
    text: "Gestão baseada no diálogo, transparência e respeito, com atendimento personalizado, mediação de conflitos e soluções equilibradas.",
  },
  {
    title: "Planejamento",
    text: "Ações planejadas e estratégicas voltadas às demandas da comunidade condominial, promovendo eficiência, bem-estar coletivo e valorização do patrimônio.",
  },
  {
    title: "Imparcialidade",
    text: "Gestão financeira rigorosa, transparência e eficiência, com atendimento personalizado e soluções que valorizam o condomínio.",
  },
];

const onboarding = [
  {
    icon: Camera,
    title: "Relatório Fotográfico",
    text: "Elaborado em até 40 dias, registrando o estado de conservação das áreas comuns, equipamentos e instalações.",
  },
  {
    icon: FileSearch,
    title: "Análise dos Contratos",
    text: "Relatório dos contratos com prestadores de serviço: vigência, custos, qualidade, regularidade e oportunidades de otimização.",
  },
  {
    icon: Wallet,
    title: "Diagnóstico Financeiro",
    text: "Análise da situação financeira e contábil: contas, fundos, fluxo de caixa e alocação de recursos.",
  },
  {
    icon: Presentation,
    title: "Apresentação dos Resultados",
    text: "Reunião informal com os moradores para apresentar conclusões e prioridades da gestão.",
  },
  {
    icon: Footprints,
    title: "Acompanhamento Presencial",
    text: "Visitas diárias ao condomínio durante os 30 primeiros dias de gestão.",
  },
];

const comoFunciona = [
  "De duas a três visitas semanais, totalizando 9 horas semanais",
  "Não trabalhamos com prepostos",
  "Seguro de responsabilidade civil: apólice de R$ 1.000.000,00 (Porto Seguro)",
  "Honorários e escopo apresentados em proposta personalizada",
];

export function Sindicatura() {
  return (
    <section id="sindicatura" className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-soft">
            <Building2 className="size-3.5" /> Sindicatura Profissional
          </span>
          <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Muzaranha Sindicatura
          </h2>
          <p className="mt-3 font-display text-lg text-primary">Conquistando o Sucesso Juntos!</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft lg:col-span-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              Na Muzaranha Sindicatura, acreditamos que administrar um condomínio é cuidar das
              pessoas que vivem nele. Por isso, oferecemos uma gestão profissional, transparente e
              próxima dos moradores, sempre buscando soluções rápidas, organização e valorização do
              patrimônio.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Atuamos em condomínios residenciais e comerciais, cuidando da rotina administrativa,
              financeira, jurídica e operacional, além de acompanhar manutenções, contratos, obras e
              projetos de melhoria.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nosso compromisso é proporcionar tranquilidade aos moradores, eficiência na gestão e um
              condomínio cada vez mais bem cuidado.
            </p>
            <p className="mt-6 border-l-2 border-gold pl-4 font-display text-base font-semibold italic text-foreground">
              Muzaranha Sindicatura — Gestão com transparência, responsabilidade e compromisso com o
              seu condomínio.
            </p>
          </div>

          <div className="rounded-2xl bg-navy-gradient p-7 shadow-elegant">
            <ShieldCheck className="size-7 text-gold" />
            <h3 className="mt-4 text-xl font-bold text-navy-foreground">
              Equipe multidisciplinar com jurídico próprio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
              Suporte técnico, financeiro e jurídico completo. Departamento jurídico próprio
              especializado nas áreas cível, trabalhista, contratual e condominial: elaboração e
              revisão de contratos, orientação nas relações com colaboradores e prestadores,
              acompanhamento de inadimplência e apoio jurídico às decisões da administração. Também
              realizamos fiscalização de serviços e acompanhamento de manutenções preventivas e
              corretivas, reduzindo custos e riscos.
            </p>
          </div>
        </div>

        {/* MVV */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {mvv.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <m.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Negociação */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Negociação e gestão de fornecedores
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Análise de mercado contínua para reduzir custos sem abrir mão da qualidade.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {negociacao.map((n, i) => (
              <div key={n.title} className="relative rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-4xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <n.icon className="absolute right-6 top-6 size-5 text-primary" />
                <h4 className="mt-3 text-lg font-bold text-foreground">{n.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Motivos */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {motivos.map((m) => (
            <div key={m.title} className="rounded-2xl bg-card p-7 shadow-soft">
              <div className="h-1 w-12 gold-rule rounded-full" />
              <h4 className="mt-4 text-lg font-bold text-foreground">{m.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Onboarding */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Diagnóstico inicial da gestão
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Nos primeiros dias da administração realizamos um diagnóstico completo em 5 etapas.
          </p>
          <ol className="mt-10 space-y-4">
            {onboarding.map((o, i) => (
              <li
                key={o.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <o.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Etapa {i + 1}
                  </p>
                  <h4 className="mt-1 text-lg font-bold text-foreground">{o.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Como funciona */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-navy-gradient p-8 shadow-elegant sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-navy-foreground sm:text-3xl">Como funciona</h3>
              <ul className="mt-6 space-y-3">
                {comoFunciona.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-navy-foreground/80">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-7 text-center">
              <p className="font-display text-lg font-semibold text-navy-foreground">
                Solicite uma proposta personalizada
              </p>
              <p className="mt-2 text-sm text-navy-foreground/70">Agradecemos a oportunidade!</p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={wa(contacts.sindicatura.whatsapp, "Olá! Gostaria de solicitar uma proposta de sindicatura profissional.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="size-4" /> {contacts.sindicatura.phone}
                </a>
                <a
                  href={`mailto:${contacts.sindicatura.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/25 px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10"
                >
                  <Mail className="size-4" /> E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
