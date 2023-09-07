import { AlphabetCatalogItem } from "@/components/AlphabetCatalog/AlphabetCatalog";

export default async function fetchSparePartsData(): Promise<{
  heading: string;
  items: AlphabetCatalogItem[];
}> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    heading: "Запчасти для иномарок",
    items: [
      {
        letter: "A",
        items: [
          {
            id: 1,
            title: "Audi",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Audi",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Audi",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Audi",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "B",
        items: [
          {
            id: 1,
            title: "BMW",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "BMW",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Bentley",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "BMW",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "C",
        items: [
          {
            id: 1,
            title: "Chrysler",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Citroen",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Cadillac",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Citroen",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "D",
        items: [
          {
            id: 1,
            title: "Daewoo",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Datsun",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "E",
        items: [
          {
            id: 1,
            title: "Ebrand",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Ebrand",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "F",
        items: [
          {
            id: 1,
            title: "FAW",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Fiat",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Ford",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Ferrari",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "G",
        items: [
          {
            id: 1,
            title: "Geely",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Genesis",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "GAZ",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Gibbs",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "H",
        items: [
          {
            id: 1,
            title: "Haval",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Honda",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Hyundaui",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Honghi",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "I",
        items: [
          {
            id: 1,
            title: "Infinity",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Iveco",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "J",
        items: [
          {
            id: 1,
            title: "JAC",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Jaguar",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "JMC",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "L",
        items: [
          {
            id: 1,
            title: "Lexus",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Land Rover",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Lucid",
            href: "/spare-parts/audi",
          },
          {
            id: 4,
            title: "Lifan",
            href: "/spare-parts/audi",
          },
          {
            id: 5,
            title: "Li Auto",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "M",
        items: [
          {
            id: 1,
            title: "Maserati",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Mercedes",
            href: "/spare-parts/audi",
          },
          {
            id: 3,
            title: "Mazda",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "N",
        items: [
          {
            id: 1,
            title: "Nissan",
            href: "/spare-parts/audi",
          },
          {
            id: 2,
            title: "Nio",
            href: "/spare-parts/audi",
          },
        ],
      },
      {
        letter: "O",
        items: [
          {
            id: 1,
            title: "Opel",
            href: "/spare-parts/audi",
          },
        ],
      },
    ],
  };
}
