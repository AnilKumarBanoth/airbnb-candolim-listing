import React, { useState } from 'react';
import { X, Link2, Mail, MessageCircle, Check } from 'lucide-react';

// Facebook SVG since lucide-react doesn't export it in this version
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// X / Twitter SVG
const XIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SHARE_OPTIONS = [
  {
    id: 'copy',
    icon: Link2,
    label: 'Copy link',
    color: 'text-ink-primary',
    bg: 'bg-surface-2 hover:bg-surface-3',
    action: 'copy',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 hover:bg-emerald-100',
    action: 'whatsapp',
  },
  {
    id: 'twitter',
    icon: XIcon,
    label: 'X (Twitter)',
    color: 'text-sky-500',
    bg: 'bg-sky-50 hover:bg-sky-100',
    action: 'twitter',
  },
  {
    id: 'facebook',
    icon: FacebookIcon,
    label: 'Facebook',
    color: 'text-blue-600',
    bg: 'bg-blue-50 hover:bg-blue-100',
    action: 'facebook',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    color: 'text-brand-500',
    bg: 'bg-brand-50 hover:bg-brand-100',
    action: 'email',
  },
];

const LISTING_URL = 'https://www.airbnb.com/rooms/mirashya-ug10-candolim';

export default function ShareModal({ isOpen, onClose, listingData }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = (action) => {
    const title = encodeURIComponent(listingData?.title || 'Romantic Jacuzzi 1BHK – Candolim Goa');
    const url   = encodeURIComponent(LISTING_URL);
    const text  = encodeURIComponent(`Check out this stunning stay in Goa! ${LISTING_URL}`);

    switch (action) {
      case 'copy':
        navigator.clipboard.writeText(LISTING_URL).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${title}&body=${text}`, '_blank');
        break;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center overlay-backdrop"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl shadow-modal w-full max-w-md mx-0 sm:mx-4 animate-slide-up overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-surface-2">
          <div>
            <h2 className="text-lg font-bold text-ink-primary">🔗 Share this listing</h2>
            <p className="text-sm text-ink-tertiary mt-0.5 line-clamp-1">{listingData?.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-surface-2 flex items-center justify-center text-ink-secondary hover:text-ink-primary transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Card */}
        <div className="mx-5 mt-5 flex items-center gap-3 p-3 border border-surface-3 rounded-2xl bg-surface-1">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=120&q=75"
            alt="listing thumbnail"
            className="w-16 h-12 rounded-xl object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-ink-primary truncate">Candolim, Goa, India</p>
            <p className="text-xs text-ink-tertiary truncate mt-0.5">{listingData?.title}</p>
            <p className="text-xs text-brand-500 font-semibold mt-0.5">₹{listingData?.basePrice?.toLocaleString()}/night</p>
          </div>
        </div>

        {/* Share Options */}
        <div className="p-5 grid grid-cols-2 gap-3">
          {SHARE_OPTIONS.map(opt => {
            const Icon = opt.icon;
            const isCopy = opt.action === 'copy';
            return (
              <button
                key={opt.id}
                onClick={() => handleShare(opt.action)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${opt.bg} ${opt.color} hover:-translate-y-0.5 active:scale-[0.97]`}
              >
                {isCopy && copied ? (
                  <Check className="w-5 h-5 text-accent-green" />
                ) : (
                  <Icon className="w-5 h-5 shrink-0" />
                )}
                <span>{isCopy && copied ? 'Copied! ✅' : opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* URL bar */}
        <div className="mx-5 mb-5 flex items-center gap-2 bg-surface-1 border border-surface-3 rounded-xl px-4 py-3">
          <p className="text-xs text-ink-tertiary font-medium truncate flex-1">{LISTING_URL}</p>
          <button
            onClick={() => handleShare('copy')}
            className="text-xs font-bold text-brand-500 hover:text-brand-600 shrink-0 transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
