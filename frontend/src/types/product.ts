export type PetSpecies = 'Perro' | 'Gato';

export type CategoryIconName =
  | 'bowl'
  | 'leash'
  | 'bed'
  | 'toy'
  | 'hygiene'
  | 'tag';

export interface DemoProduct {
  id: string;
  name: string;
  species: PetSpecies;
  category: string;
  shortDescription: string;
  attributes: string[];
  demoPriceCop: number;
  demoStock: number;
  imageSrc: string;
  imageAlt: string;
  sourceReference: string;
}

export interface VisualCategory {
  name: string;
  description: string;
  icon: CategoryIconName;
  accentClass: string;
}

export interface NavLinkItem {
  href: string;
  label: string;
}
