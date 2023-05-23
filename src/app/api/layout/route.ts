import { NextResponse } from "next/server";
import { getAdvantages } from "@/data/advantages";
import { getOffices } from "@/data/offices";
import { getFooterMenuCategories } from "@/data/footerMenuCategories";
import { getHeaderCatalogCategories } from "@/data/headerCatalogCategories";
import { getNewsFeed } from "@/data/newsFeed";

export async function GET() {
  const [advantages, offices, footerMenuCategories, headerCatalogCategories] =
    await Promise.all([
      getAdvantages(),
      getOffices(),
      getFooterMenuCategories(),
      getHeaderCatalogCategories(),
    ]);
  return NextResponse.json({
    advantages,
    offices,
    footerMenuCategories,
    headerCatalogCategories,
  });
}
