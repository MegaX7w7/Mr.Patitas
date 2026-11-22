import alimentoGato from './alimento-gato.svg';
import camaPerro from './cama-perro.svg';
import cepilloGato from './cepillo-gato.svg';
import correaPerro from './correa-perro.svg';
import rascadorGato from './rascador-gato.svg';
import snacksPerro from './snacks-perro.svg';

/**
 * Registro centralizado de imágenes locales de productos.
 * Al importarse como módulos estáticos, Vite y vite-plugin-singlefile
 * incrustan automáticamente cada imagen dentro de entrega/MrPatitas.html.
 */
export const PRODUCT_IMAGES = {
  alimentoGato,
  snacksPerro,
  correaPerro,
  camaPerro,
  rascadorGato,
  cepilloGato,
} as const;

export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
