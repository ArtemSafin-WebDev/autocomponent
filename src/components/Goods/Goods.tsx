import { FiltersCardItem } from "@/types/api";
import GoodsFilters from "../GoodsFilters/GoodsFilters";
import styles from "./goods.module.scss";

export default async function Goods({
  items,
  totalCount,
}: {
  items: FiltersCardItem[];
  totalCount: number;
}) {
  return (
    <div className={styles.goods}>
      <h1 className={styles.heading}>Товары в наличии</h1>
      <GoodsFilters items={items} totalCount={totalCount} />
    </div>
  );
}
