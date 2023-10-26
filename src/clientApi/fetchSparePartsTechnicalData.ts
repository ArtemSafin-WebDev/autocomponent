import { AlphabetCatalogItem } from "@/components/AlphabetCatalog/AlphabetCatalog";

export default async function fetchSparePartsTechnicalData(): Promise<{
  heading: string;
  items: AlphabetCatalogItem[];
}> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    heading: "Запчасти для TO",
    items: [
      {
        letter: "A",
        items: [
          {
            id: 1,
            title: "Audi",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Audi",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Audi",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Audi",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "B",
        items: [
          {
            id: 1,
            title: "BMW",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "BMW",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Bentley",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "BMW",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "C",
        items: [
          {
            id: 1,
            title: "Chrysler",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Citroen",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Cadillac",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Citroen",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "D",
        items: [
          {
            id: 1,
            title: "Daewoo",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Datsun",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "E",
        items: [
          {
            id: 1,
            title: "Ebrand",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Ebrand",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "F",
        items: [
          {
            id: 1,
            title: "FAW",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Fiat",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Ford",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Ferrari",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "G",
        items: [
          {
            id: 1,
            title: "Geely",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Genesis",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "GAZ",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Gibbs",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "H",
        items: [
          {
            id: 1,
            title: "Haval",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Honda",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Hyundaui",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Honghi",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "I",
        items: [
          {
            id: 1,
            title: "Infinity",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Iveco",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "J",
        items: [
          {
            id: 1,
            title: "JAC",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Jaguar",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "JMC",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "L",
        items: [
          {
            id: 1,
            title: "Lexus",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Land Rover",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Lucid",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 4,
            title: "Lifan",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 5,
            title: "Li Auto",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "M",
        items: [
          {
            id: 1,
            title: "Maserati",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Mercedes",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 3,
            title: "Mazda",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "N",
        items: [
          {
            id: 1,
            title: "Nissan",
            href: "/spare-parts-technical/audi",
          },
          {
            id: 2,
            title: "Nio",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
      {
        letter: "O",
        items: [
          {
            id: 1,
            title: "Opel",
            href: "/spare-parts-technical/audi",
          },
        ],
      },
    ],
  };
}
