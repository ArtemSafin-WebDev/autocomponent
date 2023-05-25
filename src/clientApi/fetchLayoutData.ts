import { LayoutData } from "@/types/api";
import { headers } from "next/headers";

export async function fetchLayoutData(): Promise<LayoutData> {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const res = await fetch(`${fullUrl}/api/layout`, {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
