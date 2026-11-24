import { createFileRoute } from "@tanstack/react-router";
import { pageHead, teamSchema } from "@/lib/seo";
import { Team } from "@/components/site/Team";

const title = "Equipe | Grupo Muzaranha";
const description =
  "Conheça Dr. Daniel Muzaranha, advogado OAB/SP 162.002, com quase três décadas de atuação em Direito Condominial e mercado imobiliário.";

export const Route = createFileRoute("/equipe")({
  head: () => pageHead({ path: "/equipe", title, description, schema: teamSchema }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <Team />
    </div>
  ),
});
