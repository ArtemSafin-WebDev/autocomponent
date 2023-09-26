import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PromoDetail from "@/components/PromoDetail/PromoDetail";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Автокомпонент - Goodyear – подарок за покупку`,
  };
}

export const dynamic = "force-dynamic";

export default async function ForeignCarsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/promo", title: "Акции" },
            {
              id: 3,
              href: `/promo/goodyear`,
              title: `Goodyear – подарок за покупку`,
              active: true,
            },
          ]}
        />
        <PromoDetail />
      </div>
    </>
  );
}
