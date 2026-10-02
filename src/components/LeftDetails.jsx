import React, { useState, useEffect } from 'react';
import {
  Sparkles, Wifi, Key, CalendarCheck,
  BedDouble, Tv, Wind, Waves, Car, Dumbbell,
  UtensilsCrossed, ShieldCheck, Star, MapPin,
  ChevronRight, Award, ZapOff, ChevronDown
} from 'lucide-react';

/* ─── Icon maps ─────────────────────────────── */
const HIGHLIGHT_ICONS = { Sparkles, Wifi, Key, Calendar: CalendarCheck };

const AMENITY_EMOJI = {
  'Private Jacuzzi / Hot tub':      '🛁',
  'High-speed Wi-Fi (120 Mbps)':    '⚡',
  'Dedicated workspace':             '💼',
  'Free parking on premises':        '🚗',
  'Shared resort swimming pool':     '🏊',
  '55" 4K Smart TV':                 '📺',
  'Dual-zone Air conditioning':      '❄️',
  'Fully equipped kitchen':          '👨‍🍳',
  'Gymnasium / Fitness centre':      '🏋️',
  'Self check-in with keypad':       '🔐',
};

/* ─── Calendar helpers (Oct 2026 hard-coded) ─ */
// Oct 1 2026 = Thursday → offset = 4 (Sun=0)
const OCT_OFFSET = 4;
const OCT_DAYS   = 31;
const CHECK_IN   = 10;
const CHECK_OUT  = 15;
const DAYS_LABEL = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function DayCell({ day }) {
  const isCheckIn  = day === CHECK_IN;
  const isCheckOut = day === CHECK_OUT;
  const isRange    = day > CHECK_IN && day < CHECK_OUT;

  // range-start pill (left half)
  if (isCheckIn)  return (
    <div className="relative flex items-center justify-center h-9">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-brand-50" />
      <span className="relative z-10 w-9 h-9 flex items-center justify-center rounded-full bg-ink-primary text-white text-sm font-bold cursor-pointer">{day}</span>
    </div>
  );
  if (isCheckOut) return (
    <div className="relative flex items-center justify-center h-9">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-brand-50" />
      <span className="relative z-10 w-9 h-9 flex items-center justify-center rounded-full bg-ink-primary text-white text-sm font-bold cursor-pointer">{day}</span>
    </div>
  );
  if (isRange)  return (
    <div className="h-9 flex items-center justify-center bg-brand-50 cursor-pointer hover:bg-brand-100 transition-colors">
      <span className="text-sm font-semibold text-brand-700">{day}</span>
    </div>
  );
  return (
    <div className="h-9 flex items-center justify-center cursor-pointer rounded-full hover:bg-surface-2 transition-colors">
      <span className="text-sm text-ink-secondary">{day}</span>
    </div>
  );
}

