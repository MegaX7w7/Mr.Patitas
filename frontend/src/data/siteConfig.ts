import type { NavLinkItem } from '../types/product';

export const SITE_CONFIG = {
  brandName: 'Mr. Patitas',
  tagline: 'Catálogo para perros y gatos',
  releaseBadge: 'Entrega 2 de 3',
  mobileReleaseBadge: 'Entrega 2 de 3 · Datos de prueba',
  academicFooterNote:
    'Proyecto universitario de Ingeniería de Software (TSPi) · Institución Universitaria Politécnico Grancolombiano. Avance correspondiente a la entrega 2 de 3 con datos de prueba.',
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#catalogo', label: 'Catálogo' },
];
