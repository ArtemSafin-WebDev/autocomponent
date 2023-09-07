import { CarsCatalogData } from "@/types/api";
import capitalize from "@/utils/capitalize";

export default async function fetchForeignCars(
  brand: string
): Promise<CarsCatalogData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    title: capitalize(brand),
    items: [
      {
        id: 1,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 2,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 3,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 4,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 5,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 6,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 7,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 8,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 9,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 10,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 11,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 12,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 13,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 14,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 15,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
      {
        id: 16,
        image: "/foreign.webp",
        title: "AUDI A4 Кабриолет (8H7, B6, 8HE, B7)",
        year: "2002–2009",
      },
    ],
  };
}
