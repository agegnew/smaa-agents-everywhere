# SMAA Enterprise Frontend

## Goal
Build SMAA as a polished, responsive marketing operations workspace that makes the brand-aware agent, human review, creative assets, Slack context, and publishing flow immediately understandable. The frontend will never fabricate backend results and will use `VITE_API_BASE_URL` through one typed API layer.

## Product structure
- Create the complete route set for authentication, onboarding, command center, assistant, creation flows, library, asset detail, brand memory, publishing, integrations, and settings.
- Add guarded navigation that resolves authentication, onboarding, and workspace context before showing protected pages.
- Build a shared desktop sidebar, mobile drawer, workspace header, active navigation, and accessible collapse behavior.
- Redirect `/` according to the resolved session state instead of leaving a public placeholder.

## Visual system
- Establish a warm neutral enterprise palette, near-black typography, restrained green accent, fine borders, light shadows, compact radii, and editorial spacing.
- Use a modern sans-serif family with a stronger display hierarchy and readable metadata.
- Keep motion restrained: navigation transitions, active agent steps, dialog/drawer movement, image reveal, and clear loading feedback with reduced-motion support.
- Make creative output the dominant visual element on generation, review, detail, and publishing screens.

## Shared frontend architecture
- Add typed domain models for assets, agent events, workspaces, brand memory, integrations, publishing, onboarding, and API errors.
- Create one API client that reads `VITE_API_BASE_URL`, handles credentials, JSON, errors, and session expiry consistently.
- Isolate endpoint contracts into authentication, workspace, onboarding, generation, library, brand, assistant, integration, and publishing services.
- Use query-driven loading and mutations where data exists; render designed loading, empty, error, retry, and unavailable states where it does not.
- Do not seed fake records, fake agent activity, fake connected integrations, or fake success states.

## Shared components
- Build the app shell, sidebar, mobile navigation, headers, status badges, loading/error/empty states, form fields, confirmation dialogs, and toast handling.
- Build reusable `AgentActivity`, `AgentEvent`, `GenerationProgress`, `AssetCard`, `AssetGrid`, `AssetPreview`, `ReviewActions`, `RefineDialog`, and `RejectDialog` components.
- Keep review actions state-aware and confirmation-heavy; preserve prior versions during refinement when the API provides them.

## Screens and flows
1. **Authentication and onboarding**
   - Premium minimal login/signup screens.
   - Brand, social, Slack, knowledge-building, and completion steps with clear progress and API-driven state.
2. **Command center**
   - Greeting, workspace identity, prominent work composer, real agent activity, needs-attention queue, exactly three quick-create options, and recent work.
3. **Creation and generation**
   - Create hub plus progressive Poster, Poster + Human, and Human Character forms.
   - Full generation workspace mapped to backend states without invented percentages or internal reasoning.
4. **Review and library**
   - Image-forward library with search, tabs, valid actions, and excellent empty/error states.
   - Exceptional asset detail layout with brand context, agent activity, versions, and Approve/Refine/Reject flows.
5. **Brand, assistant, publishing, integrations, settings**
   - Brand Memory and real connected knowledge sources.
   - Work-object-oriented assistant rather than generic chat bubbles.
   - Ready/scheduled/published/failed publishing views and clear outcomes.
   - Honest integration cards, including Slack metadata only when returned by the API.
   - Intentionally simple settings sections.

## Technical details
- Keep the existing TanStack Start/Router architecture; do not introduce React Router despite the generic brief naming it.
- Add a route file for every requested URL and unique metadata for every content route.
- Use TanStack Query for API reads and mutations, with protected client-side queries rather than public prerendered authenticated loaders.
- Use the existing Tailwind v4 and component primitives, extending semantic tokens in `src/styles.css`.
- Keep all secrets server-side; the browser only receives the configured public API base URL.
- Make desktop, tablet, and mobile layouts usable with visible focus states, semantic labels, touch targets, and no horizontal overflow.

## Validation
- Verify every route, redirect, navigation item, form state, dialog, and action path.
- Test API-unavailable, unauthenticated, loading, empty, failure, and retry states.
- Inspect desktop and mobile screenshots, generated-content hierarchy, keyboard focus, overflow, and console/runtime errors.
- Confirm all route metadata is specific and the template placeholder is gone.
