import { HomeData } from "@/types/api";

export async function fetchHomeData(): Promise<HomeData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`, {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
