import React from 'react';
import { X, Wifi, Car, Waves, Tv, Wind, UtensilsCrossed, Dumbbell, ShieldCheck, AirVent, Star, Coffee, BedDouble, Sun, Zap, Lock, Bath, Thermometer, Package } from 'lucide-react';

const ICON_MAP = {
  wifi: Wifi, parking: Car, pool: Waves, tv: Tv, ac: Wind, kitchen: UtensilsCrossed,
  gym: Dumbbell, security: ShieldCheck, fan: AirVent, star: Star, coffee: Coffee,
  bed: BedDouble, outdoor: Sun, power: Zap, lock: Lock, bath: Bath, heat: Thermometer,
  luggage: Package,
};

const EMOJI_FOR_CAT = {
  'Standout amenities': '⭐',
  'Bedroom and laundry': '🛏️',
  'Kitchen and dining': '👨‍🍳',
  'Bathroom': '🚿',
  'Entertainment': '📺',
  'Outdoor': '🌴',
  'Heating and cooling': '❄️',
  'Parking and facilities': '🅿️',
  'Services': '🛎️',
  'Safety': '🛡️',
};

export default function AmenitiesModal({ isOpen, onClose, amenities }) {
  if (!isOpen || !amenities) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end sm:items-center sm:justify-center overlay-backdrop"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-white rounded-3xl shadow-modal w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col animate-slide-up">

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-surface-2 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-ink-primary">✨ What this place offers</h2>
            <p className="text-sm text-ink-tertiary mt-0.5">All 35 amenities included</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-surface-2 flex items-center justify-center text-ink-secondary hover:text-ink-primary transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="overflow-y-auto overscroll-contain px-7 py-6 space-y-9 flex-1">
          {amenities.map((section) => {
            const emoji = EMOJI_FOR_CAT[section.category] || '🏠';
            return (
              <div key={section.category}>
                <h3 className="text-base font-bold text-ink-primary mb-4 flex items-center gap-2">
                  <span>{emoji}</span>
                  {section.category}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = ICON_MAP[item.icon] || Star;
                    return (
                      <div key={item.name} className={`flex items-center gap-4 py-3 border-b border-surface-2/70 group transition-colors hover:bg-surface-1 -mx-2 px-2 rounded-xl ${item.unavailable ? 'opacity-40' : ''}`}>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.unavailable ? 'bg-surface-2' : 'bg-brand-50'}`}>
                          <Icon className={`w-5 h-5 ${item.unavailable ? 'text-ink-disabled' : 'text-brand-500'}`} />
                        </div>
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${item.unavailable ? 'line-through text-ink-disabled' : 'text-ink-primary'}`}>
                            {item.name}
                          </span>
                          {item.note && <p className="text-xs text-ink-tertiary mt-0.5">{item.note}</p>}
                        </div>
                        {!item.unavailable && (
                          <div className="w-4 h-4 rounded-full border-2 border-brand-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                          </div>
                        )}
                        {item.unavailable && (
                          <span className="text-xs text-ink-disabled badge badge-neutral shrink-0">Not included</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
