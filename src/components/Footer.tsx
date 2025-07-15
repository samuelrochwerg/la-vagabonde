import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white border-t-4" style={{ borderTopColor: '#B91C1C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-red-400" style={{ color: '#FCA5A5' }} />
              <span className="text-xl font-serif text-red-400" style={{ color: '#FCA5A5' }}>
                La Vagabonde
              </span>
            </Link>
            <p className="text-stone-300 leading-relaxed">
              Maison d'hôtes au cœur d'Arles.<br />
              Séjournez dans une demeure authentique à deux pas du centre historique.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-red-400" style={{ color: '#FCA5A5' }}>Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" style={{ color: '#FCA5A5' }} />
                <a 
                  href="tel:0618725748"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                  style={{ '--hover-color': '#FCA5A5' } as React.CSSProperties}
                >
                  06 18 72 57 48
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" style={{ color: '#FCA5A5' }} />
                <a 
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                  style={{ '--hover-color': '#FCA5A5' } as React.CSSProperties}
                >
                  marieannickpoulin@yahoo.fr
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8" style={{ borderTopColor: '#B91C1C' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 La Vagabonde. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/mentions-legales" 
                className="text-stone-400 hover:text-red-400 text-sm transition-colors"
                style={{ '--hover-color': '#FCA5A5' } as React.CSSProperties}
              >
                Mentions légales
              </Link>
              <Link 
                to="/politique-confidentialite" 
                className="text-stone-400 hover:text-red-400 text-sm transition-colors"
                style={{ '--hover-color': '#FCA5A5' } as React.CSSProperties}
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;