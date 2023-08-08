import CatalogsModule from "@/modules/CatalogsModule/CatalogsModule";
import {Metadata} from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Оригинальный каталог"
}
export default async function CatalogsPage() {
  return (
      <>
        <div className="container">
          <Breadcrumbs
            links={[
              { id: 1, href: "/", title: "Главная" },
              { id: 2, href: "/storage", title: "Запчасти" },
              {
                id: 3,
                href: "/catalogs",
                title: "Оригинальные каталоги",
                active: true,
              },
            ]}
          />
          <CatalogsModule/>
        </div>
      </>
  )
}