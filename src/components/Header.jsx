import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, User, ChevronDown, Sparkles } from 'lucide-react';

const AirbnbLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" aria-label="Airbnb" role="img">
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.392c0 4.298-3.238 7.729-7.5 7.729-3.203 0-5.321-1.631-6-3.899-.679 2.268-2.797 3.899-6 3.899-4.262 0-7.5-3.431-7.5-7.729 0-1.127.309-2.222 1.116-4.141l.3-.679c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.537 1.963 10.992 1 13 1h3z"/>
  </svg>
);

export default function Header({ onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = () => setIsMenuOpen(false);
    if (isMenuOpen) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-black/[0.04] py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <a
          href="#"
          className="text-brand-500 hover:text-brand-600 flex items-center gap-2 group shrink-0"
          aria-label="Airbnb homepage"
        >
          <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <AirbnbLogo />
          </span>
          <span className="hidden lg:block text-[22px] font-extrabold tracking-tight text-gradient select-none">
            airbnb
          </span>
        </a>

        {/* ── Central Search Pill (2026 capsule style) ── */}
        <div
          role="search"
          onClick={() => { setActiveSearch(true); onSearchClick?.(); }}
          className={`flex items-center rounded-pill border transition-all duration-300 cursor-pointer group ${
            activeSearch
              ? 'border-brand-400 shadow-focus'
              : 'border-ink-disabled/40 hover:border-ink-tertiary/60 hover:shadow-md'
          } bg-white px-2 py-2 gap-0 divide-x divide-surface-3`}
        >
          <div className="flex flex-col px-5 py-1 group-hover:bg-surface-2/60 rounded-l-pill transition-colors">
            <span className="text-[11px] font-bold text-ink-primary tracking-wider uppercase">Where</span>
            <span className="text-sm font-medium text-ink-tertiary">Candolim, Goa</span>
          </div>

          <div className="flex flex-col px-5 py-1 group-hover:bg-surface-2/60 transition-colors">
            <span className="text-[11px] font-bold text-ink-primary tracking-wider uppercase">Check in</span>
            <span className="text-sm font-medium text-ink-tertiary">Oct 10, 2026</span>
          </div>

          <div className="flex flex-col px-5 py-1 group-hover:bg-surface-2/60 transition-colors">
            <span className="text-[11px] font-bold text-ink-primary tracking-wider uppercase">Check out</span>
            <span className="text-sm font-medium text-ink-tertiary">Oct 15, 2026</span>
          </div>

          <div className="flex items-center gap-3 pl-5 pr-2 py-1">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-ink-primary tracking-wider uppercase">Guests</span>
              <span className="text-sm font-medium text-ink-tertiary">2 guests</span>
            </div>
            <div className="btn-brand w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <Search className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* ── Right User Controls ── */}
        <div className="flex items-center gap-1 shrink-0">
          <button className="hidden xl:flex items-center gap-1.5 px-4 py-2.5 rounded-pill text-sm font-semibold text-ink-secondary hover:bg-surface-2 hover:text-ink-primary transition-all duration-200">
            <Sparkles className="w-4 h-4 text-brand-500" />
            Airbnb your home
          </button>

          <button className="p-2.5 rounded-pill hover:bg-surface-2 text-ink-secondary hover:text-ink-primary transition-all duration-200" aria-label="Language and currency">
            <Globe className="w-4.5 h-4.5" style={{width:'18px',height:'18px'}} />
          </button>

          {/* User Menu Pill */}
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center gap-3 border rounded-pill px-3 py-2 transition-all duration-200 ${
                isMenuOpen
                  ? 'border-ink-primary shadow-md bg-white'
                  : 'border-ink-disabled/40 hover:shadow-md hover:border-ink-tertiary/50 bg-white'
              }`}
            >
              <Menu className="w-4 h-4 text-ink-secondary" />
              <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center text-white shadow-sm">
                <User className="w-4 h-4" />
              </div>
            </button>

            {/* Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-64 bg-white rounded-2xl shadow-modal border border-surface-3 py-2 z-50 animate-slide-down">
                <div className="px-4 py-3 border-b border-surface-2 mb-1">
                  <p className="text-xs text-ink-tertiary font-medium">Not signed in</p>
                </div>
                {[
                  { label: 'Log in', sub: true },
                  { label: 'Sign up', sub: false },
                ].map(item => (
                  <a key={item.label} href={`#${item.label.toLowerCase().replace(' ','-')}`}
                    className={`flex items-center px-4 py-2.5 text-sm hover:bg-surface-2 rounded-xl mx-2 transition-colors ${item.sub ? 'font-bold text-ink-primary' : 'text-ink-secondary'}`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="my-2 mx-4 h-px bg-surface-3" />
                {['Wishlists', 'Airbnb your home', 'Help Center'].map(label => (
                  <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center px-4 py-2.5 text-sm text-ink-secondary hover:bg-surface-2 rounded-xl mx-2 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
