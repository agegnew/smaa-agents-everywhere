import { apiRequest } from "./client";
import type { AgentEvent, Asset, BrandMemory, Integration, KnowledgeStage, PublishingItem, Session, Workspace } from "@/types/smaa";

const body = (value: unknown) => ({ method: "POST", body: JSON.stringify(value) });
export const authApi = {
  me: () => apiRequest<Session>("/api/auth/me"),
  login: (data: { email: string; password: string }) => apiRequest<Session>("/api/auth/login", body(data)),
  signup: (data: { fullName: string; email: string; password: string }) => apiRequest<Session>("/api/auth/signup", body(data)),
  logout: () => apiRequest<void>("/api/auth/logout", body({})),
};
export const workspaceApi = { get: () => apiRequest<Workspace>("/api/workspace") };
export const onboardingApi = {
  brand: (data: unknown) => apiRequest<void>("/api/onboarding/brand", body(data)),
  social: (data: unknown) => apiRequest<void>("/api/onboarding/social", body(data)),
  start: () => apiRequest<void>("/api/onboarding/start", body({})),
  status: () => apiRequest<{ stage: KnowledgeStage; events?: AgentEvent[] }>("/api/onboarding/status"),
};
export const assetsApi = {
  list: (query = "") => apiRequest<{ assets: Asset[] }>(`/api/assets${query}`),
  get: (id: string) => apiRequest<Asset>(`/api/assets/${id}`),
  refine: (id: string, instruction: string) => apiRequest<Asset>(`/api/generations/${id}/refine`, body({ instruction })),
  approve: (id: string) => apiRequest<Asset>(`/api/generations/${id}/approve`, body({})),
  reject: (id: string, reason: string) => apiRequest<Asset>(`/api/generations/${id}/reject`, body({ reason })),
};
export const generationApi = {
  poster: (data: unknown) => apiRequest<Asset>("/api/generate/poster", body(data)),
  posterHuman: (data: unknown) => apiRequest<Asset>("/api/generate/poster-human", body(data)),
  character: (data: unknown) => apiRequest<Asset>("/api/generate/character", body(data)),
  get: (id: string) => apiRequest<Asset>(`/api/generations/${id}`),
};
export const brandApi = { get: () => apiRequest<BrandMemory>("/api/brand"), refresh: () => apiRequest<void>("/api/brand/refresh", body({})) };
export const integrationsApi = {
  list: () => apiRequest<{ integrations: Integration[] }>("/api/integrations"),
  slackStatus: () => apiRequest<Integration>("/api/integrations/slack/status"),
  connectSlack: () => apiRequest<{ url?: string }>("/api/integrations/slack/connect", body({})),
};
export const publishingApi = {
  list: () => apiRequest<{ items: PublishingItem[] }>("/api/publishing"),
  publish: (assetId: string) => apiRequest<PublishingItem>(`/api/publishing/${assetId}/publish`, body({})),
  schedule: (assetId: string, scheduledAt: string) => apiRequest<PublishingItem>(`/api/publishing/${assetId}/schedule`, body({ scheduledAt })),
};
export const assistantApi = { send: (message: string) => apiRequest<unknown>("/api/assistant/messages", body({ message })) };
