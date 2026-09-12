import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/integrations")({head:()=>({meta:[{title:"Integrations — SMAA"},{name:"description",content:"Connect SMAA with your team channels and brand sources."},{property:"og:title",content:"Integrations — SMAA"},{property:"og:description",content:"Connect SMAA with your team channels and brand sources."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <IntegrationsScreen/>}
