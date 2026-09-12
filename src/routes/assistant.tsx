import { createFileRoute } from "@tanstack/react-router";
import { AssistantScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/assistant")({head:()=>({meta:[{title:"Assistant — SMAA"},{name:"description",content:"Work with SMAA using brand context and real marketing assets."},{property:"og:title",content:"Assistant — SMAA"},{property:"og:description",content:"Work with SMAA using brand context and real marketing assets."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <AssistantScreen/>}
