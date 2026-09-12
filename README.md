# Brand AI Studio

# SMAA — Enterprise AI Marketing Workspace

## MASTER FRONTEND BUILD PROMPT

You are redesigning and implementing the **public frontend of SMAA (Social Media Management Automation)**.

This is a hackathon project and the goal is to create an **enterprise-grade, premium, AI-native frontend** that makes the product immediately understandable and visually impressive during a live demonstration.

IMPORTANT:

You are responsible for the **FRONTEND ONLY**.

The SMAA backend, database, RAG, agent orchestration, AI providers, Slack backend integration, social integrations, authentication/session logic, generation logic, and publishing infrastructure are handled separately by the engineering team.

Do NOT invent backend functionality.

Do NOT create fake API results.

Do NOT create mock agent behavior that pretends to be real.

Do NOT move private secrets into frontend code.

Do NOT replace the existing backend architecture.

The frontend must consume the existing backend/API through:

`VITE_API_BASE_URL`

The frontend should be architected so backend endpoint changes can be isolated inside service/API files.

---

# 1. PRODUCT POSITIONING

SMAA is NOT simply:

* an AI image generator
* an AI chatbot
* a social media scheduler
* a dashboard with AI features

SMAA is:

> A brand-aware AI marketing teammate that learns from a company's existing digital presence, works with the team inside the web workspace and Slack, creates content, keeps humans in control, and moves approved work toward publishing.

The product story is:

```text
Existing Brand Presence
        ↓
Brand Intelligence
        ↓
SMAA Agent
        ↓
Understand
        ↓
Create
        ↓
Review
        ↓
Refine
        ↓
Approve
        ↓
Publish
        ↓
Learn from feedback
```

The web application is the **visual command center**.

Slack is the **team workflow environment**.

Brand intelligence is the **context layer**.

Generated content is the **visible output**.

Humans remain in control.

---

# 2. DESIGN GOAL

The final frontend must feel like an established enterprise product.

Target feeling:

* Premium
* Enterprise
* Intelligent
* Calm
* Professional
* Modern
* Confident
* Editorial
* AI-native
* Creative
* Extremely polished
* Simple despite complex technology

Design inspiration should feel like a thoughtful combination of:

* Linear
* Notion
* Slack
* Canva
* modern enterprise software
* premium creative tools

Do NOT copy these products.

Use the quality of their hierarchy, spacing, interaction design, and visual discipline as inspiration.

The result should feel like a serious company could actually deploy this product.

---

# 3. VISUAL DIRECTION

Use an understated enterprise visual system.

Primary visual characteristics:

* warm neutral or very light background
* near-black typography
* restrained accent color
* subtle borders
* very light shadows
* medium/small corner radius
* strong typography hierarchy
* large image previews
* generous whitespace
* precise alignment
* excellent spacing rhythm
* sophisticated hover states
* subtle transitions
* smooth loading states

Avoid:

* neon gradients
* purple AI glow everywhere
* excessive glassmorphism
* giant glowing buttons
* robot imagery
* generic AI sparkle graphics
* excessive shadows
* excessive animations
* noisy backgrounds
* fake analytics
* overly colorful dashboards
* childish illustrations
* crypto/startup visual clichés

The UI should communicate:

> "This system is powerful because it works."

not:

> "This system is AI because everything is glowing."

---

# 4. TYPOGRAPHY

Use a clean modern sans-serif.

Typography should feel:

* premium
* highly readable
* enterprise
* slightly editorial

Use strong hierarchy:

* large page titles
* concise supporting copy
* small metadata
* clear status labels
* readable form labels
* large generated asset titles

Avoid excessive font weights and unnecessary capitalization.

---

# 5. CORE DESIGN PRINCIPLE

Generated creative content should be the visual hero.

The interface should support the content rather than compete with it.

For image generation screens:

* large preview
* strong hierarchy
* minimal controls
* clear status
* clear human-review actions
* clear agent activity

