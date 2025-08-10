
import React from 'react';
import { PRODUCT_DATA } from '../constants';
import type { ProductItem } from '../types';

const ProductCard: React.FC<ProductItem> = ({ image, title, description, href }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform transition-shadow duration-300 hover:shadow-2xl">
    <div className="aspect-w-3 aspect-h-2">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <a href={href} className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group">
        Ver detalles <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>
  </div>
);


const Products: React.FC = () => {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nuestra Colección Exclusiva
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tejidos que inspiran creatividad y elevan la calidad de cada prenda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_DATA.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
