import { FetchGoodsData, FetchGoodsParams } from "@/types/api";

const items = [
  {
    id: 1,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "4062067",
    brand: "STARTVOLT",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 558521.65,
    categories: [
      {
        id: 3,
        title: "Электродвигатели",
      },
      {
        id: 1,
        title: "Для стеклоочистителя",
      },
    ],
  },
  {
    id: 2,
    title: "Колпаки ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "2062067",
    brand: "MITSUBISHI",
    inStock: true,
    amount: "12 шт",
    price: 245521.65,
    margin: 458521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 4,
        title: "Колпаки",
      },
    ],
  },
  {
    id: 3,
    title: "Колпаки ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "3062067",
    brand: "MITSUBISHI",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 18521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 4,
        title: "Колпаки",
      },
    ],
  },
  {
    id: 4,
    title: "Колесный крепеж ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "3062067",
    brand: "Airline",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 18521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 3,
        title: "Колесный крепёж, метизы",
      },
    ],
  },
  {
    id: 5,
    title: "Колесный крепеж ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "1062067",
    brand: "ЕвроДеталь",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 18521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 3,
        title: "Колесный крепёж, метизы",
      },
    ],
  },
  {
    id: 6,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "4062067",
    brand: "STARTVOLT",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 558521.65,
    categories: [
      {
        id: 3,
        title: "Электродвигатели",
      },
      {
        id: 1,
        title: "Для стеклоочистителя",
      },
    ],
  },
  {
    id: 7,
    title: "Колесный крепеж ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "1062067",
    brand: "ЕвроДеталь",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 18521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 3,
        title: "Колесный крепёж, метизы",
      },
    ],
  },
  {
    id: 4,
    title: "Колесный крепеж ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "LECAR000031112",
    code: "3062067",
    brand: "Red Energy",
    inStock: true,
    amount: "12 шт",
    price: 145521.65,
    margin: 18521.65,
    categories: [
      {
        id: 1,
        title: "Шины, диски, колпаки",
      },
      {
        id: 3,
        title: "Колесный крепёж, метизы",
      },
    ],
  },
];

export default async function fetchGoods(
  params?: FetchGoodsParams
): Promise<FetchGoodsData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  let filteredItems = [...items];

  if (params?.sort) {
    const sort = params.sort;

    if (sort === "brand") {
      filteredItems = [...filteredItems].sort((a, b) => {
        if (a.brand < b.brand) {
          return -1;
        } else if (a.brand > b.brand) {
          return 1;
        }
        return 0;
      });
    } else if (sort === "name") {
      filteredItems = [...filteredItems].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } else if (sort === "price") {
      filteredItems = [...filteredItems].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sort === "oem") {
      filteredItems = [...filteredItems].sort((a, b) => {
        if (a.oem < b.oem) {
          return -1;
        } else if (a.oem > b.oem) {
          return 1;
        }
        return 0;
      });
    }
  }

  if (params?.brands && params?.brands?.length) {
    const brands = params.brands;

    console.log("Incoming brands", brands);

    filteredItems = filteredItems.filter((item) =>
      brands
        .map((item) => item.trim().toLocaleLowerCase())
        .includes(item.brand.trim().toLowerCase())
    );
  }

  if (params?.priceFrom) {
    const priceFrom = params.priceFrom;
    filteredItems = filteredItems.filter((item) => item.price >= priceFrom);
  }
  if (params?.priceTo) {
    const priceTo = params.priceTo;
    filteredItems = filteredItems.filter((item) => item.price <= priceTo);
  }
  if (params?.marginFrom) {
    const marginFrom = params.marginFrom;
    filteredItems = filteredItems.filter((item) => item.margin >= marginFrom);
  }
  if (params?.marginTo) {
    const marginTo = params.marginTo;
    filteredItems = filteredItems.filter((item) => item.margin <= marginTo);
  }

  if (params?.categories?.length) {
    const categories = params.categories;

    filteredItems = filteredItems.filter((item) => {
      if (!item.categories) return true;
      if (
        item.categories.some(
          (category) =>
            !!categories.find(
              (activeCat) =>
                activeCat.title.toLowerCase() ===
                  category.title.toLowerCase() && category.id === activeCat.id
            )
        )
      ) {
        return true;
      } else {
        return false;
      }
    });

    console.log("Categories", categories);
  }

  const totalCount = filteredItems.length;

  if (params?.page && params.showPerPage) {
    const currentPage = params.page;
    const showPerPage = params.showPerPage;
    filteredItems = filteredItems.slice(
      (currentPage - 1) * showPerPage,
      showPerPage * currentPage
    );
  }

  return {
    items: filteredItems,
    total: totalCount,
  };
}
