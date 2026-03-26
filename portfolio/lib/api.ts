export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const endpoints = {
  company: `${API_BASE_URL}/api/company`,
  services: `${API_BASE_URL}/api/services`,
  features: `${API_BASE_URL}/api/features`,
  portfolio: `${API_BASE_URL}/api/portfolio`,
  contact: `${API_BASE_URL}/api/contact`,
};

