import { VISUAL_CATEGORIES } from '../data/categories';
import { DEMO_PRODUCTS } from '../data/demoProducts';
import type { CategoryIconName } from '../types/product';

function CategoryIcon({ icon }: { icon: CategoryIconName }) {
  switch (icon) {
    case 'bowl':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16l-1.5 5.5a1 1 0 0 1-1 .5h-11a1 1 0 0 1-1-.5L4 14Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10a4 4 0 0 1 8 0" />
        </svg>
      );
    case 'leash':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="8" cy="8" r="3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.8 10.2 19 18.5m0 0-2.5.5m2.5-.5-.5-2.5" />
        </svg>
      );
    case 'bed':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h10" />
        </svg>
      );
    case 'toy':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 6.5c2 2.5 2 8.5 0 11m7-11c-2 2.5-2 8.5 0 11" />
        </svg>
      );
    case 'hygiene':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15Z" />
        </svg>
      );
    case 'tag':
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
        </svg>
      );
  }
}

export function CategoryStrip() {
  const countByCategory = DEMO_PRODUCTS.reduce<Record<string, number>>((acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section id="categorias" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
            Organización del catálogo
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-brand-secondary sm:text-3xl">
            Categorías visuales
          </h2>
        </div>
        <p className="max-w-md text-sm text-stone-600">
          Líneas iniciales incluidas en esta demostración para organizar los artículos de perros y
          gatos.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {VISUAL_CATEGORIES.map((category) => {
          const demoCount = countByCategory[category.name] ?? 0;

          return (
            <a
              key={category.name}
              href="#catalogo"
              className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-brand-primary/50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${category.accentClass}`}
                    aria-hidden="true"
                  >
                    <CategoryIcon icon={category.icon} />
                  </span>
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-semibold text-stone-600">
                    {demoCount} {demoCount === 1 ? 'demo' : 'demos'}
                  </span>
                </div>
                <h3 className="mt-3.5 text-base font-bold text-brand-secondary group-hover:text-brand-primary">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-stone-600">
                  {category.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
