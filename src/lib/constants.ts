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
      name: "Zákusky",
      icon: "🍰",
      items: [
        { name: "Cheesecake", desc: "Domácí krémový cheesecake" },
        { name: "Tiramisu", desc: "Klasické italské tiramisu" },
        { name: "Větrník", desc: "Tradiční český větrník" },
        { name: "Brownies", desc: "Čokoládové brownies" },
        { name: "Sezónní dort", desc: "Dle aktuální nabídky" },
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
  hero: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  events: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
    "https://images.unsplash.com/photo-1525610553eeb-1e671310ef46?w=600&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80",
  ],
};

export const FOOTER = {
  copy: `© ${new Date().getFullYear()} Café Ve Věži. Všechna práva vyhrazena.`,
  tagline: "Vytvořeno s láskou v Tachově",
};
