'use client';

import { useState, useRef, useEffect, KeyboardEvent, ReactNode } from 'react';
import DotImage from './DotImage';

interface HistoryItem {
  command: string;
  output: ReactNode;
}

const ASCII_NAME = `
   █████╗ ███╗   ███╗ █████╗ ███╗   ██╗
  ██╔══██╗████╗ ████║██╔══██╗████╗  ██║
  ███████║██╔████╔██║███████║██╔██╗ ██║
  ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
  ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
`;

const commands: Record<string, ReactNode> = {
  help: (
    <div className="space-y-1">
      <p className="text-[var(--terminal-yellow)]">Available commands:</p>
      <p><span className="text-[var(--terminal-green)]">about</span>      - Who am I</p>
      <p><span className="text-[var(--terminal-green)]">experience</span> - Work history</p>
      <p><span className="text-[var(--terminal-green)]">skills</span>     - Technical skills</p>
      <p><span className="text-[var(--terminal-green)]">projects</span>   - Notable projects</p>
      <p><span className="text-[var(--terminal-green)]">contact</span>    - Get in touch</p>
      <p><span className="text-[var(--terminal-green)]">social</span>     - Social links</p>
      <p><span className="text-[var(--terminal-green)]">resume</span>     - Download resume</p>
      <p><span className="text-[var(--terminal-green)]">neofetch</span>   - System info</p>
      <p><span className="text-[var(--terminal-green)]">clear</span>      - Clear terminal</p>
      <p className="text-[var(--terminal-text)] opacity-50 mt-2">Tip: Use ↑↓ for history, Tab for autocomplete</p>
    </div>
  ),

  neofetch: (
    <div className="flex gap-8 items-start">
      <pre className="text-[var(--terminal-green)] text-xs leading-tight">{ASCII_NAME}</pre>
      <div className="space-y-1 text-sm">
        <p className="text-[var(--terminal-cyan)]">aman0x@cloudastra</p>
        <p className="text-[var(--terminal-text)] opacity-50">─────────────────</p>
        <p><span className="text-[var(--terminal-purple)]">Role</span>: VP, Technology</p>
        <p><span className="text-[var(--terminal-purple)]">XP</span>: 11+ years</p>
        <p><span className="text-[var(--terminal-purple)]">Location</span>: Delhi, India</p>
        <p><span className="text-[var(--terminal-purple)]">Stack</span>: Python, React, Django, K8s</p>
        <p><span className="text-[var(--terminal-purple)]">Focus</span>: AI/ML, 3D, Data Platforms</p>
        <p><span className="text-[var(--terminal-purple)]">Status</span>: <span className="text-[var(--terminal-green)]">Hireable ✓</span></p>
      </div>
    </div>
  ),

  about: (
    <div className="space-y-3">
      <p className="text-[var(--terminal-yellow)]">// About Me</p>
      <p>11+ years of experience as a software developer and technology leader, with a strong track record of building and scaling commercially successful products from the ground up.</p>
      <p>Expert in <span className="text-[var(--terminal-cyan)]">full-stack development</span>, <span className="text-[var(--terminal-cyan)]">backend systems</span>, and <span className="text-[var(--terminal-cyan)]">API integrations</span>.</p>
    </div>
  ),

  experience: (
    <div className="space-y-3">
      <p className="text-[var(--terminal-yellow)]">// Work Experience</p>
      <div className="border-l-2 border-[var(--terminal-green)] pl-4">
        <p className="text-[var(--terminal-cyan)]">Senior Full Stack Engineer @ Cloudastra</p>
        <p className="text-sm opacity-70">Nov 2023 - Present | Noida</p>
      </div>
      <div className="border-l-2 border-[var(--terminal-purple)] pl-4">
        <p className="text-[var(--terminal-cyan)]">VP Technology @ Siloho</p>
        <p className="text-sm opacity-70">Sep 2021 - Oct 2023 | Goa</p>
      </div>
      <div className="border-l-2 border-[var(--terminal-yellow)] pl-4">
        <p className="text-[var(--terminal-cyan)]">VP Technology @ ftcash</p>
        <p className="text-sm opacity-70">Oct 2019 - Sep 2021 | Mumbai</p>
      </div>
      <div className="border-l-2 border-[var(--terminal-pink)] pl-4">
        <p className="text-[var(--terminal-cyan)]">Senior Software Developer @ Eros Now</p>
        <p className="text-sm opacity-70">Nov 2018 - Oct 2019 | Mumbai</p>
      </div>
      <div className="border-l-2 border-[var(--terminal-text)] pl-4 opacity-70">
        <p className="text-[var(--terminal-cyan)]">Senior Software Engineer @ Mswipe</p>
        <p className="text-sm opacity-70">Jan 2016 - Oct 2018 | Mumbai</p>
      </div>
    </div>
  ),

  skills: (
    <div className="space-y-2">
      <p className="text-[var(--terminal-yellow)]">// Technical Skills</p>
      <p><span className="text-[var(--terminal-purple)]">Languages:</span> Python, TypeScript, JavaScript, PHP, SQL</p>
      <p><span className="text-[var(--terminal-purple)]">Frontend:</span> React, Next.js, Vue.js, Three.js, D3</p>
      <p><span className="text-[var(--terminal-purple)]">Backend:</span> Django, Flask, Node.js</p>
      <p><span className="text-[var(--terminal-purple)]">Database:</span> PostgreSQL, MongoDB, Redis</p>
      <p><span className="text-[var(--terminal-purple)]">DevOps:</span> Docker, Kubernetes, GKE, AWS</p>
    </div>
  ),

  projects: (
    <div className="space-y-3">
      <p className="text-[var(--terminal-yellow)]">// Notable Projects</p>
      <p><span className="text-[var(--terminal-green)]">ModelCraft V3</span> - AI-powered 3D design platform</p>
      <p><span className="text-[var(--terminal-cyan)]">Key Ward</span> - AI-Ready Engineering Data Platform</p>
      <p><span className="text-[var(--terminal-purple)]">Saarathi Finance</span> - NBFC Digital Lending Platform</p>
      <p><span className="text-[var(--terminal-pink)]">WiseYatra</span> - Travel Booking Platform</p>
    </div>
  ),

  contact: (
    <div className="space-y-2">
      <p className="text-[var(--terminal-yellow)]">// Contact</p>
      <p><span className="text-[var(--terminal-purple)]">Email:</span> amanchandel4@gmail.com</p>
      <p><span className="text-[var(--terminal-purple)]">Phone:</span> +91 7905400369</p>
      <p><span className="text-[var(--terminal-purple)]">Location:</span> Delhi, India</p>
      <p className="mt-2 text-[var(--terminal-green)]">Open to opportunities!</p>
    </div>
  ),

  social: (
    <div className="space-y-2">
      <p className="text-[var(--terminal-yellow)]">// Social Links</p>
      <p><span className="text-[var(--terminal-purple)]">GitHub:</span> <a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">github.com/aman0x</a></p>
      <p><span className="text-[var(--terminal-purple)]">LinkedIn:</span> <a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">linkedin.com/in/aman0x</a></p>
      <p><span className="text-[var(--terminal-purple)]">Website:</span> <a href="https://aman0x.com" target="_blank" rel="noopener noreferrer" className="text-[var(--terminal-cyan)] hover:underline">aman0x.com</a></p>
    </div>
  ),

  resume: (
    <div className="space-y-2">
      <p className="text-[var(--terminal-yellow)]">// Resume</p>
      <p><a href="/Aman-Chandel-Resume.pdf" download className="text-[var(--terminal-green)] hover:underline">→ Download Resume (PDF)</a></p>
    </div>
  ),

  whoami: <p>aman0x</p>,
  pwd: <p>/home/aman0x</p>,

  'sudo hire-me': (
    <div className="space-y-1">
      <p className="text-[var(--terminal-green)]">[sudo] password for recruiter: ********</p>
      <p className="text-[var(--terminal-green)]">✓ Authentication successful</p>
      <p className="text-[var(--terminal-yellow)]">Initiating hiring process...</p>
      <p>📧 Sending email to amanchandel4@gmail.com</p>
      <p className="text-[var(--terminal-green)]">🎉 Congratulations! You&apos;ve made an excellent choice.</p>
    </div>
  ),
};

