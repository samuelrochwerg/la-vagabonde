import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              La Vagabonde
              <span className="block text-2xl lg:text-3xl text-stone-600 mt-2">
                Maison d'hôtes à Arles
              </span>
            </h1>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Séjournez dans une maison ancienne pleine de charme, à deux pas du centre historique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/la-maison"
                className="bg-stone-700 text-white px-8 py-3 rounded-sm hover:bg-stone-800 transition-colors font-medium text-center"
              >
                Découvrir la maison
              </Link>
              <Link 
                to="/contact"
                className="border border-stone-700 text-stone-700 px-8 py-3 rounded-sm hover:bg-stone-700 hover:text-white transition-colors font-medium text-center"
              >
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/porte-entree-maison-hote.jpg"
                alt="Entrée de La Vagabonde"
                className="w-full h-96 lg:h-[500px] object-cover rounded-sm shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;