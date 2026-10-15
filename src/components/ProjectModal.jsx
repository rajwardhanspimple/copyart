import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Tag, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-950 border border-white/10 rounded-2xl overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-neutral-400">CASE STUDY //</span>
            <h2 className="text-xl font-medium text-white font-sans flex items-center gap-2">
              {project.title}
              <span className="text-xs text-neutral-500 font-mono">({project.chineseTitle})</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 font-sans">
          {/* Meta Information Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 font-mono text-xs">
            <div>
              <p className="text-neutral-500 flex items-center gap-1 mb-1"><Calendar className="w-3 h-3" /> Timeline</p>
              <p className="text-white font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-neutral-500 flex items-center gap-1 mb-1"><User className="w-3 h-3" /> Role</p>
              <p className="text-white font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-neutral-500 flex items-center gap-1 mb-1"><Layers className="w-3 h-3" /> Category</p>
              <p className="text-white font-medium">{project.category}</p>
            </div>
            <div>
              <p className="text-neutral-500 flex items-center gap-1 mb-1"><Tag className="w-3 h-3" /> Primary Tech</p>
              <p className="text-white font-medium">{project.tags[0]}</p>
            </div>
          </div>

          {/* Image 1 */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-neutral-900 p-4 sm:p-8 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[480px] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 max-w-2xl text-neutral-300 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-medium text-white font-sans">Project Overview & Engineering</h3>
            <p>{project.desc}</p>
            <p className="text-neutral-400 text-sm">
              Engineered to combine modern graphic precision with high runtime efficiency. Focuses on spatial layout algorithms, clean render pipelines, and zero-compromise UX details.
            </p>
          </div>

          {/* Image 2 (Secondary View if available) */}
          {project.secondaryImage && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500">Interface Details & Assets</h4>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-neutral-900 p-4 sm:p-8 flex items-center justify-center">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} detail view`}
                  className="w-full max-h-[420px] object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* External Action Button */}
          {project.externalUrl && (
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Visit Live Experience</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
