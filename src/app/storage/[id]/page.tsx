import styles from "./page.module.scss"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {Metadata} from "next";
import StorageDetailFilters from "@/modules/StorageDetailFilters/StorageDetailFilters";
import TableDetailModule from "@/modules/TableDetailModule/TableDetailModule";

export const metadata: Metadata = {
  title: "Склад онлайн",
  description: ""
}

interface Props {
  params: {
    id: string
  }
}

export default async function StorageDetail({params: {id}}: Props) {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/storage", title: "Шины, диски, колпаки"},
            { id: 2, href: "/storage", title: "Шины", active: true },
          ]}
        />
        <section className={styles.page}>
          <div className={styles.page__filters}>
            <StorageDetailFilters/>
          </div>
          <TableDetailModule/>
        </section>
      </div>
    </>
  );
};

