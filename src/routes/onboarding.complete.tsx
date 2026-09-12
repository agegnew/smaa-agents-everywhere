import { createFileRoute } from "@tanstack/react-router";
import { CompleteOnboarding } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/onboarding/complete")({head:()=>({meta:[{title:"Workspace Ready — SMAA"},{name:"description",content:"Your SMAA workspace is ready."},{property:"og:title",content:"Workspace Ready — SMAA"},{property:"og:description",content:"Your SMAA workspace is ready."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <CompleteOnboarding/>}
