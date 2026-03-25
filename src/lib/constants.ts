export const CAFE_INFO = {
  name: "Café Ve Věži",
  tagline: "Kavárna v srdci Tachova",
  address: "K. H. Borovského 128",
  city: "347 01 Tachov",
  email: "info@cafevevezi.cz",
  instagram: "https://www.instagram.com/cafevevezi",
  instagramHandle: "@cafevevezi",
  facebook: "https://www.facebook.com/vevezicafe",
  facebookHandle: "Café Ve Věži",
  website: "https://cafevevezi.cz",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.0!2d12.636!3d49.795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ3JzQyLjAiTiAxMsKwMzgnMDkuNiJF!5e0!3m2!1scs!2scz!4v1",
};

export const NAV_LINKS = [
  { label: "O nás", href: "#o-nas" },
  { label: "Nabídka", href: "#nabidka" },
  { label: "Akce", href: "#akce" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const ABOUT_TEXT = {
  heading: "O nás",
  paragraphs: [
    "Café Ve Věži je útulná kavárna ukrytá v historickém centru Tachova. Naše prostory dýchají historií a nabízejí jedinečnou atmosféru, kde se tradice snoubí s moderním pojetím kavárenské kultury.",
    "Připravujeme výběrovou kávu z pečlivě vybraných pražíren, domácí zákusky a nabízíme prostor pro setkávání, kulturu i odpočinek. Přijďte si k nám posedět — ať už sami s knihou, nebo s přáteli.",
  ],
  features: [
    { icon: "☕", label: "S sebou", desc: "Kávu připravíme i na cestu" },
    { icon: "🌿", label: "Zahrádka", desc: "Posezení venku v létě" },
    { icon: "📅", label: "Rezervace", desc: "Rezervujte si místo předem" },
  ],
};

export const MENU_ITEMS = {
  heading: "Nabídka",
  subtitle: "Aktuální nabídka se mění podle sezóny",
  categories: [
    {
      name: "Kávy",
      icon: "☕",
      items: [
        { name: "Espresso", desc: "Klasické italské espresso" },
        { name: "Cappuccino", desc: "Espresso s napěněným mlékem" },
        { name: "Latte", desc: "Jemná káva s mlékem" },
        { name: "Filtrovaná káva", desc: "Pour-over z výběrových zrn" },
        { name: "Flat White", desc: "Dvojité espresso s mikropěnou" },
        { name: "Vídeňská káva", desc: "Káva se šlehačkou" },
      ],
    },
    {
      name: "Nápoje",
      icon: "🍵",
      items: [
        { name: "Domácí limonáda", desc: "Čerstvá sezónní limonáda" },
        { name: "Čaj", desc: "Výběr kvalitních sypaných čajů" },
        { name: "Horká čokoláda", desc: "Pravá belgická čokoláda" },
        { name: "Matcha Latte", desc: "Japonský zelený čaj s mlékem" },
        { name: "Fresh džus", desc: "Čerstvě lisovaná šťáva" },
      ],
    },
    {
      name: "Zákusky & jídlo",
      icon: "🍰",
      items: [
        { name: "Cheesecake", desc: "Domácí krémový, i bezlepková varianta" },
        { name: "Pavlova", desc: "Křehká pusinková s čerstvým ovocem" },
        { name: "Čokoládové tartaletky", desc: "S bílou čokoládou a ovocem" },
        { name: "Mousse dezerty", desc: "Ořechový, čokoládový a další" },
        { name: "Bruschetta", desc: "S prosciuttem, rukolou a parmezánem" },
        { name: "Sezónní nabídka", desc: "Dle aktuální inspirace" },
      ],
    },
  ],
};

export const EVENTS = {
  heading: "Akce",
  kinedok: {
    title: "KineDok — dokumentární kino",
    description:
      "Pravidelně promítáme dokumentární filmy ve spolupráci s projektem KineDok. Přijďte objevovat příběhy z celého světa v komorní atmosféře naší kavárny.",
    cta: "Sledujte nás na sociálních sítích pro aktuální program",
  },
  privateEvents: {
    title: "Soukromé akce",
    description:
      "Hledáte místo pro oslavu, firemní setkání nebo workshop? Nabízíme prostory až pro 15 osob s kompletním technickým vybavením.",
    features: [
      "Kapacita až 15 osob",
      "Videoprojektor s plátnem",
      "Zvuková aparatura",
      "Catering na míru",
    ],
    cta: "Napište nám pro nezávaznou nabídku",
  },
};

export const GALLERY = {
  heading: "Galerie",
  instagramCta: "Sledujte nás na Instagramu",
};

export const CONTACT = {
  heading: "Kontakt",
  formLabels: {
    name: "Jméno",
    email: "E-mail",
    message: "Zpráva",
    send: "Odeslat",
  },
  openingHours: [
    { day: "Pondělí", hours: "Zavřeno" },
    { day: "Úterý – Pátek", hours: "9:00 – 18:00" },
    { day: "Sobota", hours: "9:00 – 17:00" },
    { day: "Neděle", hours: "10:00 – 16:00" },
  ],
};

export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  events: "/images/events.jpg",
  logo: "/images/logo-source.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
  ],
};

export const FOOTER = {
  copy: `© ${new Date().getFullYear()} Café Ve Věži. Všechna práva vyhrazena.`,
  tagline: "Vytvořeno s láskou v Tachově",
};
