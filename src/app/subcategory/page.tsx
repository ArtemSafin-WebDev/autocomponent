import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {Metadata} from "next";
import SubCategoryModule from "@/modules/SubCategoryModule/SubCategoryModule";

export const metadata: Metadata = {
  title: "Склад онлайн",
  description: ""
}

export default async function SubCategory() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/subcategory", title: "Категории с подборками", active: true },
          ]}
        />
        <section>
          <SubCategoryModule/>
        </section>
      </div>
    </>
  );
};

