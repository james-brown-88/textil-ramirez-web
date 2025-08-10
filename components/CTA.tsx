
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-indigo-900">
      <div className="container mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          ¡Eleva tu Negocio Textil con Nosotros!
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
          Únete a la nueva era de la innovación y sostenibilidad. Contáctanos para comenzar tu transformación digital y acceder a nuestros catálogos exclusivos.
        </p>
        <a href="#contacto" className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Contáctanos Ahora
        </a>
      </div>
    </section>
  );
};

export default CTA;
