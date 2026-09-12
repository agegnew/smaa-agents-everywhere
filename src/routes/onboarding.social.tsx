import { createFileRoute } from "@tanstack/react-router";
import { SocialOnboarding } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/onboarding/social")({head:()=>({meta:[{title:"Social Setup — SMAA"},{name:"description",content:"Connect your brand social presence to SMAA."},{property:"og:title",content:"Social Setup — SMAA"},{property:"og:description",content:"Connect your brand social presence to SMAA."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <SocialOnboarding/>}
