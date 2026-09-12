import { createFileRoute } from "@tanstack/react-router";
import { AssetDetailScreen } from "@/components/smaa/screens/asset-detail";
export const Route=createFileRoute("/library/$assetId")({head:()=>({meta:[{title:"Asset Review — SMAA"},{name:"description",content:"Review, refine and approve a SMAA creative asset."},{property:"og:title",content:"Asset Review — SMAA"},{property:"og:description",content:"Review brand-aware creative work in SMAA."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){const {assetId}=Route.useParams();return <AssetDetailScreen assetId={assetId}/>}
