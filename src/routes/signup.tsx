import { AuthScreen } from "@/components/smaa/screens/auth-onboarding";
import { createFileRoute } from "@tanstack/react-router";
// Real accounts: POST /api/smaa/auth/signup (email + password, scrypt-hashed).
export const Route=createFileRoute("/signup")({head:()=>({meta:[{title:"Sign in — SMAA"},{name:"description",content:"Sign in to your SMAA marketing workspace."},{property:"og:title",content:"Sign in — SMAA"},{property:"og:description",content:"Sign in to your SMAA marketing workspace."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <AuthScreen mode="signup"/>}
