'use client';

import { useState } from 'react';
import DotImage from './DotImage';

interface NotepadLayoutProps {
  onToggleVersion: () => void;
}

const files = [
  { name: 'home.tsx', icon: '⚛' },
  { name: 'about.md', icon: '📄' },
  { name: 'experience.ts', icon: '📘' },
  { name: 'projects.js', icon: '📜' },
  { name: 'skills.json', icon: '{ }' },
  { name: 'contact.css', icon: '#' },
];

export default function NotepadLayout({ onToggleVersion }: NotepadLayoutProps) {
  const [activeFile, setActiveFile] = useState('home.tsx');

  const getContent = () => {
    switch (activeFile) {
      case 'home.tsx':
        return <HomeContent />;
      case 'about.md':
        return <AboutContent />;
      case 'experience.ts':
        return <ExperienceContent />;
      case 'projects.js':
        return <ProjectsContent />;
      case 'skills.json':
        return <SkillsContent />;
      case 'contact.css':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  const getLineCount = () => {
    switch (activeFile) {
      case 'home.tsx': return 35;
      case 'about.md': return 30;
      case 'experience.ts': return 45;
      case 'projects.js': return 40;
      case 'skills.json': return 25;
      case 'contact.css': return 35;
      default: return 30;
    }
  };

  return (
    <div className="h-screen bg-[#1e1e1e] flex flex-col font-mono text-sm overflow-hidden">
      {/* Title Bar */}
      <div className="h-6 md:h-7 bg-[#3c3c3c] flex items-center px-2 border-b border-[#252526] shrink-0">
        <div className="flex gap-1 mr-2 md:mr-4">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27ca3f]" />
        </div>
        <span className="text-[#cccccc] text-[10px] md:text-xs">aman0x - Notepad++</span>
        <div className="flex-1" />
        <button
          onClick={onToggleVersion}
          className="px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] bg-[#6A9955] hover:bg-[#7ec07e] text-white rounded transition-colors"
        >
          Terminal →
        </button>
      </div>

      {/* Menu Bar - hidden on mobile */}
      <div className="hidden md:flex h-6 bg-[#2d2d2d] items-center px-1 text-[11px] text-[#cccccc] border-b border-[#404040] shrink-0">
        {['File', 'Edit', 'Search', 'View', 'Encoding', 'Language', 'Settings'].map(menu => (
          <span key={menu} className="px-2 py-0.5 hover:bg-[#094771] cursor-pointer">{menu}</span>
        ))}
      </div>

      {/* Toolbar - hidden on mobile */}
      <div className="hidden md:flex h-7 bg-[#2d2d2d] items-center px-2 gap-1 border-b border-[#404040] shrink-0">
        {['📄', '📂', '💾', '✂️', '📋', '↩️', '↪️', '🔍'].map((icon, i) => (
          <button key={i} className="w-6 h-6 flex items-center justify-center hover:bg-[#094771] rounded text-[12px]">
            {icon}
          </button>
        ))}
      </div>

      {/* Tab Bar */}
      <div className="h-7 bg-[#1e1e1e] flex items-end border-b border-[#404040] overflow-x-auto shrink-0 scrollbar-hide">
        {files.map(file => (
          <button
            key={file.name}
            onClick={() => setActiveFile(file.name)}
            className={`h-6 flex items-center gap-1 px-2 md:px-3 text-[10px] md:text-[11px] border-t border-l border-r rounded-t transition-colors whitespace-nowrap shrink-0 ${
              activeFile === file.name
                ? 'bg-[#1e1e1e] border-[#6A9955] text-[#cccccc]'
                : 'bg-[#2d2d2d] border-[#404040] text-[#808080] hover:text-[#cccccc]'
            }`}
          >
            <span className="hidden md:inline">{file.icon}</span>
            <span>{file.name.split('.')[0]}</span>
          </button>
        ))}
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Line Numbers - hidden on mobile */}
        <div className="hidden md:block w-10 bg-[#2d2d2d] border-r border-[#404040] text-right pr-2 pt-2 text-[#6A9955] text-[11px] select-none overflow-hidden shrink-0">
          {Array.from({ length: getLineCount() }, (_, i) => (
            <div key={i} className="h-[16px] leading-[16px]">{i + 1}</div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto p-2 md:p-3">
          {getContent()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-5 bg-[#007acc] flex items-center justify-between px-2 text-[9px] md:text-[10px] text-white shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="hidden md:inline">lines: {getLineCount()}</span>
          <span>{activeFile.split('.').pop()?.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span>Ln: 1</span>
          <span>Col: 1</span>
          <span className="hidden md:inline">UTF-8</span>
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px]">
      <p><span className="text-[#6A9955]">// Welcome to my portfolio</span></p>
      <p></p>
      <p><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;react&apos;</span>;</p>
      <p></p>
      <div className="flex gap-3 md:gap-6 my-3 md:my-4">
        <DotImage src="/aman.jpg" width={60} height={60} dotSize={2} dotGap={1} color="#6A9955" />
        <div>
          <p className="text-xl md:text-3xl font-bold">
            <span className="text-[#dcdcaa]">Aman</span> <span className="text-[#c586c0]">Chandel</span>
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
            <span className="px-1.5 py-0.5 bg-[#264f78] text-[#4fc1ff] rounded text-[8px] md:text-[10px]">Backend</span>
            <span className="px-1.5 py-0.5 bg-[#264f78] text-[#4fc1ff] rounded text-[8px] md:text-[10px]">AI/ML</span>
            <span className="px-1.5 py-0.5 bg-[#4d3d00] text-[#dcdcaa] rounded text-[8px] md:text-[10px]">@ Cloudastra</span>
          </div>
        </div>
      </div>
      <p></p>
      <p><span className="text-[#9cdcfe]">11+ years building </span><span className="text-[#4fc1ff]">scalable systems</span><span className="text-[#9cdcfe]">, </span><span className="text-[#4fc1ff]">AI/ML</span><span className="text-[#9cdcfe]">, </span><span className="text-[#4fc1ff]">3D</span></p>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px] text-[#d4d4d4]">
      <p><span className="text-[#569cd6]"># About Me</span></p>
      <p></p>
      <p>11+ years building and scaling successful products.</p>
      <p></p>
      <p><span className="text-[#569cd6]">## What I Do</span></p>
      <p></p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">Full-Stack</span>: React, Next.js, Vue, Django</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">Backend</span>: APIs, microservices, distributed</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">Data</span>: MLflow, Superset, Spark, DLT</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">3D/AI</span>: Blender, Three.js, TensorFlow</p>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px]">
      <p><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">experience</span> = [</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Sr Full Stack&quot;</span>, <span className="text-[#9cdcfe]">co</span>: <span className="text-[#ce9178]">&quot;Cloudastra&quot;</span>, <span className="text-[#9cdcfe]">yr</span>: <span className="text-[#ce9178]">&quot;2023-Now&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;VP Tech&quot;</span>, <span className="text-[#9cdcfe]">co</span>: <span className="text-[#ce9178]">&quot;Siloho&quot;</span>, <span className="text-[#9cdcfe]">yr</span>: <span className="text-[#ce9178]">&quot;2021-23&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;VP Tech&quot;</span>, <span className="text-[#9cdcfe]">co</span>: <span className="text-[#ce9178]">&quot;ftcash&quot;</span>, <span className="text-[#9cdcfe]">yr</span>: <span className="text-[#ce9178]">&quot;2019-21&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Sr Dev&quot;</span>, <span className="text-[#9cdcfe]">co</span>: <span className="text-[#ce9178]">&quot;Eros Now&quot;</span>, <span className="text-[#9cdcfe]">yr</span>: <span className="text-[#ce9178]">&quot;2018-19&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Sr Eng&quot;</span>, <span className="text-[#9cdcfe]">co</span>: <span className="text-[#ce9178]">&quot;Mswipe&quot;</span>, <span className="text-[#9cdcfe]">yr</span>: <span className="text-[#ce9178]">&quot;2016-18&quot;</span>{'}'},</p>
      <p>];</p>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px]">
      <p><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">projects</span> = [</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;Key Ward&quot;</span>, <span className="text-[#9cdcfe]">desc</span>: <span className="text-[#ce9178]">&quot;AI Data Platform&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;Saarathi&quot;</span>, <span className="text-[#9cdcfe]">desc</span>: <span className="text-[#ce9178]">&quot;NBFC Lending&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;WiseYatra&quot;</span>, <span className="text-[#9cdcfe]">desc</span>: <span className="text-[#ce9178]">&quot;Travel Platform&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;Siloho&quot;</span>, <span className="text-[#9cdcfe]">desc</span>: <span className="text-[#ce9178]">&quot;AI Interior 3D&quot;</span>{'}'},</p>
      <p>  {'{'}<span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;ModelCraft&quot;</span>, <span className="text-[#9cdcfe]">stars</span>: <span className="text-[#b5cea8]">17</span>{'}'},</p>
      <p>];</p>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px]">
      <p>{'{'}</p>
      <p>  <span className="text-[#9cdcfe]">&quot;lang&quot;</span>: [<span className="text-[#ce9178]">&quot;Python&quot;</span>, <span className="text-[#ce9178]">&quot;TS&quot;</span>, <span className="text-[#ce9178]">&quot;JS&quot;</span>, <span className="text-[#ce9178]">&quot;SQL&quot;</span>],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;front&quot;</span>: [<span className="text-[#ce9178]">&quot;React&quot;</span>, <span className="text-[#ce9178]">&quot;Next&quot;</span>, <span className="text-[#ce9178]">&quot;Vue&quot;</span>, <span className="text-[#ce9178]">&quot;Three.js&quot;</span>],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;back&quot;</span>: [<span className="text-[#ce9178]">&quot;Django&quot;</span>, <span className="text-[#ce9178]">&quot;Flask&quot;</span>, <span className="text-[#ce9178]">&quot;Node&quot;</span>],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;db&quot;</span>: [<span className="text-[#ce9178]">&quot;Postgres&quot;</span>, <span className="text-[#ce9178]">&quot;Mongo&quot;</span>, <span className="text-[#ce9178]">&quot;Redis&quot;</span>],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;data&quot;</span>: [<span className="text-[#ce9178]">&quot;MLflow&quot;</span>, <span className="text-[#ce9178]">&quot;Spark&quot;</span>, <span className="text-[#ce9178]">&quot;Superset&quot;</span>],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;devops&quot;</span>: [<span className="text-[#ce9178]">&quot;Docker&quot;</span>, <span className="text-[#ce9178]">&quot;K8s&quot;</span>, <span className="text-[#ce9178]">&quot;GKE&quot;</span>]</p>
      <p>{'}'}</p>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="text-[10px] md:text-[12px] leading-[14px] md:leading-[18px]">
      <p><span className="text-[#d7ba7d]">.contact</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">email</span>: <span className="text-[#ce9178]">&quot;amanchandel4@gmail.com&quot;</span>;</p>
      <p>  <span className="text-[#9cdcfe]">phone</span>: <span className="text-[#ce9178]">&quot;+91 7905400369&quot;</span>;</p>
      <p>  <span className="text-[#9cdcfe]">loc</span>: <span className="text-[#ce9178]">&quot;Delhi, India&quot;</span>;</p>
      <p>{'}'}</p>
      <p><span className="text-[#d7ba7d]">.social</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">gh</span>: <a href="https://github.com/aman0x" className="text-[#4fc1ff]">&quot;github.com/aman0x&quot;</a>;</p>
      <p>  <span className="text-[#9cdcfe]">li</span>: <a href="https://linkedin.com/in/aman0x" className="text-[#4fc1ff]">&quot;linkedin.com/in/aman0x&quot;</a>;</p>
      <p>{'}'}</p>
      <p><span className="text-[#d7ba7d]">.status</span> {'{'} <span className="text-[#9cdcfe]">open</span>: <span className="text-[#569cd6]">true</span>; {'}'}</p>
    </div>
  );
}