Do not bury generated content beneath large amounts of UI.

---

# 6. APPLICATION INFORMATION ARCHITECTURE

Use this primary navigation:

```text
SMAA

Command Center

Create
Review
Library
Brand
Publishing
Integrations

────────────────

Workspace
User Profile
Settings
Sign Out
```

Do not make the product feel like a collection of unrelated pages.

The entire application should feel like one connected operating system for marketing.

---

# 7. ROUTES

Preserve and implement:

```text
/login
/signup

/onboarding/brand
/onboarding/social
/onboarding/slack
/onboarding/building
/onboarding/complete

/dashboard

/assistant

/create
/create/poster
/create/poster-human
/create/character

/library
/library/:assetId

/brand

/publishing
/publishing/:assetId

/integrations

/settings
```

Use protected routing.

Authentication rules:

```text
Not authenticated
→ /login

Authenticated + onboarding incomplete
→ onboarding flow

Authenticated + onboarding complete
→ /dashboard
```

Do not render the dashboard before workspace context is loaded.

---

# 8. APP SHELL

Create a beautiful responsive enterprise application shell.

Desktop:

* left sidebar
* top workspace/header area
* main content area

Sidebar:

* collapsible
* clean
* compact
* polished
* keyboard accessible

Display:

```text
SMAA
workspace name
workspace logo if available
```

Navigation should clearly show the active section.

Avoid overstuffing the sidebar.

On mobile:

* collapse navigation into a drawer
* maintain large touch targets
* preserve hierarchy
* make important actions easy to reach

---

# 9. COMMAND CENTER / DASHBOARD

Route:

`/dashboard`

This is the most important web page.

Do NOT make it a traditional analytics dashboard.

It should feel like an **AI marketing command center**.

Hero section:

```text
Good morning

42 Abu Dhabi

Your AI marketing teammate is ready.
```

Primary interaction:

```text
What should SMAA work on?
```

Provide a large premium input/composer.

Example:

```text
Create a recruitment campaign for our September intake.
```

Primary CTA:

```text
Create
```

Below the composer show:

## LIVE AGENT ACTIVITY

This is critical.

Example:

```text
SMAA AGENT
● Working

✓ Request understood
✓ Brand context retrieved
✓ Recent campaigns checked
● Generating visual
○ Waiting for human review
```

IMPORTANT:

These events must come from real backend/API state when available.

Do not fabricate agent reasoning.

Display actual high-level system events only.

Do NOT expose private chain-of-thought or proprietary prompts.

Show product-level activity such as:

```text
Request received
Brand context loaded
Campaign analyzed
Creative direction selected
Generation started
Generation completed
Waiting for approval
Refinement requested
Publishing started
Publishing completed
```

This should become a reusable component throughout the application.

---

# 10. COMMAND CENTER — NEEDS ATTENTION

Add a strong review section.

Example:

```text
Needs your decision

3 assets are waiting for review
```

Display beautiful asset cards with:

* large thumbnail
* asset type
* campaign
* status
* timestamp
* creator/source if available
* quick review action

CTA:

```text
Review now
```

---

# 11. QUICK CREATE

Provide three primary creation cards only:

### Poster

Create a brand-aware social poster.

### Poster + Human

Create a social visual featuring a realistic human subject.

### Human Character

Create a reusable campaign character.

Do NOT add unrelated generation types.

Cards should be visually premium and image-forward.

---

# 12. RECENT WORK

Show recent generated assets.

Support statuses:

```text
Generating
Ready for Review
Approved
Rejected
Publishing
Published
Failed
```

Use subtle status indicators.

Do not use color alone to communicate state.

---

# 13. CREATE HUB

Route:

`/create`

The Create page should feel like assigning work to an AI teammate.

Heading:

```text
What should SMAA create?
```

Three large creation options:

```text
Poster
Poster + Human
Human Character
```

