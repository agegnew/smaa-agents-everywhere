import { apiRequest, resolveMediaUrl } from "./client";
import type { Asset, BrandMemory, Session, Workspace } from "@/types/smaa";

const body = (value: unknown) => ({ method: "POST", body: JSON.stringify(value) });

// Generated images are FILE BYTES behind a 307, not JSON — asset.imageUrl goes straight into
// <img src>. We only guarantee it is absolute against the API origin, since the backend emits
// root-relative file_url paths that would otherwise resolve against the frontend origin.
const withMedia = (asset: Asset): Asset => (asset?.imageUrl ? { ...asset, imageUrl: resolveMediaUrl(asset.imageUrl) } : asset);

export const authApi = {
  // /api/auth/me does not exist. The adapter derives real access state (access.enabled() +
  // token_ok(), the logic behind GET /api/auth/status) and adds the workspace object.
  me: () => apiRequest<Session>("/api/smaa/session"),
  // Real route, real model: LoginBody has exactly one field. Returns {ok}, not a Session —
  // refetch the session query after a success.
  login: (data: { password: string }) => apiRequest<{ ok: boolean }>("/api/auth/login", body(data)),
  logout: () => apiRequest<void>("/api/auth/logout", body({})),
};

export const workspaceApi = { get: () => apiRequest<Workspace>("/api/smaa/workspace") };

export const assetsApi = {
  // Merged, newest-first view over the three real /recent endpoints. Envelope key is mandatory.
  list: (query = "") =>
    apiRequest<{ assets: Asset[] }>(`/api/smaa/assets${query}`).then((r) => ({ assets: (r?.assets ?? []).map(withMedia) })),
  // id is namespaced by the adapter: "p-<n>" | "ph-<n>" | "hc-<n>" — poster and human-character
  // share one table, so a bare integer would serve the wrong image.
  get: (id: string) => apiRequest<Asset>(`/api/smaa/assets/${id}`).then(withMedia),
  // Poster only, backed by POST /api/yas-producer/poster/{id}/refine. Returns a NEW CHILD asset
  // with a new id — navigate to it rather than refetching the parent.
  refine: (id: string, instruction: string) =>
    apiRequest<Asset>(`/api/smaa/generations/${id}/refine`, body({ instruction })).then(withMedia),
  // Backed by the real save-to-assets routes; the generation flips to saved_to_assets.
  approve: (id: string) => apiRequest<Asset>(`/api/smaa/generations/${id}/approve`, body({})).then(withMedia),
};

export const generationApi = {
  poster: (data: unknown) => apiRequest<Asset>("/api/smaa/generate/poster", body(data)).then(withMedia),
  posterHuman: (data: unknown) => apiRequest<Asset>("/api/smaa/generate/poster-human", body(data)).then(withMedia),
  character: (data: unknown) => apiRequest<Asset>("/api/smaa/generate/character", body(data)).then(withMedia),
};

export const brandApi = { get: () => apiRequest<BrandMemory>("/api/smaa/brand") };