const commandList = ['help', 'about', 'experience', 'skills', 'projects', 'contact', 'social', 'resume', 'neofetch', 'clear', 'whoami', 'pwd'];

interface TerminalClassicProps {
  onToggleVersion: () => void;
}

export default function TerminalClassic({ onToggleVersion }: TerminalClassicProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setShowWelcome(false);
      return;
    }

    if (commands[trimmedCmd]) {
      setHistory(prev => [...prev, { command: cmd, output: commands[trimmedCmd] }]);
    } else if (trimmedCmd) {
      setHistory(prev => [...prev, {
        command: cmd,
        output: <p className="text-[var(--terminal-red)]">Command not found: {trimmedCmd}. Type &apos;help&apos; for available commands.</p>
      }]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) setCommandHistory(prev => [...prev, input]);
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
      setSuggestions([]);
      setShowWelcome(false);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matches = commandList.filter(c => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
        setSuggestions([]);
      } else if (matches.length > 1) {
        setSuggestions(matches);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
      setShowWelcome(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] flex flex-col">
      <div className="scanline" />

      <header className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f85149]" />
            <div className="w-3 h-3 rounded-full bg-[#d29922]" />
            <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
          </div>
          <span className="ml-4 text-sm text-[var(--terminal-text)] opacity-70">
            visitor@aman0x: ~
          </span>
        </div>
        <button
          onClick={onToggleVersion}
          className="px-3 py-1 text-xs bg-[var(--terminal-purple)]/20 text-[var(--terminal-purple)] rounded hover:bg-[var(--terminal-purple)]/30 transition-colors"
        >
          Switch to Pro →
        </button>
      </header>

      <div
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto crt-effect"
        onClick={() => inputRef.current?.focus()}
      >
        {showWelcome && (
          <div className="mb-4">
            <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
              <DotImage src="/aman.jpg" width={150} height={150} dotSize={2} dotGap={2} color="#3fb950" />
              <div>
                <pre className="text-[var(--terminal-green)] text-xs leading-tight terminal-glow">
{`   █████╗ ███╗   ███╗ █████╗ ███╗   ██╗
  ██╔══██╗████╗ ████║██╔══██╗████╗  ██║
  ███████║██╔████╔██║███████║██╔██╗ ██║
  ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
  ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝`}
                </pre>
                <p className="text-[var(--terminal-cyan)] mt-2">VP, Technology @ Cloudastra</p>
                <p className="text-[var(--terminal-text)] opacity-70 text-sm">Full Stack Engineer • 11+ Years • Delhi, India</p>
              </div>
            </div>
            <pre className="text-[var(--terminal-text)] whitespace-pre-wrap">
{`Welcome to aman0x terminal v1.0.0 (Classic)
Type 'help' to see available commands.`}
            </pre>
          </div>
        )}

        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[var(--terminal-green)]">visitor@aman0x</span>
              <span className="text-[var(--terminal-text)]">:</span>
              <span className="text-[var(--terminal-cyan)]">~</span>
              <span className="text-[var(--terminal-text)]">$</span>
              <span className="text-[var(--terminal-text)]">{item.command}</span>
            </div>
            {item.output && <div className="mt-1 ml-0 md:ml-4">{item.output}</div>}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-[var(--terminal-green)]">visitor@aman0x</span>
          <span className="text-[var(--terminal-text)]">:</span>
          <span className="text-[var(--terminal-cyan)]">~</span>
          <span className="text-[var(--terminal-text)]">$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none text-[var(--terminal-text)] caret-[var(--terminal-green)]"
              spellCheck={false}
              autoComplete="off"
            />
            {!input && <span className="absolute left-0 top-0 w-2 h-5 bg-[var(--terminal-green)] cursor-blink" />}
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-4 text-[var(--terminal-text)] opacity-50">
            {suggestions.map(s => <span key={s}>{s}</span>)}
          </div>
        )}
      </div>

      <footer className="px-4 py-2 bg-[#161b22] border-t border-[#30363d] text-xs text-[var(--terminal-text)] opacity-50 flex justify-between">
        <span>↑↓ History • Tab Autocomplete • Ctrl+L Clear</span>
        <span>Classic Mode</span>
      </footer>
    </div>
  );
}
