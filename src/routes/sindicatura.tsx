import { createFileRoute } from "@tanstack/react-router";
import { pageHead, serviceSchema } from "@/lib/seo";
import { Sindicatura } from "@/components/site/Sindicatura";

const title = "Sindicatura Profissional | Grupo Muzaranha";
const description =
  "Sindicatura profissional com gestão transparente, negociação com fornecedores e onboarding estruturado para condomínios em São Paulo.";

const service = serviceSchema("Sindicatura Profissional", "Síndico profissional", description, [
  "Negociação com fornecedores",
  "Análise dos contratos do condomínio",
  "Diagnóstico financeiro",
  "Relatório fotográfico",
  "Apresentação dos resultados",
  "Acompanhamento presencial",
]);

export const Route = createFileRoute("/sindicatura")({
  head: () => pageHead({ path: "/sindicatura", title, description, schema: [service] }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <Sindicatura />
    </div>
  ),
});
