import styles from "./page.module.scss"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {Metadata} from "next";
import TableModule from "@/modules/TableModule/TableModule";
import ModalModule from "@/modules/ModalModule/Modal";

export const metadata: Metadata = {
  title: "Склад онлайн",
  description: ""
}

export default async function Storage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/storage", title: "Товары в наличии", active: true },
          ]}
        />
        <section className={styles.page}>
          <TableModule/>
        </section>
      </div>
      <ModalModule isOpen={true}><div>
        hi
      </div></ModalModule>
    </>
  );
};

