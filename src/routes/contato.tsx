import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { Contact } from "@/components/site/Contact";

const title = "Contato | Grupo Muzaranha";
const description =
  "Fale com o Grupo Muzaranha por WhatsApp ou e-mail: consultoria jurídica condominial e sindicatura profissional em São Paulo.";

export const Route = createFileRoute("/contato")({
  head: () => pageHead({ path: "/contato", title, description }),
  component: () => (
    <div className="pt-20 lg:pt-24">
      <Contact />
    </div>
  ),
});
