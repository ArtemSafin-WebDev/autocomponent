import Link from "next/link";
import styles from "./brandSearch.module.scss";
import ArticulSearchArrow from "../../icons/ArticulSearchArrow";

interface BrandSearchTableRowItem {
  id: number;
  brand: string;
  articul: string;
  desc: string;
}

interface BrandSearchTableRowProps {
  item: BrandSearchTableRowItem;
}

const items: BrandSearchTableRowItem[] = [
  {
    id: 1,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 2,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 3,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 4,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 5,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 6,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 7,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
  {
    id: 8,
    brand: "DP GROUP",
    articul: "bp43001",
    desc: "Колодки тормозные дисковые Ford Focus II 04-, Focus III 11-, Kuga 08-, C-MAX 04-, Mazda 3 03-, Mazda",
  },
];

function BrandSearchTableRow({ item }: BrandSearchTableRowProps) {
  const { brand, articul, desc } = item;
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>{brand}</div>
      <div className={styles.tableCell}>{articul}</div>
      <div className={styles.tableCell}>
        <div className={styles.wrapper}>
          {desc}
          <Link href="/" className={styles.link}>
            Цены и аналоги
            <ArticulSearchArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BrandSearch() {
  return (
    <div className={styles.brandSearch}>
      <h1 className={styles.heading}>Результаты поиска</h1>
      <div className={styles.headingText}>Уточните бренд искомой запчасти</div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Бренд</div>
          <div className={styles.tableHeaderCell}>Артикул</div>
          <div className={styles.tableHeaderCell}>Описание</div>
        </div>
        <div className={styles.tableBody}>
          {items.map((item) => (
            <BrandSearchTableRow item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
