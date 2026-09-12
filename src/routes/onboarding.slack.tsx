import { createFileRoute } from "@tanstack/react-router";
import { SlackOnboarding } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/onboarding/slack")({head:()=>({meta:[{title:"Slack Setup — SMAA"},{name:"description",content:"Bring SMAA into your team workflow in Slack."},{property:"og:title",content:"Slack Setup — SMAA"},{property:"og:description",content:"Bring SMAA into your team workflow in Slack."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <SlackOnboarding/>}
