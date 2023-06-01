import { fetchDashboardData } from "@/clientApi/fetchDashboardData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Dashboard from "@/components/Dashboard/Dashboard";

export const metadata = {
  title: "Автокомпонент - Личный кабинет",
  description: "",
};

export const revalidate = 60;

export default async function DashboardPage() {
  const data = await fetchDashboardData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/dashboard",
              title: "Личный кабинет",
              active: true,
            },
          ]}
        />
        <Dashboard {...data} />
      </div>
    </>
  );
}
