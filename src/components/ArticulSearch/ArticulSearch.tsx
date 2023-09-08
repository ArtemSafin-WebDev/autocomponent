"use client";

import Link from "next/link";
import styles from "./articulSearch.module.scss";

import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import SearchIcon from "@/icons/Search";
import PriceRange from "../PriceRange/PriceRange";

import ArticulSearchTableBlock from "./ArticulSearchTableBlock";
import {
  ArticulSearchCard,
  ArticulSearchData,
  ArticulTableBlock,
  ArticulTableItem,
} from "@/types/api";
import numWords from "@/utils/numWord";

type DeliveryDate = {
  id: number;
  title: string;
  checked?: boolean;
  value: number;
};

type Brand = {
  id: number;
  title: string;
  checked?: boolean;
};

export default function ArticulSearch({ data }: { data: ArticulSearchData }) {
  const { otherBrands, blocks } = data;

  const deliveryCheckboxes: DeliveryDate[] = Array.from(
    new Set(
      blocks
        .map((block) =>
          block.items.map((item) => item.items.map((item) => item.delivery))
        )
        .flat()
        .flat()
    )
  )
    .sort((a, b) => {
      return a - b;
    })
    .map((item, itemIndex) => {
      return {
        id: itemIndex,
        title:
          item === 0
            ? "Сегодня"
            : `${item} ${numWords(item, ["день", "дня", "дней"])}`,
        value: item,
        checked: false,
      };
    });

  const [deliveryDates, setDeliveryDates] = useState<DeliveryDate[]>(
    deliveryCheckboxes.filter((checkbox) => checkbox.checked)
  );

  const brandsCheckboxes: Brand[] = Array.from(
    new Set(
      blocks.map((block) => block.items.map((item) => item.articul)).flat()
    )
  ).map((brand, brandIndex) => {
    return {
      id: brandIndex,
      title: brand,
      checked: false,
    };
  });

  const [brands, setBrands] = useState<Brand[]>(
    brandsCheckboxes.filter((checkbox) => checkbox.checked)
  );

  const [brandSearch, setBrandSearch] = useState("");

  let filteredBrands: Brand[] = [];

  if (brandSearch === "") {
    filteredBrands = [...brandsCheckboxes];
  } else {
    filteredBrands = brandsCheckboxes.filter((checkbox) =>
      checkbox.title.toLocaleLowerCase().startsWith(brandSearch.toLowerCase())
    );
  }

  const prices = blocks
    .map((block) =>
      block.items.map((item) => item.items.map((item) => item.price1))
    )
    .flat()
    .flat();

  const maxPriceValue = Math.max(...prices);

  console.log("Max price values", maxPriceValue);

  const [range, setRange] = useState<[number, number]>();

  console.log("Range", range);

  let filteredBlocks: ArticulTableBlock[] = blocks;

  if (brands.length) {
    const blocksCopy = [...filteredBlocks];
    const brandsTitles = brands.map((brand) => brand.title);
    filteredBlocks = [];
    for (let block of blocksCopy) {
      const items = block.items;
      const itemsMatchingBrands = items.filter((item) =>
        brandsTitles.includes(item.articul)
      );
      if (!itemsMatchingBrands.length) continue;
      filteredBlocks.push({
        ...block,
        items: itemsMatchingBrands,
      });
    }
  }

  if (deliveryDates.length) {
    const blocksCopy = [...filteredBlocks];
    const deliveryDatesValues = deliveryDates.map((date) => date.value);
    filteredBlocks = [];
    for (let block of blocksCopy) {
      const items = block.items;
      let matchingItems: ArticulTableItem[] = [];
      for (let item of items) {
        const filteredInnerItems = item.items.filter((item) =>
          deliveryDatesValues.includes(item.delivery)
        );
        if (!filteredInnerItems.length) continue;
        const newItem = {
          ...item,
          items: filteredInnerItems,
        };
        matchingItems.push(newItem);
      }
      if (!matchingItems.length) continue;
      filteredBlocks.push({
        ...block,
        items: matchingItems,
      });
    }
  }

  if (Array.isArray(range)) {
    const [minPrice, maxPrice] = range;
    const blocksCopy = [...filteredBlocks];
    filteredBlocks = [];

    for (let block of blocksCopy) {
      const items = block.items;
      let matchingItems: ArticulTableItem[] = [];
      for (let item of items) {
        let filteredInnerItems: ArticulSearchCard[] = [];

        filteredInnerItems = item.items.filter((item) => {
          if (item.price2) {
            return (
              Math.min(item.price1, item.price2) >= minPrice &&
              Math.min(item.price1, item.price2) <= maxPrice
            );
          }
          return item.price1 >= minPrice && item.price1 <= maxPrice;
        });
        if (!filteredInnerItems.length) continue;
        const newItem = {
          ...item,
          items: filteredInnerItems,
        };
        matchingItems.push(newItem);
      }
      if (!matchingItems.length) continue;
      filteredBlocks.push({
        ...block,
        items: matchingItems,
      });
    }
  }

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
            {filteredBlocks.map((block) => (
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
                maxValue={maxPriceValue}
                startValue={0}
                endValue={maxPriceValue}
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
              {filteredBrands?.length ? (
                <div className={styles.checkboxesScrollWrapper}>
                  <ul className={styles.checkboxesList}>
                    {filteredBrands.map((checkbox) => (
                      <li
                        className={styles.checkboxesListItem}
                        key={checkbox.id}
                      >
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
                                brands.filter(
                                  (brand) => brand.id !== checkbox.id
                                )
                              );
                            }
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className={styles.brandsNotFound}>Бренды не найдены</div>
              )}
            </div>
            <div className={styles.filtersBlock}>
              <h3 className={styles.filtersBlockHeading}>Срок доставки</h3>
              <div className={styles.checkboxesScrollWrapper}>
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
    </div>
  );
}
