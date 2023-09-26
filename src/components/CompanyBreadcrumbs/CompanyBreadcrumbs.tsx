"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs, { BreadcrumbsLink } from "../Breadcrumbs/Breadcrumbs";
import { useMemo } from "react";

const paths: Array<{
  pathname: string;
  title: string;
}> = [
  {
    pathname: "/program",
    title: "Программа",
  },
  {
    pathname: "/delivery",
    title: "Доставка",
  },
  {
    pathname: "/discount",
    title: "Скидки",
  },
  {
    pathname: "/rules",
    title: "Правила регистрации",
  },
];

export default function CompanyBreadcrumbs() {
  const pathname = usePathname();

  console.log("Pathname", pathname);

  const links: BreadcrumbsLink[] = useMemo(() => {
    const matchingPath = paths.find((path) => path.pathname === pathname);
    if (!matchingPath) {
      return [{ id: 1, href: "/", title: "Главная" }];
    }
    return [
      { id: 1, href: "/", title: "Главная" },
      {
        id: 2,
        href: pathname,
        title: matchingPath.title,
        active: true,
      },
    ];
  }, [pathname]);

  return <Breadcrumbs links={links} />;
}
