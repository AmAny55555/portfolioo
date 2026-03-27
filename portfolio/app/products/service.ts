import { endpoints } from "@/lib/api";
import type { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(endpoints.products, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}