import { CertificatesData } from "@/types/api";

export default async function fetchCertificatesData(): Promise<CertificatesData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    items: [
      {
        id: 1,
        src: "/certificates/1.webp",
      },
      {
        id: 2,
        src: "/certificates/2.webp",
      },
      {
        id: 3,
        src: "/certificates/3.webp",
      },
      {
        id: 4,
        src: "/certificates/4.webp",
      },
      {
        id: 5,
        src: "/certificates/5.webp",
      },
      {
        id: 6,
        src: "/certificates/6.webp",
      },
      {
        id: 7,
        src: "/certificates/7.webp",
      },
      {
        id: 8,
        src: "/certificates/8.webp",
      },
      {
        id: 9,
        src: "/certificates/9.webp",
      },
      {
        id: 10,
        src: "/certificates/10.webp",
      },
      {
        id: 11,
        src: "/certificates/11.webp",
      },
      {
        id: 12,
        src: "/certificates/12.webp",
      },
      {
        id: 13,
        src: "/certificates/13.webp",
      },
      {
        id: 14,
        src: "/certificates/14.webp",
        wide: true,
      },
      {
        id: 15,
        src: "/certificates/15.webp",
        wide: true,
      },
    ],
  };
}
