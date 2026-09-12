import { createFileRoute } from "@tanstack/react-router";
import { CreateFormScreen } from "@/components/smaa/screens/create";
export const Route=createFileRoute("/create/poster")({head:()=>({meta:[{title:"Create Poster — SMAA"},{name:"description",content:"Create a brand-aware social poster with SMAA."},{property:"og:title",content:"Create Poster — SMAA"},{property:"og:description",content:"Create a brand-aware social poster with SMAA."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
// The dashboard composer hands its brief over here instead of posting to a chat endpoint that does not exist.
validateSearch:(search:{prompt?:string}):{prompt?:string}=>(typeof search.prompt==="string"&&search.prompt.trim()?{prompt:search.prompt}:{}),
component:Page});
function Page(){const {prompt}=Route.useSearch();return <CreateFormScreen kind="poster" initialPrompt={prompt}/>}
