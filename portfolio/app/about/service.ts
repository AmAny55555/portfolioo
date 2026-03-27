import { endpoints } from "@/lib/api";
import type { AboutType } from "./types";

export async function getAbout(): Promise<AboutType | null> {
  try {
    const res = await fetch(endpoints.about, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch about");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching about:", error);
    return null;
  }
}