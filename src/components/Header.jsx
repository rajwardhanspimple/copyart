import React from 'react';
import { ArrowUpRight, Github, Twitter } from 'lucide-react';

export default function Header({ onSelectProject }) {
  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
        {/* Brand Name & Status */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-mono font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            haoqi.design
          </a>
          <span className="hidden sm:inline text-xs text-neutral-500 font-mono">/
            Design Engineer
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-6 text-xs font-mono text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#stickers" className="hover:text-white transition-colors">Stickers</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a 
            href="https://twitter.com/wenhaoqi" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            Twitter
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
          <a 
            href="https://github.com/wenhaoqiasd" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            GitHub
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
        </nav>
      </div>
    </header>
  );
}
