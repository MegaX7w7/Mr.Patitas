import { VISUAL_CATEGORIES } from '../data/categories';
import { DEMO_PRODUCTS } from '../data/demoProducts';
import { SITE_CONFIG } from '../data/siteConfig';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-br from-hero-from via-surface-canvas to-hero-to"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-secondary shadow-xs">
            <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />
            Primera entrega funcional (MVP) · Catálogo demostrativo
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-secondary sm:text-4xl lg:text-5xl">
            Todo lo que tus{' '}
            <span className="text-brand-primary">perros y gatos</span> necesitan, en un solo lugar.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Bienvenido a <strong className="font-semibold text-stone-800">{SITE_CONFIG.brandName}</strong>,
            un catálogo virtual especializado en artículos para mascotas. Esta primera versión
            presenta la estructura visual base y una selección inicial de productos de demostración
            organizados por categoría y especie.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Ver catálogo demostrativo
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-brand-secondary transition hover:border-brand-secondary/40 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
            >
              Explorar categorías
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <p className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
                  Resumen de esta entrega
                </p>
                <p className="mt-1 text-lg font-bold text-brand-secondary">Versión MVP Autónoma</p>
              </div>
              <span className="rounded-xl bg-hero-to p-2.5 text-brand-secondary" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-surface-canvas p-4">
                <dt className="text-xs font-medium text-stone-500">Productos demo</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand-primary">
                  {DEMO_PRODUCTS.length}
                </dd>
              </div>
              <div className="rounded-2xl bg-surface-canvas p-4">
                <dt className="text-xs font-medium text-stone-500">Categorías</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand-secondary">
                  {VISUAL_CATEGORIES.length}
                </dd>
              </div>
              <div className="rounded-2xl bg-surface-canvas p-4">
                <dt className="text-xs font-medium text-stone-500">Especies</dt>
                <dd className="mt-1 text-base font-bold text-stone-800">Perros y Gatos</dd>
              </div>
              <div className="rounded-2xl bg-surface-canvas p-4">
                <dt className="text-xs font-medium text-stone-500">Ejecución</dt>
                <dd className="mt-1 text-base font-bold text-stone-800">100% local</dd>
              </div>
            </dl>

            <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50/80 px-3.5 py-2.5 text-xs leading-relaxed text-amber-950">
              <strong className="font-semibold">Nota académica:</strong> Esta entrega presenta datos
              de prueba. Funciones como registro, búsquedas, catálogo de 20+ artículos y carrito se
              incorporarán en entregas posteriores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
