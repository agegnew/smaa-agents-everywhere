import { createFileRoute } from "@tanstack/react-router";
import { DashboardScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/dashboard")({head:()=>({meta:[{title:"Command Center — SMAA"},{name:"description",content:"Direct SMAA, review agent activity and act on marketing work."},{property:"og:title",content:"Command Center — SMAA"},{property:"og:description",content:"Direct SMAA, review agent activity and act on marketing work."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <DashboardScreen/>}
