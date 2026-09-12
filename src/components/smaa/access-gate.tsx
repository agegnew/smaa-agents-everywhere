import { useQuery } from "@tanstack/react-query";
import { Navigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { authApi } from "@/lib/api/services";
import { ApiError } from "@/lib/api/client";
import { ErrorState, LoadingState } from "@/components/smaa/system";

export function AccessGate({ children, onboarding = false }: { children: ReactNode; onboarding?: boolean }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const session = useQuery({ queryKey: ["session"], queryFn: authApi.me, retry: false });
  if (session.isLoading) return <LoadingState label="Loading workspace context" />;
  if (session.isError) {
    if (session.error instanceof ApiError && session.error.status === 401) return <Navigate to="/login" />;
    return <div className="min-h-screen p-6"><ErrorState title="Workspace unavailable" message={(session.error as Error).message} retry={() => session.refetch()} /></div>;
  }
  if (!session.data?.authenticated) return <Navigate to="/login" />;
  const complete = Boolean(session.data.workspace?.onboardingComplete);
  if (!onboarding && !complete) return <Navigate to="/onboarding/brand" />;
  if (onboarding && complete && path !== "/onboarding/complete") return <Navigate to="/dashboard" />;
  return children;
}
