import { createFileRoute } from "@tanstack/react-router";
import { ReviewScreen } from "@/components/smaa/screens/workspace";
export const Route=createFileRoute("/review")({head:()=>({meta:[{title:"Review — SMAA"},{name:"description",content:"Review creative work waiting for a human decision."},{property:"og:title",content:"Review — SMAA"},{property:"og:description",content:"Approve, refine or reject brand-aware creative work."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ReviewScreen});
