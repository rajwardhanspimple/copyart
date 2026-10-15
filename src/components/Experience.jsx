import React from 'react';
import { Mic, Briefcase, ArrowUpRight } from 'lucide-react';

const talks = [
  {
    title: 'See, Hear, Touch: Multi-Sensory Design in Digital Tools',
    event: 'Figma Shanghai Community',
    date: 'Shanghai, 2023',
    link: 'https://friends.figma.com/events/details/figma-shanghai-presents-see-hear-touch/'
  },
  {
    title: 'Design Systems at Scale: From Tokens to WebAssembly',
    event: 'Figma Shanghai Design Conference',
    date: 'Shanghai, 2022',
    link: 'https://friends.figma.com/events/details/figma-shanghai-presents-design-system/'
  }
];

const history = [
  {
    role: 'Independent Design Engineer',
    company: 'Reunimos & Creative Tools',
    period: '2023 — Present',
    desc: 'Researching and building spatial canvas collaboration systems, custom typography (Inspire Mono), and WebAssembly vector utilities.'
  },
  {
    role: 'Staff Product Designer & Design Engineer',
    company: 'Alibaba Group (阿里云盘 / aDrive)',
    period: '2020 — 2022',
    desc: 'Led cross-platform design token architecture and core mobile/web experiences for tens of millions of users.'
  },
  {
    role: 'Product Designer',
    company: 'Teambition',
    period: '2018 — 2020',
    desc: 'Crafted enterprise project management, calendar, and task tracking interfaces prior to and following Alibaba acquisition.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-white/5 font-sans">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Speaking & Talks */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <Mic className="w-3.5 h-3.5 text-neutral-400" />
            <span>COMMUNITY & TALKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-8 font-sans">
            Speaking & Presentations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talks.map((talk, idx) => (
              <a
                key={idx}
                href={talk.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                    <span>{talk.event}</span>
                    <span className="text-neutral-400">{talk.date}</span>
                  </div>
                  <h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors leading-snug">
                    {talk.title}
                  </h3>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>View event details</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-8 font-sans">
            Experience & Trajectory
          </h2>

          <div className="space-y-6">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-950/60 border border-white/5 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                  <span className="text-white font-medium text-sm font-sans">{item.role} • <span className="text-neutral-400">{item.company}</span></span>
                  <span className="text-neutral-500">{item.period}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
