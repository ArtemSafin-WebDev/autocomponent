import { FooterMenuCategory } from "@/types/api";

const categories: FooterMenuCategory[] = [
  {
    title: "Запчасти",
    href: "/",
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
  {
    title: "Автотовары",
    href: "/",
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
        title: "Автоэлектроника, электрика",
      },
      {
        href: "/",
        title: "Метизы, крепеж, соединители",
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
    ],
  },
  {
    title: "Клиентам",
    href: "/",
    items: [
      {
        href: "/",
        title: "Правила регистрации",
      },
      {
        href: "/",
        title: "Скидки",
      },
      {
        href: "/",
        title: "Программа Автопрайс",
      },
      {
        href: "/",
        title: "Доставка",
      },
      {
        href: "/",
        title: "Возврат",
      },
    ],
  },
  {
    title: "О компании",
    href: "/",
    items: [
      {
        href: "/",
        title: "О нас",
      },
      {
        href: "/",
        title: "Наши бренды",
      },
      {
        href: "/",
        title: "Контакты",
      },
      {
        href: "/",
        title: "Вакансии",
      },
    ],
  },
];

export const getFooterMenuCategories = () =>
  new Promise<FooterMenuCategory[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 50);
  });
