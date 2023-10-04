import fetchCertificatesData from "@/clientApi/fetchCertificatesData";
import styles from "./certificates.module.scss";
import Image from "next/image";
import FancyboxWrapper from "@/components/FancyboxWrapper/FancyboxWrapper";

export const metadata = {
  title: "Автокомпонент - Сертификаты",
  description: "",
};

export default async function CertificatesPage() {
  const { items } = await fetchCertificatesData();
  return (
    <div className={styles.certificates}>
      <h1 className={styles.heading}>Наши сертификаты</h1>
      <FancyboxWrapper
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <ul className={styles.list}>
          {items.map((item) => (
            <li
              className={`${styles.listItem} ${item.wide ? styles.wide : ""}`}
              key={item.id}
            >
              <a
                className={styles.card}
                data-fancybox="certificates"
                href={item.src}
              >
                <Image src={item.src} fill alt="" className={styles.image} />
              </a>
            </li>
          ))}
        </ul>
      </FancyboxWrapper>
    </div>
  );
}
