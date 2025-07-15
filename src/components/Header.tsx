import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleTarifsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = '/#tarifs';
    } else {
      // If on homepage, scroll to tarifs section
      const tarifsSection = document.getElementById('tarifs');
      if (tarifsSection) {
        tarifsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    closeMobileMenu();
  };

  return (
    <header className="bg-white shadow-sm border-b-2 sticky top-0 z-50" style={{ borderBottomColor: '#B91C1C' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
            <Home className="h-6 w-6 text-red-700" style={{ color: '#B91C1C' }} />
            <span className="text-xl font-serif text-red-700" style={{ color: '#B91C1C' }}>
              La Vagabonde
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleLinkClick}
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-red-700 font-medium border-b-2 pb-1' 
                  : 'text-stone-700 hover:text-red-700'
              }`}
              style={isActive('/') ? { color: '#B91C1C', borderBottomColor: '#B91C1C' } : {}}
            >
              Accueil
            </Link>
            <Link 
              to="/la-maison" 
              onClick={handleLinkClick}
              className={`transition-colors ${
                isActive('/la-maison') 
                  ? 'text-red-700 font-medium border-b-2 pb-1' 
                  : 'text-stone-700 hover:text-red-700'
              }`}
              style={isActive('/la-maison') ? { color: '#B91C1C', borderBottomColor: '#B91C1C' } : {}}
            >
              La Maison
            </Link>
            <Link 
              to="/infos-pratiques" 
              onClick={handleLinkClick}
              className={`transition-colors ${
                isActive('/infos-pratiques') 
                  ? 'text-red-700 font-medium border-b-2 pb-1' 
                  : 'text-stone-700 hover:text-red-700'
              }`}
              style={isActive('/infos-pratiques') ? { color: '#B91C1C', borderBottomColor: '#B91C1C' } : {}}
            >
              Infos pratiques
            </Link>
            <Link 
              to="/tarifs" 
              onClick={handleLinkClick}
              className={`transition-colors ${
                isActive('/tarifs') 
                  ? 'text-red-700 font-medium border-b-2 pb-1' 
                  : 'text-stone-700 hover:text-red-700'
              }`}
              style={isActive('/tarifs') ? { color: '#B91C1C', borderBottomColor: '#B91C1C' } : {}}
            >
              Tarifs
            </Link>
            <Link 
              to="/contact" 
              onClick={handleLinkClick}
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-red-700 font-medium border-b-2 pb-1' 
                  : 'text-stone-700 hover:text-red-700'
              }`}
              style={isActive('/contact') ? { color: '#B91C1C', borderBottomColor: '#B91C1C' } : {}}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-stone-700 hover:text-red-700 hover:bg-stone-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-red-700 bg-red-50' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
                style={isActive('/') ? { color: '#B91C1C', backgroundColor: '#FEF2F2' } : {}}
              >
                Accueil
              </Link>
              <Link 
                to="/la-maison" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/la-maison') 
                    ? 'text-red-700 bg-red-50' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
                style={isActive('/la-maison') ? { color: '#B91C1C', backgroundColor: '#FEF2F2' } : {}}
              >
                La Maison
              </Link>
              <Link 
                to="/infos-pratiques" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/infos-pratiques') 
                    ? 'text-red-700 bg-red-50' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
                style={isActive('/infos-pratiques') ? { color: '#B91C1C', backgroundColor: '#FEF2F2' } : {}}
              >
                Infos pratiques
              </Link>
              <Link 
                to="/tarifs" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/tarifs') 
                    ? 'text-red-700 bg-red-50' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
                style={isActive('/tarifs') ? { color: '#B91C1C', backgroundColor: '#FEF2F2' } : {}}
              >
                Tarifs
              </Link>
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-red-700 bg-red-50' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
                style={isActive('/contact') ? { color: '#B91C1C', backgroundColor: '#FEF2F2' } : {}}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;