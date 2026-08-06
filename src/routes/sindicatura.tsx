import { createFileRoute } from "@tanstack/react-router";
import { Sindicatura } from "@/components/site/Sindicatura";

const title = "Sindicatura Profissional | Grupo Muzaranha";
const description =
  "Sindicatura profissional com gestão transparente, negociação com fornecedores e onboarding estruturado para condomínios em São Paulo.";

export const Route = createFileRoute("/sindicatura")({
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
      <Sindicatura />
    </div>
  ),
});
