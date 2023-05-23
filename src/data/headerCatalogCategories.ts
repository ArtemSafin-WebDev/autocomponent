import { HeaderCatalogMenuCategory } from "@/types/api";

const headerCatalogCategories = [
  {
    href: "/",
    title: "Автотовары",
    items: [
      {
        href: "/",
        title: "Шины, диски, колпаки",
      },
      {
        href: "/",
        title: "Автосвет",
      },
      {
        href: "/",
        title: "Аккумуляторы и электрика",
      },
      {
        href: "/",
        title: "Сопутствующие товары",
      },
      {
        href: "/",
        title: "Инструмент",
      },
      {
        href: "/",
        title: "Автоэлектрика, электрика",
      },
      {
        href: "/",
        title: "Метизы, крепеж, соединенители",
      },
      {
        href: "/",
        title: "Автохимия и автокосметика",
      },
      {
        href: "/",
        title: "Аксессуары",
      },
      {
        href: "/",
        title: "Масла и технические жидкости",
      },
      {
        href: "/",
        title: "Все категории",
      },
    ],
  },
  {
    href: "/",
    title: "Запчасти",
    items: [
      {
        href: "/",
        title: "Каталог запчастей",
      },
      {
        href: "/",
        title: "Оригинальные каталоги",
      },
      {
        href: "/",
        title: "Запчасти для иномарок",
      },
      {
        href: "/",
        title: "Запчасти для ТО",
      },
      {
        href: "/",
        title: "Запчасти для иномарок в наличии",
      },
      {
        href: "/",
        title: "Запчасти для отечественных в наличии",
      },
    ],
  },
];

export const getHeaderCatalogCategories = () =>
  new Promise<HeaderCatalogMenuCategory[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(headerCatalogCategories);
    }, 50);
  });
