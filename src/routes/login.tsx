import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/login")({head:()=>({meta:[{title:"Login — SMAA"},{name:"description",content:"Sign in to your SMAA marketing workspace."},{property:"og:title",content:"Login — SMAA"},{property:"og:description",content:"Sign in to your SMAA marketing workspace."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <AuthScreen/>}
