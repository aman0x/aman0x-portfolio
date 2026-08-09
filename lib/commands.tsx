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
      <div className="flex flex-col md:flex-row gap-4 items-start text-xs">
        <pre className="text-[var(--terminal-green)] text-[8px] leading-tight hidden md:block">{ASCII_NAME}</pre>
        <div className="space-y-0.5">
          <p className="text-[var(--terminal-cyan)] font-medium">aman0x@cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-40">───────────────────</p>
          <p><span className="text-[var(--terminal-purple)]">Role</span>: VP, Technology</p>
          <p><span className="text-[var(--terminal-purple)]">XP</span>: 11+ years</p>
          <p><span className="text-[var(--terminal-purple)]">Location</span>: Delhi, India</p>
          <p><span className="text-[var(--terminal-purple)]">Stack</span>: Python, React, Django, K8s</p>
          <p><span className="text-[var(--terminal-purple)]">Focus</span>: AI/ML, 3D, Data Platforms</p>
          <p><span className="text-[var(--terminal-purple)]">Status</span>: <span className="text-[var(--terminal-green)]">Open to Work</span></p>
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
        <p className="text-[var(--terminal-yellow)]">// About Me</p>
        <p className="opacity-90">
          11+ years building and scaling products. Technology leader with expertise in
          <span className="text-[var(--terminal-cyan)]"> full-stack</span>,
          <span className="text-[var(--terminal-cyan)]"> backend systems</span>, and
          <span className="text-[var(--terminal-cyan)]"> API integrations</span>.
        </p>
        <p className="opacity-90">
          Currently building <span className="text-[var(--terminal-green)]">ModelCraft V3</span> -
          AI-powered 3D design with real-time Blender ↔ Three.js sync.
        </p>
        <p className="text-[var(--terminal-text)] opacity-40 mt-2">
          → <span className="text-[var(--terminal-cyan)]">open about.md</span> for details
        </p>
      </div>
    ),
  },

  experience: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Work Experience</p>

        <div className="border-l border-[var(--terminal-green)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Full Stack Engineer @ Cloudastra</p>
          <p className="text-[var(--terminal-text)] opacity-40">Nov 2023 - Present</p>
          <p className="opacity-70">Key Ward - AI-Ready Data Platform | DLT • MLflow • GKE</p>
        </div>

        <div className="border-l border-[var(--terminal-purple)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">VP Technology @ Siloho</p>
          <p className="text-[var(--terminal-text)] opacity-40">Sep 2021 - Oct 2023</p>
          <p className="opacity-70">AI interior design | Built 12+ team | Blender/Unity/Django</p>
        </div>

        <div className="border-l border-[var(--terminal-yellow)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">VP Technology @ ftcash</p>
          <p className="text-[var(--terminal-text)] opacity-40">Oct 2019 - Sep 2021</p>
          <p className="opacity-70">Digital payments | Scaled to 40+ engineers</p>
        </div>

        <div className="border-l border-[var(--terminal-pink)] pl-2">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Developer @ Eros Now</p>
          <p className="text-[var(--terminal-text)] opacity-40">Nov 2018 - Oct 2019</p>
          <p className="opacity-70">OTT platform | PHP→Python migration</p>
        </div>

        <div className="border-l border-[var(--terminal-text)]/50 pl-2 opacity-60">
          <p className="text-[var(--terminal-cyan)] font-medium">Senior Engineer @ Mswipe</p>
          <p className="text-[var(--terminal-text)] opacity-40">Jan 2016 - Oct 2018</p>
          <p className="opacity-70">POS solutions | CCD, Vistara, Jet Airways</p>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          → <span className="text-[var(--terminal-cyan)]">open experience.json</span> for details
        </p>
      </div>
    ),
  },

  skills: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Technical Skills</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">Languages</p>
            <p className="opacity-70">Python, TypeScript, PHP, SQL</p>
          </div>
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">Frontend</p>
            <p className="opacity-70">React, Next.js, Vue, Three.js</p>
          </div>
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">Backend</p>
            <p className="opacity-70">Django, Flask, Node.js</p>
          </div>
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">Database</p>
            <p className="opacity-70">PostgreSQL, MongoDB, Redis</p>
          </div>
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">Data/ML</p>
            <p className="opacity-70">MLflow, Superset, Spark</p>
          </div>
          <div>
            <p className="text-[var(--terminal-purple)] font-medium">DevOps</p>
            <p className="opacity-70">Docker, K8s, GKE, AWS</p>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          → <span className="text-[var(--terminal-cyan)]">open skills.json</span> for details
        </p>
      </div>
    ),
  },

  projects: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Notable Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="border border-[var(--terminal-green)]/50 p-2 rounded">
            <p className="text-[var(--terminal-green)] font-medium">ModelCraft V3 <span className="text-[var(--terminal-yellow)]">★17</span></p>
            <p className="opacity-60">AI 3D design | Blender ↔ Three.js</p>
            <p className="text-[var(--terminal-cyan)] opacity-70 mt-1">→ open projects/modelcraft.md</p>
          </div>

          <div className="border border-[var(--terminal-cyan)]/50 p-2 rounded">
            <p className="text-[var(--terminal-cyan)] font-medium">Saarathi Finance</p>
            <p className="opacity-60">NBFC Lending | Temporal.io</p>
            <p className="text-[var(--terminal-cyan)] opacity-70 mt-1">→ open projects/saarathi.md</p>
          </div>

          <div className="border border-[var(--terminal-purple)]/50 p-2 rounded">
            <p className="text-[var(--terminal-purple)] font-medium">WiseYatra</p>
            <p className="opacity-60">Travel Platform | Next.js</p>
            <p className="text-[var(--terminal-cyan)] opacity-70 mt-1">→ open projects/wiseyatra.md</p>
          </div>

          <div className="border border-[var(--terminal-pink)]/50 p-2 rounded">
            <p className="text-[var(--terminal-pink)] font-medium">blender-websocket <span className="text-[var(--terminal-yellow)]">★9</span></p>
            <p className="opacity-60">Real-time 3D communication</p>
            <p className="text-[var(--terminal-cyan)] opacity-70 mt-1">→ github.com/aman0x</p>
          </div>
        </div>

        <p className="text-[var(--terminal-text)] opacity-40 mt-1">
          36 repos: <span className="text-[var(--terminal-green)]">github.com/aman0x</span>
        </p>
      </div>
    ),
  },

  contact: {
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-[var(--terminal-yellow)]">// Contact</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <p className="text-[var(--terminal-purple)] font-medium">Direct</p>
            <p><span className="opacity-50">Email:</span> <a href="mailto:amanchandel4@gmail.com" className="text-[var(--terminal-cyan)]">amanchandel4@gmail.com</a></p>
            <p><span className="opacity-50">Phone:</span> +91 7905400369</p>
            <p><span className="opacity-50">Location:</span> Delhi, India</p>
          </div>

          <div className="space-y-1">
            <p className="text-[var(--terminal-purple)] font-medium">Online</p>
            <p><a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">github.com/aman0x</a></p>
            <p><a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)]">linkedin.com/in/aman0x</a></p>
          </div>
        </div>

        <div className="p-2 border border-[var(--terminal-green)]/50 rounded mt-2">
          <p className="text-[var(--terminal-green)] font-medium">Open to Opportunities</p>
          <p className="opacity-60">VP/Director • Tech Co-founder • AI/ML Consulting</p>
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
