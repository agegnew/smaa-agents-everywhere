import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, Bot, ChevronsUpDown, CircleCheck, CircleUserRound, Command, GalleryVerticalEnd, LogOut, Plug, Send, Settings, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { authApi } from "@/lib/api/services";
import { toast } from "sonner";

const primary = [
  { label: "Command Center", to: "/dashboard", icon: Command },
  { label: "Assistant", to: "/assistant", icon: Bot },
  { label: "Create", to: "/create", icon: Sparkles },
  { label: "Review", to: "/review", icon: CircleCheck },
  { label: "Library", to: "/library", icon: GalleryVerticalEnd },
  { label: "Brand", to: "/brand", icon: BookOpen },
  { label: "Publishing", to: "/publishing", icon: Send },
  { label: "Integrations", to: "/integrations", icon: Plug },
] as const;

function AppNavigation() {
  const { state, setOpenMobile } = useSidebar();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const collapsed = state === "collapsed";
  return <Sidebar collapsible="icon" className="border-sidebar-border">
    <SidebarHeader className="border-b border-sidebar-border p-3">
      <Link to="/dashboard" className="brand-lockup" onClick={() => setOpenMobile(false)}><span className="brand-symbol"><span/><span/></span>{!collapsed ? <span>SMAA</span> : null}</Link>
      {!collapsed ? <div className="workspace-switcher"><span className="workspace-avatar">42</span><span><strong>42 Abu Dhabi</strong><small>Marketing workspace</small></span><ChevronsUpDown/></div> : null}
    </SidebarHeader>
    <SidebarContent className="p-2"><SidebarGroup><SidebarGroupContent><SidebarMenu>
      {primary.map((item) => { const active = pathname === item.to || (item.to !== "/dashboard" && pathname.startsWith(`${item.to}/`)); return <SidebarMenuItem key={item.to}><SidebarMenuButton asChild isActive={active} tooltip={item.label}><Link to={item.to} onClick={() => setOpenMobile(false)}><item.icon/><span>{item.label}</span></Link></SidebarMenuButton></SidebarMenuItem>; })}
    </SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent>
    <SidebarFooter className="border-t border-sidebar-border p-2"><SidebarMenu>
      <SidebarMenuItem><SidebarMenuButton asChild tooltip="Settings"><Link to="/settings"><Settings/><span>Settings</span></Link></SidebarMenuButton></SidebarMenuItem>
      <SidebarMenuItem><SidebarMenuButton tooltip="Sign out" onClick={async()=>{try{await authApi.logout();await navigate({to:"/login"})}catch(error){toast.error(error instanceof Error?error.message:"Sign out failed")}}}><LogOut/><span>Sign out</span></SidebarMenuButton></SidebarMenuItem>
    </SidebarMenu></SidebarFooter><SidebarRail/>
  </Sidebar>;
}

export function AppShell({ children }: { children: ReactNode }) {
  return <SidebarProvider><div className="flex min-h-svh w-full"><AppNavigation/><div className="min-w-0 flex-1"><header className="workspace-header"><SidebarTrigger className="h-9 w-9"/><div className="header-spacer"/><Button asChild variant="ghost" className="profile-button"><Link to="/settings"><CircleUserRound/><span>Workspace</span></Link></Button></header><main className="app-main">{children}</main></div></div></SidebarProvider>;
}
