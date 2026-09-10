import { ReactNode } from 'react';
import { curriculum, getModule, getStep, totalSteps, LearnModule, LearnStep } from '@/lib/learn';
import { profile, buildMailto } from '@/lib/profile';

export interface CommandOutput {
  content: ReactNode;
  openFile?: string;
}

const colorVar = (c: string) => `var(--terminal-${c})`;

function ModuleLine({ mod }: { mod: LearnModule }) {
  return (
    <div className="flex gap-2">
      <span className="text-[var(--terminal-text)] opacity-40 w-4 shrink-0">{String(mod.num).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p>
          <span style={{ color: colorVar(mod.color) }}>{mod.id}</span>
          <span className="opacity-90"> — {mod.title}</span>
          <span className="text-[var(--terminal-text)] opacity-40"> ({mod.steps.length})</span>
        </p>
        <p className="text-[var(--terminal-text)] opacity-50">{mod.summary}</p>
      </div>
    </div>
  );
}

function StepBlock({ mod, step }: { mod: LearnModule; step: LearnStep }) {
  return (
    <div className="border-l pl-2" style={{ borderColor: colorVar(mod.color) }}>
      <p>
        <span className="text-[var(--terminal-text)] opacity-40">{step.id}</span>{' '}
        <span className="text-[var(--terminal-cyan)] font-medium">{step.title}</span>
      </p>
      <p className="opacity-70"><span className="text-[var(--terminal-green)]">build</span> {step.build}</p>
      <p className="opacity-70"><span className="text-[var(--terminal-purple)]">learn</span> {step.learn}</p>
      <p className="opacity-90"><span className="text-[var(--terminal-yellow)]">gotcha</span> {step.gotcha}</p>
    </div>
  );
}

function learnIndex(): CommandOutput {
  return {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Build Directory'}</p>
        <p className="opacity-90">
          How to take a product from nothing to real traffic. {curriculum.length} modules,{' '}
          {totalSteps} steps, drawn from running a live PWA with a generative content pipeline.
        </p>
        <p className="text-[var(--terminal-text)] opacity-50">
          Every step is build / learn / gotcha. The gotchas are the point — they are the things
          not in the docs, that cost a weekend each.
        </p>
        <div className="space-y-1.5 mt-2">
          {curriculum.map((mod) => (
            <ModuleLine key={mod.id} mod={mod} />
          ))}
        </div>
        <p className="text-[var(--terminal-text)] opacity-40 mt-2">
          → <span className="text-[var(--terminal-cyan)]">learn [module]</span> for the steps ·{' '}
          <span className="text-[var(--terminal-cyan)]">learn [module] [n]</span> for one step ·{' '}
          <span className="text-[var(--terminal-cyan)]">open build-guide.md</span> for the overview
        </p>
      </div>
    ),
  };
}

function learnModule(mod: LearnModule): CommandOutput {
  return {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">
          {'// Module '}{String(mod.num).padStart(2, '0')} — {mod.title}
        </p>
        <p className="opacity-70">{mod.summary}</p>
        <div className="space-y-2 mt-2">
          {mod.steps.map((step) => (
            <StepBlock key={step.id} mod={mod} step={step} />
          ))}
        </div>
        <p className="text-[var(--terminal-text)] opacity-40 mt-2">
          → <span className="text-[var(--terminal-cyan)]">learn</span> for all modules
        </p>
      </div>
    ),
  };
}

function learnStep(mod: LearnModule, step: LearnStep): CommandOutput {
  return {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">
          {'// '}{mod.title} · step {step.id}
        </p>
        <p className="text-[var(--terminal-cyan)] font-medium">{step.title}</p>
        <div className="space-y-1.5 mt-1">
          <div className="border-l pl-2" style={{ borderColor: colorVar('green') }}>
            <p className="text-[var(--terminal-green)]">what you build</p>
            <p className="opacity-90">{step.build}</p>
          </div>
          <div className="border-l pl-2" style={{ borderColor: colorVar('purple') }}>
            <p className="text-[var(--terminal-purple)]">what you learn</p>
            <p className="opacity-90">{step.learn}</p>
          </div>
          <div className="border-l pl-2" style={{ borderColor: colorVar('yellow') }}>
            <p className="text-[var(--terminal-yellow)]">the gotcha</p>
            <p className="opacity-90">{step.gotcha}</p>
          </div>
        </div>
        <p className="text-[var(--terminal-text)] opacity-40 mt-2">
          → <span className="text-[var(--terminal-cyan)]">learn {mod.id}</span> for the full module
        </p>
      </div>
    ),
  };
}

