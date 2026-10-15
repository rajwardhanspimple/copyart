import React from 'react';
import { Mail, ArrowUpRight, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-[#09090b] font-sans">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Contact Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-400">GET IN TOUCH</span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
              Let's craft something memorable.
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-md">
              Always open to conversations around tool design, graphics engineering, custom typefaces, or new collaborations.
            </p>
          </div>

          <a
            href="mailto:curiosity.wen@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all shadow-lg self-start sm:self-auto flex-shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>curiosity.wen@gmail.com</span>
          </a>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 pt-6 border-t border-white/5">
          <p>© 2026 Haoqi Wen. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/wenhaoqi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Twitter</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.figma.com/@wenhaoqi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Figma</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/wenhaoqiasd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
