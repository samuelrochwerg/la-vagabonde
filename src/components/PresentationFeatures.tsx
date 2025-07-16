import React from 'react';
import { Leaf, Coffee, Wifi, UtensilsCrossed, Car, MapPin } from 'lucide-react';

const PresentationFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Jardin paisible</h3>
          <p className="text-stone-600 text-sm lg:text-base">Un espace vert calme pour se détendre ou manger</p>
        </div>
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Coffee className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Petit Déjeuner</h3>
          <p className="text-stone-600 text-sm lg:text-base">Jus de fruits frais ou artisanaux, viennoiseries, pains spéciaux, yahourts maison, salade de fruits frais, confiture maison, thés et cafés bio.</p>
        </div>
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wifi className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Wifi</h3>
          <p className="text-stone-600 text-sm lg:text-base">Connexion internet haut débit dans toute la maison</p>
        </div>
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Salle à Manger</h3>
          <p className="text-stone-600 text-sm lg:text-base">Petit déjeuner au coin du feu en hiver, dans le jardin les beaux jours.</p>
        </div>
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Parking</h3>
          <p className="text-stone-600 text-sm lg:text-base">Parking public gratuit à proximité. Ou place de parking fermé à 12 euros par jour.</p>
        </div>
        <div className="text-center">
          <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-stone-600" />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>À deux pas du centre</h3>
          <p className="text-stone-600 text-sm lg:text-base">En marchant quelques minutes, vous serez dans le centre historique d'Arles</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationFeatures; 