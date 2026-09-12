export type AssetType = "poster" | "poster_human" | "character";
export type AssetStatus = "queued" | "generating" | "ready" | "approved" | "rejected" | "publishing" | "published" | "failed";
export type KnowledgeStage = "discovering" | "crawling" | "extracting" | "analyzing" | "embedding" | "building_profile" | "ready" | "failed";
export type EventStatus = "pending" | "running" | "complete" | "error";
export type AgentEventType = "agent_started" | "request_understood" | "brand_context_loaded" | "campaign_analyzed" | "generation_started" | "generation_completed" | "review_required" | "refinement_started" | "refinement_completed" | "approved" | "rejected" | "publishing_started" | "publishing_completed" | "failed";

export interface AgentEvent { id: string; type: AgentEventType; label: string; status: EventStatus; timestamp?: string; metadata?: Record<string, unknown> }
export interface Workspace { id: string; name: string; logoUrl?: string; onboardingComplete: boolean; user?: { id: string; name: string; email: string } }
export interface Asset { id: string; title: string; type: AssetType; status: AssetStatus; imageUrl?: string; campaign?: string; createdAt?: string; source?: string; events?: AgentEvent[]; version?: number; versions?: Array<{ id: string; number: number; label: string; imageUrl?: string }> }
export interface BrandSource { id: string; name: string; connected: boolean; count?: number; detail?: string }
export interface BrandMemory { voice?: string[]; audience?: string[]; messaging?: string[]; visualIdentity?: string[]; sources?: BrandSource[] }
export interface Integration { id: string; name: string; status: "connected" | "not_connected" | "error" | "coming_later"; workspaceName?: string; detail?: string }
export interface PublishingItem { id: string; asset: Asset; platform: string; caption?: string; scheduledAt?: string; liveUrl?: string; status: "ready" | "scheduled" | "published" | "failed"; error?: string }
export interface Session { authenticated: boolean; workspace?: Workspace }
export interface ApiErrorShape { message: string; status: number; code?: string | undefined; details?: unknown }
