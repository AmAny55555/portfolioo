import { endpoints } from "@/lib/api";
import type { Service } from "./types";

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(endpoints.services, {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to fetch services");

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}