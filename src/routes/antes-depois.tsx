import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { BeforeAfter } from "@/components/site/BeforeAfter";

const title = "Antes e Depois | Grupo Muzaranha";
const description =
  "Galeria de resultados reais: revitalização de áreas comuns, jardins, espaço gourmet e manutenções preventivas em condomínios.";

export const Route = createFileRoute("/antes-depois")({
  head: () => pageHead({ path: "/antes-depois", title, description }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <BeforeAfter />
    </div>
  ),
});
