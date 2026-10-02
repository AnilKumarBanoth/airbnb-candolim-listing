import React, { useState } from 'react';
import { Star, ChevronDown, Plus, Minus, Flag, Sparkles, X, Check, Shield, Zap } from 'lucide-react';

export default function BookingCard({ listingData, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests }) {
  const [guestOpen, setGuestOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  const nights = 5;
  const baseTotal = listingData.basePrice * nights;
  const discount = Math.round(baseTotal * 0.10);
  const cleaning = listingData.cleaningFee;
  const service = Math.round((baseTotal - discount) * listingData.serviceFeeRate);
  const total = baseTotal - discount + cleaning + service;
  const totalGuests = guests.adults + guests.children;

  const adjustGuest = (type, delta) => {
    setGuests(prev => {
      const next = Math.max(type === 'adults' ? 1 : 0, prev[type] + delta);
      const other = type === 'adults' ? prev.children : prev.adults;
      if (type !== 'infants' && next + other > 2) return prev;
      return { ...prev, [type]: next };
    });
  };

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => setReserved(false), 3500);
  };

  const guestRows = [
    { key: 'adults', label: 'Adults', sub: 'Age 13+', min: 1 },
    { key: 'children', label: 'Children', sub: 'Ages 2–12', min: 0 },
    { key: 'infants', label: 'Infants', sub: 'Under 2', min: 0 },
  ];

  return (
    <div className="w-full">
      <div className="sticky top-24">
        {/* ── Main Booking Card ── */}
        <div className="bg-white rounded-3xl border border-surface-3 shadow-elevated overflow-hidden">
          
          {/* Card Header with gradient accent */}
          <div className="px-6 pt-6 pb-5 border-b border-surface-2">
            <div className="flex items-end justify-between mb-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-ink-primary tracking-tight">
                  {listingData.currency}{listingData.basePrice.toLocaleString()}
                </span>
                <span className="text-ink-tertiary text-sm font-medium">/ night</span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 badge badge-brand">
                  <Star className="w-3 h-3 star-filled" />
                  <span className="font-bold">{listingData.rating}</span>
                </div>
                <a href="#reviews" className="text-xs text-ink-tertiary underline hover:text-ink-primary mt-0.5 block">
                  {listingData.reviewCount} reviews
                </a>
              </div>
            </div>

            {/* Promo banner inside card */}
            <div className="flex items-center gap-2 mt-3 badge badge-green text-xs w-fit">
              <Zap className="w-3 h-3" />
              10% promo automatically applied
            </div>
          </div>

          <div className="p-5 space-y-3">
            {/* ── Date Picker Box ── */}
            <div className="border-2 border-surface-3 rounded-2xl overflow-hidden hover:border-brand-300 focus-within:border-brand-400 focus-within:shadow-focus transition-all duration-200">
              <div className="grid grid-cols-2 divide-x-2 divide-surface-3">
                <div className="p-3.5 cursor-pointer hover:bg-surface-1 transition-colors">
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-ink-secondary mb-0.5">Check-in</label>
                  <input
                    type="text"
                    value={checkInDate}
                    onChange={e => setCheckInDate(e.target.value)}
                    className="w-full text-sm font-semibold text-ink-primary bg-transparent focus:outline-none cursor-pointer"
                  />
                </div>
                <div className="p-3.5 cursor-pointer hover:bg-surface-1 transition-colors">
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-ink-secondary mb-0.5">Checkout</label>
                  <input
                    type="text"
                    value={checkOutDate}
                    onChange={e => setCheckOutDate(e.target.value)}
                    className="w-full text-sm font-semibold text-ink-primary bg-transparent focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Guests Row */}
              <div className="border-t-2 border-surface-3 relative">
                <div
                  onClick={() => setGuestOpen(!guestOpen)}
                  className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-surface-1 transition-colors"
                >
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-ink-secondary mb-0.5">Guests</label>
                    <span className="text-sm font-semibold text-ink-primary">
                      {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                      {guests.infants > 0 && `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''}`}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-ink-tertiary transition-transform duration-300 ${guestOpen ? 'rotate-180' : ''}`} />
                </div>

                {guestOpen && (
                  <div className="border-t border-surface-2 bg-white px-4 py-3 space-y-4 animate-slide-down">
                    {guestRows.map(({ key, label, sub, min }) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-ink-primary">{label}</p>
                          <p className="text-xs text-ink-tertiary">{sub}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => adjustGuest(key, -1)}
                            disabled={guests[key] <= min}
                            className="w-8 h-8 rounded-full border-2 border-surface-3 flex items-center justify-center text-ink-secondary hover:border-ink-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center font-bold text-ink-primary">{guests[key]}</span>
                          <button
                            onClick={() => adjustGuest(key, 1)}
                            disabled={key !== 'infants' && totalGuests >= 2}
                            className="w-8 h-8 rounded-full border-2 border-surface-3 flex items-center justify-center text-ink-secondary hover:border-ink-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end pt-1">
                      <button onClick={() => setGuestOpen(false)} className="text-xs font-bold text-ink-primary underline underline-offset-2">
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Reserve CTA ── */}
            <button
              id="reserve-btn"
              onClick={handleReserve}
              className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 btn-brand"
            >
              {reserved ? (
                <span className="flex items-center justify-center gap-2 animate-fade-in">
                  <Check className="w-5 h-5 stroke-[3]" /> Reservation Requested! 🎉
                </span>
              ) : (
                'Reserve'
              )}
            </button>
            <p className="text-center text-xs text-ink-tertiary">You won't be charged yet</p>

            {/* ── Price Breakdown ── */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-secondary underline underline-offset-2 decoration-surface-4 cursor-help">
                  {listingData.currency}{listingData.basePrice.toLocaleString()} × {nights} nights
                </span>
                <span className="font-medium text-ink-primary">{listingData.currency}{baseTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-accent-green font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Promo discount (10%)
                </span>
                <span className="font-semibold text-accent-green">−{listingData.currency}{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-secondary underline underline-offset-2 decoration-surface-4 cursor-help">Cleaning fee</span>
                <span className="font-medium text-ink-primary">{listingData.currency}{cleaning.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-secondary underline underline-offset-2 decoration-surface-4 cursor-help">Airbnb service fee</span>
                <span className="font-medium text-ink-primary">{listingData.currency}{service.toLocaleString()}</span>
              </div>

              <div className="pt-3 border-t-2 border-surface-2 flex justify-between items-center">
                <span className="font-bold text-ink-primary text-base">Total before taxes</span>
                <span className="font-extrabold text-ink-primary text-lg">{listingData.currency}{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[
                { icon: Shield, label: 'AirCover', sub: 'Protected' },
                { icon: Zap, label: 'Instant', sub: 'Confirmed' },
                { icon: Star, label: 'Top rated', sub: '4.92 ★' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1 p-2.5 bg-surface-1 rounded-xl text-center">
                  <Icon className="w-4 h-4 text-brand-500" />
                  <span className="text-[10px] font-bold text-ink-primary">{label}</span>
                  <span className="text-[9px] text-ink-tertiary">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report listing */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-ink-tertiary cursor-pointer hover:text-ink-secondary transition-colors">
          <Flag className="w-3.5 h-3.5" />
          <span className="underline underline-offset-2">Report this listing</span>
        </div>
      </div>

      {/* ── Floating Promo Toast ── */}
      {showPromo && (
        <div className="fixed bottom-6 right-6 max-w-xs w-full z-50 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl border border-surface-2 p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-bold text-sm text-ink-primary">🎉 10% off your stay!</h5>
              <p className="text-xs text-ink-tertiary mt-0.5">Promo code applied automatically. Limited time offer.</p>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="p-1 hover:bg-surface-2 rounded-lg transition-colors shrink-0"
            >
              <X className="w-4 h-4 text-ink-tertiary" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
