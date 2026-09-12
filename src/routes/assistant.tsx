import { createFileRoute, Navigate } from "@tanstack/react-router";
// The chat assistant is not part of this build; creating work happens in /create.
export const Route=createFileRoute("/assistant")({head:()=>({meta:[{title:"Assistant — SMAA"},{name:"description",content:"Creative work is assigned from the Create screens in this build."},{property:"og:title",content:"Assistant — SMAA"},{property:"og:description",content:"Creative work is assigned from the Create screens in this build."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <Navigate to="/create"/>}
