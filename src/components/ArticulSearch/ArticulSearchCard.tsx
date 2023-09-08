import numWords from "@/utils/numWord";
import Counter from "../Counter/Counter";
import Info from "../Info/Info";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";

import styles from "./articulSearch.module.scss";
import cartIcon from "@/assets/images/cart.svg";
import { ArticulSearchCard } from "@/types/api";
export default function ArticulSearchCard({
  title,
  price1,
  price2,
  amount,
  quantity,
  warehouse,
  delivery,
}: ArticulSearchCard) {
  const priceFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  });

  let deliveryText = delivery.toString();
  let quantityText = quantity.toString();

  if (delivery === 0) {
    deliveryText = "Сегодня";
  } else {
    deliveryText = `${delivery} ${numWords(delivery, ["день", "дня", "дней"])}`;
  }

  if (quantity > 100) {
    quantityText = "Много";
  } else {
    quantityText = `${quantity} ${numWords(quantity, [
      "единица",
      "единицы",
      "единиц",
    ])}`;
  }

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
        <div className={styles.quantity}>{quantityText}</div>
        <div className={styles.warehouse}>{warehouse}</div>
      </div>
      <div className={styles.cardCell}>{deliveryText}</div>
      <div className={styles.cardCell}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            {price1 ? (
              <div className={styles.price}>
                {priceFormatter.format(price1)}
              </div>
            ) : null}
            {price2 ? (
              <div className={styles.price}>
                {priceFormatter.format(price2)}
              </div>
            ) : null}
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
