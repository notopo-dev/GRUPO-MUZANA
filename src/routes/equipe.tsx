import { createFileRoute } from "@tanstack/react-router";
import { Team } from "@/components/site/Team";

const title = "Equipe | Grupo Muzaranha";
const description =
  "Conheça Dr. Daniel Muzaranha, advogado OAB/SP 162.002, com quase três décadas de atuação em Direito Condominial e mercado imobiliário.";

export const Route = createFileRoute("/equipe")({
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
      <Team />
    </div>
  ),
});
