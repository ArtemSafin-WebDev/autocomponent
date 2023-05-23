import { HomeCatalogItem } from "@/types/api";

const homeCatalogItems: HomeCatalogItem[] = [
  {
    id: 1,
    title: "Шины, диски, колпаки",
    icon: "/home-catalog/1.svg",
    href: "/",
  },
  {
    id: 2,
    title: "Метизы, крепеж, соединители",
    icon: "/home-catalog/2.svg",
    href: "/",
  },
  {
    id: 3,
    title: "Инструмент",
    icon: "/home-catalog/3.svg",
    href: "/",
  },
  {
    id: 4,
    title: "Аксессуары",
    icon: "/home-catalog/4.svg",
    href: "/",
  },
  {
    id: 5,
    title: "Инструмент",
    icon: "/home-catalog/3.svg",
    href: "/",
  },
  {
    id: 6,
    title: "Автозапчасти иномарки",
    icon: "/home-catalog/5.svg",
    href: "/",
  },
  {
    id: 7,
    title: "Автозапчасти иномарки",
    icon: "/home-catalog/5.svg",
    href: "/",
  },
  {
    id: 8,
    title: "Метизы, крепеж, соединители",
    icon: "/home-catalog/2.svg",
    href: "/",
  },
  {
    id: 9,
    title: "Метизы, крепеж, соединители",
    icon: "/home-catalog/2.svg",
    href: "/",
  },
  {
    id: 10,
    title: "Аксессуары",
    icon: "/home-catalog/4.svg",
    href: "/",
  },
  {
    id: 11,
    title: "Шины, диски, колпаки",
    icon: "/home-catalog/1.svg",
    href: "/",
  },
  {
    id: 12,
    title: "Инструмент",
    icon: "/home-catalog/3.svg",
    href: "/",
  },
];

export const getHomeCatalogItems = () =>
  new Promise<HomeCatalogItem[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(homeCatalogItems);
    }, 50);
  });
