
import React from 'react';
import type { NavLink, PillarItem, ProductItem } from './types';

// Icons
export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.32-6.682M12 3a9.004 9.004 0 00-8.32 6.682" />
  </svg>
);

export const ChipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-9h-3m-6 0H6" />
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-12v4m2-2h-4m2 6h4m-2-2v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    </svg>
);


// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { href: '#productos', label: 'Productos' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#sostenibilidad', label: 'Sostenibilidad' },
  { href: '#contacto', label: 'Contacto' },
];

// Pillars Data
export const PILLAR_DATA: PillarItem[] = [
  {
    icon: <LeafIcon className="w-10 h-10" />,
    title: 'Algodón Orgánico Cuántico',
    description: 'Comprometidos con el planeta, usamos materiales puros y procesos sostenibles para un futuro más verde y consciente.',
  },
  {
    icon: <ChipIcon className="w-10 h-10" />,
    title: 'Trazabilidad Inmutable',
    description: 'Con tecnología blockchain, garantizamos la procedencia y autenticidad de cada hilo, ofreciendo transparencia total.',
  },
  {
    icon: <SparklesIcon className="w-10 h-10" />,
    title: 'Compra Personalizada',
    description: 'Una experiencia de compra a tu medida. Elige tallas, colores y diseños de forma fácil e intuitiva en nuestra plataforma.',
  },
];

// Products Data
export const PRODUCT_DATA: ProductItem[] = [
  {
    image: 'https://picsum.photos/seed/cotton/600/400',
    title: 'Tejido de Algodón Premium',
    description: 'Un tejido suave y resistente, ideal para la confección de prendas de alta calidad que perduran en el tiempo.',
    href: '#',
  },
  {
    image: 'https://picsum.photos/seed/linen/600/400',
    title: 'Mezcla de Lino y Algodón',
    description: 'Perfecto para prendas de verano. Fresco, transpirable y con una caída elegante. Disponible en una amplia gama de colores.',
    href: '#',
  },
  {
    image: 'https://picsum.photos/seed/silk/600/400',
    title: 'Tela de Seda Orgánica',
    description: 'Lujo y sostenibilidad en un solo tejido. Ideal para creaciones exclusivas y de alta costura que destacan por su brillo y suavidad.',
    href: '#',
  },
];
