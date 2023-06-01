import { useEffect, useState } from "react";
import styles from "./dashboardReturnsCardItem.module.scss";

interface DashboardReturnsCardItem {
  id: number;
  title: string;
  art: string;
  code: string;
  brand: string;
  quantity: number;
  price: string;
  amount: string;
  returned: boolean;
}

interface DashboardReturnsCardItemProps {
  item: DashboardReturnsCardItem;
  allSelected: boolean;
  deselected: () => void;
}

export default function DashboardReturnsCardRow({
  item: { title, art, code, brand, quantity, price, amount, returned },
  allSelected,
  deselected,
}: DashboardReturnsCardItemProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(allSelected);
  }, [allSelected]);

  useEffect(() => {
    if (!checked) {
      deselected();
    }
  }, [deselected, checked]);
  return (
    <tr>
      <td>{title}</td>
      <td>{art}</td>
      <td>{code}</td>
      <td>{brand}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{amount}</td>
      {returned ? (
        <td className={styles.green}>Возврат оформлен</td>
      ) : (
        <td>
          <button
            className={styles.checkbox}
            onClick={() => setChecked((checked) => !checked)}
          >
            <span className={styles.checkboxText}>Возврат/Претензия</span>
            <span
              className={`${styles.checkboxMark} ${
                checked ? styles.markChecked : ""
              }`}
            ></span>
          </button>
        </td>
      )}
    </tr>
  );
}

export type { DashboardReturnsCardItem };
