import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import SearchByCode from "@/components/SearchByCode/SearchByCode";

export const metadata = {
  title: "Автокомпонент - Поиск по коду",
  description: "",
};

export default async function SearchByCodePage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/search-by-code",
              title: "Поиск по коду",
              active: true,
            },
          ]}
        />
        <SearchByCode />
      </div>
    </>
  );
}
