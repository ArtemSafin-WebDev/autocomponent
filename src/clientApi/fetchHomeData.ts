import { HomeData } from "@/types/api";
import { getHomeCards } from "@/data/homeCards";
import { getHomeCatalogItems } from "@/data/homeCatalogItems";
import { getHomeLinks } from "@/data/homeLinks";
import { getHomeSlides } from "@/data/homeSlides";
import { getNewsFeed } from "@/data/newsFeed";

export async function fetchHomeData(): Promise<HomeData> {
  const [homeLinks, homeCatalogItems, homeSlides, homeCards, newsFeed] =
    await Promise.all([
      getHomeLinks(),
      getHomeCatalogItems(),
      getHomeSlides(),
      getHomeCards(),
      getNewsFeed(),
    ]);
  return {
    homeLinks,
    homeCatalogItems,
    homeSlides,
    homeCards,
    newsFeed,
  };
}