Each card should explain what SMAA can do.

Use image previews where available.

---

# 14. POSTER CREATION

Route:

`/create/poster`

Do NOT make the experience feel like a giant AI prompt box.

Make the form progressive and user-friendly.

Primary input:

```text
What should SMAA create?
```

Example:

```text
Create a poster promoting the September intake.
```

Optional context:

* Platform
* Aspect Ratio
* Campaign
* Reference Image

Primary CTA:

```text
Generate Poster
```

Before generation, summarize:

```text
SMAA will use:

Brand
Campaign
Brand voice
Visual identity
Recent approved work
```

Only show information actually available from the backend.

---

# 15. POSTER + HUMAN

Route:

`/create/poster-human`

Fields:

* Campaign idea
* Human description
* Environment
* Pose
* Outfit
* Reference image
* Aspect ratio

Make advanced fields collapsible where useful.

Default experience should be simple.

Primary CTA:

```text
Generate Poster + Human
```

Use examples intelligently.

Example:

```text
Create a recruitment poster showing a young software engineering student inside a modern coding campus.
```

---

# 16. HUMAN CHARACTER GENERATOR

Route:

`/create/character`

Fields:

* Character name
* Description
* Age range
* Appearance
* Outfit
* Profession / Role
* Pose
* Environment
* Style
* Reference image

The interface should feel like building a reusable creative asset rather than filling a form.

Primary CTA:

```text
Generate Character
```

---

# 17. GENERATION EXPERIENCE

This is one of the most important parts of the entire frontend.

Never leave the user staring at an empty loading page.

Use a full generation workspace.

Example:

```text
Creating your poster

SMAA is combining your request
with your brand context.
```

Then display:

```text
UNDERSTAND

✓ Request received
✓ Campaign identified

BRAND CONTEXT

✓ Brand voice loaded
✓ Visual direction loaded
✓ Recent work checked

CREATE

✓ Creative direction selected
● Generating visual
○ Finalizing asset

REVIEW

○ Waiting for human decision
```

Use subtle animation to indicate the current active step.

Do NOT invent exact percentages.

Do NOT say:

```text
73%
```

unless the backend actually provides that data.

Possible backend states:

```text
idle
preparing
queued
generating
processing
ready
failed
```

Map them cleanly to the UI.

---

# 18. AGENT ACTIVITY COMPONENT

Build one reusable component:

```text
AgentActivity
```

It should work everywhere.

Possible locations:

* Dashboard
* Assistant
* Create
* Asset Detail
* Publishing
* Slack activity summary

Design:

```text
SMAA AGENT

✓ Request understood
✓ Brand context retrieved
✓ Creative direction selected
● Generating
○ Human approval
○ Publishing
```

Each event can contain:

```ts
id
type
label
status
timestamp
metadata
```

Possible statuses:

```text
pending
running
complete
error
```

Possible event types:

```text
agent_started
request_understood
brand_context_loaded
campaign_analyzed
generation_started
generation_completed
review_required
refinement_started
refinement_completed
approved
rejected
publishing_started
publishing_completed
failed
```

Do not expose hidden model reasoning.

Only expose concise system-level actions that are safe and useful to the user.

---

# 19. ASSET DETAIL

Route:

`/library/:assetId`

Make this page exceptional.

Desktop layout:

```text
┌───────────────────────────┬──────────────────────────┐
│                           │ Asset details            │
│                           │                          │
│       LARGE IMAGE         │ Poster + Human           │
│                           │ September Intake         │
│                           │                          │
│                           │ ● Ready for review       │
│                           │                          │
│                           │ Brand context             │
│                           │ ✓ Brand voice             │
│                           │ ✓ Visual identity         │
│                           │ ✓ Campaign history        │
│                           │                          │
│                           │ Agent activity            │
│                           │ ✓ Request understood      │
│                           │ ✓ Context retrieved       │
│                           │ ✓ Generated               │
│                           │ ● Awaiting approval       │
│                           │                          │
│                           │ [Refine] [Reject]         │
│                           │ [Approve]                 │
└───────────────────────────┴──────────────────────────┘
```

