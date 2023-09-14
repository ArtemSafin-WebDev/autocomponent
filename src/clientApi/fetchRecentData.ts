import { PromoData, RecentData } from "@/types/api";

export default async function fetchRecentData(): Promise<RecentData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 2,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 3,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 4,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 5,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 6,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 7,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
      {
        id: 8,
        title: "Новинки",
        date: "на 21 января 2023",
        iconUrl: "/file.svg",
        btnText: "Скачать новинки (excel)",
        href: "/",
      },
    ],
  };
}
