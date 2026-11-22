import { useState } from 'react';
import { NAV_LINKS, SITE_CONFIG } from '../data/siteConfig';
import { BrandIcon } from './BrandIcon';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-surface-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white shadow-sm"
            aria-hidden="true"
          >
            <BrandIcon className="h-6 w-6" />
          </span>
          <div>
            <span className="block text-lg font-bold tracking-tight text-brand-secondary">
              {SITE_CONFIG.brandName}
            </span>
            <span className="block text-xs font-medium text-stone-500">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200/70 hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              {link.label}
            </a>
          ))}
          <span className="ml-3 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
            {SITE_CONFIG.releaseBadge}
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white p-2 text-stone-700 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="border-t border-stone-200 bg-white px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-brand-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-stone-100 pt-2">
              <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                {SITE_CONFIG.mobileReleaseBadge}
              </span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
