import { v4 as uuidv4 } from "uuid";
import { ApplicableBrand, ApplicableModel } from "./InfoModal";

const MODELS_COUNT = 5;
const BRANDS_COUNT = 40;
const brands = ["Audi", "Ford", "Volvo", "Mazda"];

const brandsItems: ApplicableBrand[] = [];

for (let i = 0; i < BRANDS_COUNT; i++) {
  const randomBrandIndex = Math.floor(Math.random() * brands.length);
  const randomBrand = brands[randomBrandIndex];
  const brandItem = {
    id: uuidv4(),
    title: randomBrand,

    items: Array<ApplicableModel>(MODELS_COUNT)
      .fill(
        {
          id: "",
          brand: randomBrand,
          title: "AUDI 80 (81, 85, B2) 1.8 GTE quattro (85Q)",
          year: 2010,
          engine: "AAD",
          power: "100 Кв / 136 Лс",
          volume: "2309 См3",
          body: "Наклонная задняя часть",
        },
        0
      )
      .map((item) => {
        return { ...item, id: uuidv4() };
      }),
  };
  brandsItems.push(brandItem);
}

export default brandsItems;
