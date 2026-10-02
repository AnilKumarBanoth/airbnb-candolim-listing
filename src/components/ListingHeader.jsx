import React, { useState } from 'react';
import { Share2, Heart, Star, MapPin, Award } from 'lucide-react';

export default function ListingHeader({ title, rating, reviewCount, isSuperhost, location, onShareClick, isSaved, onSaveToggle }) {
  const [saveAnim, setSaveAnim] = useState(false);

  const handleSave = () => {
    setSaveAnim(true);
    setTimeout(() => setSaveAnim(false), 650);
    onSaveToggle();
  };

  return (
    <div className="pt-7 pb-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

        {/* Title block */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb / location tag */}
          <div className="flex items-center gap-2 mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
            <span className="text-sm text-ink-tertiary font-medium">{location}</span>
            {isSuperhost && (
              <span className="badge badge-gold ml-1">
                <Award className="w-3 h-3" />
                Superhost
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-[28px] font-bold text-ink-primary leading-snug tracking-tight pr-2">
            {title}
          </h1>

          {/* Rating inline pill */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1.5 badge badge-brand">
              <Star className="w-3.5 h-3.5 star-filled" />
              <span className="font-bold">{rating}</span>
            </div>
            <a href="#reviews" className="text-sm text-ink-tertiary hover:text-ink-primary transition-colors underline decoration-ink-disabled underline-offset-2 hover:decoration-ink-primary">
              {reviewCount} reviews
            </a>
            <span className="badge badge-neutral">
              ✨ Guest favourite
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 self-start md:mt-1">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 px-4 py-2 rounded-pill bg-surface-2 hover:bg-surface-3 text-sm font-semibold text-ink-secondary hover:text-ink-primary transition-all duration-200 group"
          >
            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Share</span>
          </button>

          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-semibold transition-all duration-200 group
              ${isSaved
                ? 'bg-brand-50 text-brand-600 border border-brand-200'
                : 'bg-surface-2 hover:bg-surface-3 text-ink-secondary hover:text-ink-primary'
              }`}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                saveAnim ? 'animate-heartbeat' : ''
              } ${isSaved ? 'fill-brand-500 text-brand-500' : 'text-ink-secondary group-hover:text-brand-400'}`}
            />
            <span>{isSaved ? 'Saved ♥' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
