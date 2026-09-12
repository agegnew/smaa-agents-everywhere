import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Boxes,
  LayoutDashboard,
  Library as LibraryIcon,
  LogOut,
  Paintbrush,
  Radio,
  Settings as SettingsIcon,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { authApi } from "@/lib/api/services";
import { toast } from "sonner";

/**
 * Navigation ported from the 42-studio frontend's Sidebar.tsx, including its
 * naming, which is not interchangeable: "Ideation" is the hands-on studio and
 * "Producer" is the autonomous one — two different jobs, so two entries. The
 * routes are SMAA's; only the labels, icons, order and badges are upstream's.
 */
const NAV = [
  { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/brand", label: "Brand", Icon: Sparkles },
  { to: "/library", label: "Assets", Icon: Boxes },
  { to: "/create", label: "Ideation", Icon: Paintbrush },
  { to: "/review", label: "Producer", Icon: Radio, badge: "beta" },
  { to: "/publishing", label: "SMAA intelligence", Icon: TrendingUp, badge: "beta" },
  { to: "/assistant", label: "Library", Icon: LibraryIcon },
  { to: "/settings", label: "Settings", Icon: SettingsIcon },
] as const;

function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="studio-nav" aria-label="Main">
      {NAV.map(({ to, label, Icon, ...rest }) => {
        const badge = "badge" in rest ? (rest as { badge?: string }).badge : undefined;
        const active = pathname === to || (to !== "/dashboard" && pathname.startsWith(`${to}/`));
        return (
          <Link
            key={to}
            to={to}
            aria-current={active ? "page" : undefined}
            className={["nav-item", active ? "active" : ""].join(" ")}
          >
            <Icon className="nav-icon" strokeWidth={1.8} />
            <span>{label}</span>
            {badge ? <span className="pill">{badge}</span> : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-svh">
      <aside className="studio-sidebar">
        {/* Brand lockup: square mark + product name over a one-line subtitle. */}
        <Link to="/dashboard" className="studio-brand" aria-label="Go to dashboard">
          <span className="studio-mark">42</span>
          <span className="studio-brand-text">
            <span className="studio-brand-title">SMAA</span>
            <span className="studio-brand-sub">Creative Command Center</span>
          </span>
        </Link>
        <Nav />
        <button
          type="button"
          className="nav-item"
          style={{ margin: ".75rem", width: "auto" }}
          onClick={async () => {
            try {
              await authApi.logout();
              await navigate({ to: "/login" });
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "Sign out failed");
            }
          }}
        >
          <LogOut className="nav-icon" strokeWidth={1.8} />
          <span>Sign out</span>
        </button>
      </aside>
      <main id="main-content" tabIndex={-1} className="studio-main">
        <div className="studio-page">{children}</div>
      </main>
    </div>
  );
}
