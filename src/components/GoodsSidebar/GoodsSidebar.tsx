"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./goodsSidebar.module.scss";
import SearchIcon from "@/icons/Search";
import GoodsCheckbox from "../GoodsCheckbox/GoodsCheckbox";
import { createPortal } from "react-dom";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { FiltersCategory } from "../GoodsFilters/GoodsFilters";
import GoodsFilterCategory from "./GoodsFilterCategory";
import CloseIcon from "@/icons/Close";

interface GoodsSidebarProps {
  isActive?: boolean;
  onClose: () => void;
  priceFrom: string;
  priceTo: string;
  marginFrom: string;
  marginTo: string;
  setPriceFrom: (price: string) => void;
  setPriceTo: (price: string) => void;
  setMarginFrom: (price: string) => void;
  setMarginTo: (price: string) => void;
  manufacturerBrands: string[];
  activeBrands: string[];
  setActiveBrands: (brands: string[]) => void;
  filterCategories: FiltersCategory[];
  activeCategories: FiltersCategory[];
  setActiveCategories: Dispatch<SetStateAction<FiltersCategory[]>>;
  onReset: () => void;
}

export default function GoodsSidebar({
  isActive,
  onClose,
  setPriceFrom,
  setPriceTo,
  priceFrom,
  priceTo,
  marginFrom,
  marginTo,
  setMarginFrom,
  setMarginTo,
  manufacturerBrands,
  activeBrands,
  setActiveBrands,
  filterCategories,
  activeCategories,
  setActiveCategories,
  onReset,
}: GoodsSidebarProps) {
  const [brandSearch, setBrandSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const outsideClickHandler = useCallback(() => onClose(), []);

  useOnClickOutside(innerModalRef, outsideClickHandler);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add(styles.modalOpen);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }
    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, [isActive]);

  const filteredBrands = useMemo(() => {
    if (brandSearch.trim() === "") {
      return manufacturerBrands;
    } else {
      return manufacturerBrands.filter((brand) =>
        brand.toLowerCase().startsWith(brandSearch.toLowerCase())
      );
    }
  }, [brandSearch, manufacturerBrands]);

  const filteredCategories: (FiltersCategory & {
    isVisible?: boolean;
  })[] = useMemo(() => {
    if (categorySearch.trim() === "") return filterCategories;

    const searchInside = (
      cat: FiltersCategory
    ): FiltersCategory & { isVisible: boolean } => {
      if (
        cat.title.toLowerCase().startsWith(categorySearch.toLocaleLowerCase())
      )
        return {
          ...cat,
          isVisible: true,
        };

      if (cat.items?.length) {
        const innerCategories = cat.items.map((category) =>
          searchInside(category)
        );

        const hasTermInInnerCategories = innerCategories.some(
          (category) => category.isVisible === true
        );

        if (hasTermInInnerCategories) {
          return {
            ...cat,
            isVisible: true,
            items: innerCategories,
          };
        } else {
          return {
            ...cat,
            isVisible: false,
          };
        }
      }

      return {
        ...cat,
        isVisible: false,
      };
    };
    const passingCategories = filterCategories.map((category) =>
      searchInside(category)
    );

    return passingCategories;
  }, [categorySearch]);

  return (
    <>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isActive && (
              <motion.div
                className={styles.goodsSidebar}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className={styles.goodsSidebarInner}
                  ref={innerModalRef}
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{ ease: "easeOut" }}
                >
                  <div className={styles.scrollWrapper}>
                    <div className={styles.innerScroller}>
                      <button
                        className={styles.sidebarClose}
                        onClick={() => onClose()}
                      >
                        <CloseIcon />
                      </button>
                      <div className={styles.prices}>
                        <div className={styles.pricesBlock}>
                          <h3 className={styles.priceBlockTitle}>Цена, ₽</h3>
                          <div className={styles.priceInputs}>
                            <input
                              className={styles.priceInput}
                              onChange={(event) => {
                                const result = event.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setPriceFrom(result);
                              }}
                              value={
                                priceFrom.trim() !== "" ? Number(priceFrom) : ""
                              }
                              placeholder="от"
                            />
                            <input
                              className={styles.priceInput}
                              onChange={(event) => {
                                const result = event.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setPriceTo(result);
                              }}
                              value={
                                priceTo.trim() !== "" ? Number(priceTo) : ""
                              }
                              placeholder="до"
                            />
                          </div>
                        </div>
                        <div className={styles.pricesBlock}>
                          <h3 className={styles.priceBlockTitle}>
                            Цена с наценкой, ₽
                          </h3>
                          <div className={styles.priceInputs}>
                            <input
                              className={styles.priceInput}
                              onChange={(event) => {
                                const result = event.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setMarginFrom(result);
                              }}
                              value={marginFrom}
                              placeholder="от"
                            />
                            <input
                              className={styles.priceInput}
                              onChange={(event) => {
                                const result = event.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setMarginTo(result);
                              }}
                              value={marginTo}
                              placeholder="до"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.manufacturer}>
                        <h3 className={styles.manufacturerTitle}>
                          Производитель
                        </h3>
                        <div className={styles.manufacturerSearch}>
                          <SearchIcon />
                          <input
                            type="text"
                            className={styles.manufacturerSearchInput}
                            placeholder="Поиск производителя"
                            onChange={(event) => {
                              setBrandSearch(event.target.value);
                            }}
                          />
                        </div>
                        <div className={styles.manufacturerScrollWrapper}>
                          <ul className={styles.manufacturerList}>
                            {filteredBrands.map((item) => (
                              <li
                                className={styles.manufacturerListItem}
                                key={item}
                              >
                                <GoodsCheckbox
                                  title={item}
                                  onToggle={(value) => {
                                    if (value) {
                                      setActiveBrands(
                                        Array.from(
                                          new Set([...activeBrands, item])
                                        )
                                      );
                                    } else {
                                      setActiveBrands(
                                        [...activeBrands].filter(
                                          (brand) => brand !== item
                                        )
                                      );
                                    }
                                  }}
                                  active={activeBrands.includes(item)}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={styles.category}>
                        <h3 className={styles.categoryTitle}>Категория</h3>
                        <div className={styles.categorySearch}>
                          <SearchIcon />
                          <input
                            type="text"
                            className={styles.categorySearchInput}
                            placeholder="Поиск категории"
                            onChange={(event) => {
                              setCategorySearch(event.target.value);
                            }}
                            value={categorySearch}
                          />
                        </div>
                        <div className={styles.categoriesItems}>
                          {filteredCategories.map((item) => {
                            if (item !== null) {
                              return (
                                <GoodsFilterCategory
                                  id={item.id}
                                  title={item.title}
                                  items={item.items}
                                  activeCategories={activeCategories}
                                  setActiveCategories={setActiveCategories}
                                  searchValue={categorySearch}
                                  isVisible={item.isVisible}
                                />
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                      </div>
                      <div className={styles.buttons}>
                        <button
                          className={`${styles.btn} ${styles.btnFilled}`}
                          onClick={() => onClose()}
                        >
                          Применить
                        </button>
                        <button
                          className={styles.btn}
                          onClick={() => onReset()}
                        >
                          Сбросить
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
