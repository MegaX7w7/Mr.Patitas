import { DEMO_PRODUCTS } from '../data/demoProducts';
import { SITE_CONFIG } from '../data/siteConfig';
import { ProductCard } from './ProductCard';

export function ProductCatalog() {
  const dogCount = DEMO_PRODUCTS.filter((product) => product.species === 'Perro').length;
  const catCount = DEMO_PRODUCTS.filter((product) => product.species === 'Gato').length;

  return (
    <section
      id="catalogo"
      className="border-t border-stone-200/80 bg-surface-muted/70 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
              Muestra inicial de productos
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-brand-secondary sm:text-3xl">
              Catálogo demostrativo de {SITE_CONFIG.brandName}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-stone-600">
              Selección de {DEMO_PRODUCTS.length} artículos de ejemplo ({dogCount} para perros y{' '}
              {catCount} para gatos) diseñados para validar la presentación visual y responsiva de
              esta primera entrega.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs font-semibold text-stone-700 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-brand-secondary" aria-hidden="true" />
            Mostrando {DEMO_PRODUCTS.length} productos de prueba
          </div>
        </div>

        <div
          role="note"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300/80 bg-amber-50 px-4 py-3.5 text-sm text-amber-950"
        >
          <svg
            viewBox="0 0 24 24"
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p className="text-xs leading-relaxed sm:text-sm">
            <strong className="font-semibold">Aviso sobre datos de demostración:</strong> Los
            precios, descripciones y existencias mostradas en estas tarjetas son{' '}
            <strong>datos ficticios de prueba</strong> creados exclusivamente para esta primera
            entrega académica (MVP) y <strong>no representan inventario comercial real</strong>. El
            catálogo mínimo de 20 artículos (RF06) corresponde a una entrega posterior.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMO_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
