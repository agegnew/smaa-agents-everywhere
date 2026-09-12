import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Check, MessageSquareText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { assetsApi } from "@/lib/api/services";
import { AgentActivity, ErrorState, LoadingState, StatusBadge } from "@/components/smaa/system";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Asset } from "@/types/smaa";

export function AssetDetailScreen({assetId}:{assetId:string}){
  const qc=useQueryClient();
  const navigate=useNavigate();
  // Generation rows land in the DB as "generating" first, so keep polling until the row is terminal.
  const q=useQuery({queryKey:["asset",assetId],queryFn:()=>assetsApi.get(assetId),retry:false,refetchInterval:(query)=>query.state.data?.status==="generating"?4000:false});
  const [dialog,setDialog]=useState<"refine"|null>(null);
  const [instruction,setInstruction]=useState("");
  const update=()=>qc.invalidateQueries({queryKey:["asset",assetId]});
  const save=useMutation({mutationFn:()=>assetsApi.approve(assetId),onSuccess:()=>{toast.success("Saved to your assets library");update()},onError:(e:Error)=>toast.error(e.message)});
  // Refine mints a NEW child generation — navigate to it instead of refetching the unchanged parent.
  const refine=useMutation({mutationFn:()=>assetsApi.refine(assetId,instruction),onSuccess:(child:Asset)=>{toast.success("Refined — the original version is preserved");setDialog(null);setInstruction("");void navigate({to:"/library/$assetId",params:{assetId:child.id}})},onError:(e:Error)=>toast.error(e.message)});
  if(q.isLoading)return <LoadingState label="Loading creation"/>;
  if(q.isError)return <ErrorState message={(q.error as Error).message} retry={()=>q.refetch()}/>;
  const a=q.data;
  if(!a)return <ErrorState message="This asset is unavailable."/>;
  return <div className="page-wrap"><div className="detail-layout">
    <section className="asset-stage panel">{a.imageUrl?<img src={a.imageUrl} alt={a.title}/>:<span className="text-sm text-primary-foreground/70">{a.status==="generating"?"Rendering — this page updates itself when the image is ready.":a.status==="failed"?"This generation did not produce an image.":"Asset preview unavailable"}</span>}</section>
    <aside className="detail-aside">
      <section className="panel detail-section"><p className="eyebrow">Asset details</p><h1 className="detail-title">{a.title}</h1>{a.campaign?<p className="text-sm text-muted-foreground mb-4">{a.campaign}</p>:null}<StatusBadge status={a.status}/></section>
      {a.events?.length?<AgentActivity events={a.events}/>:null}
      {a.versions?.length?<section className="panel detail-section"><h3>Version history</h3><div className="grid gap-2">{a.versions.map((v,i)=><div className="flex justify-between text-sm border-b pb-2" key={v.id}><span>Version {v.number}</span><span className="text-muted-foreground">{i===0?"Current":v.label}</span></div>)}</div></section>:null}
      {a.status==="ready"?<section className="panel detail-section"><h3>Human review</h3><p className="text-xs text-muted-foreground mb-4">Saving writes this image into the shared assets library. {a.type==="poster"?"Refining creates a new version and leaves the original untouched.":"Iteration is implemented for posters in this build."}</p><div className="review-actions" aria-label="Review actions">{a.type==="poster"?<Button variant="outline" onClick={()=>setDialog("refine")} disabled={save.isPending||refine.isPending}><MessageSquareText/>Refine</Button>:null}<Button onClick={()=>save.mutate()} disabled={save.isPending||refine.isPending}><Check/>{save.isPending?"Saving…":"Save to library"}</Button></div></section>:null}
    </aside>
  </div>
  <Dialog open={Boolean(dialog)} onOpenChange={open=>!open&&setDialog(null)}><DialogContent><DialogHeader><DialogTitle>Refine this creation</DialogTitle><DialogDescription>Describe what should change. The current version will be preserved as a new version is created.</DialogDescription></DialogHeader><textarea className="min-h-28 rounded-md border bg-background p-3 text-sm" value={instruction} onChange={e=>setInstruction(e.target.value)} placeholder="Make the headline larger and move the subject left."/><DialogFooter><Button variant="outline" onClick={()=>setDialog(null)}>Cancel</Button><Button disabled={!instruction.trim()||refine.isPending} onClick={()=>refine.mutate()}>{refine.isPending?"Refining…":"Apply changes"}</Button></DialogFooter></DialogContent></Dialog>
  </div>;
}
