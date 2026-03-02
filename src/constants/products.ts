import type { Product } from '../types';

import aptijesDrops from '../assets/product-images/aptijes-drops.png';
import calijes from '../assets/product-images/calijes.png';
import jeferXt from '../assets/product-images/jefer-xt.png';
import jescure from '../assets/product-images/jescure.png';
import jescureF from '../assets/product-images/jescure-f.png';
import jescureCapsule from '../assets/product-images/jescure-capsule.png';
import jesflamSp from '../assets/product-images/jesflam-sp.png';
import jesflamP from '../assets/product-images/jesflam-p.png';
import jesproRd from '../assets/product-images/jespro-rd.png';
import ketojesDt from '../assets/product-images/ketojes-dt.png';
import montesanLc from '../assets/product-images/montesan-lc.png';
import multijesMultivitamin from '../assets/product-images/multijes-multivitamin.png';
import multijesSyrup from '../assets/product-images/multijes-syrup.png';
import nasojesS from '../assets/product-images/nasojes-s.png';
import otofitDrops from '../assets/product-images/otofit-drops.png';
import jeswax from '../assets/product-images/jeswax.png';
import orthosan from '../assets/product-images/orthosans.png';

export const products: Product[] = [
  {
    id: 'aptijes-drops',
    name: 'Aptijes Drops',
    image: aptijesDrops,
    category: 'General',
    description: 'Appetite stimulant formulation',
  },
  {
    id: 'calijes',
    name: 'Calijes',
    image: calijes,
    category: 'Supplements',
    description: 'Calcium supplement',
  },
  {
    id: 'jefer-xt',
    name: 'Jefer-XT',
    image: jeferXt,
    category: 'Supplements',
    description: 'Iron supplement formulation',
  },
  {
    id: 'jescure',
    name: 'Jescure',
    image: jescure,
    category: 'General',
    description: 'General wellness formulation',
  },
  {
    id: 'jescure-f',
    name: 'Jescure-F',
    image: jescureF,
    category: 'General',
    description: 'Fortified wellness formulation',
  },
  {
    id: 'jescure-capsule',
    name: 'Jescure Capsule',
    image: jescureCapsule,
    category: 'General',
    description: 'Premium wellness formulation',
  },
  {
    id: 'jesflam-sp',
    name: 'Jesflam-SP',
    image: jesflamSp,
    category: 'Pain Relief',
    description: 'Anti-inflammatory formulation',
  },
  {
    id: 'jesflam-p',
    name: 'Jesflam-P',
    image: jesflamP,
    category: 'Pain Relief',
    description: 'Pain relief formulation',
  },
  {
    id: 'jespro-rd',
    name: 'Jespro-RD',
    image: jesproRd,
    category: 'Supplements',
    description: 'Protein supplement',
  },
  {
    id: 'ketojes-dt',
    name: 'Ketojes-DT',
    image: ketojesDt,
    category: 'General',
    description: 'Antifungal formulation',
  },
  {
    id: 'montesan-lc',
    name: 'Montesan-LC',
    image: montesanLc,
    category: 'Respiratory',
    description: 'Respiratory care formulation',
  },
  {
    id: 'multijes-multivitamin',
    name: 'Multijes Multivitamin',
    image: multijesMultivitamin,
    category: 'Supplements',
    description: 'Multivitamin tablets',
  },
  {
    id: 'multijes-syrup',
    name: 'Multijes Syrup',
    image: multijesSyrup,
    category: 'Supplements',
    description: 'Multivitamin syrup',
  },
  {
    id: 'nasojes-s',
    name: 'Nasojes-S',
    image: nasojesS,
    category: 'Respiratory',
    description: 'Nasal care formulation',
  },
  {
    id: 'otofit-drops',
    name: 'Otofit Drops',
    image: otofitDrops,
    category: 'General',
    description: 'Ear care formulation',
  },
  {
    id: 'jeswax',
    name: 'Jeswax',
    image: jeswax,
    category: 'General',
    description: 'Ear drops formulation',
  },
  {
    id: 'orthosan',
    name: 'OrthoSan',
    image: orthosan,
    category: 'Pain Relief',
    description: 'Pain relief oil',
  },
];