Generated image should dominate the page visually.

---

# 20. HUMAN REVIEW

Human approval is a major part of SMAA.

Every generated asset should support:

```text
Approve
Refine
Reject
```

Make these actions extremely obvious.

Approve should feel confident but not aggressive.

Reject should feel deliberate.

Refine should feel conversational.

---

# 21. REFINE EXPERIENCE

Open a beautiful focused refinement interface.

Example:

```text
Refine this creation

What would you like to change?
```

Input example:

```text
Make the person smaller and move them slightly left.
```

Then show:

```text
SMAA

I’ll keep the current brand direction
and adjust the composition.
```

CTA:

```text
Apply changes
```

During refinement:

```text
✓ Previous version preserved
● Applying changes
○ Generating Version 2
```

Never silently overwrite the original.

---

# 22. VERSION HISTORY

Where backend data supports it, show:

```text
Version 3 — Current
Version 2 — Refined
Version 1 — Original
```

Keep this clean.

Do not build a complex timeline unless useful.

---

# 23. LIBRARY

Route:

`/library`

This should feel like a premium creative library.

Tabs:

```text
All
Posters
Poster + Human
Characters
Approved
Rejected
Published
```

Search:

```text
Search creations...
```

Optional filters:

* Type
* Status
* Date

Asset cards:

* image
* title
* type
* status
* date
* campaign
* quick actions

Hovering an asset can reveal:

```text
Open
Review
Refine
Approve
Reject
Publish
```

Only show actions valid for the actual backend state.

---

# 24. BRAND MEMORY PAGE

Route:

`/brand`

Rename the conceptual page visually to:

```text
Brand Memory
```

Supporting description:

```text
What SMAA knows about your brand.
```

This page should make the brand intelligence easy to understand.

Hero:

```text
Your brand memory

SMAA uses your digital presence,
team decisions and approved content
to create work that stays aligned.
```

Then sections:

## Brand DNA

* Brand voice
* Audience
* Messaging
* Visual identity

Use elegant tags and concise descriptions.

Example:

```text
Confident
Modern
Community-driven
Technical but accessible
```

---

# 25. KNOWLEDGE SOURCES

Show available sources:

```text
Website
Instagram
LinkedIn
Brand Documents
Images
Videos
Approved Content
Rejected Content
Human Feedback
Past Campaigns
```

Only show connected/available sources from backend data.

Example:

```text
Website
✓ Connected
127 pages analyzed
```

If counts are unavailable:

```text
Website
✓ Connected
```

Do not invent statistics.

Add:

```text
Refresh Brand Knowledge
```

with appropriate loading state.

---

# 26. ASSISTANT

Route:

`/assistant`

The Assistant should NOT look like a generic ChatGPT clone.

It should feel like:

> a marketing teammate with access to brand context and real work.

Layout:

```text
SMAA Assistant

Conversation

...

Ask SMAA what to work on

[ message input ]
```

Assistant should support:

* create content
* campaign ideas
* poster generation
* poster + human
* character generation
* refinements
* captions
* brand questions
* approval preparation
* publishing assistance

Use inline action cards.

Example:

```text
SMAA:

I can create this using your current
brand direction.

What would you like?

[Poster]
[Poster + Human]
[Character]
```

Generated assets should appear inline in conversations.

---

# 27. CHAT SHOULD NOT FEEL LIKE A NORMAL CHATBOT

Use:

* strong hierarchy
* inline work objects
* asset previews
* agent status
* action buttons
* contextual suggestions

Avoid:

* giant empty chat screen
* generic blue/green chatbot bubbles
* excessive chat decoration

The product is not a chatbot.

The product is an AI teammate.