/** Resolves `learn`, `learn <module>`, and `learn <module> <step>`. */
function resolveLearn(input: string): CommandOutput | null {
  const parts = input.split(/\s+/).filter(Boolean);
  if (parts[0] !== 'learn') return null;
  if (parts.length === 1) return learnIndex();

  const mod = getModule(parts[1]);
  if (!mod) {
    return {
      content: (
        <div className="space-y-1 text-xs">
          <p className="text-[var(--terminal-red)]">learn: no module &apos;{parts[1]}&apos;</p>
          <p className="text-[var(--terminal-text)] opacity-50">
            Modules: {curriculum.map((m) => m.id).join(' · ')}
          </p>
        </div>
      ),
    };
  }
  if (parts.length === 2) return learnModule(mod);

  const step = getStep(parts[1], parts[2]);
  if (!step) {
    return {
      content: (
        <p className="text-[var(--terminal-red)] text-xs">
          learn: {mod.id} has steps 1–{mod.steps.length}
        </p>
      ),
    };
  }
  return learnStep(mod, step);
}

function msgUsage(): CommandOutput {
  return {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Send me a message'}</p>
        <p className="opacity-90">
          Type your message after the command and it opens prefilled in your email client.
        </p>
        <div className="border-l pl-2" style={{ borderColor: colorVar('green') }}>
          <p className="text-[var(--terminal-text)] opacity-50">usage</p>
          <p><span className="text-[var(--terminal-green)]">msg</span> <span className="opacity-70">your message here</span></p>
          <p className="text-[var(--terminal-text)] opacity-50 mt-1">example</p>
          <p className="opacity-70">
            msg Hi Aman — we are hiring a Staff AI Engineer at Acme. Are you open to a chat?
          </p>
        </div>
        <p className="text-[var(--terminal-text)] opacity-50">
          Include your name, company and a way to reach you for a faster reply. Goes straight to{' '}
          <a href={`mailto:${profile.email}`} className="text-[var(--terminal-cyan)]">{profile.email}</a>.
        </p>
      </div>
    ),
  };
}

function msgCompose(message: string): CommandOutput {
  return {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Message ready'}</p>
        <div className="border-l pl-2" style={{ borderColor: colorVar('cyan') }}>
          <p className="text-[var(--terminal-text)] opacity-50">to</p>
          <p className="opacity-80">{profile.email}</p>
          <p className="text-[var(--terminal-text)] opacity-50 mt-1">message</p>
          <p className="opacity-90 whitespace-pre-wrap break-words">{message}</p>
        </div>
        <p className="mt-1">
          <a
            href={buildMailto(message)}
            className="inline-block px-2 py-1 border border-[var(--terminal-green)] text-[var(--terminal-green)] rounded hover:bg-[var(--terminal-green)]/15 transition-colors"
          >
            → Open in email client
          </a>
        </p>
        <p className="text-[var(--terminal-text)] opacity-40">
          No mail client? Copy the address above, or reach me on{' '}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">LinkedIn</a>.
        </p>
      </div>
    ),
  };
}

/** Resolves `msg` and `msg <message>`. */
function resolveMsg(raw: string): CommandOutput | null {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();
  if (lower !== 'msg' && !lower.startsWith('msg ')) return null;

  const message = trimmed.slice(3).trim();
  return message ? msgCompose(message) : msgUsage();
}

const ASCII_NAME = `
   █████╗ ███╗   ███╗ █████╗ ███╗   ██╗
  ██╔══██╗████╗ ████║██╔══██╗████╗  ██║
  ███████║██╔████╔██║███████║██╔██╗ ██║
  ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
  ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
`;

