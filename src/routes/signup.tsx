import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/signup")({head:()=>({meta:[{title:"Create account — SMAA"},{name:"description",content:"Create your SMAA marketing workspace."},{property:"og:title",content:"Create account — SMAA"},{property:"og:description",content:"Create your SMAA marketing workspace."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <AuthScreen mode="signup"/>}
