import { createFileRoute } from "@tanstack/react-router";
import { PublishingScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/publishing")({head:()=>({meta:[{title:"Publishing — SMAA"},{name:"description",content:"Review and move approved marketing work toward publishing."},{property:"og:title",content:"Publishing — SMAA"},{property:"og:description",content:"Review and move approved marketing work toward publishing."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <PublishingScreen/>}
