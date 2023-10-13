import {TItem} from "@/components/ItemsTable/types";

export async function fetchStorageData(pageQuery: number = 1, countItems: number = 10): Promise<{
  currentItems: TItem[];
  countPagination: number | null
}> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  let items = [
      {
        id: 4,
        balance: 12,
        title:
          "Длектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "13",
        code: "337826",
        manufacturer: "Sailun",
        inStock: false,
        warehouse: "Основной склад",
        pricePerUnit: "2421",
        quantity: 232,
        total: "245 521,65",
        date: "1 день",
        category: "Колеса в сборе"
      },
      {
        id: 6,
        balance: 12,
        title:
          "Жлектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "13060",
        code: "337826",
        manufacturer: "Alcasta",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "2521",
        quantity: 232,
        total: "245 521,65",
        category: "Автосвет"
      },
      {
        id: 1,
        balance: 12,
        title:
          "Алектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "130820",
        code: "337826",
        manufacturer: "Airline",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "245521",
        quantity: 232,
        total: "245 521,65",
        category: "R13"
      },
      {
        id: 2,
        balance: 12,
        title:
          "Блектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "1306232820",
        code: "337826",
        manufacturer: "YOKOHAMA",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "24.552",
        quantity: 232,
        total: "245 521,65",
        category: "Материалы для шиномонтажа"
      },
      {
        id: 7,
        balance: 12,
        title:
          "Злектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "13020",
        code: "337826",
        manufacturer: "AURA",
        inStock: false,
        warehouse: "Основной склад",
        pricePerUnit: "24552.65",
        quantity: 232,
        total: "245 521,65",
        date: "2 дня",
        category: "R14"
      },
      {
        id: 5,
        balance: 12,
        title:
          "Електродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "13062324820",
        code: "337826",
        manufacturer: "ЕвроДеталь",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "2455.15",
        quantity: 232,
        total: "245 521,65",
        category: "Аккумуляторы и электрика"
      },
      {
        id: 3,
        balance: 12,
        title:
          "Влектродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Колесный крепёж, метизы"
      },
      {
        id: 121,
        balance: 12,
        title:
          "Шина",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Шины"
      },
      {
        id: 122,
        balance: 12,
        title:
          "Диски",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Диски"
      },
      {
        id: 122,
        balance: 12,
        title:
          "Аккумуляторы",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Аккумуляторы"
      },
      {
        id: 122,
        balance: 12,
        title:
          "Автолампы",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Автолампы"
      },
      {
        id: 122,
        balance: 12,
        title:
          "Щетки",
        oem: "12820",
        code: "337826",
        manufacturer: "RedEnergy",
        inStock: true,
        warehouse: "Основной склад",
        pricePerUnit: "552.1",
        quantity: 232,
        total: "245 521.65",
        category: "Щетки"
      },
    ]

    let indexOfLastItem

    if(!pageQuery) {
      indexOfLastItem = 1 * countItems
    } else {
      indexOfLastItem = Number(pageQuery) * countItems
    }
    const indexOfFirstItem = indexOfLastItem - countItems
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    return {currentItems, countPagination: Math.ceil(items.length / countItems)}
  };

