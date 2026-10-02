import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Heart, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, photos, currentIndex, setCurrentIndex, onShareClick, isSaved, onSaveToggle }) {
  const timeoutRef = useRef(null);

  const prev = () => setCurrentIndex(i => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrentIndex(i => (i + 1) % photos.length);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, photos.length]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !photos.length) return null;

  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col animate-fade-in" role="dialog" aria-modal="true" aria-label="Photo viewer">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0">
        <div className="glass-dark px-4 py-2 rounded-pill">
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            {currentIndex + 1} <span className="text-white/50 mx-1">/</span> {photos.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 glass-dark border-white/10 text-white/80 hover:text-white px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 hover:bg-white/10"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            onClick={onSaveToggle}
            className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${
              isSaved ? 'bg-brand-500/20 border border-brand-400/30 text-white' : 'glass-dark border-white/10 text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-brand-400 text-brand-400' : ''}`} />
            Save
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 glass-dark border border-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main photo area */}
      <div className="flex-1 relative flex items-center justify-center px-16 overflow-hidden">
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 w-12 h-12 glass-dark border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30"
          aria-label="Previous photo"
          disabled={photos.length <= 1}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Photo */}
        <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
          <img
            key={currentIndex}
            src={photo.url}
            alt={photo.title}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl animate-scale-in"
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-4 pointer-events-none">
            <div className="glass-dark border border-white/10 px-5 py-2.5 rounded-xl text-center shadow-lg max-w-md">
              <p className="text-white font-semibold text-sm">{photo.title}</p>
              {photo.category && <p className="text-white/50 text-xs mt-0.5">{photo.category}</p>}
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 z-10 w-12 h-12 glass-dark border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30"
          aria-label="Next photo"
          disabled={photos.length <= 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="shrink-0 py-4 px-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar justify-center">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 ${
                idx === currentIndex
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105 opacity-100'
                  : 'opacity-40 hover:opacity-80 hover:scale-102'
              }`}
              style={{ width: '72px', height: '50px' }}
            >
              <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
