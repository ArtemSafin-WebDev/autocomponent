import { HomeLink } from "@/types/api";

const homeLinks: HomeLink[] = [
  {
    id: 1,
    href: "/",
    title: "Склад онлайн",
    desc: "В наличии 100500 позиций 454 брендов",
  },
  {
    id: 2,
    href: "/",
    title: "Запчасти для отечественных",
    desc: "Любые запчасти на ВАЗ, ГАЗ, Москвич, Таврия, ИЖ, УАЗ",
  },
  {
    id: 3,
    href: "/",
    title: "Запчасти для иномарок",
    desc: "64 марки, 1289 моделей и более 68 000 000 SKU",
  },
];

export const getHomeLinks = () =>
  new Promise<HomeLink[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(homeLinks);
    }, 50);
  });
