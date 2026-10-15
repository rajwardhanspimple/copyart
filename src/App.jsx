import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import StickerCanvas from './components/StickerCanvas.jsx';
import WorkGrid from './components/WorkGrid.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-200 flex flex-col font-sans selection:bg-neutral-800 selection:text-white relative">
      {/* Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <StickerCanvas />
        <WorkGrid onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
