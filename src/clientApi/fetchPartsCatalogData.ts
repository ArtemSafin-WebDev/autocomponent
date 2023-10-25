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
        href: "/",
        src: "",
      },
    ],
  };
}
