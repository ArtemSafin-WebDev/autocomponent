import { HomeCard } from "@/types/api";

const homeCards: HomeCard[] = [
  {
    id: 1,
    src: "/home-cards/1.webp",
    title: "Оригинальные запчасти LADA",
    href: "/",
    linkText: "Подробнее",
  },
  {
    id: 2,
    src: "/home-cards/2.webp",
    title: "Шины, диски, колпаки",
    href: "/",
    linkText: "Подробнее",
  },
];

export const getHomeCards = () =>
  new Promise<HomeCard[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(homeCards);
    }, 50);
  });
