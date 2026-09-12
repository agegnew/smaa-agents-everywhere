import { createFileRoute } from "@tanstack/react-router";
import { BrandScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/brand")({head:()=>({meta:[{title:"Brand Memory — SMAA"},{name:"description",content:"See the brand context SMAA uses to create aligned work."},{property:"og:title",content:"Brand Memory — SMAA"},{property:"og:description",content:"See the brand context SMAA uses to create aligned work."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <BrandScreen/>}
