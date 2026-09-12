import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AppShell } from "@/components/smaa/app-shell";
import { AccessGate } from "@/components/smaa/access-gate";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="state-panel min-h-screen"><h1 className="text-6xl font-bold">404</h1><h2>Page not found</h2><p>This page may have moved.</p><Button asChild><Link to="/dashboard">Return to SMAA</Link></Button></div>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="state-panel min-h-screen"><h1>This page didn’t load</h1><p>Try again or return to the command center.</p><div className="flex gap-2"><Button onClick={()=>{router.invalidate();reset()}}>Try again</Button><Button asChild variant="outline"><Link to="/dashboard">Command center</Link></Button></div></div>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:"#ffffff"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"},{rel:"icon",type:"image/png",href:"/favicon.png"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();const path=useRouterState({select:(s)=>s.location.pathname});const onboarding=path.startsWith("/onboarding");const chrome=!path.startsWith("/login")&&!path.startsWith("/signup")&&!onboarding;return <QueryClientProvider client={queryClient}>{chrome?<AccessGate><AppShell><Outlet/></AppShell></AccessGate>:onboarding?<AccessGate onboarding><Outlet/></AccessGate>:<Outlet/>}<Toaster position="bottom-right"/></QueryClientProvider>}
