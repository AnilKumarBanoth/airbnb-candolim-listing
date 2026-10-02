import React from 'react';
import { LayoutGrid } from 'lucide-react';

const ASPECT_CLASSES = [
  'col-span-2 row-span-2',  // hero: full left
  'col-span-1 row-span-1',  // top center
  'col-span-1 row-span-1',  // top right
  'col-span-1 row-span-1',  // bottom center
  'col-span-1 row-span-1',  // bottom right
];

export default function HeroGallery({ heroPhotos, onOpenPhotoTour, onOpenLightbox }) {
  if (!heroPhotos || heroPhotos.length < 5) return null;

  return (
    <section aria-label="Property photo gallery" className="mb-8 -mx-0">
      <div className="grid grid-cols-4 grid-rows-2 gap-2.5 h-[340px] sm:h-[410px] md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden">
        {heroPhotos.slice(0, 5).map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => onOpenLightbox(idx)}
            className={`relative overflow-hidden cursor-pointer group bg-surface-3 photo-hover ${ASPECT_CLASSES[idx]}`}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay with gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* First image hero label */}
            {idx === 0 && (
              <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-pill opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <p className="text-xs font-bold text-ink-primary">🏠 {photo.category}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show all photos trigger */}
      <div className="relative">
        <button
          id="show-all-photos-btn"
          onClick={onOpenPhotoTour}
          className="absolute right-4 -top-[52px] flex items-center gap-2 glass border border-white/80 shadow-lg hover:shadow-xl text-ink-primary font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <LayoutGrid className="w-4 h-4 text-brand-500" />
          Show all photos
        </button>
      </div>
    </section>
  );
}
