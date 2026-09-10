export interface LearnStep {
  id: string;
  title: string;
  build: string;
  learn: string;
  gotcha: string;
}

export interface LearnModule {
  id: string;
  num: number;
  title: string;
  summary: string;
  color: string;
  steps: LearnStep[];
}

/**
 * A build directory, not a tutorial.
 *
 * Every step is something I hit while running a live PWA -- a party game plus a
 * kids story engine, generative content pipeline included. The gotchas are the
 * point: they are the things that are not in the official docs and that cost a
 * weekend to find. Product internals stay out of it; the patterns transfer.
 */
export const curriculum: LearnModule[] = [
  {
    id: 'ship',
    num: 1,
    title: 'Ship something real',
    summary: 'A deployed URL on day one. Everything else is easier once something exists.',
    color: 'green',
    steps: [
      {
        id: '1.1',
        title: 'Build before you architect',
        build: 'One screen that does one thing, with local data and no backend.',
        learn: 'Component state, and how little you need to start.',
        gotcha: 'Adding a database before you have something worth persisting is the most common way a side project dies at 5% complete.',
      },
      {
        id: '1.2',
        title: 'Your first cloud project',
        build: 'A Firebase (or Supabase) project wired into the app.',
        learn: 'What each config key actually is.',
        gotcha: 'The client config is public by design and ships in every bundle. It is not a secret. People hide it and then leave the security rules wide open, which is the actual hole.',
      },
      {
        id: '1.3',
        title: 'Deploy on day one',
        build: 'A live URL, from git, automatically.',
        learn: 'Build output, SPA rewrites, preview deploys.',
        gotcha: 'A thing that is not deployed is not real. Deploy while it is embarrassing; it never gets easier to start.',
      },
      {
        id: '1.4',
        title: 'Environments, before you need them',
        build: 'Separate dev and production projects, config driven by env vars.',
        learn: 'Config per environment; what is public vs private.',
        gotcha: 'Declaring env vars and then hardcoding the values anyway is worse than not having them, because it looks solved. One project for dev and prod means a test script will eventually delete production data.',
      },
    ],
  },
  {
    id: 'data',
    num: 2,
    title: 'Model your data',
    summary: 'In a document database, your data model is a pricing decision.',
    color: 'cyan',
    steps: [
      {
        id: '2.1',
        title: 'Documents, not tables',
        build: 'Collections and subcollections for your core entities.',
        learn: 'The tree model, and where it stops resembling SQL.',
        gotcha: 'You are billed per document read. A query returning 500 docs costs 500 reads even if you render 10 of them.',
      },
      {
        id: '2.2',
        title: 'Denormalise on purpose',
        build: 'Embed the metadata a list view needs, on the list item.',
        learn: 'Joins do not exist; duplication is the design.',
        gotcha: 'Duplicate what is read together, not what is written together. Get that backwards and every write becomes a fan-out.',
      },
      {
        id: '2.3',
        title: 'The read-amplification trap',
        build: 'An aggregate document so a grid costs one read, not N.',
        learn: 'Counters, aggregates, pagination.',
        gotcha: 'This pattern is invisible at 100 users and is the whole bill at 100,000. It is almost always a listener on a growing collection.',
      },
      {
        id: '2.4',
        title: 'Queries and their limits',
        build: 'Composite indexes for your real query shapes.',
        learn: 'Why the database refuses some queries outright.',
        gotcha: 'The error message contains a link that builds the index for you. Use it, then commit the generated index file, or production will not have it.',
      },
    ],
  },
  {
    id: 'secure',
    num: 3,
    title: 'Lock it down',
    summary: 'With no server, security rules are your entire backend. Most tutorials skip this.',
    color: 'red',
    steps: [
      {
        id: '3.1',
        title: 'Why "if true" ends badly',
        build: 'Read your own rules as an attacker would.',
        learn: 'Rules are the only server-side authorisation you have.',
        gotcha: 'A client-side isAdmin() check is a UI convenience, never a security control. The API stays open no matter what the interface hides.',
      },
      {
        id: '3.2',
        title: 'Roles that are actually roles',
        build: 'Move roles to custom claims, set server-side only.',
        learn: 'Token claims vs a role document.',
        gotcha: 'A role stored in a collection that the role itself can write is not a role. If a user can write their own admin flag, you do not have authorisation, you have a suggestion.',
      },
      {
        id: '3.3',
        title: 'Validate the write, not just the writer',
        build: 'Shape, type and length constraints in the rules themselves.',
        learn: 'Rules as a schema layer.',
        gotcha: 'resource is the existing document, request.resource is the incoming one. Confusing them is the single most common rule bug.',
      },
      {
        id: '3.4',
        title: 'Object storage is not a folder',
        build: 'Lock the bucket by path, content type and size.',
        learn: 'Storage rules and upload constraints.',
        gotcha: 'An open bucket is a billing vulnerability before it is a security one. Someone will host their files on your domain and you will pay the egress.',
      },
      {
        id: '3.5',
        title: 'Test the rules',
        build: 'The emulator suite plus a rules test file, running in CI.',
        learn: 'Rules are code, so they get tests.',
        gotcha: 'Rules rot toward permissive precisely because they are untestable locally. Wire up the emulator and the drift stops.',
      },
    ],
  },
  {
    id: 'measure',
    num: 4,
    title: 'Know what happens',
    summary: 'Three analytics systems and no source of truth is the default failure.',
    color: 'purple',
    steps: [
      {
        id: '4.1',
        title: 'Pick one source of truth',
        build: 'Decide which system answers your core question.',
        learn: 'Why parallel pipelines silently diverge.',
        gotcha: 'Local storage, a product analytics tool and your database will all disagree. Name the authoritative one and make the others explicitly secondary.',
      },
      {
        id: '4.2',
        title: 'Events, not counters',
        build: 'Emit an event with a timestamp and context, not an incrementing tally.',
        learn: 'Why the shape of the record decides what you can ever ask.',
        gotcha: 'Counters cannot be re-analysed. The day you want to know whether difficulty varies by time of day, a counter cannot answer and the history is gone. This is also the prerequisite for any ML later.',
      },
      {
        id: '4.3',
        title: 'Event schema design',
        build: 'A naming convention, superproperties, a version field.',
        learn: 'Object-Action naming; property hygiene.',
        gotcha: 'Name events for the question you will ask in six months, not the button that fired them. Autocapture produces volume, not insight.',
      },
      {
        id: '4.4',
        title: 'Identity and consent',
        build: 'Anonymous-to-known stitching, and a real consent gate.',
        learn: 'distinct_id, alias, and the privacy floor.',
        gotcha: 'Get identity stitching wrong and every retention number is wrong, silently and unrecoverably. And session-replaying 100% of users is a decision, not a default.',
      },
    ],
  },
  {
    id: 'found',
    num: 5,
    title: 'Get found',
    summary: 'The SEO track for single-page apps, where most of the advice does not apply.',
    color: 'yellow',
    steps: [
      {
        id: '5.1',
        title: 'Your SPA is one page',
        build: 'Real paths. Delete the hash router.',
        learn: 'Fragments are not URLs.',
        gotcha: 'Everything after the # is invisible to every crawler on earth. /#/about and /#/pricing are the same URL. Nothing else in this module works until this is fixed.',
      },
      {
        id: '5.2',
        title: 'Crawlers are not scrapers',
        build: 'Server-rendered or prerendered meta tags per route.',
        learn: 'Who runs your JavaScript and who does not.',
        gotcha: 'Googlebot renders JS. WhatsApp, Slack, Twitter, Facebook and LinkedIn do not. If you set meta tags client-side, every shared link shows your generic default -- on exactly the channels a social product spreads through.',
      },
      {
        id: '5.3',
        title: 'The image that sells the link',
        build: 'An Open Graph image, then per-page generated ones.',
        learn: 'OG specs, dimensions, and scraper caching.',
        gotcha: 'Check that the file actually exists. Referencing an og-image you never shipped means every share is a broken preview, and it is invisible from inside the app. Scrapers cache hard, so version the URL when you fix it.',
      },
      {
        id: '5.4',
        title: 'Structured data, honestly',
        build: 'Schema.org markup that describes what you really are.',
        learn: 'JSON-LD for apps and content.',
        gotcha: 'Declaring an aggregateRating you did not collect is a policy violation, not a growth hack. It risks a manual action, and manual actions are much harder to undo than to earn.',
      },
      {
        id: '5.5',
        title: 'Core Web Vitals',
        build: 'Measure and fix LCP, CLS and INP.',
        learn: 'What the crawler actually rewards.',
        gotcha: 'user-scalable=no costs you accessibility and Lighthouse points and buys you almost nothing. Ship the pinch-zoom.',
      },
    ],
  },
  {
    id: 'offline',
    num: 6,
    title: 'Work offline, come back',
    summary: 'PWA, service workers, and notifications people do not immediately mute.',
    color: 'cyan',
    steps: [
      {
        id: '6.1',
        title: 'Installable',
        build: 'A manifest, icons, display mode.',
        learn: 'What makes a PWA installable.',
        gotcha: 'iOS ignores SVG for the home-screen icon. Ship PNGs or the icon quietly breaks on every iPhone, and you will not see it on your desktop.',
      },
      {
        id: '6.2',
        title: 'Service worker strategy',
        build: 'Cache-first for assets, network-first for navigation.',
        learn: 'The strategy menu and when each fits.',
        gotcha: 'Cache-first on HTML will serve a stale app forever, and you will lose a day debugging a bug you already fixed.',
      },
      {
        id: '6.3',
        title: 'Precache without foot-guns',
        build: 'A build-time precache manifest and versioned caches.',
        learn: 'Install, activate, cleanup, skipWaiting.',
        gotcha: 'Bump the cache name on every deploy or users keep the old bundle. And skipWaiting needs a reload story, or you get half-old, half-new.',
      },
      {
        id: '6.4',
        title: 'Notifications',
        build: 'Web push end to end, including token storage.',
        learn: 'Permission flow and platform constraints.',
        gotcha: 'Asking on first load is the fastest way to get permanently denied. Ask after the user has a reason to care. Tokens also rotate, so store a lastSeen and prune, or you pay to message dead endpoints forever.',
      },
    ],
  },
  {
    id: 'deploy',
    num: 7,
    title: 'Ship safely, repeatedly',
    summary: 'CI, secrets, rollbacks, and knowing before your users tell you.',
    color: 'green',
    steps: [
      {
        id: '7.1',
        title: 'CI that means something',
        build: 'Lint, unit tests, rules tests, build, size budget.',
        learn: 'Gating merges rather than hoping.',
        gotcha: 'Build the pipeline before you need it. Retrofitting tests onto 40,000 untested lines is a project; adding them from the start is a habit.',
      },
      {
        id: '7.2',
        title: 'Secrets',
        build: 'Env vars per environment; service keys nowhere near the repo.',
        learn: 'Client-public vs server-private.',
        gotcha: 'The web config is public. The service account key is the one that ends careers. Gitignore is not enough -- audit the history before any repo goes public, and rotate anything that was ever committed.',
      },
      {
        id: '7.3',
        title: 'Preview deployments',
        build: 'A URL per pull request.',
        learn: 'Review apps and ephemeral environments.',
        gotcha: 'Preview deploys pointing at production data is a trap that looks like convenience. Point them at the dev project.',
      },
      {
        id: '7.4',
        title: 'Rollbacks and observability',
        build: 'Error tracking with source maps; practise a rollback deliberately.',
        learn: 'Incident basics.',
        gotcha: 'You do not have a rollback until you have done one. The first real rollback should not be the first rollback. And without source maps every production stack trace is minified noise.',
      },
    ],
  },
  {
    id: 'scale',
    num: 8,
    title: 'Survive success',
    summary: 'The free tier to a four-figure bill, and how to not get there.',
    color: 'red',
    steps: [
      {
        id: '8.1',
        title: 'Model your own cost',
        build: 'Reads, writes, storage, egress, per user.',
        learn: 'Unit economics on a napkin.',
        gotcha: 'Do this before you need it. The answer usually changes the data model, and data models are expensive to change late.',
      },
      {
        id: '8.2',
        title: 'Delivery, not production',
        build: 'A CDN in front of media; size budgets enforced in CI.',
        learn: 'What scales with catalogue vs what scales with audience.',
        gotcha: 'For a media product, generating content is nearly free and serving it is the entire bill. Optimise delivery, not generation. Serving media straight from object storage pays egress on every single view.',
      },
      {
        id: '8.3',
        title: 'Pick your formats',
        build: 'Modern video and image codecs, with posters and lazy loading.',
        learn: 'Codec trade-offs and decode cost.',
        gotcha: 'Animated GIF is roughly ten times the size of equivalent video and looks worse, because it is locked to 256 colours. Nothing needs GIF any more.',
      },
      {
        id: '8.4',
        title: 'Abuse is a cost problem',
        build: 'Rate limits, app attestation, budget alerts.',
        learn: 'Cost as an attack surface.',
        gotcha: 'Unauthenticated writes and open buckets are billing vulnerabilities. Set the budget alert before you need it, not after.',
      },
    ],
  },
  {
    id: 'ml',
    num: 9,
    title: 'Learn from your users',
    summary: 'Real ML on your own behavioural data. No toy datasets.',
    color: 'purple',
    steps: [
      {
        id: '9.1',
        title: 'What a model is',
        build: 'Predict one binary outcome from two features.',
        learn: 'Features, labels, prediction.',
        gotcha: 'If you cannot state the label in one precise sentence, you do not have an ML problem yet. Most "we should use AI here" ideas die honestly at this step.',
      },
      {
        id: '9.2',
        title: 'Get a dataset out',
        build: 'Export events to columnar files; split into train, validation, test.',
        learn: 'Why the split matters more than the model.',
        gotcha: 'Split by time, never randomly. A random split lets the future leak into the past and flatters every model you will ever build.',
      },
      {
        id: '9.3',
        title: 'Your first model, twice',
        build: 'Logistic regression by hand in NumPy, then with a library.',
        learn: 'Loss, gradient descent, regularisation.',
        gotcha: 'Build it by hand once and check the coefficients match the library. You will never be afraid of the library again, and it is a great interview answer.',
      },
      {
        id: '9.4',
        title: 'Is it any good',
        build: 'Honest evaluation and calibration.',
        learn: 'Precision, recall, AUC, log loss, reliability.',
        gotcha: 'Accuracy on imbalanced data is the most confidently wrong number in ML. And a model can rank perfectly while lying about probability -- if you act on the number, calibrate it.',
      },
      {
        id: '9.5',
        title: 'Cold start and feedback loops',
        build: 'Smoothing for new items; an exploration slice for unseen ones.',
        learn: 'Priors, shrinkage, explore/exploit.',
        gotcha: 'Two plays and two failures is not a 100% failure rate, it is no information. And a ranker never learns about an item it never shows -- that loop is invisible in every offline metric you have.',
      },
    ],
  },
  {
    id: 'genai',
    num: 10,
    title: 'Generate your content',
    summary: 'LLM and diffusion pipelines that survive contact with a bill and a deadline.',
    color: 'yellow',
    steps: [
      {
        id: '10.1',
        title: 'Structured output',
        build: 'Schema-enforced generation instead of parsing prose.',
        learn: 'Tool use and JSON schema.',
        gotcha: 'Regex over model output is technical debt on day one. Enforce the schema and an entire class of bug stops existing.',
      },
      {
        id: '10.2',
        title: 'Evals',
        build: 'A golden set, deterministic checks, a rubric judge, a CI gate.',
        learn: 'How to know a prompt change helped.',
        gotcha: 'This is the thing almost nobody builds, and it is the difference between a demo and a product. Half your checks need no model at all -- schema validity, reading level, banned words, asset existence.',
      },
      {
        id: '10.3',
        title: 'Judge the judge',
        build: 'Compare model scores against your own labels.',
        learn: 'Agreement, and where judges are biased.',
        gotcha: 'LLM judges reward length and favour their own family of models. Measure agreement against humans before you trust the gate, or you have automated your own blind spot.',
      },
      {
        id: '10.4',
        title: 'Generation on cheap hardware',
        build: 'Diffusion locally, on whatever GPU you actually own.',
        learn: 'Where the compute stack and the graphics driver diverge.',
        gotcha: 'A card being dropped by the compute toolkit does not mean it cannot run models -- the graphics path often still works. The framework is usually the blocker, not the silicon.',
      },
      {
        id: '10.5',
        title: 'Make it move, cheaply',
        build: 'Image-to-video from a fixed painting, then a real encode step.',
        learn: 'Temporal consistency and conditioning strength.',
        gotcha: 'Prompt only what should move -- palette, style and character are already in the init image and restating them wastes your token budget and pulls the model off-composition. Also, VRAM caps the canvas size, not the frame count.',
      },
    ],
  },
];

export const moduleIds = curriculum.map((m) => m.id);

export function getModule(id: string): LearnModule | null {
  return curriculum.find((m) => m.id === id.toLowerCase()) ?? null;
}

export function getStep(moduleId: string, stepArg: string): LearnStep | null {
  const mod = getModule(moduleId);
  if (!mod) return null;
  const n = parseInt(stepArg, 10);
  if (!Number.isNaN(n)) return mod.steps[n - 1] ?? null;
  return mod.steps.find((s) => s.id === stepArg) ?? null;
}

export const totalSteps = curriculum.reduce((n, m) => n + m.steps.length, 0);
