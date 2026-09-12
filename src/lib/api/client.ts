import type { ApiErrorShape } from "@/types/smaa";

export class ApiError extends Error {
  status: number;
  code?: string | undefined;
  details?: unknown;
  constructor(error: ApiErrorShape) {
    super(error.message);
    this.name = "ApiError";
    this.status = error.status;
    this.code = error.code;
    this.details = error.details;
  }
}

const configuredBaseUrl = import.meta.env['VITE_API_BASE_URL']?.replace(/\/$/, "");
export const apiConfigured = Boolean(configuredBaseUrl);

/**
 * Absolutise a backend media path against the API origin.
 * The backend serves generated images as FILE BYTES (a 307 to a signed storage URL) from its
 * /file routes and emits `file_url` as a ROOT-RELATIVE path. Those URLs must be handed to
 * <img src> — never to apiRequest, which would try to JSON-parse image bytes. Left as-is when
 * already absolute (or a data:/blob: URL), so an adapter that already absolutises stays correct.
 */
export function resolveMediaUrl(url: string): string {
  if (!configuredBaseUrl || !url) return url;
  if (/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(url) || url.startsWith("data:") || url.startsWith("blob:")) return url;
  return `${configuredBaseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!configuredBaseUrl) {
    throw new ApiError({ status: 503, code: "API_NOT_CONFIGURED", message: "The SMAA API is not connected yet." });
  }
  const response = await fetch(`${configuredBaseUrl}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json", ...init?.headers },
  });
  // The adapter answers {message, code, details}; plain FastAPI routes (and the access gate)
  // answer {detail}. Read both, otherwise every real error collapses to the generic sentence.
  const payload = await response.json().catch(() => null) as { message?: string; detail?: unknown; code?: string | undefined; details?: unknown } | null;
  if (!response.ok) {
    const detail = typeof payload?.detail === "string" ? payload.detail : undefined;
    throw new ApiError({
      status: response.status,
      message: payload?.message ?? detail ?? "SMAA could not complete that request.",
      code: payload?.code,
      details: payload?.details ?? payload?.detail,
    });
  }
  return payload as T;
}
