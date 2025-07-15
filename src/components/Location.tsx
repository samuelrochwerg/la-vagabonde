import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const Location = () => {
  return (
    <section id="infos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">
              Emplacement Privilégié
            </h2>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              À quelques minutes à pied du centre historique, La Vagabonde est le point de départ 
              idéal pour explorer les arènes, les marchés provençaux ou les Alpilles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-stone-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-stone-800">Adresse</h3>
                  <p className="text-stone-600">8 Rue Laurent Bonnement, 13200 Arles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-stone-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-stone-800">Centre historique</h3>
                  <p className="text-stone-600">5 minutes à pied</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Car className="h-6 w-6 text-stone-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-stone-800">Parking</h3>
                  <p className="text-stone-600">Disponible à proximité</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 lg:h-[400px] bg-stone-200 rounded-sm shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8!2d4.6276!3d43.6761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6f50c7c8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s8%20Rue%20Laurent%20Bonnement%2C%2013200%20Arles%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de La Vagabonde"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;