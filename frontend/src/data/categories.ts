import type { VisualCategory } from '../types/product';

/**
 * Configuración centralizada de categorías visuales del catálogo.
 * Para renombrar, quitar o agregar una categoría, edita únicamente este archivo.
 * El contador de productos de cada categoría se calcula automáticamente.
 */
export const VISUAL_CATEGORIES: VisualCategory[] = [
  {
    name: 'Alimentación',
    description: 'Alimento seco y snacks pensados para la nutrición diaria.',
    icon: 'bowl',
    accentClass: 'bg-amber-100 text-amber-900 border-amber-200',
  },
  {
    name: 'Paseo',
    description: 'Accesorios resistentes para salidas cómodas y seguras.',
    icon: 'leash',
    accentClass: 'bg-teal-100 text-teal-900 border-teal-200',
  },
  {
    name: 'Descanso',
    description: 'Camas y espacios acogedores para el reposo en casa.',
    icon: 'bed',
    accentClass: 'bg-stone-200 text-stone-900 border-stone-300',
  },
  {
    name: 'Juguetes',
    description: 'Rascadores y estímulos para el juego activo diario.',
    icon: 'toy',
    accentClass: 'bg-orange-100 text-orange-900 border-orange-200',
  },
  {
    name: 'Higiene',
    description: 'Herramientas delicadas para el cuidado del pelaje.',
    icon: 'hygiene',
    accentClass: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  },
];
