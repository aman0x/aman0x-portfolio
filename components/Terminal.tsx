'use client';

import { useState, useRef, useEffect, KeyboardEvent, ReactNode } from 'react';
import { commands, commandList, getCommand } from '@/lib/commands';
import { getFile, listDirectory, files } from '@/lib/files';
import DotImage from './DotImage';
import NotepadEditor from './NotepadEditor';

interface HistoryItem {
  command: string;
  output: ReactNode;
}

const WELCOME_MESSAGE = `aman0x.sh v1.0 — Type 'help' for commands, 'projects' for work, 'contact' to connect`;

interface TerminalProps {
  onToggleVersion: () => void;
}

export default function Terminal({ onToggleVersion }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [editorFile, setEditorFile] = useState<{ name: string; content: string; language: string } | null>(null);
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
    const trimmedCmd = cmd.trim();
    const lowerCmd = trimmedCmd.toLowerCase();

    if (lowerCmd === 'clear') {
      setHistory([]);
      setShowWelcome(false);
      return;
    }

    if (lowerCmd === 'history') {
      const historyOutput = (
        <div className="space-y-1">
          {commandHistory.map((c, i) => (
            <p key={i}>
              <span className="text-[var(--terminal-text)] opacity-50 mr-2">{i + 1}</span>{c}
            </p>
          ))}
        </div>
      );
      setHistory(prev => [...prev, { command: cmd, output: historyOutput }]);
      return;
    }

    if (lowerCmd === 'ls' || lowerCmd.startsWith('ls ')) {
      const path = lowerCmd.replace('ls', '').trim() || '.';
      const items = listDirectory(path);
      const output = (
        <div className="flex flex-wrap gap-3 text-[10px]">
          {items.map((item, i) => (
            <span
              key={i}
              className={item.endsWith('/') ? 'text-[var(--terminal-cyan)]' : 'text-[var(--terminal-green)]'}
            >
              {item}
            </span>
          ))}
        </div>
      );
      setHistory(prev => [...prev, { command: cmd, output }]);
      return;
    }

    if (lowerCmd.startsWith('cat ')) {
      const filename = trimmedCmd.slice(4).trim();
      const file = getFile(filename);
      if (file) {
        const lines = file.content.split('\n').slice(0, 20);
        const output = (
          <div className="space-y-1">
            <pre className="text-sm whitespace-pre-wrap opacity-90">{lines.join('\n')}</pre>
            {file.content.split('\n').length > 20 && (
              <p className="text-[var(--terminal-text)] opacity-50 mt-2">
                ... ({file.content.split('\n').length - 20} more lines)
                <span className="ml-2 text-[var(--terminal-cyan)]">Use `open {filename}` for full view</span>
              </p>
            )}
          </div>
        );
        setHistory(prev => [...prev, { command: cmd, output }]);
      } else {
        setHistory(prev => [...prev, {
          command: cmd,
          output: <p className="text-[var(--terminal-red)]">cat: {filename}: No such file or directory</p>
        }]);
      }
      return;
    }

    if (lowerCmd.startsWith('open ') || lowerCmd.startsWith('nano ') || lowerCmd.startsWith('vim ') || lowerCmd.startsWith('edit ')) {
      const filename = trimmedCmd.split(' ').slice(1).join(' ').trim();
      const file = getFile(filename);
      if (file) {
        setEditorFile(file);
        setHistory(prev => [...prev, {
          command: cmd,
          output: <p className="text-[var(--terminal-green)]">Opening {filename} in editor...</p>
        }]);
      } else {
        setHistory(prev => [...prev, {
          command: cmd,
          output: <p className="text-[var(--terminal-red)]">open: {filename}: No such file or directory</p>
        }]);
      }
      return;
    }

    if (lowerCmd === 'tree' || lowerCmd === 'find') {
      const output = (
        <div className="text-sm">
          <p className="text-[var(--terminal-cyan)]">.</p>
          <p>├── <span className="text-[var(--terminal-green)]">about.md</span></p>
          <p>├── <span className="text-[var(--terminal-green)]">contact.md</span></p>
          <p>├── <span className="text-[var(--terminal-green)]">experience.json</span></p>
          <p>├── <span className="text-[var(--terminal-cyan)]">projects/</span></p>
          <p>│   ├── <span className="text-[var(--terminal-green)]">modelcraft.md</span></p>
          <p>│   ├── <span className="text-[var(--terminal-green)]">saarathi.md</span></p>
          <p>│   └── <span className="text-[var(--terminal-green)]">wiseyatra.md</span></p>
          <p>├── <span className="text-[var(--terminal-green)]">README.md</span></p>
          <p>└── <span className="text-[var(--terminal-green)]">skills.json</span></p>
        </div>
      );
      setHistory(prev => [...prev, { command: cmd, output }]);
      return;
    }

    const result = getCommand(lowerCmd);

    if (result) {
      setHistory(prev => [...prev, { command: cmd, output: result.content }]);
    } else if (trimmedCmd) {
      setHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: (
            <p className="text-[var(--terminal-red)]">
              Command not found: {trimmedCmd}. Type &apos;help&apos; for available commands.
            </p>
          ),
        },
      ]);
    } else {
      setHistory(prev => [...prev, { command: '', output: null }]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        setCommandHistory(prev => [...prev, input]);
      }
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
      const parts = input.split(' ');
      const lastPart = parts[parts.length - 1].toLowerCase();

      if (parts.length === 1) {
        const matches = commandList.filter(cmd => cmd.startsWith(lastPart));
        if (matches.length === 1) {
          setInput(matches[0]);
          setSuggestions([]);
        } else if (matches.length > 1) {
          setSuggestions(matches);
        }
      } else if (['cat', 'open', 'nano', 'vim', 'edit'].includes(parts[0].toLowerCase())) {
        const fileMatches = Object.keys(files).filter(f => f.startsWith(lastPart));
        if (fileMatches.length === 1) {
          parts[parts.length - 1] = fileMatches[0];
          setInput(parts.join(' '));
          setSuggestions([]);
        } else if (fileMatches.length > 1) {
          setSuggestions(fileMatches);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
      setShowWelcome(false);
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    setSuggestions([]);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="h-screen bg-[var(--terminal-bg)] flex flex-col overflow-hidden">
      <div className="scanline" />

      {editorFile && (
        <NotepadEditor
          filename={editorFile.name}
          content={editorFile.content}
          language={editorFile.language}
          onClose={() => {
            setEditorFile(null);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        />
      )}

      <header className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f85149]" />
            <div className="w-3 h-3 rounded-full bg-[#d29922]" />
            <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
          </div>
          <span className="ml-4 text-sm text-[var(--terminal-text)] opacity-70">
            aman0x — bash — 80×24
          </span>
        </div>
        <button
          onClick={onToggleVersion}
          className="px-3 py-1 text-xs bg-[var(--terminal-yellow)]/20 text-[var(--terminal-yellow)] rounded hover:bg-[var(--terminal-yellow)]/30 transition-colors"
        >
          ← Switch to Classic
        </button>
      </header>

      <div
        ref={terminalRef}
        className="flex-1 p-3 md:p-4 overflow-y-auto text-[11px] font-mono"
        onClick={focusInput}
      >
        {showWelcome && (
          <div className="mb-4">
            <div className="flex flex-col md:flex-row gap-4 items-start mb-3">
              <DotImage
                src="/aman.jpg"
                width={80}
                height={80}
                dotSize={2}
                dotGap={1}
                color="#3fb950"
              />
              <div>
                <p className="text-[var(--terminal-green)] text-lg md:text-xl font-bold tracking-wide">AMAN SINGH CHANDEL</p>
                <p className="text-[var(--terminal-cyan)] text-xs font-medium mt-1">VP of Technology & Engineering Leader</p>
                <p className="text-[var(--terminal-text)] opacity-60 text-[10px] mt-0.5">11+ Years • Architecture • AI/ML • Data Platforms • 3D Systems</p>
                <div className="flex gap-1 mt-2 flex-wrap">
                  <span className="text-[9px] px-1.5 py-0.5 border border-[var(--terminal-green)]/50 text-[var(--terminal-green)] rounded">Python</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-[var(--terminal-cyan)]/50 text-[var(--terminal-cyan)] rounded">React</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-[var(--terminal-purple)]/50 text-[var(--terminal-purple)] rounded">Django</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-[var(--terminal-yellow)]/50 text-[var(--terminal-yellow)] rounded">K8s</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-[var(--terminal-pink)]/50 text-[var(--terminal-pink)] rounded">Three.js</span>
                </div>
                <p className="text-[var(--terminal-text)] opacity-40 text-[10px] mt-2">Currently: Senior Full Stack Engineer @ Cloudastra Technologies</p>
              </div>
            </div>
            <pre className="text-[var(--terminal-text)] whitespace-pre-wrap text-[10px] opacity-70">{WELCOME_MESSAGE}</pre>
          </div>
        )}

        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-1 flex-wrap text-[10px]">
              <span className="text-[var(--terminal-green)]">visitor@aman0x</span>
              <span className="text-[var(--terminal-text)] opacity-50">:</span>
              <span className="text-[var(--terminal-cyan)]">~</span>
              <span className="text-[var(--terminal-text)] opacity-50">$</span>
              <span className="text-[var(--terminal-text)]">{item.command}</span>
            </div>
            {item.output && <div className="mt-1 ml-2">{item.output}</div>}
          </div>
        ))}

        <div className="flex items-center gap-1 flex-wrap text-[10px]">
          <span className="text-[var(--terminal-green)]">visitor@aman0x</span>
          <span className="text-[var(--terminal-text)] opacity-50">:</span>
          <span className="text-[var(--terminal-cyan)]">~</span>
          <span className="text-[var(--terminal-text)] opacity-50">$</span>
          <div className="flex-1 relative min-w-[200px]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none text-[var(--terminal-text)] caret-[var(--terminal-green)]"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
            {!input && (
              <span className="absolute left-0 top-0 w-2.5 h-5 bg-[var(--terminal-green)] cursor-blink" />
            )}
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-[var(--terminal-text)] opacity-70 text-xs">
            <span className="opacity-50">suggestions:</span>
            {suggestions.map(s => (
              <span key={s} className="text-[var(--terminal-cyan)] hover:text-[var(--terminal-green)] cursor-pointer underline" onClick={() => {
                const parts = input.split(' ');
                parts[parts.length - 1] = s;
                setInput(parts.join(' '));
                setSuggestions([]);
                inputRef.current?.focus();
              }}>{s}</span>
            ))}
          </div>
        )}
      </div>

      <footer className="px-3 py-1.5 bg-[#161b22] border-t border-[#30363d] text-[10px] text-[var(--terminal-text)]">
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 opacity-70">
          <span className="text-[var(--terminal-yellow)]">Try:</span>
          <span className="text-[var(--terminal-green)]">about</span>
          <span className="text-[var(--terminal-green)]">experience</span>
          <span className="text-[var(--terminal-green)]">skills</span>
          <span className="text-[var(--terminal-green)]">projects</span>
          <span className="text-[var(--terminal-green)]">contact</span>
          <span className="text-[var(--terminal-cyan)]">ls</span>
          <span className="text-[var(--terminal-cyan)]">cat [file]</span>
          <span className="text-[var(--terminal-purple)]">help</span>
        </div>
      </footer>
    </div>
  );
}