export const commands: Record<string, CommandOutput> = {
  help: {
    content: (
      <div className="space-y-1 text-xs">
        <p className="text-[var(--terminal-yellow)] font-medium">Available commands:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-0.5 mt-1">
          <p><span className="text-[var(--terminal-green)]">about</span> - Who am I</p>
          <p><span className="text-[var(--terminal-green)]">experience</span> - Work history</p>
          <p><span className="text-[var(--terminal-green)]">skills</span> - Technical skills</p>
          <p><span className="text-[var(--terminal-green)]">projects</span> - Notable projects</p>
          <p><span className="text-[var(--terminal-green)]">learn</span> - Build directory</p>
          <p><span className="text-[var(--terminal-green)]">contact</span> - Get in touch</p>
          <p><span className="text-[var(--terminal-green)]">social</span> - Social links</p>
          <p><span className="text-[var(--terminal-green)]">resume</span> - Download resume</p>
          <p><span className="text-[var(--terminal-green)]">neofetch</span> - System info</p>
        </div>
        <p className="text-[var(--terminal-yellow)] font-medium mt-2">Reach me:</p>
        <div className="mt-0.5">
          <p>
            <span className="text-[var(--terminal-green)]">msg</span>{' '}
            <span className="opacity-60">[your message]</span> - Send me a message, e.g.{' '}
            <span className="opacity-70">msg Hi Aman, are you open to a chat?</span>
          </p>
        </div>
        <p className="text-[var(--terminal-yellow)] font-medium mt-2">File commands:</p>
        <div className="mt-0.5">
          <p><span className="text-[var(--terminal-cyan)]">ls</span> - List files | <span className="text-[var(--terminal-cyan)]">cat [file]</span> - View file | <span className="text-[var(--terminal-cyan)]">open [file]</span> - Open in editor</p>
        </div>
        <p className="text-[var(--terminal-yellow)] font-medium mt-2">Other:</p>
        <div className="mt-0.5">
          <p><span className="text-[var(--terminal-purple)]">clear</span> - Clear | <span className="text-[var(--terminal-purple)]">history</span> - Command history | <span className="text-[var(--terminal-purple)]">tree</span> - File tree</p>
        </div>
        <p className="text-[var(--terminal-text)] opacity-50 mt-2">Tip: ↑↓ history, Tab autocomplete</p>
      </div>
    ),
  },

  neofetch: {
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start text-xs">
        <pre className="text-[var(--terminal-green)] text-[8px] leading-tight hidden md:block">{ASCII_NAME}</pre>
        <div className="space-y-0.5">
          <p className="text-[var(--terminal-cyan)] font-medium">aman0x@cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-40">───────────────────</p>
          <p><span className="text-[var(--terminal-purple)]">Role</span>: Senior Full Stack Engineer</p>
          <p><span className="text-[var(--terminal-purple)]">Prev</span>: VP Technology ×2 (Siloho, ftcash)</p>
          <p><span className="text-[var(--terminal-purple)]">XP</span>: 11+ years</p>
          <p><span className="text-[var(--terminal-purple)]">Team</span>: scaled orgs to 40+ engineers</p>
          <p><span className="text-[var(--terminal-purple)]">Location</span>: Delhi, India</p>
          <p><span className="text-[var(--terminal-purple)]">Stack</span>: Python, React, Django, K8s</p>
          <p><span className="text-[var(--terminal-purple)]">Focus</span>: Data Platforms, AI/ML, 3D</p>
          <p><span className="text-[var(--terminal-purple)]">Status</span>: <span className="text-[var(--terminal-green)]">Open to opportunities</span></p>
          <div className="mt-1.5 flex gap-0.5">
            <span className="w-3 h-3 bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 bg-[#d29922] inline-block"></span>
            <span className="w-3 h-3 bg-[#3fb950] inline-block"></span>
            <span className="w-3 h-3 bg-[#58a6ff] inline-block"></span>
            <span className="w-3 h-3 bg-[#bc8cff] inline-block"></span>
          </div>
        </div>
      </div>
    ),
  },

  about: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// About'}</p>
        <p className="opacity-90">
          Engineering leader with <span className="text-[var(--terminal-cyan)]">11+ years</span> building
          and scaling commercially successful products from zero — across fintech, OTT, travel,
          interior design and industrial data.
        </p>
        <p className="opacity-90">
          Two tenures as <span className="text-[var(--terminal-cyan)]">VP Technology</span>, where I built
          one engineering team from scratch to 12+ and scaled another past 40. Currently
          <span className="text-[var(--terminal-cyan)]"> Senior Full Stack Engineer at Cloudastra</span>,
          on a multi-tenant data platform for automotive and aerospace clients.
        </p>
        <p className="opacity-90">
          Deepest in <span className="text-[var(--terminal-green)]">Python/Django</span>,
          <span className="text-[var(--terminal-green)]"> React/TypeScript</span>, and the data layer
          underneath ML — pipelines, versioning, experiment tracking and the Kubernetes it runs on.
        </p>
        <p className="text-[var(--terminal-text)] opacity-40 mt-2">
          → <span className="text-[var(--terminal-cyan)]">open about.md</span> for details ·{' '}
          <span className="text-[var(--terminal-cyan)]">msg</span> to get in touch
        </p>
      </div>
    ),
  },

  experience: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Experience — 11+ years'}</p>

        <div className="border-l border-[var(--terminal-green)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Full Stack Engineer @ Cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-40">Nov 2023 - Present · Noida</p>
          <p className="opacity-70">Key Ward — multi-tenant AI-ready data platform for automotive &amp; aerospace</p>
          <p className="opacity-50">DLT pipelines · LakeFS versioning · MLflow · Superset plugins · GKE</p>
        </div>

        <div className="border-l border-[var(--terminal-purple)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">VP Technology @ Siloho</p>
          <p className="text-[var(--terminal-text)] opacity-40">Sep 2021 - Oct 2023 · Panjim, Goa</p>
          <p className="opacity-70">AI-based interior design — roadmap, architecture, built the team from zero to 12+</p>
          <p className="opacity-50">Vue · Django · PostgreSQL/Elastic/Redis · Blender + Unity render servers</p>
        </div>

        <div className="border-l border-[var(--terminal-yellow)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">VP Technology @ ftcash</p>
          <p className="text-[var(--terminal-text)] opacity-40">Oct 2019 - Sep 2021 · Mumbai</p>
          <p className="opacity-70">Digital payments &amp; lending for micro-merchants — scaled the org past 40 engineers</p>
          <p className="opacity-50">RESTful billing engine · Razorpay/ICICI gateways · daily-DPD loan management</p>
        </div>

        <div className="border-l border-[var(--terminal-pink)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Software Developer @ Eros Now</p>
          <p className="text-[var(--terminal-text)] opacity-40">Nov 2018 - Oct 2019 · Mumbai</p>
          <p className="opacity-70">OTT streaming — led the core API migration from PHP to Python</p>
          <p className="opacity-50">RabbitMQ · MongoDB · bulk transaction processing</p>
        </div>

        <div className="border-l border-[var(--terminal-text)]/50 pl-2 opacity-70">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Software Engineer @ Mswipe</p>
          <p className="text-[var(--terminal-text)] opacity-40">Jan 2016 - Oct 2018 · Mumbai</p>
          <p className="opacity-70">POS platform — offline stock &amp; high-volume transaction processing</p>
          <p className="opacity-50">Onboarded CCD, Vistara, Jet Airways · offline sync queue for in-flight payments</p>
        </div>

        <div className="border-l border-[var(--terminal-text)]/50 pl-2 opacity-60">
          <p className="text-[var(--terminal-cyan)] font-medium">Software Engineer @ Qtriangle Infotech</p>
          <p className="text-[var(--terminal-text)] opacity-40">Jan 2014 - Jan 2016 · Noida</p>
          <p className="opacity-70">E-commerce platforms — CommonFloor, Naaptol, Supporthjelpen</p>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          → <span className="text-[var(--terminal-cyan)]">open experience.json</span> for details ·{' '}
          <span className="text-[var(--terminal-cyan)]">resume</span> to download
        </p>
      </div>
    ),
  },

  skills: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Technical Skills'}</p>

        <div className="space-y-1.5">
          <div>
            <span className="text-[var(--terminal-purple)]">Languages:</span>
            <span className="opacity-80 ml-1">Python, TypeScript, JavaScript, PHP, SQL</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Frontend:</span>
            <span className="opacity-80 ml-1">React, Next.js, Vue.js, HTML5, CSS, ECharts, D3, Babylon.js</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Backend:</span>
            <span className="opacity-80 ml-1">Django, Flask, Node.js, REST, Celery, RabbitMQ</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Data stores:</span>
            <span className="opacity-80 ml-1">PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Data &amp; ML:</span>
            <span className="opacity-80 ml-1">Apache Spark, MLflow, LakeFS, DLT, Airbyte, Superset, Temporal.io</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Cloud &amp; DevOps:</span>
            <span className="opacity-80 ml-1">Kubernetes, GKE, Docker, ArgoCD, Helm, Cloud Run, AWS</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">3D &amp; render:</span>
            <span className="opacity-80 ml-1">Blender (Python API), Unity, RealityServer</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Tooling:</span>
            <span className="opacity-80 ml-1">Git, GitHub, Jira, SonarQube, Keycloak, Google Maps API</span>
          </div>
          <div>
            <span className="text-[var(--terminal-purple)]">Leadership:</span>
            <span className="opacity-80 ml-1">Hiring &amp; mentoring, org design, roadmap, technical estimation</span>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          → <span className="text-[var(--terminal-cyan)]">cat skills.json</span> for full breakdown
        </p>
      </div>
    ),
  },

  projects: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Selected Work'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="border border-[var(--terminal-green)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-green)] font-medium">Key Ward</p>
            <p className="opacity-50 text-[10px]">AI-ready data platform · automotive &amp; aerospace</p>
            <p className="opacity-40 text-[10px]">DLT, MLflow, LakeFS, Spark, Superset, GKE</p>
          </div>

          <div className="border border-[var(--terminal-cyan)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-cyan)] font-medium">Saarathi Finance</p>
            <p className="opacity-50 text-[10px]">NBFC digital lending for MSMEs</p>
            <p className="opacity-40 text-[10px]">Django, Temporal.io, Keycloak, CIBIL/Experian/CRIF</p>
          </div>

          <div className="border border-[var(--terminal-yellow)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-yellow)] font-medium">Siloho</p>
            <p className="opacity-50 text-[10px]">AI interior design · VP Technology</p>
            <p className="opacity-40 text-[10px]">Vue, Django, Blender + Unity render pipeline</p>
          </div>

          <div className="border border-[var(--terminal-pink)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-pink)] font-medium">ftcash</p>
            <p className="opacity-50 text-[10px]">Payments &amp; lending · VP Technology</p>
            <p className="opacity-40 text-[10px]">Billing engine, Razorpay/ICICI, loan management</p>
          </div>

          <div className="border border-[var(--terminal-purple)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-purple)] font-medium">WiseYatra</p>
            <p className="opacity-50 text-[10px]">Travel booking — flights, hotels, activities</p>
            <p className="opacity-40 text-[10px]">Next.js, TypeScript, Tailwind, Zustand, Maps API</p>
          </div>

          <div className="border border-[var(--terminal-cyan)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-cyan)] font-medium">Volo Health TPA</p>
            <p className="opacity-50 text-[10px]">IRDA-licensed health claims platform</p>
            <p className="opacity-40 text-[10px]">Claims, registration &amp; grievance workflows</p>
          </div>

          <div className="border border-[var(--terminal-pink)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-pink)] font-medium">Taffi</p>
            <p className="opacity-50 text-[10px]">Fashion discovery &amp; stylist matching</p>
            <p className="opacity-40 text-[10px]">Led planning and delivery across the stack</p>
          </div>

          <div className="border border-[var(--terminal-green)]/40 p-1.5 rounded">
            <p className="text-[var(--terminal-green)] font-medium">Eros Now</p>
            <p className="opacity-50 text-[10px]">OTT streaming at scale</p>
            <p className="opacity-40 text-[10px]">PHP → Python API migration, RabbitMQ, MongoDB</p>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          <span className="text-[var(--terminal-cyan)]">ls projects/</span> for write-ups ·{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-green)]">github.com/aman0x</a>
        </p>
      </div>
    ),
  },

  contact: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">{'// Contact'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <p className="text-[var(--terminal-purple)] font-medium">Direct</p>
            <p><span className="opacity-50">Email:</span> <a href={`mailto:${profile.email}`} className="text-[var(--terminal-cyan)]">{profile.email}</a></p>
            <p><span className="opacity-50">Phone:</span> {profile.phone}</p>
            <p><span className="opacity-50">Location:</span> {profile.location}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[var(--terminal-purple)] font-medium">Online</p>
            <p><a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">github.com/aman0x</a></p>
            <p><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">linkedin.com/in/aman0x</a></p>
          </div>
        </div>

        <div className="p-2 border border-[var(--terminal-green)]/50 rounded mt-2">
          <p className="text-[var(--terminal-green)] font-medium">Open to opportunities</p>
          <p className="opacity-60">{profile.openTo}</p>
          <p className="opacity-70 mt-1">
            Fastest way to reach me — type{' '}
            <span className="text-[var(--terminal-green)]">msg your message here</span>
          </p>
        </div>
      </div>
    ),
  },

  social: {
    content: (
      <div className="space-y-1 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Social</p>
        <p><span className="text-[var(--terminal-purple)]">GitHub</span> <a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">→ github.com/aman0x</a></p>
        <p><span className="text-[var(--terminal-purple)]">LinkedIn</span> <a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">→ linkedin.com/in/aman0x</a></p>
        <p><span className="text-[var(--terminal-purple)]">Website</span> <a href="https://aman0x.com" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">→ aman0x.com</a></p>
      </div>
    ),
  },

  resume: {
    content: (
      <div className="space-y-1 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Resume</p>
        <p><a href="/Aman-Chandel-Resume.pdf" download className="text-[var(--terminal-green)]">Download Resume (PDF)</a></p>
      </div>
    ),
  },

  whoami: {
    content: <p className="text-[var(--terminal-green)]">aman0x</p>,
  },

  pwd: {
    content: <p>/home/aman0x</p>,
  },

  date: {
    content: <p>{new Date().toString()}</p>,
  },

  'sudo hire-me': {
    content: (
      <div className="space-y-1">
        <p className="text-[var(--terminal-green)]">[sudo] password for recruiter: ********</p>
        <p className="text-[var(--terminal-green)]">✓ Authentication successful</p>
        <p className="text-[var(--terminal-yellow)]">Initiating hiring process...</p>
        <p>📧 Sending email to amanchandel4@gmail.com</p>
        <p className="text-[var(--terminal-green)]">🎉 Congratulations! You&apos;ve made an excellent choice.</p>
      </div>
    ),
  },

  matrix: {
    content: <p className="text-[var(--terminal-green)]">Wake up, Neo... The Matrix has you...</p>,
  },

  '': {
    content: null,
  },
};

export const commandList = [
  'help', 'about', 'experience', 'skills', 'projects', 'learn', 'msg', 'contact', 'social', 'resume',
  'neofetch', 'clear', 'history', 'ls', 'cat', 'open', 'whoami', 'pwd', 'date'
];

export function getCommand(input: string): CommandOutput | null {
  const raw = input.trim();
  const trimmed = raw.toLowerCase();

  if (commands[trimmed]) {
    return commands[trimmed];
  }

  const learn = resolveLearn(trimmed);
  if (learn) {
    return learn;
  }

  // Passed raw, not lowercased — a message has to keep the sender's casing.
  const msg = resolveMsg(raw);
  if (msg) {
    return msg;
  }

  return null;
}
