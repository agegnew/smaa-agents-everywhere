import { createFileRoute } from "@tanstack/react-router";
import { BrandOnboarding } from "@/components/smaa/screens/auth-onboarding";
export const Route=createFileRoute("/onboarding/brand")({head:()=>({meta:[{title:"Brand Setup — SMAA"},{name:"description",content:"Tell SMAA about your brand."},{property:"og:title",content:"Brand Setup — SMAA"},{property:"og:description",content:"Tell SMAA about your brand."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <BrandOnboarding/>}
