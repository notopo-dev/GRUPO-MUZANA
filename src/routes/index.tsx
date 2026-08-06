import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, Building2, Users, ImageIcon, ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { logoUrl } from "@/lib/site-data";

const title = "Grupo Muzaranha | Advogado Condominial e Síndico Profissional";
const description =
  "Consultoria jurídica condominial com 29 anos de experiência e sindicatura profissional em São Paulo. Inadimplência, assembleias, contratos e gestão transparente.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoUrl },
    ],
  }),
  component: Index,
});

const cards = [
  {
    to: "/juridico",
    icon: Scale,
    title: "Consultoria Jurídica",
    text: "Assessoria preventiva, combate à inadimplência e defesa do condomínio em todas as esferas.",
  },
  {
    to: "/sindicatura",
    icon: Building2,
    title: "Sindicatura Profissional",
    text: "Gestão transparente, negociação com fornecedores e onboarding estruturado em 5 etapas.",
  },
  {
    to: "/equipe",
    icon: Users,
    title: "Equipe",
    text: "Quem cuida do seu condomínio, com quase três décadas de mercado imobiliário.",
  },
  {
    to: "/antes-depois",
    icon: ImageIcon,
    title: "Antes e Depois",
    text: "Resultados reais de revitalização e manutenção entregues em condomínios.",
  },
] as const;

function Index() {
  return (
    <>
      <Hero />
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Explore o Grupo Muzaranha
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Jurídico e gestão sob o mesmo comando
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
              >
                <c.icon className="size-8 text-primary" />
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Ver mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Grupo Muzaranha",
            description,
            image: logoUrl,
            areaServed: "São Paulo, SP",
            telephone: "+5511982668256",
            email: "muzaranhaadv@hotmail.com",
          }),
        }}
      />
    </>
  );
}
