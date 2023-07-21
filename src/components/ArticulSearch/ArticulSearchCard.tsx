import { motion } from "framer-motion";
import Counter from "../Counter/Counter";
import Info from "../Info/Info";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { ArticulSearchCard } from "./ArticulSearch";
import styles from "./articulSearch.module.scss";
import cartIcon from "@/assets/images/cart.svg";

export default function ArticulSearchCard({
  title,
  price1,
  price2,
  amount,
  quantity,
  warehouse,
  delivery,
}: ArticulSearchCard) {
  return (
    <div className={styles.card}>
      <div className={styles.cardCell}>
        <div className={styles.cardTitle}>
          {title}
          <PhotoPreview src="/photo-preview.webp" alt="preview" />
          <Info />
        </div>
      </div>
      <div className={styles.cardCell}>
        <div className={styles.quantity}>{quantity}</div>
        <div className={styles.warehouse}>{warehouse}</div>
      </div>
      <div className={styles.cardCell}>{delivery}</div>
      <div className={styles.cardCell}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>{price1}</div>
            <div className={styles.price}>{price2}</div>
          </div>
          <div className={styles.btnsWrapper}>
            <Counter initialValue={amount} />
            <button className={styles.addToCartBtn}>
              <EmbedSVG src={cartIcon.src} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
