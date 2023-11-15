import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import Goods from "@/components/Goods/Goods";
import fetchGoods from "@/clientApi/fetchGoods";

export const dynamic = "force-dynamic";

export default async function GoodsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { items, total } = await fetchGoods();
  return (
    <div className="container">
      <Breadcrumbs
        links={[
          { id: 1, href: "/", title: "Главная" },
          { id: 2, href: "/goods", title: "Товары в наличии", active: true },
        ]}
      />
      <Goods items={items} totalCount={total} />
    </div>
  );
}
