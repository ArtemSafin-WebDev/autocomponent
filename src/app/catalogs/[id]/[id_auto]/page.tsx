import CatalogsDetailAuto from "@/modules/CatalogsDetailAuto/CatalogsDetailAuto";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

type Props = {
  params: {
    id: string;
    id_auto: string
  }
}

export default async function CatalogDetailAuto({params: {id, id_auto}}: Props)  {
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
              active: false,
            },
            {
              id: 4,
              href: `/catalogs/${id}`,
              title: `${id[0].charAt(0).toUpperCase() + id.slice(1)}`,
              active: false,
            },
            {
              id: 5,
              href: `/catalogs/${id_auto}`,
              title: `${id_auto[0].charAt(0).toUpperCase() + id_auto.slice(1)}`,
              active: true,
            },
          ]}
        />
        <CatalogsDetailAuto id={id}/>
      </div>
    </>
  );
};

