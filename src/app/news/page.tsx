import fetchNewsData from "@/clientApi/fetchNewsData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import NewsCatalog from "@/components/NewsCatalog/NewsCatalog";

export const metadata = {
  title: "Автокомпонент - Новости",
  description: "",
};

export default async function NameSearchPage() {
  const data = await fetchNewsData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/news",
              title: "Новости",
              active: true,
            },
          ]}
        />
        <NewsCatalog items={data.items} />
      </div>
    </>
  );
}
