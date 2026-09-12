import { createFileRoute } from "@tanstack/react-router";
import { LibraryScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/library")({head:()=>({meta:[{title:"Creative Library — SMAA"},{name:"description",content:"Find and review every brand-aware creation in your workspace."},{property:"og:title",content:"Creative Library — SMAA"},{property:"og:description",content:"Find and review every brand-aware creation in your workspace."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <LibraryScreen/>}
