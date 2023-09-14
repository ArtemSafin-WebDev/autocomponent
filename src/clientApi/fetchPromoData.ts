import { PromoData } from "@/types/api";

export default async function fetchPromoData(): Promise<PromoData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    cards: [
      {
        id: 1,
        href: "/",
        src: "/promo/1.webp",
      },
      {
        id: 2,
        href: "/",
        src: "/promo/2.webp",
      },
      {
        id: 3,
        href: "/",
        src: "/promo/1.webp",
      },
      {
        id: 4,
        href: "/",
        src: "/promo/3.webp",
      },
      {
        id: 5,
        href: "/",
        src: "/promo/2.webp",
      },
      {
        id: 6,
        href: "/",
        src: "/promo/3.webp",
      },
      {
        id: 7,
        href: "/",
        src: "/promo/3.webp",
      },
      {
        id: 8,
        href: "/",
        src: "/promo/1.webp",
      },
    ],
  };
}
