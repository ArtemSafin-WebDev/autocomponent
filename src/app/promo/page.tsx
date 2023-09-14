import fetchPromoData from "@/clientApi/fetchPromoData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PromoCatalog from "@/components/PromoCatalog/PromoCatalog";

export const metadata = {
  title: "Автокомпонент - Акции",
  description: "",
};

export default async function NameSearchPage() {
  const data = await fetchPromoData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/promo",
              title: "Акции",
              active: true,
            },
          ]}
        />
        <PromoCatalog items={data.cards} />
      </div>
    </>
  );
}
