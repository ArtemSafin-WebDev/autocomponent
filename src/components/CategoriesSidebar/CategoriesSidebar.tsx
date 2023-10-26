import SearchIcon from "@/icons/Search";
import styles from "./categoriesSidebar.module.scss";
import fetchPartsCatalogCategoriesData from "@/clientApi/fetchPartsCatalogCategories";
import CategoriesSidebarItem from "../CategoriesSidebarItem/CategoriesSidebarItem";

export default async function CategoriesSidebar() {
  const { items } = await fetchPartsCatalogCategoriesData();
  return (
    <div className={styles.sidebar}>
      <div className={styles.searchWrapper}>
        <button className={styles.button}>
          <SearchIcon />
        </button>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите название запчасти"
        />
      </div>
      {items?.length ? (
        <div className={styles.categories}>
          {items.map((item) => (
            <CategoriesSidebarItem item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
