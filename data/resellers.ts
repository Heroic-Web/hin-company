export interface Reseller {
  slug: string
  name: string
  phone: string
  photo: string
  description: string
}

export const resellers = [
  {
    slug: "handrio",
    name: "HANDRIO",
    phone: "6285187483025",
    email: "cs.hintech@gmail.com",
    photo: "/dio.jpeg",
    sold: 39,
    rating: 5,
    location: "Indonesia",
    about:
      "Profesional Reseller Partner di PT. Heroic Inovasi Nusantara yang membantu bisnis memiliki website profesional, SEO, AI dan desain berkualitas.",
  },
]