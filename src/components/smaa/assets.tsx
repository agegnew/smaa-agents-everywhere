import { ArrowUpRight, Check, MessageSquareText, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./system";
import type { Asset } from "@/types/smaa";

export function AssetCard({ asset }: { asset: Asset }) {
  return <article className="asset-card">
    <Link to="/library/$assetId" params={{ assetId: asset.id }} className="asset-image-wrap" aria-label={`Open ${asset.title}`}>
      {asset.imageUrl ? <img src={asset.imageUrl} alt={asset.title} loading="lazy" /> : <div className="asset-placeholder"><span>Preview pending</span></div>}
      <span className="asset-open"><ArrowUpRight/></span>
    </Link>
    <div className="asset-card-body"><div><p className="asset-kind">{asset.type.replace("_", " + ")}</p><h3>{asset.title}</h3></div><StatusBadge status={asset.status}/>{asset.campaign ? <p className="asset-meta">{asset.campaign}</p> : null}</div>
  </article>;
}

export function ReviewActions({ onApprove, onRefine, onReject, disabled }: { onApprove?: () => void; onRefine?: () => void; onReject?: () => void; disabled?: boolean }) {
  return <div className="review-actions" aria-label="Review actions">
    <Button variant="outline" onClick={onRefine} disabled={disabled}><MessageSquareText/>Refine</Button>
    <Button variant="outline" onClick={onReject} disabled={disabled}><X/>Reject</Button>
    <Button onClick={onApprove} disabled={disabled}><Check/>Approve</Button>
  </div>;
}
