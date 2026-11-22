import type { DemoProduct } from '../types/product';

function formatDemoCop(amount: number): string {
  const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$ ${formatted} COP`;
}

export function ProductCard({ product }: { product: DemoProduct }) {
  const speciesBadgeClass =
    product.species === 'Perro'
      ? 'bg-amber-100 text-amber-900 border-amber-200'
      : 'bg-teal-100 text-teal-900 border-teal-200';

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative bg-stone-50 p-4">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="aspect-[10/7] w-full rounded-xl object-contain"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${speciesBadgeClass}`}
          >
            Para {product.species}
          </span>
          <span className="inline-flex items-center rounded-full bg-stone-200/80 px-2.5 py-0.5 text-xs font-medium text-stone-700">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug text-brand-secondary">{product.name}</h3>
          <span className="shrink-0 rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-500">
            {product.id}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-stone-600">{product.shortDescription}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Características de demostración">
          {product.attributes.map((attribute) => (
            <li
              key={attribute}
              className="rounded-lg border border-stone-200 bg-surface-canvas px-2.5 py-1 text-xs font-medium text-stone-700"
            >
              {attribute}
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-stone-100 pt-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="block text-[11px] font-medium tracking-wide text-stone-500 uppercase">
                Precio demo
              </span>
              <span className="text-xl font-extrabold text-stone-900">
                {formatDemoCop(product.demoPriceCop)}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Stock demo: {product.demoStock}
              </span>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">
            Dato de prueba · Referencia documental: {product.sourceReference}
          </p>
        </div>
      </div>
    </article>
  );
}
