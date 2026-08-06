import { createFileRoute } from "@tanstack/react-router";
import { Juridico } from "@/components/site/Juridico";

const title = "Consultoria Jurídica Condominial | Grupo Muzaranha";
const description =
  "Assessoria jurídica preventiva, combate à inadimplência e defesa do condomínio com 29 anos de experiência em Direito Condominial em São Paulo.";

export const Route = createFileRoute("/juridico")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <Juridico />
    </div>
  ),
});
