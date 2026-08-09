'use client';

import { useState, useEffect } from 'react';
import Terminal from '@/components/Terminal';
import NotepadLayout from '@/components/NotepadLayout';
import { config } from '@/lib/config';

export default function Home() {
  const [version, setVersion] = useState<'terminal' | 'vscode'>(config.defaultVersion === 'new' ? 'vscode' : 'terminal');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-version') as 'terminal' | 'vscode' | null;
    if (saved) {
      setVersion(saved);
    }
    setMounted(true);
  }, []);

  const toggleVersion = () => {
    const newVersion = version === 'terminal' ? 'vscode' : 'terminal';
    setVersion(newVersion);
    localStorage.setItem('portfolio-version', newVersion);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <div className="text-[#3fb950] text-sm font-mono">Loading...</div>
      </div>
    );
  }

  return version === 'vscode' ? (
    <NotepadLayout onToggleVersion={toggleVersion} />
  ) : (
    <Terminal onToggleVersion={toggleVersion} />
  );
}
