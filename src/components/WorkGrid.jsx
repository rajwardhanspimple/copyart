import React, { useState } from 'react';
import { ArrowUpRight, Layers, Eye } from 'lucide-react';

export const projects = [
  {
    id: 'reunimos',
    title: 'Reunimos',
    chineseTitle: '空间协同与数字聚会',
    category: 'Tools & Systems',
    year: '2023 - Present',
    role: 'Creator & Lead Engineer',
    desc: 'An infinite spatial canvas for ideas, casual remote gatherings, and creative collaboration. Built with WebGL, WebSockets, and real-time multiplayer cursor synchronization.',
    image: '/work/reunimos01.png',
    secondaryImage: '/work/reunimos02.png',
    tags: ['WebGL', 'TypeScript', 'Realtime', 'Canvas Engine'],
    externalUrl: 'https://reunimos.cc'
  },
  {
    id: 'inspire_mono',
    title: 'Inspire Mono',
    chineseTitle: '为程序员与设计师打造的等宽字体',
    category: 'Typography',
    year: '2023',
    role: 'Type Designer',
    desc: 'A crafted monospaced programming typeface balancing optical symmetry, code clarity, and distinctive ligature aesthetics across code editors.',
    image: '/work/inspire_mono_01.png',
    secondaryImage: '/work/inspire_mono_02.png',
    tags: ['Glyphs', 'Typography', 'OpenType', 'Coding Font'],
    externalUrl: null
  },
  {
    id: 'wasm_design_utils',
    title: 'Wasm Design Utils',
    chineseTitle: '高性能 Rust 矢量计算库',
    category: 'Tools & Systems',
    year: '2023',
    role: 'Systems Engineer',
    desc: 'A high-performance vector graphics and geometry algorithm library written in Rust and compiled to WebAssembly for browser-based CAD and design tools.',
    image: '/work/wasm01.png',
    secondaryImage: '/work/wasm02.png',
    tags: ['Rust', 'WebAssembly', 'Geometry', 'Bezier Maths'],
    externalUrl: null
  },
  {
    id: 'figma_plugins',
    title: 'Vector Symbols & Darkside',
    chineseTitle: 'Figma 社区流行设计工具',
    category: 'Plugins',
    year: '2021 - 2023',
    role: 'Plugin Developer',
    desc: 'Community plugins empowering over 100,000 global designers with automated dark mode conversion, SVGs to components, and vector asset generation.',
    image: '/work/vs01.png',
    secondaryImage: '/work/ds01.png',
    tags: ['Figma Plugin API', 'TypeScript', '100k+ Designers'],
    externalUrl: 'https://www.figma.com/community/plugin/1255914175202017737/vectorsymbols'
  },
  {
    id: 'adrive',
    title: 'aDrive (阿里云盘)',
    chineseTitle: '个人云存储产品设计体系',
    category: 'Tools & Systems',
    year: '2020 - 2022',
    role: 'Staff Product Designer',
    desc: 'Led the multi-platform UI/UX architecture and cross-platform design token system for Alibaba cloud personal storage, serving tens of millions of daily users.',
    image: '/work/ali01.png',
    secondaryImage: '/work/ali02.png',
    tags: ['Alibaba', 'Design Systems', 'Desktop & Mobile'],
    externalUrl: 'https://www.alipan.com/'
  },
  {
    id: 'shore_icon',
    title: 'Shore Icon System',
    chineseTitle: '企业级图标几何规范',
    category: 'Typography',
    year: '2020',
    role: 'Iconographer & Designer',
    desc: 'A unified enterprise icon system built on a 24px harmonic grid with strict optical weight distribution and automated SVG export pipelines.',
    image: '/work/si.png',
    secondaryImage: '/work/si02.png',
    tags: ['Iconography', 'Grid Geometry', 'Enterprise'],
    externalUrl: null
  },
  {
    id: 'teambition',
    title: 'Teambition',
    chineseTitle: '团队协同套件界面升级',
    category: 'Tools & Systems',
    year: '2019 - 2020',
    role: 'UI/UX Designer',
    desc: 'Redesigned the project management, calendar, and task tracking workflows for agile engineering and design teams.',
    image: '/work/tt01.png',
    secondaryImage: '/work/tt02.png',
    tags: ['Collaboration', 'Enterprise SaaS', 'Alibaba Cloud'],
    externalUrl: 'https://www.teambition.com/'
  }
];

export default function WorkGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tools & Systems', 'Typography', 'Plugins'];

  const filtered = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-20 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
              <Layers className="w-3.5 h-3.5 text-neutral-400" />
              <span>SELECTED WORKS (2019 — 2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-sans">
              Projects & Case Studies
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item)}
              className="group cursor-pointer rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/25 transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Box */}
              <div className="relative h-64 sm:h-72 bg-neutral-900 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                  <span className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/20 flex items-center gap-1.5 backdrop-blur-md">
                    <Eye className="w-3.5 h-3.5" /> Inspect Deep-Dive
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-3 font-sans">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{item.category}</span>
                  <span>{item.year}</span>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white group-hover:text-neutral-200 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">{item.chineseTitle}</p>
                </div>

                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[11px] font-mono text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
