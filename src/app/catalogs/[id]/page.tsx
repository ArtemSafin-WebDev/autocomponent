import React from 'react';
import CatalogsDetailModule from "@/modules/CatalogsDetailModule/CatalogsDetailModule";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

type Props = {
  params: {
    id: string
  }
}

export default async function CatalogsDetail({params: {id}}: Props)  {
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
            {
              id: 4,
              href: `/catalogs/${id}`,
              title: `${id[0].charAt(0).toUpperCase() + id.slice(1)}`,
              active: true,
            },
          ]}
        />
      <CatalogsDetailModule id={id}/>
      </div>
    </>
  );
};