---

# 28. SLACK EXPERIENCE

Slack is strategically important.

The frontend must clearly communicate:

> SMAA works where the marketing team already works.

Integration page:

```text
Slack
✓ Connected

42 Abu Dhabi

SMAA can work with your team inside Slack.
```

But do not make Slack merely an integration badge.

Show example activity where backend data exists:

```text
Created from #marketing
Approved by Sarah in Slack
Refined from Slack request
```

Use only actual backend metadata.

---

# 29. SHARED WEB + SLACK STATE

The same content object must appear consistently.

Example:

```text
Created in Slack
↓
Visible in Web Library
↓
Refined on Web
↓
Updated state
↓
Approved in Slack
↓
Web shows Approved
```

Frontend must never create separate fake Slack-only state.

Always use backend/API state.

---

# 30. PUBLISHING

Route:

`/publishing`

Tabs:

```text
Ready
Scheduled
Published
Failed
```

Make the publish experience extremely clear.

Example:

```text
Instagram

[ large asset preview ]

Caption

Your next journey starts here...

[ Publish Now ]
[ Schedule ]
```

The frontend sends requests to SMAA backend.

Never call Meta or other social APIs directly from the frontend.

---

# 31. PUBLISH SUCCESS

Example:

```text
✓ Published successfully

Instagram
@brandname
```

If backend provides a live URL:

```text
View live post
```

---

# 32. PUBLISH FAILURE

Use a professional error state:

```text
Publishing failed

Instagram rejected the request.

[ Retry ]
[ View Details ]
```

Avoid frightening technical errors.

---

# 33. INTEGRATIONS

Route:

`/integrations`

Cards:

```text
Slack
Instagram
Website
LinkedIn
TikTok
YouTube
Facebook
X
```

Possible states:

```text
Connected
Not connected
Error
Coming later
```

Never claim an integration is functional unless the backend supports it.

---

# 34. ONBOARDING

Create a beautiful premium onboarding flow.

Progress:

```text
Brand ─── Social ─── Slack ─── Knowledge ─── Ready
```

Always make the current stage obvious.

---

# 35. ONBOARDING BRAND

Route:

`/onboarding/brand`

Title:

```text
Tell SMAA about your brand
```

Subtitle:

```text
We use your existing brand presence
to build your AI workspace.
```

Fields:

* Company name
* Website
* Industry
* Country
* Description

Primary:

```text
Continue
```

Keep it simple.

---

# 36. ONBOARDING SOCIAL

Route:

`/onboarding/social`

Fields:

* Instagram
* LinkedIn
* TikTok
* YouTube
* Facebook
* X / Twitter

All optional.

Buttons:

```text
Skip for now
Continue
```

Use recognizable platform icons.

---

# 37. ONBOARDING SLACK

Route:

`/onboarding/slack`

Make the page highly polished.

Title:

```text
Bring SMAA into your team
```

Supporting text:

```text
Connect Slack so your team can create,
review, refine and approve content
where they already work.
```

Card:

```text
Slack

Create content from Slack.
Review generated assets.
Approve or reject as a team.
Receive publishing updates.

[ Connect Slack ]
```

Do not place Slack credentials in frontend code.

---

# 38. KNOWLEDGE BUILDING

Route:

`/onboarding/building`

This is a major visual opportunity.

Title:

```text
Learning your brand
```

Subtitle:

```text
SMAA is turning your existing online presence
into a brand-aware AI workspace.
```

Show real stages:

```text
✓ Website discovered
✓ Important pages analyzed
✓ Brand language extracted
✓ Social presence analyzed
● Building brand knowledge
```

Possible backend stages:

```text
discovering
crawling
extracting
analyzing
embedding
building_profile
ready
failed
```

Use polling/event updates.

Never invent exact percentages.

---

# 39. ONBOARDING COMPLETE

Route:

`/onboarding/complete`

Headline:

