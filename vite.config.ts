// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Default target is the local end of an SSH tunnel to the backend
//   ssh -N -L 8000:127.0.0.1:8000 ec2-user@<host>
// Networks that web-filter HTTP(S) can block the public hostname outright (a
// Fortinet appliance here returns its own 403 block page on both :80 and :443,
// while SSH on :22 to the same host is untouched). Tunnelling sidesteps that
// without a security-group change. Override with SMAA_API_TARGET to point
// straight at the public API on an unfiltered network.
const API_TARGET = process.env["SMAA_API_TARGET"] ?? "http://127.0.0.1:8000";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: {
      proxy: {
        // Same-origin API in dev: the browser calls http://localhost:8080/api/*
        // and Vite forwards it. This exists because networks that intercept TLS
        // (corporate proxies re-signing certs with their own CA) make the browser
        // reject https://api.42studio.fit with ERR_CERT_AUTHORITY_INVALID, even
        // though the server itself serves a valid Let's Encrypt certificate.
        //
        // Going through the dev server sidesteps it entirely — the browser only
        // ever speaks plain HTTP to localhost, so there is no certificate to
        // distrust and no cross-origin request to preflight.
        //
        // secure: false lets the Node-side hop tolerate that same re-signed
        // certificate. It applies ONLY to this dev proxy, never to production.
        "/api": {
          target: API_TARGET,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
});
