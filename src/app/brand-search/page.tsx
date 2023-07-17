import BrandSearch from "@/components/BrandSearch/BrandSearch";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
  title: "Автокомпонент - Поиск по бренду",
  description: "",
};

export default async function BrandSearchPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/brand-search",
              title: "Поиск по бренду",
              active: true,
            },
          ]}
        />
        <BrandSearch />
      </div>
    </>
  );
}