```text
Your SMAA workspace is ready.
```

Summary:

```text
Website
Connected

Brand Intelligence
Ready

Instagram
Added

Slack
Connected
```

CTA:

```text
Enter Workspace
```

---

# 40. AUTHENTICATION

Routes:

```text
/login
/signup
```

Premium, clean, minimal design.

Signup:

```text
Build a brand-aware AI marketing team.
```

Fields:

* Full Name
* Email
* Password

CTA:

```text
Create Account
```

Login:

```text
Welcome back.
```

Do not over-market the authentication screen.

---

# 41. SETTINGS

Route:

`/settings`

Keep intentionally simple.

Sections:

```text
Profile
Workspace
Generation Preferences
Notifications
Integrations
```

Do not spend excessive design effort here.

---

# 42. API ARCHITECTURE

Create one shared API client.

Expected environment variable:

```text
VITE_API_BASE_URL
```

Never hardcode backend URLs.

Never expose:

```text
OPENAI_API_KEY
GOOGLE_API_KEY
GOOGLE_APPLICATION_CREDENTIALS
VERTEX credentials
SLACK_CLIENT_SECRET
META_ACCESS_TOKEN
SUPABASE_SERVICE_ROLE_KEY
DATABASE_PASSWORD
PRIVATE_SYSTEM_PROMPTS
```

Create a clean service/API structure so endpoint changes are easy to manage.

---

# 43. API AREAS

Organize frontend services around:

Authentication:

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

Workspace/onboarding:

```text
GET /api/workspace
POST /api/onboarding/brand
POST /api/onboarding/social
POST /api/onboarding/start
GET /api/onboarding/status
```

Slack:

```text
POST /api/integrations/slack/connect
GET /api/integrations/slack/status
POST /api/integrations/slack/disconnect
```

Brand:

```text
GET /api/brand
POST /api/brand/refresh
GET /api/brand/sources
```

Assistant:

```text
POST /api/assistant/messages
GET /api/assistant/conversations/:id
```

Generation:

```text
POST /api/generate/poster
POST /api/generate/poster-human
POST /api/generate/character
GET /api/generations/:id
POST /api/generations/:id/refine
POST /api/generations/:id/approve
POST /api/generations/:id/reject
```

Library:

```text
GET /api/assets
GET /api/assets/:id
```

Publishing:

```text
POST /api/publishing/:assetId/publish
POST /api/publishing/:assetId/schedule
GET /api/publishing
```

These are contracts/examples.

Do not invent alternative endpoints unless the existing codebase already requires them.

---

# 44. TYPE SAFETY

Use TypeScript throughout.

Important types:

```ts
type AssetType =
  | "poster"
  | "poster_human"
  | "character";

type AssetStatus =
  | "queued"
  | "generating"
  | "ready"
  | "approved"
  | "rejected"
  | "publishing"
  | "published"
  | "failed";

type KnowledgeStage =
  | "discovering"
  | "crawling"
  | "extracting"
  | "analyzing"
  | "embedding"
  | "building_profile"
  | "ready"
  | "failed";
```

Match actual backend response shapes where they differ.

---

# 45. ERROR UX

Every API-driven screen must handle:

```text
Loading
Success
Empty
Error
Retry
```

Never show a blank broken page.

Examples:

```text
We couldn't generate this poster.

[ Retry ]
```

```text
SMAA can't reach the generation service right now.

[ Retry ]
```

```text
Your session has expired.

[ Sign In ]
```

Errors should be clear and human.

---

# 46. LOADING STATES

Use:

* skeletons
* subtle shimmer where appropriate
* inline spinners
* progress states
* button loading states
* background activity indicators

Avoid full-screen loaders unless absolutely necessary.

Buttons must prevent accidental duplicate submissions.

---

# 47. TOASTS

Use toasts for short confirmations:

```text
Poster approved
Slack connected
Changes saved
Publishing started
Brand refresh started
```

