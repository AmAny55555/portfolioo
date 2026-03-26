import { endpoints } from "@/lib/api";
import type { Company } from "./types";

export async function getCompany(): Promise<Company | null> {
  try {
    const res = await fetch(endpoints.company, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch company");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
}