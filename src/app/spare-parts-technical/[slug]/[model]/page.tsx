import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Models from "@/components/Models/Models";
import capitalize from "@/utils/capitalize";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; model: string };
}) {
  return {
    title: `Автокомпонент - Запчасти для иномарок - ${capitalize(
      params.slug
    )} - ${capitalize(params.model)}`,
  };
}

export default function ModelsPage({
  params,
}: {
  params: { model: string; slug: string };
}) {
  return (
    <div className="container">
      <Breadcrumbs
        links={[
          { id: 1, href: "/", title: "Главная" },
          { id: 2, href: "/spare-parts-technical", title: "Запчасти для ТО" },
          {
            id: 3,
            href: `/spare-parts-technical/${params.slug}`,
            title: `${capitalize(params.slug)}`,
          },
          {
            id: 4,
            href: `/spare-parts-technical/${params.slug}/${params.model}`,
            title: `${capitalize(params.model)}`,
            active: true,
          },
        ]}
      />
      <Models />
    </div>
  );
}
