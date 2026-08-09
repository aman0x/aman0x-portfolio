import { ReactNode } from 'react';

export interface CommandOutput {
  content: ReactNode;
  openFile?: string;
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
          <p><span className="text-[var(--terminal-green)]">contact</span> - Get in touch</p>
          <p><span className="text-[var(--terminal-green)]">social</span> - Social links</p>
          <p><span className="text-[var(--terminal-green)]">resume</span> - Download resume</p>
          <p><span className="text-[var(--terminal-green)]">neofetch</span> - System info</p>
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
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <pre className="text-[var(--terminal-green)] text-xs leading-tight">{ASCII_NAME}</pre>
        <div className="space-y-1 text-sm">
          <p className="text-[var(--terminal-cyan)] font-bold">aman0x@cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-50">─────────────────────</p>
          <p><span className="text-[var(--terminal-purple)]">Role</span>     : VP, Technology</p>
          <p><span className="text-[var(--terminal-purple)]">XP</span>       : 11+ years</p>
          <p><span className="text-[var(--terminal-purple)]">Location</span> : Delhi, India</p>
          <p><span className="text-[var(--terminal-purple)]">Stack</span>    : Python, React, Django, K8s</p>
          <p><span className="text-[var(--terminal-purple)]">Focus</span>    : AI/ML, 3D, Data Platforms</p>
          <p><span className="text-[var(--terminal-purple)]">Status</span>   : <span className="text-[var(--terminal-green)]">Hireable ✓</span></p>
          <p><span className="text-[var(--terminal-purple)]">Bio</span>      : Dev Bee 🐝</p>
          <div className="mt-2 flex gap-1">
            <span className="w-4 h-4 bg-[#f85149] inline-block"></span>
            <span className="w-4 h-4 bg-[#d29922] inline-block"></span>
            <span className="w-4 h-4 bg-[#3fb950] inline-block"></span>
            <span className="w-4 h-4 bg-[#58a6ff] inline-block"></span>
            <span className="w-4 h-4 bg-[#bc8cff] inline-block"></span>
            <span className="w-4 h-4 bg-[#ff7b72] inline-block"></span>
          </div>
        </div>
      </div>
    ),
  },

  about: {
    content: (
      <div className="space-y-3">
        <p className="text-[var(--terminal-yellow)]">// About Me</p>
        <p>
          11+ years of experience as a software developer and technology leader,
          with a strong track record of building and scaling commercially successful
          products from the ground up.
        </p>
        <p>
          Expert in <span className="text-[var(--terminal-cyan)]">full-stack development</span>,{' '}
          <span className="text-[var(--terminal-cyan)]">backend systems</span>, and{' '}
          <span className="text-[var(--terminal-cyan)]">API integrations</span>, with deep
          experience in driving development lifecycles.
        </p>
        <p>
          Currently building <span className="text-[var(--terminal-green)]">ModelCraft V3</span> -
          an AI-powered 3D design platform with real-time Blender ↔ Three.js synchronization.
        </p>
        <p className="text-[var(--terminal-text)] opacity-50 mt-4">
          💡 Run <span className="text-[var(--terminal-cyan)]">open about.md</span> for detailed view
        </p>
      </div>
    ),
  },

  experience: {
    content: (
      <div className="space-y-4">
        <p className="text-[var(--terminal-yellow)]">// Work Experience</p>

        <div className="border-l-2 border-[var(--terminal-green)] pl-4">
          <p className="text-[var(--terminal-cyan)] font-bold">Senior Full Stack Engineer @ Cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-50 text-sm">Nov 2023 - Present | Noida</p>
          <p className="mt-1">Key Ward - AI-Ready Engineering Data Platform for automotive/aerospace</p>
          <p className="text-xs opacity-70 mt-1">DLT pipelines • MLflow • LakeFS • Apache Superset • GKE</p>
        </div>

        <div className="border-l-2 border-[var(--terminal-purple)] pl-4">
          <p className="text-[var(--terminal-cyan)] font-bold">VP Technology @ Siloho</p>
          <p className="text-[var(--terminal-text)] opacity-50 text-sm">Sep 2021 - Oct 2023 | Goa</p>
          <p className="mt-1">AI-powered interior design platform with real-time 3D renders</p>
          <p className="text-xs opacity-70 mt-1">Built 12+ member team • Blender/Unity • Vue.js/Django</p>
        </div>

        <div className="border-l-2 border-[var(--terminal-yellow)] pl-4">
          <p className="text-[var(--terminal-cyan)] font-bold">VP Technology @ ftcash</p>
          <p className="text-[var(--terminal-text)] opacity-50 text-sm">Oct 2019 - Sep 2021 | Mumbai</p>
          <p className="mt-1">Digital payments & lending for micro-merchants/SMEs</p>
          <p className="text-xs opacity-70 mt-1">Scaled to 40+ engineers • Payment gateway integrations</p>
        </div>

        <div className="border-l-2 border-[var(--terminal-pink)] pl-4">
          <p className="text-[var(--terminal-cyan)] font-bold">Senior Software Developer @ Eros Now</p>
          <p className="text-[var(--terminal-text)] opacity-50 text-sm">Nov 2018 - Oct 2019 | Mumbai</p>
          <p className="mt-1">OTT video streaming platform</p>
          <p className="text-xs opacity-70 mt-1">PHP to Python migration • RabbitMQ • MongoDB</p>
        </div>

        <div className="border-l-2 border-[var(--terminal-text)] pl-4 opacity-70">
          <p className="text-[var(--terminal-cyan)] font-bold">Senior Software Engineer @ Mswipe</p>
          <p className="text-[var(--terminal-text)] opacity-50 text-sm">Jan 2016 - Oct 2018 | Mumbai</p>
          <p className="mt-1">POS solutions, offline transaction processing</p>
          <p className="text-xs opacity-70 mt-1">Enterprise clients: CCD, Vistara, Jet Airways</p>
        </div>

        <p className="text-[var(--terminal-text)] opacity-50 mt-2">
          💡 Run <span className="text-[var(--terminal-cyan)]">open experience.json</span> for full details
        </p>
      </div>
    ),
  },

  skills: {
    content: (
      <div className="space-y-3">
        <p className="text-[var(--terminal-yellow)]">// Technical Skills</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[var(--terminal-purple)] font-bold">Languages</p>
            <p className="text-sm">Python, TypeScript, JavaScript, PHP, SQL</p>
          </div>

          <div>
            <p className="text-[var(--terminal-purple)] font-bold">Frontend</p>
            <p className="text-sm">React, Next.js, Vue.js, Three.js, D3</p>
          </div>

          <div>
            <p className="text-[var(--terminal-purple)] font-bold">Backend</p>
            <p className="text-sm">Django, Flask, Node.js, Express</p>
          </div>

          <div>
            <p className="text-[var(--terminal-purple)] font-bold">Database</p>
            <p className="text-sm">PostgreSQL, MongoDB, Redis, Elasticsearch</p>
          </div>

          <div>
            <p className="text-[var(--terminal-purple)] font-bold">Data & ML</p>
            <p className="text-sm">MLflow, Apache Superset, Spark, Temporal.io</p>
          </div>

          <div>
            <p className="text-[var(--terminal-purple)] font-bold">DevOps</p>
            <p className="text-sm">Docker, Kubernetes, GKE, AWS, ArgoCD</p>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-50 mt-2">
          💡 Run <span className="text-[var(--terminal-cyan)]">open skills.json</span> for full breakdown
        </p>
      </div>
    ),
  },

  projects: {
    content: (
      <div className="space-y-4">
        <p className="text-[var(--terminal-yellow)]">// Notable Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[var(--terminal-green)] p-3 rounded hover:bg-[var(--terminal-green)]/10 transition-colors">
            <p className="text-[var(--terminal-green)] font-bold">ModelCraft V3 <span className="text-[var(--terminal-yellow)]">★ 17</span></p>
            <p className="text-sm opacity-80">AI-powered 3D design platform</p>
            <p className="text-xs opacity-60 mt-1">AI floor plan detection • Blender ↔ Three.js</p>
            <p className="text-xs text-[var(--terminal-cyan)] mt-2">→ open projects/modelcraft.md</p>
          </div>

          <div className="border border-[var(--terminal-cyan)] p-3 rounded hover:bg-[var(--terminal-cyan)]/10 transition-colors">
            <p className="text-[var(--terminal-cyan)] font-bold">Saarathi Finance (Inclue)</p>
            <p className="text-sm opacity-80">NBFC Digital Lending Platform</p>
            <p className="text-xs opacity-60 mt-1">Credit bureau APIs • Temporal.io workflows</p>
            <p className="text-xs text-[var(--terminal-cyan)] mt-2">→ open projects/saarathi.md</p>
          </div>

          <div className="border border-[var(--terminal-purple)] p-3 rounded hover:bg-[var(--terminal-purple)]/10 transition-colors">
            <p className="text-[var(--terminal-purple)] font-bold">WiseYatra</p>
            <p className="text-sm opacity-80">Travel Booking Platform</p>
            <p className="text-xs opacity-60 mt-1">Next.js • Zustand • Google Maps API</p>
            <p className="text-xs text-[var(--terminal-cyan)] mt-2">→ open projects/wiseyatra.md</p>
          </div>

          <div className="border border-[var(--terminal-pink)] p-3 rounded hover:bg-[var(--terminal-pink)]/10 transition-colors">
            <p className="text-[var(--terminal-pink)] font-bold">blender-websocket <span className="text-[var(--terminal-yellow)]">★ 9</span></p>
            <p className="text-sm opacity-80">Real-time Blender communication</p>
            <p className="text-xs opacity-60 mt-1">Python • WebSocket • 3D pipeline</p>
            <p className="text-xs text-[var(--terminal-cyan)] mt-2">→ github.com/aman0x/blender-websocket</p>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-50 text-sm mt-2">
          View all 36 repos: <span className="text-[var(--terminal-green)]">github.com/aman0x</span>
        </p>
      </div>
    ),
  },

  contact: {
    content: (
      <div className="space-y-4">
        <p className="text-[var(--terminal-yellow)]">// Contact Me</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-[var(--terminal-purple)] font-bold">Direct Contact</p>
            <p><span className="opacity-60">Email:</span> <a href="mailto:amanchandel4@gmail.com" className="text-[var(--terminal-cyan)] hover:underline">amanchandel4@gmail.com</a></p>
            <p><span className="opacity-60">Phone:</span> <span className="text-[var(--terminal-text)]">+91 7905400369</span></p>
            <p><span className="opacity-60">Location:</span> <span className="text-[var(--terminal-text)]">Delhi, India</span></p>
          </div>

          <div className="space-y-2">
            <p className="text-[var(--terminal-purple)] font-bold">Online</p>
            <p><a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">github.com/aman0x</a></p>
            <p><a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">linkedin.com/in/aman0x</a></p>
            <p><a href="https://aman0x.com" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">aman0x.com</a></p>
          </div>
        </div>

        <div className="mt-4 p-3 border border-[var(--terminal-green)] rounded bg-[var(--terminal-green)]/5">
          <p className="text-[var(--terminal-green)] font-bold">✅ Open to Opportunities</p>
          <p className="text-sm mt-1 opacity-80">VP/Director roles • Technical Co-founder • AI/ML Consulting</p>
        </div>

        <p className="text-[var(--terminal-text)] opacity-50 text-sm">
          💡 Run <span className="text-[var(--terminal-cyan)]">open contact.md</span> for more details
        </p>
      </div>
    ),
  },

  social: {
    content: (
      <div className="space-y-2">
        <p className="text-[var(--terminal-yellow)]">// Social Links</p>
        <p>
          <span className="text-[var(--terminal-purple)]">GitHub</span>{' '}
          <a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">
            → github.com/aman0x
          </a>
        </p>
        <p>
          <span className="text-[var(--terminal-purple)]">LinkedIn</span>{' '}
          <a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">
            → linkedin.com/in/aman0x
          </a>
        </p>
        <p>
          <span className="text-[var(--terminal-purple)]">Website</span>{' '}
          <a href="https://aman0x.com" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">
            → aman0x.com
          </a>
        </p>
      </div>
    ),
  },

  resume: {
    content: (
      <div className="space-y-2">
        <p className="text-[var(--terminal-yellow)]">// Resume</p>
        <p>
          <a href="/Aman-Chandel-Resume.pdf" download className="text-[var(--terminal-green)] hover:underline inline-flex items-center gap-2">
            📄 Download Resume (PDF)
          </a>
        </p>
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
  'help', 'about', 'experience', 'skills', 'projects', 'contact', 'social', 'resume',
  'neofetch', 'clear', 'history', 'ls', 'cat', 'open', 'whoami', 'pwd', 'date'
];

export function getCommand(input: string): CommandOutput | null {
  const trimmed = input.trim().toLowerCase();

  if (commands[trimmed]) {
    return commands[trimmed];
  }

  return null;
}
