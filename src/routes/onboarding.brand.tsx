import { createFileRoute } from "@tanstack/react-router";
import { OnboardingDisabled } from "@/components/smaa/screens/auth-onboarding";
// No /api/onboarding/* route exists in this build. Rendering an honest state avoids both a
// form that cannot submit and a redirect loop against AccessGate's onboarding branch.
export const Route=createFileRoute("/onboarding/brand")({head:()=>({meta:[{title:"Workspace — SMAA"},{name:"description",content:"Guided onboarding is not part of this build."},{property:"og:title",content:"Workspace — SMAA"},{property:"og:description",content:"Guided onboarding is not part of this build."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <OnboardingDisabled/>}
