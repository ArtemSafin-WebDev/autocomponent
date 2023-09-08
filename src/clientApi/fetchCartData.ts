import { CartData } from "@/types/api";

export default async function fetchCartData(): Promise<CartData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 13062820,
        code: 337826,
        manufacturer: "Астро",
        warehouse: "Основной склад",
        pricePerUnit: 120000,
        amount: 2,

        date: 0,
      },
      {
        id: 2,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 23062820,
        code: 337826,
        manufacturer: "Астро",
        warehouse: "Основной склад",
        pricePerUnit: 110000,
        amount: 3,

        date: 0,
      },
      {
        id: 3,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 13062820,
        code: 337826,
        manufacturer: "Астро",
        warehouse: "Основной склад",
        pricePerUnit: 53000,
        amount: 4,

        date: 0,
      },
      {
        id: 4,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 43062820,
        code: 337826,
        manufacturer: "Астро",
        warehouse: "Основной склад",
        pricePerUnit: 100000,
        amount: 8,
        date: 1,
      },
      {
        id: 5,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 13062820,
        code: 337826,
        manufacturer: "Астро",
        amount: 5,
        warehouse: "Основной склад",
        pricePerUnit: 10000,

        date: 0,
      },
      {
        id: 6,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 13062820,
        code: 337826,
        manufacturer: "Б Тест",
        amount: 6,
        warehouse: "Основной склад",
        pricePerUnit: 40000,

        date: 1,
      },
      {
        id: 7,
        title:
          "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: 13062820,
        code: 337826,
        manufacturer: "Астро",
        warehouse: "Основной склад",
        pricePerUnit: 16000,
        date: 2,
        amount: 5,
      },
    ],
  };
}
