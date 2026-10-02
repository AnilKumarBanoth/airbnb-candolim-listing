import React, { useState, useRef, useEffect } from 'react';
import { X, Share2, Heart, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react';

export default function PhotoTourModal({ isOpen, onClose, categories, onPhotoClick, onShareClick, isSaved, onSaveToggle }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveCategory(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToCategory = (idx) => {
    setActiveCategory(idx);
    const el = document.getElementById(`photo-cat-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScroll = () => {
    if (!contentRef.current) return;
    const sections = categories.map((_, i) => document.getElementById(`photo-cat-${i}`));
    const scrollTop = contentRef.current.scrollTop;
    let current = 0;
    sections.forEach((el, i) => {
      if (el && el.offsetTop - 120 <= scrollTop) current = i;
    });
    setActiveCategory(current);
  };

  if (!isOpen || !categories?.length) return null;

  const allPhotos = categories.flatMap(cat => cat.photos);
  const totalPhotos = allPhotos.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 glass-dark border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200"
            aria-label="Close photo tour"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-white font-bold text-base leading-none">Photo Tour</h2>
            <p className="text-white/50 text-xs mt-0.5">{totalPhotos} photos · 9 spaces</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 glass-dark border border-white/10 text-white/80 hover:text-white px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 hover:bg-white/10"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            onClick={onSaveToggle}
            className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${
              isSaved ? 'bg-brand-500/20 border border-brand-400/30 text-white' : 'glass-dark border border-white/10 text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-brand-400 text-brand-400' : ''}`} />
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>

      {/* ── Category Pills Scroller ── */}
      <div className="shrink-0 px-6 py-3 border-b border-white/[0.08] overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 w-max">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(idx)}
              className={`whitespace-nowrap px-4 py-2 rounded-pill text-sm font-semibold transition-all duration-200 ${
                idx === activeCategory
                  ? 'bg-white text-black shadow-md scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10'
              }`}
            >
              {cat.emoji || '📷'} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Two-Column Layout ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left: Category Sidebar */}
        <div className="hidden lg:flex flex-col w-56 xl:w-64 border-r border-white/[0.08] overflow-y-auto no-scrollbar py-4 shrink-0">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(idx)}
              className={`flex items-center justify-between px-5 py-3 text-left transition-all duration-200 rounded-xl mx-2 mb-1 group ${
                idx === activeCategory
                  ? 'bg-white/15 text-white'
                  : 'text-white/50 hover:bg-white/8 hover:text-white/80'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-lg shrink-0">{cat.emoji || '📷'}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug truncate">{cat.name}</p>
                  <p className="text-xs text-white/40">{cat.photos.length} photos</p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${idx === activeCategory ? 'translate-x-0.5' : ''}`} />
            </button>
          ))}
        </div>

        {/* Right: Scrollable Photo Grid */}
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto overscroll-contain px-6 pt-6 pb-12 space-y-12"
        >
          {categories.map((cat, catIdx) => (
            <section key={cat.name} id={`photo-cat-${catIdx}`} className="scroll-mt-4">
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.emoji || '📷'}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                  <p className="text-white/40 text-xs">{cat.photos.length} photos</p>
                </div>
              </div>

              {/* Masonry-style grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {cat.photos.map((photo, photoIdx) => (
                  <div
                    key={photo.id}
                    onClick={() => onPhotoClick(photo)}
                    className={`relative overflow-hidden cursor-pointer group bg-white/5 rounded-2xl photo-hover ${
                      photoIdx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                      <div className="glass-dark border border-white/15 px-3 py-2 rounded-xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-200">
                        <Maximize2 className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-semibold">View</span>
                      </div>
                    </div>

                    {/* Photo title badge on hover */}
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="glass-dark rounded-lg px-2 py-1">
                        <p className="text-white text-xs font-medium truncate">{photo.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
