import CatalogsModule from "@/modules/CatalogsModule/CatalogsModule";
import {Metadata} from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MainCatalogModule from "@/modules/MainCatalogModule/MainCatalog";

export const metadata: Metadata = {
  title: "Оригинальный каталог"
}
export default async function MainCatalog() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            {
              id: 2,
              href: "/main-catalog",
              title: "Каталог автотоваров",
              active: true,
            },
          ]}
        />
        <MainCatalogModule/>
      </div>
    </>
  )
}