import type { ApiErrorShape } from "@/types/smaa";

export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  constructor(error: ApiErrorShape) {
    super(error.message);
    this.name = "ApiError";
    this.status = error.status;
    this.code = error.code;
    this.details = error.details;
  }
}

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");
export const apiConfigured = Boolean(configuredBaseUrl);

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!configuredBaseUrl) {
    throw new ApiError({ status: 503, code: "API_NOT_CONFIGURED", message: "The SMAA API is not connected yet." });
  }
  const response = await fetch(`${configuredBaseUrl}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json", ...init?.headers },
  });
  const payload = await response.json().catch(() => null) as { message?: string; code?: string; details?: unknown } | null;
  if (!response.ok) {
    throw new ApiError({ status: response.status, message: payload?.message ?? "SMAA could not complete that request.", code: payload?.code, details: payload?.details });
  }
  return payload as T;
}
