import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/smaa/system";
import { Button } from "@/components/ui/button";
// Publishing has no backend in this build. Static by design — nothing is requested here.
export const Route=createFileRoute("/publishing/$assetId")({head:()=>({meta:[{title:"Publishing — SMAA"},{name:"description",content:"Publishing is not part of this build."},{property:"og:title",content:"Publishing — SMAA"},{property:"og:description",content:"Publishing is not part of this build."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <div className="page-wrap"><PageHeader eyebrow="Publishing" title="Publishing is not part of this build." description="Scheduling and distribution are out of scope here."/><EmptyState title="Nothing to publish from here" message="Work you keep is written into the shared assets library." action={<Button asChild variant="outline"><Link to="/library">Open library</Link></Button>}/></div>}
