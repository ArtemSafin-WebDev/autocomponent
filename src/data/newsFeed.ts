import { NewsFeedCategory, NewsFeedData } from "@/types/api";

const newsFeed: NewsFeedData = {
  categories: [
    {
      id: 1,
      title: "Все",
      items: [
        {
          id: 1,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок щетка от снега и льда + скребок 42см Airline",
          shortDesc:
            "За покупку любой продукции бренда Airline на сумму 3.900р в подарок щетка от снега и льда + скребок...",
          category: NewsFeedCategory.Promo,
        },
        {
          id: 2,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок держатель для телефона магнитный в деф...",
          shortDesc:
            "За покупку 2 насосов отопителя Startvolt в подарок держатель для телефона магнитный в дефлектор...",
          category: NewsFeedCategory.New,
        },
        {
          id: 3,
          datetime: "16.12.2022 10:40:33",
          title: "Вебинар BIG FILTR",
          shortDesc: "«Автомобильные фильтры № 1 в России»…",
          category: NewsFeedCategory.News,
        },
        {
          id: 4,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок щетка от снега и льда + скребок 42см Airline",
          shortDesc:
            "За покупку любой продукции бренда Airline на сумму 3.900р в подарок щетка от снега и льда + скребок...",
          category: NewsFeedCategory.Promo,
        },
        {
          id: 5,
          datetime: "16.12.2022 10:40:33",
          title: "Вебинар BIG FILTR",
          shortDesc: "«Автомобильные фильтры № 1 в России»…",
          category: NewsFeedCategory.News,
        },
      ],
    },
    {
      id: 2,
      title: "Новости",
      items: [
        {
          id: 3,
          datetime: "16.12.2022 10:40:33",
          title: "Вебинар BIG FILTR",
          shortDesc: "«Автомобильные фильтры № 1 в России»…",
          category: NewsFeedCategory.News,
        },
        {
          id: 5,
          datetime: "16.12.2022 10:40:33",
          title: "Вебинар BIG FILTR",
          shortDesc: "«Автомобильные фильтры № 1 в России»…",
          category: NewsFeedCategory.News,
        },
      ],
    },
    {
      id: 3,
      title: "Акции",
      items: [
        {
          id: 1,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок щетка от снега и льда + скребок 42см Airline",
          shortDesc:
            "За покупку любой продукции бренда Airline на сумму 3.900р в подарок щетка от снега и льда + скребок...",
          category: NewsFeedCategory.Promo,
        },
        {
          id: 4,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок щетка от снега и льда + скребок 42см Airline",
          shortDesc:
            "За покупку любой продукции бренда Airline на сумму 3.900р в подарок щетка от снега и льда + скребок...",
          category: NewsFeedCategory.Promo,
        },
      ],
    },
    {
      id: 4,
      title: "Новинки",
      items: [
        {
          id: 2,
          datetime: "16.12.2022 10:40:33",
          title: "Подарок держатель для телефона магнитный в деф...",
          shortDesc:
            "За покупку 2 насосов отопителя Startvolt в подарок держатель для телефона магнитный в дефлектор...",
          category: NewsFeedCategory.New,
        },
      ],
    },
  ],
};

export const getNewsFeed = () =>
  new Promise<NewsFeedData>((resolve, reject) => {
    setTimeout(() => {
      resolve(newsFeed);
    }, 50);
  });
