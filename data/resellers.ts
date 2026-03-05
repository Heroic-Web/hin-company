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
    name: "Handrio",
    phone: "6285187483025",
    email: "cs.hintech@gmail.com",
    photo: "/reseller/handrio.jpg",
    sold: 137,
    rating: 5,
    location: "Indonesia",
    about:
      "Profesional Reseller Partner di PT. Heroic Inovasi Nusantara yang membantu bisnis memiliki website profesional, SEO, AI dan desain berkualitas.",
  },
]