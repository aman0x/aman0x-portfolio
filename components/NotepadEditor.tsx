'use client';

import { useEffect } from 'react';

interface NotepadEditorProps {
  filename: string;
  content: string;
  onClose: () => void;
  language?: string;
}

export default function NotepadEditor({ filename, content, onClose, language = 'text' }: NotepadEditorProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || (e.ctrlKey && e.key === 'q')) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getLineNumbers = () => {
    const lines = content.split('\n');
    return lines.map((_, i) => i + 1);
  };

  const highlightSyntax = (text: string) => {
    if (language === 'json') {
      return text
        .replace(/"([^"]+)":/g, '<span class="text-[#9cdcfe]">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-[#ce9178]">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="text-[#b5cea8]">$1</span>')
        .replace(/: (true|false)/g, ': <span class="text-[#569cd6]">$1</span>');
    }
    if (language === 'md' || language === 'markdown') {
      return text
        .replace(/^(#{1,6})\s(.+)$/gm, '<span class="text-[#569cd6]">$1</span> <span class="text-[#4ec9b0]">$2</span>')
        .replace(/\*\*([^*]+)\*\*/g, '<span class="text-[#dcdcaa]">**$1**</span>')
        .replace(/`([^`]+)`/g, '<span class="text-[#ce9178]">`$1`</span>')
        .replace(/^[-*]\s/gm, '<span class="text-[#d4d4d4]">• </span>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="text-[#569cd6]">[$1]</span><span class="text-[#ce9178]">($2)</span>');
    }
    return text;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl h-[80vh] flex flex-col bg-[#1e1e1e] rounded-lg shadow-2xl border border-[#3c3c3c] overflow-hidden">
        <div className="flex items-center justify-between px-2 py-1 bg-[#3c3c3c]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#f85149] hover:bg-[#ff6b5b] transition-colors"
              />
              <div className="w-3 h-3 rounded-full bg-[#d29922]" />
              <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
            </div>
            <span className="ml-2 text-xs text-[#cccccc]">{filename}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#808080]">
            <span>{language.toUpperCase()}</span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-3 py-1.5 bg-[#252526] border-b border-[#3c3c3c] text-xs text-[#cccccc]">
          <span className="hover:text-white cursor-default">File</span>
          <span className="hover:text-white cursor-default">Edit</span>
          <span className="hover:text-white cursor-default">Search</span>
          <span className="hover:text-white cursor-default">View</span>
          <span className="hover:text-white cursor-default">Encoding</span>
          <span className="hover:text-white cursor-default">Language</span>
          <span className="hover:text-white cursor-default">Settings</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2d2d2d] border-b border-[#3c3c3c]">
          <div className="flex items-center gap-1 px-2 py-1 bg-[#1e1e1e] rounded text-xs text-[#cccccc] border-b-2 border-[#3fb950]">
            <span className="text-[#6a9955]">◆</span>
            <span>{filename}</span>
            <button onClick={onClose} className="ml-2 hover:text-white">×</button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="py-3 px-2 bg-[#1e1e1e] text-right text-xs text-[#858585] select-none border-r border-[#3c3c3c] min-w-[50px]">
            {getLineNumbers().map(num => (
              <div key={num} className="leading-5">{num}</div>
            ))}
          </div>

          <div className="flex-1 overflow-auto p-3">
            <pre
              className="text-xs text-[#d4d4d4] leading-5 whitespace-pre-wrap font-mono"
              dangerouslySetInnerHTML={{ __html: highlightSyntax(content) }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-xs text-white">
          <div className="flex items-center gap-4">
            <span>Ln 1, Col 1</span>
            <span>{content.split('\n').length} lines</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Press ESC or Ctrl+Q to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
