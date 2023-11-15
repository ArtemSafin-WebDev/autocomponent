"use client";

import FiltersIcon from "@/icons/Filters";
import styles from "./goodsFilters.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import RemoveIcon from "@/icons/RemoveIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GoodsFiltersCategoryBtn from "./GoodsFiltersCategoryBtn";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import Choice from "../Choice/Choice";
import GoodsSidebar from "@/components/GoodsSidebar/GoodsSidebar";
import { FetchGoodsParams, FiltersCardItem } from "@/types/api";
import FilterResults from "../FilterResults/FilterResults";
import fetchGoods from "@/clientApi/fetchGoods";
import Pagination from "../Pagination/Pagination";

type GoodsCategory = {
  id: number;
  name: string;
  icon: string;
};

type Sort = "name" | "oem" | "brand" | "price" | "";

const manufacturerBrands = [
  "SAILUN",
  "MITSUBISHI",
  "YOKOHAMA",
  "Kids Planet",
  "Alcasta",
  "ЕвроДеталь",
  "AURA",
  "Red Energy",
  "Airline",
  "Димитровград",
  "STARTVOLT",
];

type FiltersCategory = {
  id: number | string;
  title: string;
  items?: FiltersCategory[];
  isVisible?: boolean;
};

export type { FiltersCategory };

