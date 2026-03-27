import { endpoints } from "@/lib/api";
import type { Feature } from "./types";

export async function getFeatures(): Promise<Feature[]> {
  try {
    const res = await fetch(endpoints.features);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
}