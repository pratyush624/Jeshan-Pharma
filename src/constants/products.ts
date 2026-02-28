import type { Product } from '../types';

import aptijes from '../assets/product-images/aptijes.png';
import caljes from '../assets/product-images/caljes.png';
import jefer from '../assets/product-images/jefer.png';
import jescure from '../assets/product-images/jescure.png';
import jescureF from '../assets/product-images/jescure-f.png';
import jescureGold from '../assets/product-images/jescure-gold.png';
import jesflam from '../assets/product-images/jesflam.png';
import jesflamP from '../assets/product-images/jesflam-p.png';
import jespro from '../assets/product-images/jespro.png';
import ketojes from '../assets/product-images/ketojes.png';
import montesanLc from '../assets/product-images/montesan-lc.png';
import multijes from '../assets/product-images/multijes.png';
import multijesTab from '../assets/product-images/multijest-tab.png';
import nasojes from '../assets/product-images/nasojes.png';
import otofit from '../assets/product-images/otofit.png';

export const products: Product[] = [
  {
    id: 'aptijes',
    name: 'Aptijes',
    image: aptijes,
    category: 'General',
    description: 'Appetite stimulant formulation',
    orientation: 'landscape',
  },
  {
    id: 'caljes',
    name: 'Caljes',
    image: caljes,
    category: 'Supplements',
    description: 'Calcium supplement',
    orientation: 'landscape',
  },
  {
    id: 'jefer',
    name: 'Jefer',
    image: jefer,
    category: 'Supplements',
    description: 'Iron supplement formulation',
    orientation: 'landscape',
  },
  {
    id: 'jescure',
    name: 'Jescure',
    image: jescure,
    category: 'General',
    description: 'General wellness formulation',
    orientation: 'landscape',
  },
  {
    id: 'jescure-f',
    name: 'Jescure-F',
    image: jescureF,
    category: 'General',
    description: 'Fortified wellness formulation',
    orientation: 'landscape',
  },
  {
    id: 'jescure-gold',
    name: 'Jescure Gold',
    image: jescureGold,
    category: 'General',
    description: 'Premium wellness formulation',
    orientation: 'landscape',
  },
  {
    id: 'jesflam',
    name: 'Jesflam',
    image: jesflam,
    category: 'Pain Relief',
    description: 'Anti-inflammatory formulation',
    orientation: 'landscape',
  },
  {
    id: 'jesflam-p',
    name: 'Jesflam-P',
    image: jesflamP,
    category: 'Pain Relief',
    description: 'Pain relief formulation',
    orientation: 'portrait',
  },
  {
    id: 'jespro',
    name: 'Jespro',
    image: jespro,
    category: 'Supplements',
    description: 'Protein supplement',
    orientation: 'landscape',
  },
  {
    id: 'ketojes',
    name: 'Ketojes',
    image: ketojes,
    category: 'General',
    description: 'Antifungal formulation',
    orientation: 'landscape',
  },
  {
    id: 'montesan-lc',
    name: 'Montesan-LC',
    image: montesanLc,
    category: 'Respiratory',
    description: 'Respiratory care formulation',
    orientation: 'landscape',
  },
  {
    id: 'multijes',
    name: 'Multijes',
    image: multijes,
    category: 'Supplements',
    description: 'Multivitamin syrup',
    orientation: 'portrait',
  },
  {
    id: 'multijes-tab',
    name: 'Multijes Tab',
    image: multijesTab,
    category: 'Supplements',
    description: 'Multivitamin tablets',
    orientation: 'landscape',
  },
  {
    id: 'nasojes',
    name: 'Nasojes',
    image: nasojes,
    category: 'Respiratory',
    description: 'Nasal care formulation',
    orientation: 'portrait',
  },
  {
    id: 'otofit',
    name: 'Otofit',
    image: otofit,
    category: 'General',
    description: 'Ear care formulation',
    orientation: 'portrait',
  },
];
