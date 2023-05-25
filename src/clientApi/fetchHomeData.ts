import { HomeData } from "@/types/api";
import { headers } from "next/headers";

export async function fetchHomeData(): Promise<HomeData> {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  console.log("Domain", fullUrl);
  const res = await fetch(`${fullUrl}/api/home`, {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
