"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiltersCategory } from "../GoodsFilters/GoodsFilters";
import styles from "./goodsSidebar.module.scss";
import CheckmarkIcon from "@/icons/CheckmarkIcon";

type GoodsFilterCategoryProps = FiltersCategory & {
  id: number | string;
  title: string;
  onToggle?: (value: boolean) => void;
  parentChecked?: boolean;
  activeCategories: FiltersCategory[];
  setActiveCategories: Dispatch<SetStateAction<FiltersCategory[]>>;
  searchValue: string;
};

export default function GoodsFilterCategory({
  title,
  items,
  id,
  onToggle,
  parentChecked,
  activeCategories,
  setActiveCategories,
  searchValue,
  isVisible,
}: GoodsFilterCategoryProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const addCategory = () => {
    setActiveCategories((prevCategories) => {
      const newCategories = [
        ...prevCategories.filter((category) => {
          if (category.title === title && category.id === id) return false;
          return true;
        }),
        {
          id,
          title,
        },
      ];
      return newCategories;
    });
  };

  const removeCategory = () => {
    setActiveCategories((prevCategories) => {
      const newCategories = [
        ...prevCategories.filter((category) => {
          if (category.title === title && category.id === id) return false;
          return true;
        }),
      ];
      return newCategories;
    });
  };

  const inActive = activeCategories.some((category) => {
    if (category.title === title && category.id === id) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (onToggle) onToggle(inActive);
  }, [inActive]);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [searchValue]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!parentChecked && mounted) {
      console.log("REmoving category");
      removeCategory();
    }
  }, [parentChecked]);

  return (
    <div
      className={`${styles.categoryItem} ${
        isVisible === false ? styles.hidden : ""
      }`}
    >
      <div className={styles.categoryItemTopRow}>
        {items?.length ? (
          <button
            className={`${styles.toggleBtn} ${open ? styles.open : ""}`}
            onClick={() => setOpen((prev) => !prev)}
          ></button>
        ) : null}
        <button
          className={`${styles.checkmark} ${inActive ? styles.open : ""}`}
          onClick={() => {
            if (inActive) {
              removeCategory();
            } else {
              addCategory();
            }
          }}
        >
          <CheckmarkIcon />
        </button>
        <div
          className={styles.categoryItemTitle}
          onClick={() => {
            if (inActive) {
              removeCategory();
            } else {
              addCategory();
            }
          }}
        >
          {title}
        </div>
      </div>
      {items?.length ? (
        <div
          className={`${styles.categoryDropdown} ${open ? styles.open : ""}`}
        >
          <div className={styles.categoryDropdownInner}>
            <div className={styles.innerItems}>
              {items.map((item) => {
                if (item !== null) {
                  return (
                    <GoodsFilterCategory
                      id={item.id}
                      title={item.title}
                      items={item.items}
                      onToggle={(value) => {
                        if (value) {
                          addCategory();
                        }
                      }}
                      activeCategories={activeCategories}
                      setActiveCategories={setActiveCategories}
                      parentChecked={inActive}
                      searchValue={searchValue}
                      isVisible={item.isVisible}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
