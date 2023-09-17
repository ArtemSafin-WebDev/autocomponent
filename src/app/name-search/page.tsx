import { fetchNameSearchData } from "@/clientApi/fetchNameSearchData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import NameSearch from "@/components/NameSearch/NameSearch";

export const metadata = {
  title: "Автокомпонент - Поиск по названию",
  description: "",
};

export default async function NameSearchPage() {
  const data = await fetchNameSearchData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/name-search",
              title: "Поиск по названию",
              active: true,
            },
          ]}
        />
        <NameSearch items={data.items} />
      </div>
    </>
  );
}
