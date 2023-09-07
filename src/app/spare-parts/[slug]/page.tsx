import fetchForeignCars from "@/clientApi/fetchForeignCars";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CarsCatalog from "@/components/CarsCatalog/CarsCatalog";
import capitalize from "@/utils/capitalize";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Автокомпонент - Запчасти для иномарок - ${capitalize(params.slug)}`,
  };
}

export const dynamic = "force-dynamic";

export default async function ForeignCarsPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchForeignCars(params.slug);
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/spare-parts", title: "Запчасти для иномарок" },
            {
              id: 3,
              href: `/spare-parts/${params.slug}`,
              title: `${capitalize(params.slug)}`,
              active: true,
            },
          ]}
        />
        <CarsCatalog data={data} />
      </div>
    </>
  );
}