Do not use toasts for decisions requiring user attention.

---

# 48. EMPTY STATES

Design excellent empty states.

Library:

```text
No creations yet.

Create your first brand-aware asset.

[ Create Poster ]
```

Publishing:

```text
Nothing is ready to publish.

Approve content from your Library first.
```

Assistant:

```text
Ask SMAA to create something for your brand.
```

Do not make empty pages feel unfinished.

---

# 49. ACCESSIBILITY

Minimum requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* accessible labels
* sufficient contrast
* alt text
* clear form validation
* touch-friendly controls
* buttons must not rely on color alone

---

# 50. RESPONSIVE DESIGN

Primary target:

Desktop

But fully support:

Tablet
Mobile

On mobile:

* collapsible sidebar
* stacked layouts
* sticky primary actions where appropriate
* large image preview
* comfortable form fields
* no tiny controls
* no horizontal overflow

---

# 51. COMPONENT SYSTEM

Create reusable components.

Important shared components:

```text
AppShell
Sidebar
Header
PageHeader
StatusBadge
AgentActivity
AgentEvent
AssetCard
AssetGrid
AssetPreview
ReviewActions
RefineDialog
RejectDialog
GenerationProgress
LoadingState
ErrorState
EmptyState
ConfirmDialog
Toast
Modal
Drawer
FormField
```

Prioritize reusable components over page-specific duplicated code.

---

# 52. MICRO-INTERACTIONS

Use subtle motion.

Examples:

* cards gently lift on hover
* active navigation transitions smoothly
* agent activity state transitions
* image fade-in after generation
* buttons transition elegantly
* drawers and dialogs animate softly
* status changes animate minimally

Avoid:

* excessive bouncing
* dramatic AI animations
* constant motion
* long transitions

Motion must communicate state, not decorate the interface.

---

# 53. AGENT DESIGN LANGUAGE

Create a recognizable visual identity for the SMAA Agent.

Use a small subtle indicator:

```text
● SMAA
```

or:

```text
SMAA AGENT
```

Use it consistently.

Do not use a cartoon bot avatar.

The agent should feel like a professional system.

---

# 54. IMPORTANT AGENT PRINCIPLE

Never expose hidden chain-of-thought.

The interface should communicate:

```text
what the system did
what context it used
what happened
what needs human input
what happens next
```

It should NOT expose:

```text
private prompts
internal reasoning
hidden model deliberation
secret system messages
backend implementation details
```

This is both a product-quality and security requirement.

---

# 55. ENTERPRISE EXPERIENCE

The entire product should feel trustworthy.

When a user sees an action like:

```text
Approve
Publish
Reject
```

the UI should make the consequences clear.

Use:

* confirmation states
* clear status
* audit-friendly metadata
* timestamps when available
* version history where available
* source context where useful

Do not use destructive actions casually.

---

# 56. DEMO-FIRST PRIORITY

This is a hackathon.

The most important frontend journey is:

```text
Open workspace
↓
Show brand intelligence
↓
Open assistant / command center
↓
Request content
↓
Choose Poster + Human
↓
Generate
↓
Show agent activity
↓
Refine
↓
Show Version 2
↓
Approve
↓
Show Library
↓
Publish
↓
Show success
```

Design every major screen so this story feels seamless.

Do not require the user to navigate through unnecessary pages during the demo.

---

# 57. THE “WOW” MOMENT

The frontend should create a strong visual moment when the generation completes.

Do not just replace a spinner with an image.

Use a clean transition:

```text
SMAA AGENT
✓ Brand context loaded
✓ Creative direction selected
✓ Generation complete
```

Then reveal the asset beautifully.

Immediately show:

```text
READY FOR REVIEW
```

and:

```text
[ Refine ]
[ Reject ]
[ Approve ]
```

This should feel extremely polished.

---

# 58. COMMAND CENTER PHILOSOPHY

