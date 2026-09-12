import { createFileRoute } from "@tanstack/react-router";
import { CreateHubScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/create")({head:()=>({meta:[{title:"Create — SMAA"},{name:"description",content:"Create brand-aware posters and reusable campaign characters."},{property:"og:title",content:"Create — SMAA"},{property:"og:description",content:"Create brand-aware posters and reusable campaign characters."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <CreateHubScreen/>}
