import ArticulSearch from "@/components/ArticulSearch/ArticulSearch";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
  title: "Автокомпонент - Поиск по артикулу",
  description: "",
};

export default async function ArticulSearchPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/articul-search",
              title: "Поиск по артикулу",
              active: true,
            },
          ]}
        />
        <ArticulSearch />
      </div>
    </>
  );
}
