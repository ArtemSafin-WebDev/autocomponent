import ArrowBack from "@/icons/ArrowBack";
import styles from "./promoDetail.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function PromoDetail() {
  return (
    <div className={styles.promoDetail}>
      <h1 className={styles.heading}>Goodyear – подарок за покупку</h1>
      <div className={styles.info}>04.04.2022 14:53:24</div>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <Image
            src="/promo-detail.webp"
            alt=""
            width={400}
            height={600}
            className={styles.image}
          />
        </div>
        <div className={styles.rightCol}>
          <div className={styles.textContent}>
            <p>AIRLINE – Подарок за покупку в апреле 2022</p>
            <p>Период проведения: 01–30 апреля 2022</p>
            <p>При покупке ЛЮБЫХ 4-х колпаков AIRLINE вы получаете подарок:</p>
            <p>
              Комплект мешков для колёс (4шт) (AO-PWC–15).Акция накопительная.
            </p>
          </div>
          <Link href="/promo" className={styles.link}>
            <ArrowBack />
            Вернуться к списку
          </Link>
        </div>
      </div>
    </div>
  );
}
