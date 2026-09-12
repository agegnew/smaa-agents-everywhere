import { createFileRoute } from "@tanstack/react-router";
import { SettingsScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/settings")({head:()=>({meta:[{title:"Settings — SMAA"},{name:"description",content:"Manage your SMAA profile, workspace and preferences."},{property:"og:title",content:"Settings — SMAA"},{property:"og:description",content:"Manage your SMAA profile, workspace and preferences."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <SettingsScreen/>}