/* ─── Component ────────────────────────────── */
export default function LeftDetails({ listingData, onOpenAmenitiesModal }) {
  const [descExpanded, setDescExpanded] = useState(false);
  const [allReviews, setAllReviews]     = useState(false);

  // Build calendar grid: blanks + Oct days
  const cells = Array(OCT_OFFSET).fill(null).concat(Array.from({ length: OCT_DAYS }, (_, i) => i + 1));

  return (
    <div className="w-full min-w-0">

      {/* ── Property Type + Stats ── */}
      <div className="pb-6">
        <h2 className="text-xl font-bold text-ink-primary mb-1">{listingData.subtitle}</h2>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-tertiary">
          {[
            `${listingData.stats.guests} guests`,
            `${listingData.stats.bedrooms} bedroom`,
            `${listingData.stats.beds} bed`,
            `${listingData.stats.baths} bath`,
          ].map((stat, i, arr) => (
            <span key={stat} className="flex items-center gap-2">
              {stat}
              {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-ink-disabled" />}
            </span>
          ))}
        </div>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Host Bar ── */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img src={listingData.host.avatar} alt={listingData.host.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[16px] text-ink-primary">Hosted by {listingData.host.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="badge badge-gold text-xs"><Award className="w-3 h-3" /> Superhost</span>
              <span className="text-xs text-ink-tertiary">{listingData.host.yearsHosting} years hosting</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="pulse-dot" />
          <span className="text-xs font-semibold text-accent-green">Usually responds instantly</span>
        </div>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Highlights ── */}
      <div className="space-y-5 pb-6">
        {listingData.highlights.map((item, idx) => {
          const Icon = HIGHLIGHT_ICONS[item.icon] || Sparkles;
          const colors = [
            { bg: 'bg-brand-50',   border: 'border-brand-100',   icon: 'text-brand-500' },
            { bg: 'bg-blue-50',    border: 'border-blue-100',    icon: 'text-blue-500'  },
            { bg: 'bg-violet-50',  border: 'border-violet-100',  icon: 'text-violet-500'},
            { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600'},
          ];
          const c = colors[idx % colors.length];
          return (
            <div key={idx} className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${c.icon}`} />
              </div>
              <div>
                <h4 className="font-semibold text-ink-primary text-[15px] leading-snug">{item.title}</h4>
                <p className="text-sm text-ink-tertiary mt-0.5 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Description ── */}
      <div className="pb-6">
        <div className={`text-ink-secondary text-[15px] leading-[1.8] whitespace-pre-line ${descExpanded ? '' : 'line-clamp-4'}`}>
          {listingData.description}
        </div>
        <button onClick={() => setDescExpanded(v => !v)}
          className="mt-3 flex items-center gap-1 text-sm font-bold text-ink-primary hover:text-brand-500 transition-colors group">
          <span className="underline underline-offset-2 decoration-ink-disabled group-hover:decoration-brand-300">
            {descExpanded ? 'Show less' : 'Show more'}
          </span>
          <ChevronRight className={`w-4 h-4 transition-transform ${descExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Sleep Arrangements ── */}
      <div className="pb-6">
        <h3 className="text-xl font-bold text-ink-primary mb-5">🛏️ Where you'll sleep</h3>
        {/* Full-width single card OR grid if multiple */}
        <div className={`grid gap-4 ${listingData.sleepingArrangements.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {listingData.sleepingArrangements.map((item, idx) => (
            <div key={idx}
              className="flex items-start gap-4 border border-surface-3 rounded-2xl p-5 bg-surface-1 hover:border-brand-200 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                <BedDouble className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <h4 className="font-bold text-ink-primary text-[15px]">{item.roomName}</h4>
                <p className="text-sm text-ink-tertiary mt-0.5">{item.bedType}</p>
                <p className="text-xs text-ink-disabled mt-1.5 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Amenities Grid ── */}
      <div className="pb-6">
        <h3 className="text-xl font-bold text-ink-primary mb-5">✨ What this place offers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(AMENITY_EMOJI).map(([name, emoji]) => (
            <div key={name} className="flex items-center gap-3 py-2 group">
              <span className="text-xl w-7 text-center shrink-0">{emoji}</span>
              <span className="text-sm text-ink-secondary font-medium group-hover:text-ink-primary transition-colors">{name}</span>
            </div>
          ))}
        </div>
        <button
          id="show-all-amenities-btn"
          onClick={onOpenAmenitiesModal}
          className="mt-6 border-2 border-ink-primary text-ink-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-ink-primary hover:text-white transition-all duration-200 active:scale-[0.98]">
          Show all 35 amenities →
        </button>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Dual-Month Calendar ── */}
      <div className="pb-6">
        <h3 className="text-xl font-bold text-ink-primary mb-1">📅 Select dates</h3>
        <p className="text-sm text-ink-tertiary mb-5">5 nights in Candolim · Oct 10 – Oct 15, 2026</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-surface-3 rounded-2xl overflow-hidden bg-white">
          {/* October 2026 */}
          <div className="p-5 border-b md:border-b-0 md:border-r border-surface-3">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm text-ink-primary">October 2026</h4>
              <div className="flex gap-3 text-xs text-ink-tertiary">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-500 inline-block" />Stay</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-surface-3 inline-block" />Open</span>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-ink-tertiary mb-1">
              {DAYS_LABEL.map(d => <div key={d} className="py-1">{d}</div>)}
            </div>
            <div className="grid grid-cols-7">
              {/* blank offset cells */}
              {Array(OCT_OFFSET).fill(null).map((_, i) => <div key={`blank-${i}`} className="h-9" />)}
              {/* date cells */}
              {Array.from({ length: OCT_DAYS }, (_, i) => i + 1).map(day => (
                <DayCell key={day} day={day} />
              ))}
            </div>
          </div>

          {/* November 2026 — greyed out, open availability hint */}
          <div className="p-5 opacity-80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm text-ink-primary">November 2026</h4>
            </div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-ink-tertiary mb-1">
              {DAYS_LABEL.map(d => <div key={d} className="py-1">{d}</div>)}
            </div>
            {/* Nov 1 = Sunday (offset 0) */}
            <div className="grid grid-cols-7">
              {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                <div key={day} className="h-9 flex items-center justify-center cursor-pointer rounded-full hover:bg-surface-2 transition-colors">
                  <span className="text-sm text-ink-secondary">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-ink-tertiary">Minimum stay: 2 nights. Add dates for exact pricing.</p>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Reviews ── */}
      <div id="reviews" className="pb-6">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-5 h-5 star-filled" />
          <h3 className="text-xl font-bold text-ink-primary">
            {listingData.reviews.overall} · {listingData.reviews.totalCount} reviews
          </h3>
        </div>

        {/* Category ratings — full width grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 mb-8">
          {listingData.reviews.categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-3">
              <span className="text-xs text-ink-secondary shrink-0 w-28">{cat.name}</span>
              <div className="flex-1 rating-bar">
                <div className="rating-bar-fill" style={{ width: `${(cat.rating / 5) * 100}%` }} />
              </div>
              <span className="text-xs font-bold text-ink-primary w-7 text-right shrink-0">{cat.rating}</span>
            </div>
          ))}
        </div>

        {/* Review cards — full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {listingData.reviews.items.slice(0, allReviews ? undefined : 4).map(review => (
            <div key={review.id}
              className="p-5 rounded-2xl border border-surface-3 bg-surface-1/50 hover:border-surface-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-3 mb-3">
                <img src={review.avatar} alt={review.author}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[14px] text-ink-primary truncate">{review.author}</h4>
                  <p className="text-xs text-ink-tertiary mt-0.5">{review.location} · {review.date}</p>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 star-filled" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed line-clamp-4">{review.content}</p>
            </div>
          ))}
        </div>

        <button onClick={() => setAllReviews(v => !v)}
          className="mt-6 border-2 border-ink-primary text-ink-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-ink-primary hover:text-white transition-all duration-200">
          {allReviews ? 'Show fewer reviews' : `Show all ${listingData.reviews.totalCount} reviews →`}
        </button>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Map ── */}
      <div className="pb-6">
        <h3 className="text-xl font-bold text-ink-primary mb-1">📍 Where you'll be</h3>
        <p className="text-sm text-ink-tertiary mb-5">Candolim, Goa, India · Botanica by Raichandani</p>
        <div className="relative rounded-3xl overflow-hidden h-[260px] md:h-[320px] group shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Goa / North India satellite image */}
          <img
            src="https://images.unsplash.com/photo-1582638647756-a7f66a5ae1a7?auto=format&fit=crop&w=1200&q=80"
            alt="Candolim Goa area view"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-500 rounded-full w-14 h-14 flex items-center justify-center shadow-glow animate-bounce-sm">
              <MapPin className="w-7 h-7 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-sm font-semibold text-ink-primary">📍 Botanica, Pilerne – Candolim Rd, Goa</p>
            <p className="text-xs text-ink-tertiary mt-0.5">800m to Candolim Beach · ~10 min walk</p>
          </div>
        </div>
      </div>

      <div className="divider-gradient mb-6" />

      {/* ── Things to Know ── */}
      <div className="pb-6">
        <h3 className="text-xl font-bold text-ink-primary mb-5">📋 Things to know</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-ink-primary mb-3">🏠 House rules</h4>
            <ul className="space-y-2 text-ink-tertiary">
              <li>⏰ Check-in: 2:00 PM – 10:00 PM</li>
              <li>⏰ Checkout before 11:00 AM</li>
              <li>👥 Max 2 guests</li>
              <li>🚫 No smoking inside</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ink-primary mb-3">🛡️ Safety</h4>
            <ul className="space-y-2 text-ink-tertiary">
              <li>🔥 Smoke alarm</li>
              <li>💨 CO2 detector</li>
              <li>🧯 Fire extinguisher</li>
              <li>🔒 24/7 Gated security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ink-primary mb-3">📝 Cancellation</h4>
            <p className="text-ink-tertiary leading-relaxed">
              Free cancellation before 48 hours of check-in. Review full policy for seasonal terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
