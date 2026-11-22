import { PRODUCT_IMAGES } from '../assets/images';
import type { DemoProduct } from '../types/product';

/**
 * Datos ficticios de demostración para la primera entrega funcional (MVP).
 * Edita únicamente este archivo para modificar nombres, precios, stock,
 * descripciones o agregar nuevos artículos sin tocar las tarjetas ni contadores.
 *
 * NOTA: Estos datos NO representan inventario comercial real ni reemplazan
 * el requisito RF06 (mínimo 20 productos en entregas posteriores).
 */
export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'DEMO-01',
    name: 'Alimento seco para gato',
    species: 'Gato',
    category: 'Alimentación',
    shortDescription:
      'Croquetas balanceadas de demostración para gatos adultos, formuladas para una nutrición diaria equilibrada.',
    attributes: ['1.5 kg', 'Etapa: Adulto', 'Pollo y arroz'],
    demoPriceCop: 48900,
    demoStock: 14,
    imageSrc: PRODUCT_IMAGES.alimentoGato,
    imageAlt: 'Ilustración de bolsa y plato con alimento seco para gato',
    sourceReference: 'Catálogo de ejemplo (N.º 2)',
  },
  {
    id: 'DEMO-02',
    name: 'Snacks naturales para perro',
    species: 'Perro',
    category: 'Alimentación',
    shortDescription:
      'Galletas crujientes horneadas ideales como premio de entrenamiento y refuerzo positivo diario.',
    attributes: ['250 g', 'Sabor pollo', 'Textura crocante'],
    demoPriceCop: 18500,
    demoStock: 22,
    imageSrc: PRODUCT_IMAGES.snacksPerro,
    imageAlt: 'Ilustración de frasco y galletas en forma de hueso para perro',
    sourceReference: 'Catálogo de ejemplo (N.º 3)',
  },
  {
    id: 'DEMO-03',
    name: 'Correa resistente para perro',
    species: 'Perro',
    category: 'Paseo',
    shortDescription:
      'Correa ergonómica de nylon reforzado con mosquetón metálico y empuñadura acolchada para paseos seguros.',
    attributes: ['Talla M/L', 'Nylon reforzado', '1.5 metros'],
    demoPriceCop: 34000,
    demoStock: 9,
    imageSrc: PRODUCT_IMAGES.correaPerro,
    imageAlt: 'Ilustración de correa resistente para perro con mosquetón metálico',
    sourceReference: 'Catálogo de ejemplo (N.º 7)',
  },
  {
    id: 'DEMO-04',
    name: 'Cama acolchada para perro',
    species: 'Perro',
    category: 'Descanso',
    shortDescription:
      'Cama mullida con bordes de soporte y funda lavable diseñada para brindar comodidad en el descanso diario.',
    attributes: ['Tamaño M (70×55 cm)', 'Tela lavable'],
    demoPriceCop: 115000,
    demoStock: 6,
    imageSrc: PRODUCT_IMAGES.camaPerro,
    imageAlt: 'Ilustración de cama acolchada en tono verde azulado para perro',
    sourceReference: 'Catálogo de ejemplo (N.º 10)',
  },
  {
    id: 'DEMO-05',
    name: 'Rascador compacto para gato',
    species: 'Gato',
    category: 'Juguetes',
    shortDescription:
      'Poste recubierto en cuerda sisal con base de felpa y pelota colgante para entretenimiento y cuidado de uñas.',
    attributes: ['Altura 45 cm', 'Sisal y felpa'],
    demoPriceCop: 79900,
    demoStock: 8,
    imageSrc: PRODUCT_IMAGES.rascadorGato,
    imageAlt: 'Ilustración de rascador compacto para gato con pelota colgante',
    sourceReference: 'Catálogo de ejemplo (N.º 16)',
  },
  {
    id: 'DEMO-06',
    name: 'Cepillo suave para gato',
    species: 'Gato',
    category: 'Higiene',
    shortDescription:
      'Cepillo de cerdas con puntas redondeadas pensado para retirar pelo suelto cuidando la piel sensible.',
    attributes: ['Cerdas suaves', 'Uso diario'],
    demoPriceCop: 26500,
    demoStock: 17,
    imageSrc: PRODUCT_IMAGES.cepilloGato,
    imageAlt: 'Ilustración de cepillo suave de higiene para gato',
    sourceReference: 'Catálogo de ejemplo (N.º 18)',
  },
];
