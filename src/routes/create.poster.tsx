import { createFileRoute } from "@tanstack/react-router";
import { CreateFormScreen } from "@/components/smaa/screens/create";
export const Route=createFileRoute("/create/poster")({head:()=>({meta:[{title:"Create Poster — SMAA"},{name:"description",content:"Create a brand-aware social poster with SMAA."},{property:"og:title",content:"Create Poster — SMAA"},{property:"og:description",content:"Create a brand-aware social poster with SMAA."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <CreateFormScreen kind="poster"/>}
