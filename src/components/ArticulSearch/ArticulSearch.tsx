"use client";

import Link from "next/link";
import styles from "./articulSearch.module.scss";
import { otherBrands } from "./otherBrands";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import SearchIcon from "@/icons/Search";
import PriceRange from "../PriceRange/PriceRange";
import tableBlocks from "./tableBlocks";
import ArticulSearchTableBlock from "./ArticulSearchTableBlock";

type OtherBrand = {
  id: number;
  title: string;
  href: string;
};

type DeliveryDate = {
  id: number;
  title: string;
  checked?: boolean;
};

type Brand = {
  id: number;
  title: string;
  checked?: boolean;
};

const deliveryCheckboxes: DeliveryDate[] = [
  {
    id: 1,
    title: "Сегодня",
    checked: true,
  },
  {
    id: 2,
    title: "2 дня",
    checked: false,
  },
  {
    id: 3,
    title: "3 дня",
    checked: false,
  },
  {
    id: 4,
    title: "4 дня",
    checked: false,
  },
  {
    id: 5,
    title: "5 дней",
    checked: false,
  },
];

const brandsCheckboxes: Brand[] = [
  {
    id: 1,
    title: "Бренд 1",
    checked: false,
  },
  {
    id: 2,
    title: "Бренд 2",
    checked: false,
  },
  {
    id: 3,
    title: "Бренд 3",
    checked: false,
  },
  {
    id: 4,
    title: "Бренд 4",
    checked: false,
  },
  {
    id: 5,
    title: "Бренд 5",
    checked: false,
  },
];

type ArticulSearchCard = {
  id: number;
  title: string;
  quantity: string;
  warehouse: string;
  delivery: string;
  amount: number;
  price1: string;
  price2: string;
};

type ArticulTableBlock = {
  id: number;
  heading: string;
  items: ArticulTableItem[];
};

type ArticulTableItem = {
  id: number;
  articul: string;
  otherArticuls: string[];
  items: ArticulSearchCard[];
};

export default function ArticulSearch() {
  const [deliveryDates, setDeliveryDates] = useState<DeliveryDate[]>(
    deliveryCheckboxes.filter((checkbox) => checkbox.checked)
  );
  const [brands, setBrands] = useState<Brand[]>(
    brandsCheckboxes.filter((checkbox) => checkbox.checked)
  );

  const [range, setRange] = useState<[number, number]>();
  const [brandSearch, setBrandSearch] = useState("");
  return (
    <div className={styles.articulSearch}>
      <h1 className={styles.heading}>Результаты поиска</h1>
      <div className={styles.otherBrands}>
        <h2 className={styles.otherBrandsHeading}>Другие бренды</h2>

        <ul className={styles.otherBrandsList}>
          {otherBrands.map((item) => (
            <li className={styles.otherBrandsListItem} key={item.id}>
              <Link href={item.href} className={styles.otherBrandsLink}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.tableBlocks}>
            {tableBlocks.map((block) => (
              <ArticulSearchTableBlock
                heading={block.heading}
                items={block.items}
                key={block.id}
              />
            ))}
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.filters}>
            <div className={styles.filtersBlock}>
              <h3 className={styles.filtersBlockHeading}>Цена, ₽</h3>
              <PriceRange
                maxValue={8000}
                startValue={0}
                endValue={4000}
                onValueSettle={(value) => setRange(value)}
              />
            </div>
            <div className={styles.filtersBlock}>
              <h3 className={styles.filtersBlockHeading}>Бренды</h3>
              <div className={styles.searchWrapper}>
                <SearchIcon />
                <input
                  className={styles.searchInput}
                  placeholder="Поиск бренда"
                  value={brandSearch}
                  onChange={(event) => setBrandSearch(event.target.value)}
                />
              </div>
              <ul className={styles.checkboxesList}>
                {brandsCheckboxes.map((checkbox) => (
                  <li className={styles.checkboxesListItem} key={checkbox.id}>
                    <Checkbox
                      title={checkbox.title}
                      checkedByDefault={checkbox.checked}
                      onToggle={(value) => {
                        console.log(
                          `Checkbox ${checkbox.title} value: `,
                          value
                        );
                        if (value) {
                          setBrands((brands) => [...brands, checkbox]);
                        } else {
                          setBrands((brands) =>
                            brands.filter((brand) => brand.id !== checkbox.id)
                          );
                        }
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.filtersBlock}>
              <h3 className={styles.filtersBlockHeading}>Срок доставки</h3>
              <ul className={styles.checkboxesList}>
                {deliveryCheckboxes.map((checkbox) => (
                  <li className={styles.checkboxesListItem} key={checkbox.id}>
                    <Checkbox
                      title={checkbox.title}
                      checkedByDefault={checkbox.checked}
                      onToggle={(value) => {
                        console.log(
                          `Checkbox ${checkbox.title} value: `,
                          value
                        );
                        if (value) {
                          setDeliveryDates((dates) => [...dates, checkbox]);
                        } else {
                          setDeliveryDates((dates) =>
                            dates.filter((date) => date.id !== checkbox.id)
                          );
                        }
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type {
  OtherBrand,
  ArticulSearchCard,
  ArticulTableBlock,
  ArticulTableItem,
};
