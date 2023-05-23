import { getHomeCards } from "@/data/homeCards";
import { getHomeCatalogItems } from "@/data/homeCatalogItems";
import { getHomeLinks } from "@/data/homeLinks";
import { getHomeSlides } from "@/data/homeSlides";
import { getNewsFeed } from "@/data/newsFeed";
import { NextResponse } from "next/server";

export async function GET() {
  const [homeLinks, homeCatalogItems, homeSlides, homeCards, newsFeed] =
    await Promise.all([
      getHomeLinks(),
      getHomeCatalogItems(),
      getHomeSlides(),
      getHomeCards(),
      getNewsFeed(),
    ]);
  return NextResponse.json({
    homeLinks,
    homeCatalogItems,
    homeSlides,
    homeCards,
    newsFeed,
  });
}
