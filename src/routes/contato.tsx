import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

const title = "Contato | Grupo Muzaranha";
const description =
  "Fale com o Grupo Muzaranha por WhatsApp ou e-mail: consultoria jurídica condominial e sindicatura profissional em São Paulo.";

export const Route = createFileRoute("/contato")({
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
      <Contact />
    </div>
  ),
});
