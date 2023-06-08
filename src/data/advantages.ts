import { Advantage } from "@/types/api";

const advantages: Advantage[] = [
  {
    src: "/advantages/1.svg",
    title: "Оптовая продажа",
    desc: "100500 наименований в&nbsp;наличии",
  },
  {
    src: "/advantages/2.svg",
    title: "Официальный дилер",
    desc: "ОАО «Лада-Имидж»<br> и&nbsp;более 60&nbsp;производителей",
  },
  {
    src: "/advantages/3.svg",
    title: "Индивидуальный подход",
    desc: "Индивидуальные условия, личный менеджер",
  },
  {
    src: "/advantages/4.svg",
    title: "Доставка",
    desc: "По Санкт-Петербургу, области и&nbsp;северо-западу",
  },
];

export const getAdvantages = () =>
  new Promise<Advantage[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(advantages);
    }, 20);
  });
