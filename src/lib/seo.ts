import { contacts, logoUrl, navLinks, team } from "./site-data";

export const SITE_URL = "https://www.muzaranhagroup.com.br";
export const SITE_NAME = "Grupo Muzaranha";

const ORG_ID = `${SITE_URL}/#organizacao`;
const DANIEL_ID = `${SITE_URL}/equipe#daniel-muzaranha`;

const address = {
  "@type": "PostalAddress",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  addressCountry: "BR",
};

export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

type PageSeo = {
  path: (typeof navLinks)[number]["to"];
  title: string;
  description: string;
  image?: string;
  schema?: Record<string, unknown>[];
};

export function pageHead({ path, title, description, image = logoUrl, schema = [] }: PageSeo) {
  const url = `${SITE_URL}${path}`;
  const page = navLinks.find((l) => l.to === path);
  const breadcrumb =
    path === "/"
      ? []
      : [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: page?.label ?? title, item: url },
            ],
          },
        ];
  const graph = [...breadcrumb, ...schema];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: title },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: graph.length ? [jsonLd({ "@graph": graph })] : [],
  };
}

export const organizationSchema = {
  "@type": "LegalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: ["Muzaranha Advocacia", "Muzaranha Sindicatura"],
  url: `${SITE_URL}/`,
  logo: logoUrl,
  image: logoUrl,
  description:
    "Consultoria jurídica condominial e sindicatura profissional em São Paulo: inadimplência, assembleias, contratos, convenções e gestão transparente de condomínios.",
  telephone: `+${contacts.juridico.whatsapp}`,
  email: contacts.juridico.email,
  address,
  areaServed: { "@type": "City", name: "São Paulo" },
  founder: { "@id": DANIEL_ID },
  knowsAbout: [
    "Direito Condominial",
    "Advogado condominial",
    "Síndico profissional",
    "Sindicatura profissional",
    "Cobrança de condomínio",
    "Inadimplência condominial",
    "Convenção e regimento interno",
    "Assembleia de condomínio",
  ],
  contactPoint: [contacts.juridico, contacts.sindicatura].map((c) => ({
    "@type": "ContactPoint",
    contactType: c.label,
    telephone: `+${c.whatsapp}`,
    email: c.email,
    areaServed: "BR",
    availableLanguage: "Portuguese",
  })),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#site`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

export const serviceSchema = (
  name: string,
  serviceType: string,
  description: string,
  services: string[],
) => ({
  "@type": "Service",
  name,
  serviceType,
  description,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "City", name: "São Paulo" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name,
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
  },
});

export const teamSchema = team.map((p) =>
  p.name === "Daniel Muzaranha"
    ? {
        "@type": "Person",
        "@id": DANIEL_ID,
        name: "Daniel Palmiero Muzaranha",
        jobTitle: "Advogado especialista em Direito Condominial",
        identifier: "OAB/SP 162.002",
        description: p.bio,
        image: p.photo,
        worksFor: { "@id": ORG_ID },
        knowsAbout: ["Direito Condominial", "Direito Imobiliário", "Processo Civil"],
      }
    : {
        "@type": "Person",
        name: p.name,
        jobTitle: p.role,
        description: p.bio,
        image: p.photo,
        worksFor: { "@id": ORG_ID },
      },
);
