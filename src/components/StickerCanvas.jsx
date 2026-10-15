import React, { useState, useRef } from 'react';
import { RefreshCw, Sparkles, Move } from 'lucide-react';

const initialStickers = [
  { id: 1, src: '/sticker_img/s_01.png', name: 'Creative Terminal', x: 40, y: 30, rotate: -6 },
  { id: 2, src: '/sticker_img/s_02.png', name: 'Pixel Cursor', x: 200, y: 50, rotate: 12 },
  { id: 3, src: '/sticker_img/s_03.png', name: 'Rust & Wasm', x: 380, y: 20, rotate: -4 },
  { id: 4, src: '/sticker_img/s_04.png', name: 'Alipan Cloud', x: 550, y: 70, rotate: 8 },
  { id: 5, src: '/sticker_img/s_05.png', name: 'Typeface Glyph', x: 70, y: 190, rotate: 15 },
  { id: 6, src: '/sticker_img/s_06.png', name: 'Teambition Task', x: 260, y: 180, rotate: -10 },
  { id: 7, src: '/sticker_img/s_07.png', name: 'Vector Path', x: 440, y: 170, rotate: 5 },
  { id: 8, src: '/sticker_img/s_08.png', name: 'Shore Icon', x: 620, y: 160, rotate: -12 },
  { id: 9, src: '/sticker_img/s_09.png', name: 'Figma Community', x: 120, y: 310, rotate: 8 },
  { id: 10, src: '/sticker_img/s_10.png', name: 'Darkside Plugin', x: 300, y: 300, rotate: -7 },
  { id: 11, src: '/sticker_img/s_11.png', name: 'Reunimos Space', x: 480, y: 310, rotate: 14 },
  { id: 12, src: '/sticker_img/s_12.png', name: 'Shanghai Figma', x: 650, y: 280, rotate: -3 },
];

export default function StickerCanvas() {
  const [stickers, setStickers] = useState(initialStickers);
  const [activeId, setActiveId] = useState(null);
  const [topZ, setTopZ] = useState(20);
  const dragRef = useRef(null);

  const handleMouseDown = (id, e) => {
    setActiveId(id);
    const newZ = topZ + 1;
    setTopZ(newZ);
    
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    
    setStickers((prev) =>
      prev.map((s) =>
        s.id === dragRef.current.id
          ? { ...s, x: s.x + dx, y: s.y + dy }
          : s
      )
    );
    
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    dragRef.current = null;
  };

  const resetStickers = () => {
    setStickers(initialStickers);
  };

  return (
    <section id="stickers" className="py-20 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            <span>INTERACTIVE STICKER PLAYGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-sans">
            Digital Artifacts & Ephemera
          </h2>
          <p className="text-sm text-neutral-400 font-sans mt-1">
            Drag and arrange stickers representing past projects, tool concepts, and community moments.
          </p>
        </div>

        <button
          onClick={resetStickers}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/20 transition-all self-start sm:self-auto"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset Canvas</span>
        </button>
      </div>

      {/* Interactive Drag Board */}
      <div className="max-w-5xl mx-auto px-6">
        <div 
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative h-[480px] w-full rounded-2xl bg-neutral-950/80 border border-white/10 dot-matrix overflow-hidden select-none cursor-default"
        >
          <div className="absolute top-4 left-4 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5 pointer-events-none">
            <Move className="w-3 h-3" /> Click & drag stickers across the canvas
          </div>

          {stickers.map((s) => (
            <div
              key={s.id}
              onMouseDown={(e) => handleMouseDown(s.id, e)}
              style={{
                transform: `translate3d(${s.x}px, ${s.y}px, 0px) rotate(${s.rotate}deg)`,
                zIndex: activeId === s.id ? topZ : 1,
              }}
              className="absolute cursor-grab active:cursor-grabbing transition-transform duration-75 hover:scale-105 group"
            >
              <img
                src={s.src}
                alt={s.name}
                draggable="false"
                className="w-24 sm:w-28 h-auto drop-shadow-xl pointer-events-none filter brightness-95 group-hover:brightness-105"
              />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-black/90 border border-white/10 text-[10px] font-mono text-neutral-300 pointer-events-none">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
