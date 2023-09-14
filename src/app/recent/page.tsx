import fetchRecentData from "@/clientApi/fetchRecentData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RecentCatalog from "@/components/RecentCatalog/RecentCatalog";

export const metadata = {
  title: "Автокомпонент - Новости",
  description: "",
};

export default async function NameSearchPage() {
  const data = await fetchRecentData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/recent",
              title: "Новинки",
              active: true,
            },
          ]}
        />
        <RecentCatalog items={data.items} />
      </div>
    </>
  );
}
