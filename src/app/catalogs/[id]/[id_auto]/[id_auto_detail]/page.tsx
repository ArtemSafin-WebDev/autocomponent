import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import DetailInfoAuto from "@/modules/DetailInfoAuto/DetailInfoAuto";

type Props = {
  params: {
    id: string;
    id_auto: string;
    id_auto_detail: string;
  }
}

export default async function CatalogDetailAuto({params: {id, id_auto, id_auto_detail}}: Props)  {
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
            },
            {
              id: 4,
              href: `/catalogs/${id}`,
              title: `${id[0].charAt(0).toUpperCase() + id.slice(1)}`,
            },
            {
              id: 5,
              href: `/catalogs/${id}`,
              title: `${id_auto[0].charAt(0).toUpperCase() + id_auto.slice(1)}`,
            },
            {
              id: 6,
              href: `/catalogs/${id_auto_detail}`,
              title: `${id_auto_detail[0].charAt(0).toUpperCase() + id_auto_detail.slice(1)}`,
              active: true,
            },
          ]}
        />
        <DetailInfoAuto id={id}/>
      </div>
    </>
  );
};