const filterCategories: FiltersCategory[] = [
  {
    id: 1,
    title: "Шины, диски, колпаки",
    items: [
      {
        id: 3,
        title: "Колесный крепёж, метизы",
      },
      {
        id: 4,
        title: "Колпаки",
        items: [
          {
            id: 1,
            title: "R13",
          },
          {
            id: 2,
            title: "R14",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Электродвигатели",
    items: [
      {
        id: 1,
        title: "Для стеклоочистителя",
      },
      {
        id: 2,
        title: "Для чего-то еще",
      },
    ],
  },

  {
    id: 2,
    title: "Автосвет",
    items: [
      {
        id: 1,
        title: "Категория 1",
      },
      {
        id: 2,
        title: "Категория 2",
      },
      {
        id: 3,
        title: "Категория 3",
      },
      {
        id: 4,
        title: "Категория 4",
        items: [
          {
            id: 1,
            title: "Категория 1",
          },
          {
            id: 2,
            title: "Категория 2",
          },
        ],
      },
    ],
  },
];

const categories: GoodsCategory[] = [
  {
    id: 1,
    name: "Шины",
    icon: "/filter-categories/1.svg",
  },
  {
    id: 2,
    name: "Диски",
    icon: "/filter-categories/2.svg",
  },
  {
    id: 3,
    name: "Аккумуляторы",
    icon: "/filter-categories/1.svg",
  },
  {
    id: 4,
    name: "Автолампы",
    icon: "/filter-categories/1.svg",
  },
  {
    id: 5,
    name: "Щётки",
    icon: "/filter-categories/1.svg",
  },
];

// const showByOptions = [
//   {
//     name: "По 30",
//     value: 30,
//   },
//   {
//     name: "По 100",
//     value: 100,
//   },
//   {
//     name: "По 300",
//     value: 300,
//   },
//   {
//     name: "По 500",
//     value: 500,
//   },
// ];
const showByOptions = [
  {
    name: "По 3",
    value: 3,
  },
  {
    name: "По 5",
    value: 5,
  },
  {
    name: "По 8",
    value: 8,
  },
  {
    name: "По 10",
    value: 10,
  },
];

export default function GoodsFilters({
  items,
  totalCount,
}: {
  items: FiltersCardItem[];
  totalCount: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [autoloading, setAutoloading] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [marginFrom, setMarginFrom] = useState("");
  const [marginTo, setMarginTo] = useState("");
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activeCategories, setActiveCategories] = useState<FiltersCategory[]>(
    []
  );

  const [mounted, setMounted] = useState(false);

  const [filteredGoods, setFilteredGoods] = useState<FiltersCardItem[]>([]);

  const [filteredTotal, setFilteredTotal] = useState<number>(0);

  const [sort, setSort] = useState<Sort>("");

  const handleSetPriceFrom = useCallback(
    (price: string) => {
      setPriceFrom(price);
    },
    [setPriceFrom]
  );
  const handleSetPriceTo = useCallback(
    (price: string) => {
      setPriceTo(price);
    },
    [setPriceTo]
  );
  const handleSetMarginFrom = useCallback(
    (price: string) => {
      setMarginFrom(price);
    },
    [setMarginFrom]
  );
  const handleSetMarginTo = useCallback(
    (price: string) => {
      setMarginTo(price);
    },
    [setMarginTo]
  );

  const showBy = searchParams.get("show_by");
  let pagesCount = 1;

  const currentPage = searchParams.has("page")
    ? Number(searchParams.get("page"))
    : 1;

  if (mounted) {
    if (filteredTotal && showBy) {
      pagesCount = Math.ceil(filteredTotal / Number(showBy));
    }
  } else {
    if (totalCount && showBy) {
      pagesCount = Math.ceil(totalCount / Number(showBy));
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    router.push(pathname + "?" + params.toString());
  }, [pagesCount]);

  const activeShowByItem = useMemo(() => {
    if (showBy) {
      const matchingItem = showByOptions.find(
        (item) => item.value.toString() === showBy
      );
      if (matchingItem) return matchingItem;
    }
    return showByOptions[0];
  }, [showBy, showByOptions]);

  useEffect(() => {
    if (activeShowByItem) {
      const params = new URLSearchParams(searchParams);
      params.set("show_by", activeShowByItem.value.toString());
      router.push(pathname + "?" + params.toString());
    }
  }, []);

  console.log("ACTIVE SHOW BY ITEM", activeShowByItem);

  console.log("ACRIVE CATEGORIES", activeCategories);

  useEffect(() => {
    const params: FetchGoodsParams = {};

    if (activeBrands.length) {
      params.brands = activeBrands;
    }

    if (priceFrom) {
      params.priceFrom = Number(priceFrom);
    }

    if (priceTo) {
      params.priceTo = Number(priceTo);
    }
    if (marginFrom) {
      params.marginFrom = Number(marginFrom);
    }

    if (marginTo) {
      params.marginTo = Number(marginTo);
    }

    if (activeCategories.length) {
      params.categories = activeCategories;
    }

    params.page = currentPage;

    if (showBy) {
      params.showPerPage = Number(showBy);
    }

    if (sort) {
      params.sort = sort;
    }

    const fetchData = async () => {
      try {
        const data = await fetchGoods(params);

        console.log("Filtered goods", data);
        setFilteredGoods(data.items);
        setFilteredTotal(data.total);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [
    activeShowByItem,
    activeBrands,
    priceFrom,
    priceTo,
    marginFrom,
    marginTo,
    activeCategories,
    showBy,
    currentPage,
    sort,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className={styles.goodsFilters}>
        <div className={styles.topRow}>
          <button
            className={styles.filtersBtn}
            onClick={() => setModalToggle(true)}
          >
            <FiltersIcon />
            Фильтр
          </button>
          <GoodsSidebar
            isActive={modalToggle}
            onClose={() => {
              setModalToggle(false);
            }}
            priceFrom={priceFrom}
            priceTo={priceTo}
            marginFrom={marginFrom}
            marginTo={marginTo}
            setPriceFrom={handleSetPriceFrom}
            setPriceTo={handleSetPriceTo}
            setMarginFrom={handleSetMarginFrom}
            setMarginTo={handleSetMarginTo}
            manufacturerBrands={manufacturerBrands}
            activeBrands={activeBrands}
            setActiveBrands={setActiveBrands}
            filterCategories={filterCategories}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
            onReset={() => {
              setActiveBrands([]);
              setActiveCategories([]);
              setMarginFrom("");
              setMarginTo("");
              setPriceFrom("");
              setPriceTo("");
            }}
          />
          {categories?.length ? (
            <div className={styles.categories}>
              {categories.map((category) => (
                <GoodsFiltersCategoryBtn
                  name={category.name}
                  icon={category.icon}
                  key={category.id}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.removeBtns}>
            {activeCategories?.length ? (
              <button
                className={styles.removeBtn}
                key={"Категории"}
                onClick={() => setActiveCategories([])}
              >
                {activeCategories.length} категории
                <span className={styles.removeBtnIcon}>
                  <RemoveIcon />
                </span>
              </button>
            ) : null}

            {priceFrom || priceTo || marginFrom || marginTo ? (
              <button
                className={styles.removeBtn}
                key={"Цена"}
                onClick={() => {
                  setPriceFrom("");
                  setPriceTo("");
                  setMarginFrom("");
                  setMarginTo("");
                }}
              >
                Цена
                <span className={styles.removeBtnIcon}>
                  <RemoveIcon />
                </span>
              </button>
            ) : null}

            {activeBrands.length ? (
              <button
                className={styles.removeBtn}
                key={"Производитель"}
                onClick={() => setActiveBrands([])}
              >
                Производитель
                <span className={styles.removeBtnIcon}>
                  <RemoveIcon />
                </span>
              </button>
            ) : null}

            {priceFrom ||
            priceTo ||
            marginFrom ||
            marginTo ||
            activeBrands?.length ? (
              <button
                className={styles.removeBtn}
                key={"Сбросить всё"}
                onClick={() => {
                  setPriceFrom("");
                  setPriceTo("");
                  setMarginFrom("");
                  setMarginTo("");
                  setActiveBrands([]);
                }}
              >
                Сбросить всё
                <span className={styles.removeBtnIcon}>
                  <RemoveIcon />
                </span>
              </button>
            ) : null}
          </div>
          <div className={styles.controls}>
            <ToggleBtn
              text="Автоподгрузка страниц"
              onToggle={(value) => setAutoloading(value)}
            />
            <Choice
              prefix="Показывать"
              choices={showByOptions}
              onSelect={(item) => {
                console.log("Setting show by item", item);
                const params = new URLSearchParams(searchParams);
                params.set("show_by", item.value.toString());
                router.push(pathname + "?" + params.toString());
              }}
              selected={activeShowByItem}
            />
          </div>
        </div>
      </div>

      <FilterResults
        items={mounted ? filteredGoods : items}
        sort={sort}
        setSort={setSort}
      />
      {pagesCount > 1 ? (
        <div className={styles.paginationWrapper}>
          <Pagination pagesCount={pagesCount} />
        </div>
      ) : null}
    </>
  );
}
