import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

const footerCols = [
  {
    title: '🛟 Support',
    links: ['Help Centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options'],
  },
  {
    title: '🏠 Hosting',
    links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Host responsibly'],
  },
  {
    title: '✈️ Airbnb',
    links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Emergency stays'],
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-surface-3 bg-surface-1 mt-20">
      {/* Top CTA banner */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 pb-8 border-b border-surface-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-bold text-ink-primary">🌴 Ready to explore Goa?</h3>
            <p className="text-sm text-ink-tertiary mt-1">Discover the best-rated stays in Candolim, Goa.</p>
          </div>
          <a
            href="#reserve-btn"
            onClick={() => document.getElementById('reserve-btn')?.click()}
            className="btn-brand px-6 py-3 rounded-2xl text-sm font-bold inline-flex items-center gap-2 whitespace-nowrap self-start sm:self-auto"
          >
            Book your stay →
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-surface-3">
        {footerCols.map(col => (
          <div key={col.title}>
            <h4 className="font-bold text-sm text-ink-primary mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-ink-tertiary hover:text-ink-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-tertiary">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center sm:justify-start">
          <span>© 2026 Airbnb, Inc.</span>
          {['Privacy', 'Terms', 'Sitemap', 'Company details'].map(label => (
            <React.Fragment key={label}>
              <span>·</span>
              <a href={`#${label.toLowerCase().replace(/ /g,'-')}`} className="hover:underline hover:text-ink-primary transition-colors">{label}</a>
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 font-semibold text-ink-secondary hover:text-ink-primary transition-colors">
            <Globe className="w-4 h-4" />
            English (IN)
          </button>
          <span className="font-semibold text-ink-secondary hover:text-ink-primary cursor-pointer transition-colors">₹ INR</span>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="w-8 h-8 rounded-full border border-surface-3 flex items-center justify-center text-ink-secondary hover:bg-surface-2 hover:text-ink-primary transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
