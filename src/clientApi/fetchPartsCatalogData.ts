import { CatalogPartsData } from "@/types/api";

export default async function fetchPartsCatalogData(): Promise<CatalogPartsData> {
  await new Promise<string>((resolve, _reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    categories: [
      {
        id: 1,
        title: "Кузов",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 2,
        title: "Двигатель",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 3,
        title: "Фильтр",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 4,
        title: "Ременной привод",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 5,
        title: "Система подачи топлива",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 6,
        title: "Подготовка топливной смеси",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 7,
        title: "Система сцепления навесные части",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 8,
        title: "Подвеска оси / система подвески / колеса",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 9,
        title: "Подача дополнительного воздуха",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 10,
        title: "Подача дополнительного воздуха",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
      {
        id: 11,
        title: "Подача дополнительного воздуха",
        href: "/parts-catalog/test/test",
        src: "/catalog-category.webp",
      },
    ],
  };
}
