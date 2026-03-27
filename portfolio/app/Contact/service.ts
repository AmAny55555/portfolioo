import { endpoints } from "@/lib/api";
import type { ContactType } from "./types";

export async function getContact(): Promise<ContactType | null> {
  try {
    const res = await fetch(endpoints.contact);
    if (!res.ok) throw new Error("Failed to fetch contact");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching contact:", error);
    return null;
  }
}