The dashboard should answer three questions immediately:

```text
What is SMAA doing?

What needs my attention?

What can I ask SMAA to do next?
```

Do not prioritize meaningless analytics.

---

# 59. BRAND CONTEXT SHOULD BE VISIBLE

Whenever appropriate, subtly show why SMAA can make better content.

Example:

```text
Using brand context

✓ Brand voice
✓ Visual identity
✓ Approved campaigns
✓ Recent feedback
```

This is important because the product differentiation is not simply "AI generation".

The differentiation is:

```text
Generation
+
Brand intelligence
+
Human decisions
+
Workflow context
```

---

# 60. FINAL VISUAL STANDARD

Before finishing, inspect the entire app as if you were an enterprise buyer.

Ask:

* Does this feel trustworthy?
* Does it feel expensive?
* Does the hierarchy make sense?
* Is the next action obvious?
* Is the AI useful rather than gimmicky?
* Are images treated as important?
* Is the product understandable in 10 seconds?
* Does the interface feel consistent from page to page?
* Are loading and error states polished?
* Does Slack feel like part of the system?
* Does the agent feel like an actual worker rather than a chatbot?

Fix anything that fails those tests.

---

# 61. DO NOT CHANGE THE TEAM'S BACKEND CONTRACT

This is extremely important.

When an API is missing or uncertain:

DO NOT silently invent a backend implementation.

Instead:

1. isolate the service call
2. create a clean typed interface
3. provide a graceful UI state
4. keep the UI ready for the real endpoint

Do not build fake production behavior.

Where a backend capability already exists, integrate it.

---

# 62. DO NOT DELETE EXISTING WORK

Before making large structural changes:

* inspect the existing codebase
* inspect existing routes
* inspect existing API integration
* inspect existing components
* reuse working functionality
* improve visual quality without breaking working flows

Preserve functionality unless it conflicts with this design system.

---

# 63. CODE QUALITY

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React
* React Router

Keep dependencies reasonable.

Prefer reusable components.

Avoid giant single-file pages.

Avoid duplicated API logic.

Avoid hardcoded backend URLs.

Keep components readable.

Use semantic naming.

---

# 64. IMPLEMENTATION ORDER

Build in this order:

### Phase 1

App shell
Routing
Navigation
Theme
Typography
Design system

### Phase 2

Command Center
AgentActivity
Dashboard
Review area

### Phase 3

Create Hub
Poster
Poster + Human
Character

### Phase 4

Generation states
Asset Detail
Review
Refine
Reject
Approve

### Phase 5

Library
Brand Memory
Publishing

### Phase 6

Assistant
Slack states
Integrations
Onboarding

### Phase 7

Responsive polish
Accessibility
Loading
Errors
Micro-interactions

### Phase 8

Hackathon demo polish

---

# 65. VERY IMPORTANT LOVABLE BEHAVIOR

Do not stop after generating a rough UI.

After the first implementation:

1. Inspect every route.
2. Check consistency.
3. Check spacing.
4. Check typography.
5. Check responsive layouts.
6. Check loading states.
7. Check empty states.
8. Check error states.
9. Check all buttons.
10. Check navigation.
11. Check API integration.
12. Check generated asset presentation.
13. Check AgentActivity.
14. Check the complete demo flow.

Then improve the weak areas.

The final result should look intentionally designed, not AI-generated by default.

---

# 66. FINAL PRODUCT FEEL

When someone opens SMAA, their first impression should be:

> This looks like a real enterprise product.

When they see the agent:

> This AI is actually doing work.

When they see brand context:

> This isn't just a generic image generator.

When they see Slack:

> The agent actually belongs in the team's workflow.

When they approve and publish:

> This is an end-to-end system.

That is the final goal.

BUILD THE FRONTEND AROUND THAT EXPERIENCE.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fa2a41bb-c11a-45df-b7f1-974978115389).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
