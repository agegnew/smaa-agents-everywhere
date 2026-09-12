import { createFileRoute } from "@tanstack/react-router";
import { BuildingOnboarding } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/onboarding/building")({head:()=>({meta:[{title:"Learning Your Brand — SMAA"},{name:"description",content:"Follow SMAA as it builds your brand knowledge."},{property:"og:title",content:"Learning Your Brand — SMAA"},{property:"og:description",content:"Follow SMAA as it builds your brand knowledge."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <BuildingOnboarding/>}
