import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./styles.module.scss";
import ModelInfo from "@/components/ModelInfo/ModelInfo";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Автокомпонент - Оригинальные каталоги - Audi A3 Cabrio quattro 2.0",
  description: "",
};

export default async function PartsCatalogPage() {
  return (
    <div className="container">
      <Breadcrumbs
        links={[
          { id: 1, href: "/", title: "Главная" },
          { id: 2, href: "/parts-catalog", title: "Запчасти" },
          { id: 3, href: "/parts-catalog", title: "Оригинальные каталоги" },
          { id: 4, href: "/parts-catalog", title: "Audi" },
          {
            id: 5,
            href: `/parts-catalog/engine`,
            title: `AUDI A4 Avant (8E5, B6)`,
            active: true,
          },
        ]}
      />
      <div className={styles.partsCatalog}>
        <h1 className={styles.heading}>
          AUDI 100 (43, C2) 1.6
          <ModelInfo
            items={[
              { id: 1, key: "Марка", value: "AUDI" },
              { id: 2, key: "Модель", value: "A3 Cabrio quattro 2.0" },
              { id: 3, key: "VIN", value: "123214341353145" },
              { id: 4, key: "Двигатель / КПП", value: "123214341353145" },
              { id: 5, key: "Для региона", value: "Европа" },
            ]}
          />
        </h1>
        <div className={styles.layout}>
          <div className={styles.leftCol}></div>
          <div className={styles.rightCol}></div>
        </div>
      </div>
    </div>
  );
}
