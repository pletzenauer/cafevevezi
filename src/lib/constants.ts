export const CAFE_INFO = {
  name: "Café Ve Věži",
  address: "K. H. Borovského 128",
  city: "347 01 Tachov 1",
  phone: "+420 608 491 173",
  email: "info@cafevevezi.cz",
  instagram: "https://www.instagram.com/cafevevezi",
  instagramHandle: "@cafevevezi",
  facebook: "https://www.facebook.com/vevezicafe",
  facebookHandle: "Café Ve Věži",
  website: "https://cafevevezi.cz",
  mapEmbed:
    "https://www.google.com/maps?q=Café+Ve+Věži,+K.+H.+Borovského+128,+Tachov&output=embed",
  googleReviews:
    "https://www.google.com/maps/place/Caf%C3%A9+Ve+V%C4%9B%C5%BEi/@49.7944662,12.6324751,17z/data=!4m8!3m7!1s0x47a071e029d953d1:0xf03635eb4117d5ed!8m2!3d49.7944662!4d12.6324751!9m1!1b1!16s%2Fg%2F11ks2tjwjr",
};

export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  events: "/images/events.jpg",
  logo: "/images/logo-source.jpg",
  gallery: [
    "/images/gallery-4.jpg",   // cheesecake
    "/images/gallery-9.jpg",   // interior orange walls
    "/images/gallery-2.jpg",   // pink cakes
    "/images/gallery-10.jpg",  // stairs
    "/images/gallery-1.jpg",   // bruschetta
    "/images/gallery-11.jpg",  // seating area
    "/images/gallery-6.jpg",   // tarts
    "/images/gallery-14.jpg",  // window detail
    "/images/gallery-3.jpg",   // pavlova
    "/images/gallery-12.jpg",  // Aperol terrace
    "/images/gallery-5.jpg",   // poppy cheesecake
    "/images/gallery-7.jpg",   // matcha latte
    "/images/gallery-8.jpg",   // pavlova close-up
  ],
  reconstruction: [1, 2, 4, 5, 7, 8].map((n) => ({
    before: `/images/reconstruction/before-${n}.jpg`,
    after: `/images/reconstruction/after-${n}.jpg`,
  })),
};
