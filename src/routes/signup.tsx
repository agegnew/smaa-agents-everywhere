import { createFileRoute, Navigate } from "@tanstack/react-router";
// There is no signup endpoint and no user table — access is one shared workspace password.
export const Route=createFileRoute("/signup")({head:()=>({meta:[{title:"Sign in — SMAA"},{name:"description",content:"Sign in to your SMAA marketing workspace."},{property:"og:title",content:"Sign in — SMAA"},{property:"og:description",content:"Sign in to your SMAA marketing workspace."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <Navigate to="/login"/>}
