import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-6 max-w-3xl">
          {/* Location & availability */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Design Engineer • Building Creative Tools</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight font-sans">
            Haoqi Wen <span className="text-neutral-500 font-normal text-2xl sm:text-4xl">(温浩琦)</span>
          </h1>

          {/* Core Bio */}
          <p className="text-lg sm:text-xl text-neutral-400 font-sans leading-relaxed">
            Designing and engineering tools for thought, typography, spatial interaction, and WebAssembly-powered canvas graphics. Formerly crafting design systems at Alibaba and Teambition.
          </p>

          {/* Capability badges */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-neutral-300">
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-white/10">Rust & Wasm</span>
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-white/10">React & Canvas</span>
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-white/10">Type Design</span>
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-white/10">Figma Plugin API (100k+ users)</span>
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-white/10">Design Systems</span>
          </div>

          {/* Quick jump */}
          <div className="pt-6">
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
            >
              <span>Explore selected projects</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
