import { createFileRoute } from "@tanstack/react-router";
import { CreateFormScreen } from "@/components/smaa/screens/create";
export const Route=createFileRoute("/create/character")({head:()=>({meta:[{title:"Create Character — SMAA"},{name:"description",content:"Build a reusable human character for brand campaigns."},{property:"og:title",content:"Create Character — SMAA"},{property:"og:description",content:"Build a reusable human character for brand campaigns."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <CreateFormScreen kind="character"/>}
