import { NewsData } from "@/types/api";

export default async function fetchNewsData(): Promise<NewsData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 2,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 3,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 4,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 5,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 6,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 7,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
      {
        id: 8,
        title: "Новости",
        date: "на 21 января 2023",
        src: "/news-card.webp",
        text: "Экспресс доставка: Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
        href: "/",
      },
    ],
  };
}