import fetchSparePartsData from "@/clientApi/fetchSparePartsData";
import AlphabetCatalog from "@/components/AlphabetCatalog/AlphabetCatalog";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
  title: "Автокомпонент - Запчасти для иномарок",
  description: "",
};

export const revalidate = 60;

export default async function SparePartsPage() {
  const data = await fetchSparePartsData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/spare-parts",
              title: "Запчасти для иномарок",
              active: true,
            },
          ]}
        />
        <AlphabetCatalog heading={data.heading} items={data.items} />
      </div>
    </>
  );
}
