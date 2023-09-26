import { CompanySidebarData } from "@/types/api";

export default async function fetchCompanySidebarData(): Promise<CompanySidebarData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        title: "Клиентам",
        links: [
          {
            id: 1,
            title: "Доставка",
            href: "/delivery",
          },
          {
            id: 2,
            title: "Возврат",
            href: "/return",
          },
          {
            id: 3,
            title: "Скидки",
            href: "/discount",
          },
          {
            id: 4,
            title: "Правила регистрации",
            href: "/rules",
          },
          {
            id: 5,
            title: "Программа Autoprice",
            href: "/program",
          },
        ],
      },
      {
        id: 2,
        title: "О компании",
        links: [
          {
            id: 1,
            title: "О нас",
            href: "/about",
          },
          {
            id: 2,
            title: "Сертификаты",
            href: "/certificates",
          },
          {
            id: 3,
            title: "Контакты",
            href: "/contacts",
          },
          {
            id: 4,
            title: "Вакансии",
            href: "/career",
          },
        ],
      },
    ],
  };
}
