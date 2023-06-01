import { LayoutData } from "@/types/api";
import { getAdvantages } from "@/data/advantages";
import { getOffices } from "@/data/offices";
import { getFooterMenuCategories } from "@/data/footerMenuCategories";
import { getHeaderCatalogCategories } from "@/data/headerCatalogCategories";

export async function fetchLayoutData(): Promise<LayoutData> {
  const [advantages, offices, footerMenuCategories, headerCatalogCategories] =
    await Promise.all([
      getAdvantages(),
      getOffices(),
      getFooterMenuCategories(),
      getHeaderCatalogCategories(),
    ]);
  return {
    advantages,
    offices,
    footerMenuCategories,
    headerCatalogCategories,
  };
}
