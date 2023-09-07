import fetchOurBrandsData from "@/clientApi/fetchOurBrandsData";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import OurBrands from "@/components/OurBrands/OurBrands";

export const metadata = {
  title: "Автокомпонент - Наши бренды",
  description: "",
};

export default async function NameSearchPage() {
  const data = await fetchOurBrandsData();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/our-brands",
              title: "Наши бренды",
              active: true,
            },
          ]}
        />
        <OurBrands heading={data.heading} content={data.content} />
      </div>
    </>
  );
}
