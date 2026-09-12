import { createFileRoute } from "@tanstack/react-router";
import { CreateFormScreen } from "@/components/smaa/screens/create";
export const Route=createFileRoute("/create/poster-human")({head:()=>({meta:[{title:"Create Poster + Human — SMAA"},{name:"description",content:"Create a brand-aware campaign visual featuring a human subject."},{property:"og:title",content:"Create Poster + Human — SMAA"},{property:"og:description",content:"Create a brand-aware campaign visual featuring a human subject."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <CreateFormScreen kind="poster-human"/>}
