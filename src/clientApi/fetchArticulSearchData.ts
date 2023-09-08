import { ArticulSearchData } from "@/types/api";

export default async function fetchArticulSearchData(): Promise<ArticulSearchData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    otherBrands: [
      {
        id: 1,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 2,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 3,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 4,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 5,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 6,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 7,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 8,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 9,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 10,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 11,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 12,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 13,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 14,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 15,
        title: "SB NAGAMOCHI",
        href: "/",
      },
      {
        id: 16,
        title: "DP GROUP",
        href: "/",
      },
      {
        id: 17,
        title: "SB NAGAMOCHI",
        href: "/",
      },
    ],
    blocks: [
      {
        id: 1,
        heading: "Искомый артикул",
        items: [
          {
            id: 1,
            articul: "DP GROUP bp43001",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 23,
                warehouse: "Санкт-Петербург",
                delivery: 4,
                price1: 180000,
                price2: 180000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 45,
                warehouse: "Санкт-Петербург",
                delivery: 4,
                price1: 145000,
                price2: 145000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 70,
                warehouse: "Санкт-Петербург",
                delivery: 2,
                price1: 112000,
                price2: 112000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 130,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 80000,
                price2: 80000,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        heading: "Аналоги",
        items: [
          {
            id: 1,
            articul: "Some brand",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 14,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 245000,
                price2: 245000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 22,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 150000,
                price2: 150000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 34,
                warehouse: "Санкт-Петербург",
                delivery: 2,
                price1: 130000,
                price2: 130000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 44,
                warehouse: "Санкт-Петербург",
                delivery: 3,
                price1: 115000,
                price2: 115000,
              },
            ],
          },
          {
            id: 2,
            articul: "Test",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 1,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 100000,
                price2: 100000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 4,
                warehouse: "Санкт-Петербург",
                delivery: 1,
                price1: 90000,
                price2: 90000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 6,
                warehouse: "Санкт-Петербург",
                delivery: 3,
                price1: 95000,
                price2: 95000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 4,
                warehouse: "Санкт-Петербург",
                delivery: 4,
                price1: 40000,
                price2: 40000,
              },
            ],
          },
          {
            id: 3,
            articul: "DP GROUP bp43001",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 4,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 130000,
                price2: 130000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 4,
                warehouse: "Санкт-Петербург",
                delivery: 1,
                price1: 110000,
                price2: 110000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 130,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 85000,
                price2: 85000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 45,
                warehouse: "Санкт-Петербург",
                delivery: 2,
                price1: 150000,
                price2: 150000,
              },
            ],
          },
          {
            id: 4,
            articul: "DP GROUP bp43001",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 220,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 165000,
                price2: 165000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 3,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 120000,
                price2: 120000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 6,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 110000,
                price2: 110000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 3,
                warehouse: "Санкт-Петербург",
                delivery: 1,
                price1: 95000,
                price2: 95000,
              },
            ],
          },
          {
            id: 5,
            articul: "DP GROUP bp43001",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 1,
                warehouse: "Санкт-Петербург",
                delivery: 2,
                price1: 145000,
                price2: 145000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 20,
                warehouse: "Санкт-Петербург",
                delivery: 3,
                price1: 115000,
                price2: 115000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 40,
                warehouse: "Санкт-Петербург",
                delivery: 1,
                price1: 110000,
                price2: 110000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 50,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 95000,
                price2: 95000,
              },
            ],
          },
          {
            id: 6,
            articul: "A Brand",

            items: [
              {
                id: 1,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 3,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 95000,
                price2: 95000,
              },
              {
                id: 2,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 14,
                warehouse: "Санкт-Петербург",
                delivery: 0,
                price1: 85000,
                price2: 85000,
              },
              {
                id: 3,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 27,
                warehouse: "Санкт-Петербург",
                delivery: 3,
                price1: 75000,
                price2: 75000,
              },
              {
                id: 4,
                title:
                  "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
                amount: 232,
                quantity: 130,
                warehouse: "Санкт-Петербург",
                delivery: 4,
                price1: 70000,
                price2: 70000,
              },
            ],
          },
        ],
      },
    ],
  };
}
