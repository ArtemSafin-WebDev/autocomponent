import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import NameSearch from "@/components/NameSearch/NameSearch";

export const metadata = {
  title: "Автокомпонент - Поиск по названию",
  description: "",
};

export default async function NameSearchPage() {
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
        <NameSearch />
      </div>
    </>
  );
}
