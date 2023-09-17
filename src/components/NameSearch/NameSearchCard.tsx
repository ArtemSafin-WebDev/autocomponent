import Counter from "../Counter/Counter";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import cartIcon from "@/assets/images/cart.svg";
import Info from "../Info/Info";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import styles from "./nameSearch.module.scss";
import { NameSearchItem } from "@/types/api";

interface NameSearchCardProps {
  item: NameSearchItem;
}

export default function NameSearchCard({ item }: NameSearchCardProps) {
  const {
    id,
    title,
    articul,
    brand,
    inStock,
    quantity,
    price1,
    price2,
    warehouse,
    amount,
  } = item;

  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>
        {title}
        <PhotoPreview src="/photo-preview.webp" alt="Превью фото" />
        <Info />
      </div>
      <div className={styles.tableCell}>{articul}</div>
      <div className={styles.tableCell}>
        <div className={styles.brand}>{brand}</div>
      </div>
      <div className={styles.tableCell}>
        <div className={styles.amountWrapper}>
          <div className={styles.amount}>{amount}</div>
          <div className={styles.warehouse}>{warehouse}</div>
        </div>
      </div>
      <div className={styles.tableCell}>
        {inStock ? <div className={styles.inStock}>В наличии</div> : null}
      </div>
      <div className={styles.tableCell}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>{price1}</div>
            <div className={styles.price}>{price2}</div>
          </div>
          <div className={styles.btnsWrapper}>
            <Counter initialValue={quantity} />
            <button className={styles.addToCartBtn}>
              <EmbedSVG src={cartIcon.src} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { NameSearchItem };
