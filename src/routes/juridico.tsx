import { createFileRoute } from "@tanstack/react-router";
import { pageHead, serviceSchema } from "@/lib/seo";
import { Juridico } from "@/components/site/Juridico";

const title = "Consultoria Jurídica Condominial | Grupo Muzaranha";
const description =
  "Assessoria jurídica preventiva, combate à inadimplência e defesa do condomínio com 29 anos de experiência em Direito Condominial em São Paulo.";

const service = serviceSchema(
  "Consultoria Jurídica Condominial",
  "Advocacia condominial",
  description,
  [
    "Assessoria jurídica preventiva para síndicos, conselhos e administradoras",
    "Combate à inadimplência e cobrança de condomínio",
    "Defesa do condomínio em ações cíveis e trabalhistas",
    "Contratos com fornecedores de portaria, limpeza, segurança, obras e manutenção",
    "Convenções e regimentos internos",
    "Impugnação de assembleias",
  ],
);

export const Route = createFileRoute("/juridico")({
  head: () => pageHead({ path: "/juridico", title, description, schema: [service] }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <Juridico />
    </div>
  ),
});
