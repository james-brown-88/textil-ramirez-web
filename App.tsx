
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
