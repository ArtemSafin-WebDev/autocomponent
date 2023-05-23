import { Office } from "@/types/api";

const offices: Office[] = [
  {
    id: 1,
    phone: "8 (812) 718-75-57",
    address:
      "г. Санкт-Петербург, п. Шушары,<br /> Московское шоссе, 177 лит. А",
  },
  {
    id: 2,
    phone: "8 (8182) 27-66-58",
    address: "г. Архангельск",
  },
];

export const getOffices = () =>
  new Promise<Office[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(offices);
    }, 50);
  });
