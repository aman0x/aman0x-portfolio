'use client';

import { useState } from 'react';
import DotImage from './DotImage';

interface FileItem {
  name: string;
  icon: string;
  color: string;
  content: React.ReactNode;
}

const files: Record<string, FileItem> = {
  'home.tsx': {
    name: 'home.tsx',
    icon: '⚛',
    color: '#61dafb',
    content: <HomeContent />,
  },
  'about.md': {
    name: 'about.md',
    icon: '📄',
    color: '#519aba',
    content: <AboutContent />,
  },
  'experience.ts': {
    name: 'experience.ts',
    icon: '📘',
    color: '#3178c6',
    content: <ExperienceContent />,
  },
  'projects.js': {
    name: 'projects.js',
    icon: '📜',
    color: '#f7df1e',
    content: <ProjectsContent />,
  },
  'skills.json': {
    name: 'skills.json',
    icon: '{ }',
    color: '#cbcb41',
    content: <SkillsContent />,
  },
  'contact.css': {
    name: 'contact.css',
    icon: '#',
    color: '#563d7c',
    content: <ContactContent />,
  },
};

function HomeContent() {
  return (
    <div className="p-6 font-mono text-sm">
      <p className="text-[#6A9955]">// hello world !! Welcome to my portfolio</p>
      <br />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <DotImage src="/aman.jpg" width={120} height={120} dotSize={2} dotGap={2} color="#3fb950" />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-[#c9d1d9]">Aman</span>
            <br />
            <span className="text-[#ff79c6]">Chandel</span>
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-[#238636]/20 text-[#3fb950] rounded-full text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-[#3fb950] rounded-full"></span>
              Full Stack Engineer
            </span>
            <span className="px-3 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded-full text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-[#58a6ff] rounded-full"></span>
              AI / ML Dev
            </span>
            <span className="px-3 py-1 bg-[#8957e5]/20 text-[#bc8cff] rounded-full text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-[#bc8cff] rounded-full"></span>
              VP Technology
            </span>
            <span className="px-3 py-1 bg-[#f78166]/20 text-[#ffa198] rounded-full text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-[#ffa198] rounded-full"></span>
              @ Cloudastra
            </span>
          </div>
          <p className="mt-6 text-[#8b949e] max-w-lg">
            Building in{' '}
            <span className="text-[#ff79c6]">11+ years</span> of experience.
            I live at the crossroads of{' '}
            <span className="text-[#79c0ff]">backend engineering</span>,{' '}
            <span className="text-[#79c0ff]">AI/ML</span>, and{' '}
            <span className="text-[#79c0ff]">data platforms</span>.
            I build systems that are genuinely{' '}
            <span className="text-[#7ee787]">intelligent and scalable</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="p-6 font-mono text-sm text-[#c9d1d9]">
      <p className="text-[#79c0ff]"># About Me</p>
      <br />
      <p className="text-[#8b949e]">
        11+ years of experience as a software developer and technology leader,
        with a strong track record of building and scaling commercially successful
        products from the ground up.
      </p>
      <br />
      <p className="text-[#79c0ff]">## What I Do</p>
      <br />
      <p>• <span className="text-[#ffa657]">Full-Stack Development</span>: React, Next.js, Vue.js, Django, Flask</p>
      <p>• <span className="text-[#ffa657]">Backend Systems</span>: API design, microservices, distributed systems</p>
      <p>• <span className="text-[#ffa657]">Data Platforms</span>: DLT pipelines, MLflow, Apache Superset</p>
      <p>• <span className="text-[#ffa657]">3D & AI/ML</span>: Blender integration, Three.js, computer vision</p>
      <br />
      <p className="text-[#79c0ff]">## Current Focus</p>
      <br />
      <p className="text-[#8b949e]">
        Building <span className="text-[#7ee787]">ModelCraft V3</span> - an AI-powered 3D design platform
        with real-time Blender ↔ Three.js synchronization.
      </p>
    </div>
  );
}

function ExperienceContent() {
  const experiences = [
    { role: 'Senior Full Stack Engineer', company: 'Cloudastra', period: 'Nov 2023 - Present', location: 'Noida', color: '#3fb950' },
    { role: 'VP Technology', company: 'Siloho', period: 'Sep 2021 - Oct 2023', location: 'Goa', color: '#bc8cff' },
    { role: 'VP Technology', company: 'ftcash', period: 'Oct 2019 - Sep 2021', location: 'Mumbai', color: '#f0883e' },
    { role: 'Senior Software Developer', company: 'Eros Now', period: 'Nov 2018 - Oct 2019', location: 'Mumbai', color: '#ff7b72' },
    { role: 'Senior Software Engineer', company: 'Mswipe', period: 'Jan 2016 - Oct 2018', location: 'Mumbai', color: '#8b949e' },
  ];

  return (
    <div className="p-6 font-mono text-sm">
      <p className="text-[#ff79c6]">interface</p>
      <p><span className="text-[#79c0ff]">Experience</span> {'{'}</p>
      {experiences.map((exp, i) => (
        <div key={i} className="ml-4 my-3 border-l-2 pl-4" style={{ borderColor: exp.color }}>
          <p><span className="text-[#ffa657]">role</span>: <span className="text-[#a5d6ff]">&quot;{exp.role}&quot;</span></p>
          <p><span className="text-[#ffa657]">company</span>: <span className="text-[#a5d6ff]">&quot;{exp.company}&quot;</span></p>
          <p><span className="text-[#ffa657]">period</span>: <span className="text-[#a5d6ff]">&quot;{exp.period}&quot;</span></p>
          <p><span className="text-[#ffa657]">location</span>: <span className="text-[#a5d6ff]">&quot;{exp.location}&quot;</span></p>
        </div>
      ))}
      <p>{'}'}</p>
    </div>
  );
}

function ProjectsContent() {
  const projects = [
    { name: 'ModelCraft V3', desc: 'AI-powered 3D design platform', stars: 17, color: '#3fb950' },
    { name: 'Saarathi Finance', desc: 'NBFC Digital Lending Platform', tech: 'Django, Temporal.io', color: '#58a6ff' },
    { name: 'WiseYatra', desc: 'Travel Booking Platform', tech: 'Next.js, Zustand', color: '#bc8cff' },
    { name: 'blender-websocket', desc: 'Real-time Blender communication', stars: 9, color: '#f0883e' },
  ];

  return (
    <div className="p-6 font-mono text-sm">
      <p className="text-[#ff79c6]">const</p>
      <p><span className="text-[#79c0ff]">projects</span> = [</p>
      {projects.map((proj, i) => (
        <div key={i} className="ml-4 my-3 p-3 border rounded" style={{ borderColor: proj.color + '40' }}>
          <p style={{ color: proj.color }}>{proj.name} {proj.stars && <span className="text-[#f0883e]">★ {proj.stars}</span>}</p>
          <p className="text-[#8b949e] text-xs">{proj.desc}</p>
          {proj.tech && <p className="text-[#6e7681] text-xs mt-1">{proj.tech}</p>}
        </div>
      ))}
      <p>];</p>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="p-6 font-mono text-sm">
      <p>{'{'}</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;languages&quot;</span>: [<span className="text-[#a5d6ff]">&quot;Python&quot;</span>, <span className="text-[#a5d6ff]">&quot;TypeScript&quot;</span>, <span className="text-[#a5d6ff]">&quot;JavaScript&quot;</span>, <span className="text-[#a5d6ff]">&quot;SQL&quot;</span>],</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;frontend&quot;</span>: [<span className="text-[#a5d6ff]">&quot;React&quot;</span>, <span className="text-[#a5d6ff]">&quot;Next.js&quot;</span>, <span className="text-[#a5d6ff]">&quot;Vue.js&quot;</span>, <span className="text-[#a5d6ff]">&quot;Three.js&quot;</span>],</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;backend&quot;</span>: [<span className="text-[#a5d6ff]">&quot;Django&quot;</span>, <span className="text-[#a5d6ff]">&quot;Flask&quot;</span>, <span className="text-[#a5d6ff]">&quot;Node.js&quot;</span>],</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;database&quot;</span>: [<span className="text-[#a5d6ff]">&quot;PostgreSQL&quot;</span>, <span className="text-[#a5d6ff]">&quot;MongoDB&quot;</span>, <span className="text-[#a5d6ff]">&quot;Redis&quot;</span>],</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;devops&quot;</span>: [<span className="text-[#a5d6ff]">&quot;Docker&quot;</span>, <span className="text-[#a5d6ff]">&quot;Kubernetes&quot;</span>, <span className="text-[#a5d6ff]">&quot;GKE&quot;</span>, <span className="text-[#a5d6ff]">&quot;AWS&quot;</span>],</p>
      <p className="ml-4"><span className="text-[#79c0ff]">&quot;data&quot;</span>: [<span className="text-[#a5d6ff]">&quot;MLflow&quot;</span>, <span className="text-[#a5d6ff]">&quot;Apache Superset&quot;</span>, <span className="text-[#a5d6ff]">&quot;Spark&quot;</span>]</p>
      <p>{'}'}</p>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="p-6 font-mono text-sm">
      <p className="text-[#6A9955]">/* Contact Information */</p>
      <br />
      <p><span className="text-[#9cdcfe]">.email</span> {'{'}</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">content</span>: <span className="text-[#ce9178]">&quot;amanchandel4@gmail.com&quot;</span>;</p>
      <p>{'}'}</p>
      <br />
      <p><span className="text-[#9cdcfe]">.phone</span> {'{'}</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">content</span>: <span className="text-[#ce9178]">&quot;+91 7905400369&quot;</span>;</p>
      <p>{'}'}</p>
      <br />
      <p><span className="text-[#9cdcfe]">.location</span> {'{'}</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">content</span>: <span className="text-[#ce9178]">&quot;Delhi, India&quot;</span>;</p>
      <p>{'}'}</p>
      <br />
      <p><span className="text-[#9cdcfe]">.social</span> {'{'}</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">github</span>: <a href="https://github.com/aman0x" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">&quot;github.com/aman0x&quot;</a>;</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">linkedin</span>: <a href="https://linkedin.com/in/aman0x" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">&quot;linkedin.com/in/aman0x&quot;</a>;</p>
      <p>{'}'}</p>
      <br />
      <p><span className="text-[#9cdcfe]">.status</span> {'{'}</p>
      <p className="ml-4"><span className="text-[#9cdcfe]">hiring</span>: <span className="text-[#3fb950]">true</span>;</p>
      <p className="ml-4"><span className="text-[#6A9955]">/* Open to VP/Director roles, Technical Co-founder */</span></p>
      <p>{'}'}</p>
    </div>
  );
}

interface VSCodeLayoutProps {
  onToggleVersion: () => void;
}

export default function VSCodeLayout({ onToggleVersion }: VSCodeLayoutProps) {
  const [activeFile, setActiveFile] = useState('home.tsx');
  const [openTabs, setOpenTabs] = useState(['home.tsx']);

  const openFile = (filename: string) => {
    setActiveFile(filename);
    if (!openTabs.includes(filename)) {
      setOpenTabs([...openTabs, filename]);
    }
  };

  const closeTab = (filename: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== filename);
    setOpenTabs(newTabs);
    if (activeFile === filename && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    }
  };

  const fileIcons: Record<string, { icon: string; color: string }> = {
    'home.tsx': { icon: '⚛', color: '#61dafb' },
    'about.md': { icon: '📝', color: '#519aba' },
    'experience.ts': { icon: '📘', color: '#3178c6' },
    'projects.js': { icon: '📜', color: '#f7df1e' },
    'skills.json': { icon: '{ }', color: '#cbcb41' },
    'contact.css': { icon: '#', color: '#563d7c' },
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col text-[#cccccc] font-mono text-sm">
      {/* Title Bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center justify-between px-2 border-b border-[#252526]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#cccccc]/70">
          <span>aman-chandel : portfolio</span>
          <span className="bg-[#252526] px-2 py-0.5 rounded text-[10px]">Ctrl P</span>
        </div>
        <button
          onClick={onToggleVersion}
          className="px-2 py-0.5 text-xs bg-[#0e639c] hover:bg-[#1177bb] rounded transition-colors"
        >
          Terminal Mode →
        </button>
      </div>

      {/* Menu Bar */}
      <div className="h-7 bg-[#3c3c3c] flex items-center px-2 gap-4 text-xs border-b border-[#252526]">
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">File</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">Edit</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">View</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">Go</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">Run</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">Terminal</span>
        <span className="hover:bg-[#505050] px-2 py-1 rounded cursor-pointer">Help</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 border-r border-[#252526]">
          <div className="w-10 h-10 flex items-center justify-center text-[#cccccc] hover:text-white cursor-pointer border-l-2 border-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"/>
            </svg>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-[#858585] hover:text-white cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.25 0a8.25 8.25 0 00-6.18 13.72L1 22.88l1.12 1.12 8.05-9.12A8.251 8.251 0 1015.25.01V0zm0 15a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5z"/>
            </svg>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-[#858585] hover:text-white cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.007 8.222A3.738 3.738 0 0015.045 5.2a3.737 3.737 0 00-6.09 0A3.738 3.738 0 003 8.222a3.738 3.738 0 001.91 6.39A3.737 3.737 0 008.988 18.8a3.737 3.737 0 006.024 0 3.738 3.738 0 004.078-4.188 3.738 3.738 0 001.917-6.39zm-12.6 8.463a2.238 2.238 0 01-2.236-2.236c0-1.068.756-1.96 1.763-2.175l.112.066a4.713 4.713 0 002.612.788h.094v1.121a2.238 2.238 0 01-2.345 2.436zm4.831-4.356h-.476a3.214 3.214 0 01-1.782-.537l-.117-.077a3.214 3.214 0 01-1.423-2.667V8.23a3.214 3.214 0 013.214-3.214 3.214 3.214 0 013.214 3.214v.818a3.214 3.214 0 01-2.63 3.066z"/>
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-56 bg-[#252526] flex flex-col border-r border-[#1e1e1e]">
          <div className="h-8 flex items-center px-4 text-[11px] text-[#bbbbbb] uppercase tracking-wider">
            Explorer
          </div>
          <div className="px-2">
            <div className="flex items-center gap-1 py-1 text-[11px] text-[#cccccc] uppercase tracking-wider">
              <span>▼</span> Portfolio
            </div>
            <div className="ml-4">
              {Object.entries(files).map(([filename, file]) => (
                <div
                  key={filename}
                  onClick={() => openFile(filename)}
                  className={`flex items-center gap-2 py-1 px-2 cursor-pointer rounded text-[13px] ${
                    activeFile === filename ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'
                  }`}
                >
                  <span style={{ color: fileIcons[filename]?.color }}>{fileIcons[filename]?.icon}</span>
                  <span>{filename}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e]">
          {/* Tabs */}
          <div className="h-9 bg-[#252526] flex items-end border-b border-[#1e1e1e]">
            {openTabs.map(tab => (
              <div
                key={tab}
                onClick={() => setActiveFile(tab)}
                className={`h-8 flex items-center gap-2 px-3 cursor-pointer border-r border-[#1e1e1e] ${
                  activeFile === tab ? 'bg-[#1e1e1e] border-t-2 border-t-[#0078d4]' : 'bg-[#2d2d2d]'
                }`}
              >
                <span style={{ color: fileIcons[tab]?.color }} className="text-xs">{fileIcons[tab]?.icon}</span>
                <span className="text-[13px]">{tab}</span>
                <button
                  onClick={(e) => closeTab(tab, e)}
                  className="ml-1 hover:bg-[#505050] rounded p-0.5 text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="h-6 bg-[#1e1e1e] flex items-center px-4 text-[12px] text-[#8b949e] border-b border-[#252526]">
            <span>aman-chandel</span>
            <span className="mx-1">›</span>
            <span>src</span>
            <span className="mx-1">›</span>
            <span className="text-[#cccccc]">{activeFile}</span>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto">
            <div className="flex">
              {/* Line Numbers */}
              <div className="w-12 text-right pr-4 pt-6 text-[#6e7681] text-[13px] select-none">
                {Array.from({ length: 50 }, (_, i) => (
                  <div key={i} className="h-5">{i + 1}</div>
                ))}
              </div>
              {/* Content */}
              <div className="flex-1">
                {files[activeFile]?.content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-[12px] text-white">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span>⎇</span> main
          </span>
          <span>↻ 1 ↑ +3</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
          <span>Prettier</span>
          <span>🔔 Aman&apos;s Portfolio</span>
        </div>
      </div>
    </div>
  );
}
