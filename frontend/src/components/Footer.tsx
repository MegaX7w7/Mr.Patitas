import { NAV_LINKS, SITE_CONFIG } from '../data/siteConfig';
import { BrandIcon } from './BrandIcon';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-brand-secondary text-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white"
              aria-hidden="true"
            >
              <BrandIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              {SITE_CONFIG.brandName}
            </span>
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-stone-300">
            {SITE_CONFIG.academicFooterNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-200">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
