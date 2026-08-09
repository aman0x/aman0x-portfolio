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
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col font-mono text-sm">
      {/* Title Bar - Notepad++ style dark */}
      <div className="h-7 bg-[#3c3c3c] flex items-center px-2 border-b border-[#252526]">
        <div className="flex gap-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
        </div>
        <span className="text-[#cccccc] text-xs">aman0x - Notepad++</span>
        <div className="flex-1" />
        <button
          onClick={onToggleVersion}
          className="px-2 py-0.5 text-[10px] bg-[#6A9955] hover:bg-[#7ec07e] text-white rounded transition-colors"
        >
          Terminal Mode →
        </button>
      </div>

      {/* Menu Bar - Notepad++ style */}
      <div className="h-6 bg-[#2d2d2d] flex items-center px-1 text-[11px] text-[#cccccc] border-b border-[#404040]">
        {['File', 'Edit', 'Search', 'View', 'Encoding', 'Language', 'Settings', 'Tools', 'Macro', 'Run'].map(menu => (
          <span key={menu} className="px-2 py-0.5 hover:bg-[#094771] cursor-pointer">{menu}</span>
        ))}
      </div>

      {/* Toolbar - Notepad++ style icons */}
      <div className="h-7 bg-[#2d2d2d] flex items-center px-2 gap-1 border-b border-[#404040]">
        {['📄', '📂', '💾', '✂️', '📋', '📝', '↩️', '↪️', '🔍', '🔄'].map((icon, i) => (
          <button key={i} className="w-6 h-6 flex items-center justify-center hover:bg-[#094771] rounded text-[12px]">
            {icon}
          </button>
        ))}
        <div className="w-px h-4 bg-[#404040] mx-1" />
        <button className="w-6 h-6 flex items-center justify-center hover:bg-[#094771] rounded text-[12px]">▶️</button>
      </div>

      {/* Tab Bar - Notepad++ style tabs */}
      <div className="h-7 bg-[#1e1e1e] flex items-end border-b border-[#404040] overflow-x-auto">
        {files.map(file => (
          <button
            key={file.name}
            onClick={() => setActiveFile(file.name)}
            className={`h-6 flex items-center gap-1.5 px-3 text-[11px] border-t border-l border-r rounded-t transition-colors ${
              activeFile === file.name
                ? 'bg-[#1e1e1e] border-[#6A9955] text-[#cccccc]'
                : 'bg-[#2d2d2d] border-[#404040] text-[#808080] hover:text-[#cccccc]'
            }`}
          >
            <span>{file.icon}</span>
            <span>{file.name}</span>
            <span className="ml-1 hover:bg-[#404040] rounded px-0.5">×</span>
          </button>
        ))}
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Line Numbers - Notepad++ style */}
        <div className="w-12 bg-[#2d2d2d] border-r border-[#404040] text-right pr-2 pt-2 text-[#6A9955] text-[12px] select-none overflow-hidden">
          {Array.from({ length: getLineCount() }, (_, i) => (
            <div key={i} className="h-[18px] leading-[18px]">{i + 1}</div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto p-2">
          {getContent()}
        </div>
      </div>

      {/* Status Bar - Notepad++ style */}
      <div className="h-5 bg-[#007acc] flex items-center justify-between px-2 text-[10px] text-white">
        <div className="flex items-center gap-4">
          <span>length: 1,234</span>
          <span>lines: {getLineCount()}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln: 1</span>
          <span>Col: 1</span>
          <span>Sel: 0</span>
          <span>UTF-8</span>
          <span>Unix (LF)</span>
          <span>{activeFile.split('.').pop()?.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="text-[12px] leading-[18px]">
      <p><span className="text-[#6A9955]">// hello world !! Welcome to my portfolio</span></p>
      <p></p>
      <p><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;react&apos;</span>;</p>
      <p></p>
      <div className="flex flex-col md:flex-row gap-6 my-4">
        <DotImage src="/aman.jpg" width={100} height={100} dotSize={2} dotGap={2} color="#6A9955" />
        <div>
          <p className="text-4xl font-bold">
            <span className="text-[#dcdcaa]">Aman</span>
          </p>
          <p className="text-4xl font-bold">
            <span className="text-[#c586c0]">Chandel</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2 py-0.5 bg-[#264f78] text-[#4fc1ff] rounded text-[10px]">● Backend Engineer</span>
            <span className="px-2 py-0.5 bg-[#264f78] text-[#4fc1ff] rounded text-[10px]">● AI / ML Dev</span>
            <span className="px-2 py-0.5 bg-[#264f78] text-[#4fc1ff] rounded text-[10px]">● Data Scientist</span>
            <span className="px-2 py-0.5 bg-[#4d3d00] text-[#dcdcaa] rounded text-[10px]">● @ Cloudastra</span>
          </div>
        </div>
      </div>
      <p></p>
      <p><span className="text-[#6A9955]">Building in</span></p>
      <p></p>
      <p><span className="text-[#9cdcfe]">I live at the crossroads of </span><span className="text-[#4fc1ff]">backend engineering</span><span className="text-[#9cdcfe]">, </span><span className="text-[#4fc1ff]">AI/ML</span><span className="text-[#9cdcfe]">, and</span></p>
      <p><span className="text-[#4fc1ff]">data science</span><span className="text-[#9cdcfe]">. I build systems that are genuinely </span><span className="text-[#6A9955]">intelligent</span></p>
      <p><span className="text-[#6A9955]">and scalable</span><span className="text-[#9cdcfe]">.</span></p>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="text-[12px] leading-[18px] text-[#d4d4d4]">
      <p><span className="text-[#569cd6]"># About Me</span></p>
      <p></p>
      <p>11+ years of experience as a software developer and technology leader,</p>
      <p>with a strong track record of building and scaling commercially successful</p>
      <p>products from the ground up.</p>
      <p></p>
      <p><span className="text-[#569cd6]">## What I Do</span></p>
      <p></p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">**Full-Stack Development**</span>: React, Next.js, Vue.js, Django, Flask</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">**Backend Systems**</span>: API design, microservices, distributed systems</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">**Data Platforms**</span>: DLT pipelines, MLflow, Apache Superset</p>
      <p><span className="text-[#6A9955]">•</span> <span className="text-[#dcdcaa]">**3D & AI/ML**</span>: Blender integration, Three.js, computer vision</p>
      <p></p>
      <p><span className="text-[#569cd6]">## Current Focus</span></p>
      <p></p>
      <p>Building <span className="text-[#6A9955]">**ModelCraft V3**</span> - an AI-powered 3D design platform</p>
      <p>with real-time Blender ↔ Three.js synchronization.</p>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="text-[12px] leading-[18px]">
      <p><span className="text-[#c586c0]">interface</span> <span className="text-[#4ec9b0]">Experience</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">role</span>: <span className="text-[#4ec9b0]">string</span>;</p>
      <p>  <span className="text-[#9cdcfe]">company</span>: <span className="text-[#4ec9b0]">string</span>;</p>
      <p>  <span className="text-[#9cdcfe]">period</span>: <span className="text-[#4ec9b0]">string</span>;</p>
      <p>{'}'}</p>
      <p></p>
      <p><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">experiences</span>: <span className="text-[#4ec9b0]">Experience</span>[] = [</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Senior Full Stack Engineer&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">company</span>: <span className="text-[#ce9178]">&quot;Cloudastra&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">period</span>: <span className="text-[#ce9178]">&quot;Nov 2023 - Present&quot;</span></p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;VP Technology&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">company</span>: <span className="text-[#ce9178]">&quot;Siloho&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">period</span>: <span className="text-[#ce9178]">&quot;Sep 2021 - Oct 2023&quot;</span></p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;VP Technology&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">company</span>: <span className="text-[#ce9178]">&quot;ftcash&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">period</span>: <span className="text-[#ce9178]">&quot;Oct 2019 - Sep 2021&quot;</span></p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Senior Software Developer&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">company</span>: <span className="text-[#ce9178]">&quot;Eros Now&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">period</span>: <span className="text-[#ce9178]">&quot;Nov 2018 - Oct 2019&quot;</span></p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">&quot;Senior Software Engineer&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">company</span>: <span className="text-[#ce9178]">&quot;Mswipe&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">period</span>: <span className="text-[#ce9178]">&quot;Jan 2016 - Oct 2018&quot;</span></p>
      <p>  {'}'}</p>
      <p>];</p>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="text-[12px] leading-[18px]">
      <p><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">projects</span> = [</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;ModelCraft V3&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">description</span>: <span className="text-[#ce9178]">&quot;AI-powered 3D design platform&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">stars</span>: <span className="text-[#b5cea8]">17</span>,</p>
      <p>    <span className="text-[#9cdcfe]">tech</span>: [<span className="text-[#ce9178]">&quot;React&quot;</span>, <span className="text-[#ce9178]">&quot;Three.js&quot;</span>, <span className="text-[#ce9178]">&quot;Blender&quot;</span>, <span className="text-[#ce9178]">&quot;Python&quot;</span>]</p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;Saarathi Finance&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">description</span>: <span className="text-[#ce9178]">&quot;NBFC Digital Lending Platform&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">tech</span>: [<span className="text-[#ce9178]">&quot;Django&quot;</span>, <span className="text-[#ce9178]">&quot;Temporal.io&quot;</span>, <span className="text-[#ce9178]">&quot;PostgreSQL&quot;</span>]</p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;WiseYatra&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">description</span>: <span className="text-[#ce9178]">&quot;Travel Booking Platform&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">tech</span>: [<span className="text-[#ce9178]">&quot;Next.js&quot;</span>, <span className="text-[#ce9178]">&quot;Zustand&quot;</span>, <span className="text-[#ce9178]">&quot;Google Maps&quot;</span>]</p>
      <p>  {'}'},</p>
      <p>  {'{'}</p>
      <p>    <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">&quot;blender-websocket&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">description</span>: <span className="text-[#ce9178]">&quot;Real-time Blender communication&quot;</span>,</p>
      <p>    <span className="text-[#9cdcfe]">stars</span>: <span className="text-[#b5cea8]">9</span>,</p>
      <p>    <span className="text-[#9cdcfe]">tech</span>: [<span className="text-[#ce9178]">&quot;Python&quot;</span>, <span className="text-[#ce9178]">&quot;WebSocket&quot;</span>]</p>
      <p>  {'}'}</p>
      <p>];</p>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="text-[12px] leading-[18px]">
      <p>{'{'}</p>
      <p>  <span className="text-[#9cdcfe]">&quot;languages&quot;</span>: [</p>
      <p>    <span className="text-[#ce9178]">&quot;Python&quot;</span>, <span className="text-[#ce9178]">&quot;TypeScript&quot;</span>, <span className="text-[#ce9178]">&quot;JavaScript&quot;</span>, <span className="text-[#ce9178]">&quot;SQL&quot;</span></p>
      <p>  ],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;frontend&quot;</span>: [</p>
      <p>    <span className="text-[#ce9178]">&quot;React&quot;</span>, <span className="text-[#ce9178]">&quot;Next.js&quot;</span>, <span className="text-[#ce9178]">&quot;Vue.js&quot;</span>, <span className="text-[#ce9178]">&quot;Three.js&quot;</span></p>
      <p>  ],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;backend&quot;</span>: [</p>
      <p>    <span className="text-[#ce9178]">&quot;Django&quot;</span>, <span className="text-[#ce9178]">&quot;Flask&quot;</span>, <span className="text-[#ce9178]">&quot;Node.js&quot;</span></p>
      <p>  ],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;database&quot;</span>: [</p>
      <p>    <span className="text-[#ce9178]">&quot;PostgreSQL&quot;</span>, <span className="text-[#ce9178]">&quot;MongoDB&quot;</span>, <span className="text-[#ce9178]">&quot;Redis&quot;</span></p>
      <p>  ],</p>
      <p>  <span className="text-[#9cdcfe]">&quot;devops&quot;</span>: [</p>
      <p>    <span className="text-[#ce9178]">&quot;Docker&quot;</span>, <span className="text-[#ce9178]">&quot;Kubernetes&quot;</span>, <span className="text-[#ce9178]">&quot;GKE&quot;</span>, <span className="text-[#ce9178]">&quot;AWS&quot;</span></p>
      <p>  ]</p>
      <p>{'}'}</p>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="text-[12px] leading-[18px]">
      <p><span className="text-[#6A9955]">/* Contact Information */</span></p>
      <p></p>
      <p><span className="text-[#d7ba7d]">.contact</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">email</span>: <span className="text-[#ce9178]">&quot;amanchandel4@gmail.com&quot;</span>;</p>
      <p>  <span className="text-[#9cdcfe]">phone</span>: <span className="text-[#ce9178]">&quot;+91 7905400369&quot;</span>;</p>
      <p>  <span className="text-[#9cdcfe]">location</span>: <span className="text-[#ce9178]">&quot;Delhi, India&quot;</span>;</p>
      <p>{'}'}</p>
      <p></p>
      <p><span className="text-[#d7ba7d]">.social</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">github</span>: <a href="https://github.com/aman0x" className="text-[#4fc1ff] hover:underline">&quot;github.com/aman0x&quot;</a>;</p>
      <p>  <span className="text-[#9cdcfe]">linkedin</span>: <a href="https://linkedin.com/in/aman0x" className="text-[#4fc1ff] hover:underline">&quot;linkedin.com/in/aman0x&quot;</a>;</p>
      <p>  <span className="text-[#9cdcfe]">website</span>: <a href="https://aman0x.com" className="text-[#4fc1ff] hover:underline">&quot;aman0x.com&quot;</a>;</p>
      <p>{'}'}</p>
      <p></p>
      <p><span className="text-[#d7ba7d]">.status</span> {'{'}</p>
      <p>  <span className="text-[#9cdcfe]">open-to-work</span>: <span className="text-[#569cd6]">true</span>;</p>
      <p>  <span className="text-[#6A9955]">/* VP/Director roles, Technical Co-founder, AI/ML Consulting */</span></p>
      <p>{'}'}</p>
    </div>
  );
}
