import { AlertCircle, Check, Circle, LoaderCircle, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { AgentEvent, AssetStatus } from "@/types/smaa";

const statusLabels: Record<AssetStatus, string> = {
  queued: "Queued", generating: "Generating", ready: "Ready for review", approved: "Approved", rejected: "Rejected", publishing: "Publishing", published: "Published", failed: "Failed",
};

export function StatusBadge({ status }: { status: AssetStatus }) {
  return <span data-status={status} className="status-badge"><span className="status-dot" aria-hidden="true" />{statusLabels[status]}</span>;
}

export function AgentActivity({ events, title = "SMAA Agent", compact = false }: { events?: AgentEvent[] | undefined; title?: string; compact?: boolean }) {
  return (
    <section className={cn("agent-panel", compact && "agent-panel-compact")} aria-labelledby="agent-title">
      <div className="agent-heading"><span className="agent-mark"><Sparkles /></span><div><p className="eyebrow" id="agent-title">{title}</p><p className="agent-state">{events?.some((event) => event.status === "running") ? "Working" : "Activity"}</p></div></div>
      {!events?.length ? <p className="empty-copy">Agent activity will appear here when work begins.</p> : <ol className="agent-events">
        {events.map((event) => <li key={event.id} className="agent-event" data-status={event.status}>
          <span className="event-icon" aria-hidden="true">{event.status === "complete" ? <Check /> : event.status === "running" ? <LoaderCircle className="animate-spin" /> : event.status === "error" ? <AlertCircle /> : <Circle />}</span>
          <span>{event.label}</span>{event.timestamp ? <time>{new Date(event.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time> : null}
        </li>)}
      </ol>}
    </section>
  );
}

export function LoadingState({ label = "Loading workspace" }: { label?: string }) {
  return <div className="state-panel" role="status"><div className="space-y-3 w-full max-w-lg"><Skeleton className="h-4 w-24"/><Skeleton className="h-10 w-3/4"/><Skeleton className="h-24 w-full"/></div><p>{label}</p></div>;
}

export function ErrorState({ title = "We couldn’t load this page", message = "SMAA can’t reach the service right now.", retry }: { title?: string; message?: string; retry?: () => void }) {
  return <div className="state-panel"><span className="state-icon"><AlertCircle /></span><h2>{title}</h2><p>{message}</p>{retry ? <Button variant="outline" onClick={retry}><RefreshCw/>Retry</Button> : null}</div>;
}

export function EmptyState({ title, message, action }: { title: string; message: string; action?: ReactNode }) {
  return <div className="state-panel state-panel-empty"><span className="state-icon"><Sparkles /></span><h2>{title}</h2><p>{message}</p>{action}</div>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <header className="page-header"><div>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h1>{title}</h1>{description ? <p>{description}</p> : null}</div>{action}</header>;
}
