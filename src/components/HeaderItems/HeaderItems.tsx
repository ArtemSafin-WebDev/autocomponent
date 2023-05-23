"use client";

import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import HeaderItem from "../HeaderItem/HeaderItem";
import styles from "./headerItems.module.scss";

export default function HeaderItems() {
  return (
    <div className={styles.headerItems}>
      <HeaderItem title="Товары в наличии" href="/" hasDotIcon={true} />
      <HeaderItem title="Акции" href="/" />
      <HeaderDropdown
        title="Клиентам"
        items={[
          {
            id: 1,
            href: "/",
            title: "Доставка",
          },
          {
            id: 2,
            href: "/",
            title: "Возврат",
          },
          {
            id: 3,
            href: "/",
            title: "Скидки",
          },
          {
            id: 4,
            href: "/",
            title: "Программа Автопрайс",
          },
          {
            id: 5,
            href: "/",
            title: "Правила регистрации",
          },
        ]}
      />
      <HeaderDropdown
        title="О компании"
        items={[
          {
            id: 1,
            href: "/",
            title: "Доставка",
          },
          {
            id: 2,
            href: "/",
            title: "Возврат",
          },
          {
            id: 3,
            href: "/",
            title: "Скидки",
          },
          {
            id: 4,
            href: "/",
            title: "Программа Автопрайс",
          },
          {
            id: 5,
            href: "/",
            title: "Правила регистрации",
          },
        ]}
      />
      <div className={styles.itemStandalone}>
        <HeaderDropdown
          title="ООО «Автосервис»"
          items={[
            {
              id: 1,
              href: "/",
              title: "Доставка",
            },
            {
              id: 2,
              href: "/",
              title: "Возврат",
            },
            {
              id: 3,
              href: "/",
              title: "Скидки",
            },
            {
              id: 4,
              href: "/",
              title: "Программа Автопрайс",
            },
            {
              id: 5,
              href: "/",
              title: "Правила регистрации",
            },
          ]}
        />
      </div>
    </div>
  );
}
