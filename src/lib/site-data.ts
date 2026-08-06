export const CDN = "https://res.cloudinary.com/duxxfpukn/image/upload";

export const logoUrl = `${CDN}/v1785945172/ChatGPT_Image_5_de_ago._de_2026_12_52_28_e89ue4.png`;
export const danielPhoto = `${CDN}/v1785801544/DR_DANIEL_phz1kg.png`;

export const contacts = {
  juridico: {
    label: "Consultoria Jurídica",
    phone: "(11) 9 8266-8256",
    whatsapp: "5511982668256",
    email: "muzaranhaadv@hotmail.com",
  },
  sindicatura: {
    label: "Muzaranha Sindicatura",
    phone: "(11) 93744-1973",
    whatsapp: "5511937441973",
    email: "muzaranha.consult@gmail.com",
  },
};

export const wa = (number: string, msg: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/juridico", label: "Jurídico" },
  { to: "/sindicatura", label: "Sindicatura" },
  { to: "/equipe", label: "Equipe" },
  { to: "/antes-depois", label: "Antes e Depois" },
  { to: "/contato", label: "Contato" },
] as const;

export const beforeAfter = [
  {
    title: "Telemática",
    description: "Modernização e organização completa do sistema de telemática do condomínio.",
    before: `${CDN}/v1785801545/ANTES_TELEMATICA_uniiis.png`,
    after: `${CDN}/v1785801543/DEPOIS_TELEMATICA_xfu1cz.png`,
  },
  {
    title: "Espaço Gourmet",
    description: "Revitalização do espaço gourmet, com valorização direta da área comum.",
    before: `${CDN}/v1785801543/ANTES_ESPACO_GOURMET_ifrmv4.png`,
    after: `${CDN}/v1785801544/DEPOIS_ESPA%C3%87O_GOURMET_ojfv1g.png`,
  },
  {
    title: "Jardim",
    description: "Recuperação paisagística das áreas verdes com manutenção programada.",
    before: `${CDN}/v1785801545/ANTES_JARDIM_ozdamz.png`,
    after: `${CDN}/v1785801545/DEPOIS_JARDIM_ujrvyi.png`,
  },
  {
    title: "Área Comum — Ralos de Água Pluvial",
    description: "Aumento da bitola dos ralos de água pluvial, prevenindo alagamentos.",
    before: `${CDN}/v1785801544/AREA_COMUM_Aumento_da_Bitola_dos_Ralos_de_%C3%81gua_Pluvial_lj6ozi.png`,
    after: `${CDN}/v1785801546/AREA_COMUM_2_Aumento_da_Bitola_dos_Ralos_de_%C3%81gua_Pluvial_sn8tjj.png`,
  },
  {
    title: "Área Comum",
    description: "Revitalização de área comum, incluindo o revestimento das paredes da piscina interna.",
    before: `${CDN}/v1785801543/ANTES_AREA_COMUM_lwlzhb.png`,
    after: `${CDN}/v1785801544/DEPOIS_AREA_COMUM_iezraj.png`,
  },
  {
    title: "Jardim — Detalhe",
    description: "Detalhe do resultado final do projeto de paisagismo entregue.",
    before: `${CDN}/v1785801545/ANTES_JARDIM_ozdamz.png`,
    after: `${CDN}/v1785801545/DEPOIS_JARDIM_2_omn9zh.png`,
  },
];

export const team = [
  {
    name: "Daniel Muzaranha",
    role: "Advogado — OAB/SP 162.002",
    bio: "Advogado há 27 anos, quase três décadas de atuação diretamente junto ao mercado imobiliário. Sólida experiência em Direito Condominial, com profundo conhecimento da legislação, gestão de condomínios e solução estratégica de questões jurídicas e administrativas do setor.",
    photo: danielPhoto,
  },
];
