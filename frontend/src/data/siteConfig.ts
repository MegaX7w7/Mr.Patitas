import type { NavLinkItem } from '../types/product';

export const SITE_CONFIG = {
  brandName: 'Mr. Patitas',
  tagline: 'Catálogo para perros y gatos',
  releaseBadge: 'Entrega 1 · MVP',
  mobileReleaseBadge: 'Entrega 1 · MVP (Datos de prueba)',
  academicFooterNote:
    'Proyecto académico de Ingeniería de Software (TSPi) · Institución Universitaria Politécnico Grancolombiano. Primera entrega funcional (MVP) con datos de prueba.',
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#catalogo', label: 'Catálogo' },
];
