import CompanySidebar from "@/components/CompanySidebar/CompanySidebar";
import styles from "./layout.module.scss";
import fetchCompanySidebarData from "@/clientApi/fetchCompanySidebarData";
import CompanyBreadcrumbs from "@/components/CompanyBreadcrumbs/CompanyBreadcrumbs";

export default async function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchCompanySidebarData();
  return (
    <div className={styles.layout}>
      <div className="container">
        <CompanyBreadcrumbs />
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <CompanySidebar items={data.items} />
          </div>
          <div className={styles.rightCol}>{children}</div>
        </div>
      </div>
    </div>
  );
}
