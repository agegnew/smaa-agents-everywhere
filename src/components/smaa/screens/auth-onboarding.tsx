import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";
import poster from "@/assets/smaa-poster.jpg";
import { Button } from "@/components/ui/button";
import { authApi } from "@/lib/api/services";

/**
 * Access is a single shared workspace password — there is no user account, no email
 * and no registration anywhere in the backend, so this screen asks for exactly one field.
 * The login response is only {ok:true}, so session state is re-read from the session query.
 */
export function AuthScreen(){
  const navigate=useNavigate();
  const qc=useQueryClient();
  const mutation=useMutation({
    mutationFn:(data:{password:string})=>authApi.login(data),
    onSuccess:async()=>{await qc.invalidateQueries({queryKey:["session"]});await navigate({to:"/dashboard"})},
    onError:(e:Error)=>toast.error(e.message),
  });
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget).entries()) as {password:string};mutation.mutate(data)};
  return <main className="auth-page">
    <section className="auth-art"><img src={poster} alt="SMAA campaign artwork" width={1200} height={1504}/><span className="brand-lockup"><span className="brand-symbol"><span/><span/></span>SMAA</span><p className="auth-quote">Brand intelligence, turned into work.</p></section>
    <section className="auth-panel"><form className="auth-form" onSubmit={submit}>
      <span className="brand-lockup"><span className="brand-symbol"><span/><span/></span>SMAA</span>
      <h1>Welcome back.</h1>
      <p>Enter the workspace access password to continue.</p>
      <div className="form-grid">
        <label className="field"><span>Workspace password</span><input type="password" name="password" autoComplete="current-password" required/></label>
        <Button type="submit" disabled={mutation.isPending}>{mutation.isPending?<LoaderCircle className="animate-spin"/>:null}Sign in<ArrowRight/></Button>
      </div>
      <p className="auth-switch">This workspace uses one shared access password. There are no individual accounts.</p>
    </form></section>
  </main>;
}

/**
 * Onboarding has no backend in this build (no /api/onboarding/* route exists) and the
 * workspace is already provisioned. Every /onboarding/* URL renders this instead of a
 * form that cannot submit or a progress poll that can never resolve.
 */
export function OnboardingDisabled(){
  return <main className="onboarding-page">
    <header className="onboarding-top"><Link to="/dashboard" className="brand-lockup"><span className="brand-symbol"><span/><span/></span>SMAA</Link></header>
    <div className="onboarding-content">
      <p className="eyebrow">Workspace</p>
      <h1>Your workspace is already set up.</h1>
      <p className="lead">Guided onboarding is not part of this build. Brand knowledge is ingested outside the app, and the workspace is ready to create.</p>
      <section className="panel onboarding-card">
        <div className="onboarding-actions"><Button asChild size="lg"><Link to="/dashboard">Enter workspace<ArrowRight/></Link></Button></div>
      </section>
    </div>
  </main>;
}
