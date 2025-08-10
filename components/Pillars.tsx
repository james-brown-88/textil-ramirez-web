
import React from 'react';
import { PILLAR_DATA } from '../constants';
import type { PillarItem } from '../types';

const PillarCard: React.FC<PillarItem> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="text-indigo-600 mb-5 flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Pillars: React.FC = () => {
  return (
    <section id="sostenibilidad" className="py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nuestros Pilares de Innovación
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Combinamos tradición y vanguardia para redefinir la industria textil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLAR_DATA.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
