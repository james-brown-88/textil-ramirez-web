
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-white text-lg font-bold mb-4">Textil Ramírez</h5>
            <p className="text-sm leading-relaxed">Innovación y tradición en la industria textil, creando el futuro de la moda sostenible.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-3">
              <li><a href="#productos" className="hover:text-indigo-400 transition-colors">Productos</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-indigo-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#sostenibilidad" className="hover:text-indigo-400 transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Síguenos</h5>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Contacto</h5>
            <ul className="space-y-3 text-sm">
                <li>Email: <a href="mailto:info@textilramirez.com" className="hover:text-indigo-400">info@textilramirez.com</a></li>
                <li>Teléfono: <a href="tel:+34911234567" className="hover:text-indigo-400">+34 91 123 45 67</a></li>
                <li>C/ Ficticia, 123, Madrid, España</li>
            </ul>
          </div>

        </div>
        <div className="text-center mt-16 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Textil Ramírez S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
