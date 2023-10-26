import { PartsInCategoryData } from "@/types/api";

export default async function fetchPartsInCategory(): Promise<PartsInCategoryData> {
  await new Promise<string>((resolve, _reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 2,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 3,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: false,
      },
      {
        id: 4,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: false,
      },
      {
        id: 5,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 6,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 7,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 8,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 9,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 10,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 11,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: false,
      },
      {
        id: 12,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: false,
      },
      {
        id: 13,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 14,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 15,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: true,
      },
      {
        id: 16,
        title: "Водяной насос",
        brand: "BUGATTI",
        articul: "pa10162",
        href: "/",
        original: false,
      },
    ],
  };
}
