import { PartInCategory } from "@/types/api";
import styles from "./partsInCategory.module.scss";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";
import ArticulSearchArrow from "@/icons/ArticulSearchArrow";

type PartsInCategoryProps = {
  items: PartInCategory[];
};

export default function PartsInCategory({ items }: PartsInCategoryProps) {
  return (
    <div className={styles.parts}>
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Бренд</th>
            <th>Артикул</th>
            <th>Оригинал</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.titleWrapper}>
                  {item.title}
                  <Tooltip text={item.title} />
                </div>
              </td>
              <td>{item.brand}</td>
              <td>{item.articul}</td>
              <td>
                <div className={styles.linkWrapper}>
                  {item.original ? (
                    <div className={styles.original}>Да</div>
                  ) : null}
                  <Link href={item.href} className={styles.link}>
                    Цены и аналоги
                    <ArticulSearchArrow />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
