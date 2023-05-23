import { LayoutData } from "@/types/api";

export async function fetchLayoutData(): Promise<LayoutData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/layout`, {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
