
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative hero-bg-gradient text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down">
                Innovación Textil que Toca el Futuro
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-indigo-200 mb-8 animate-fade-in-up">
                Descubre nuestra nueva colección de "Algodón Orgánico Cuántico", donde la sostenibilidad se encuentra con la tecnología para crear una experiencia única.
            </p>
            <a href="#productos" className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                Explorar Colección
            </a>
        </div>
    </section>
  );
};

export default Hero;
