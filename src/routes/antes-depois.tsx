import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/site/BeforeAfter";

const title = "Antes e Depois | Grupo Muzaranha";
const description =
  "Galeria de resultados reais: revitalização de áreas comuns, jardins, espaço gourmet e manutenções preventivas em condomínios.";

export const Route = createFileRoute("/antes-depois")({
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
      <BeforeAfter />
    </div>
  ),
});
