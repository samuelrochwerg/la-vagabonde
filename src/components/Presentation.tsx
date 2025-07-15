import React from 'react';
import { Leaf, Coffee, Wifi, UtensilsCrossed, Car, MapPin } from 'lucide-react';

const Presentation = () => {
  return (
    <section id="maison" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
            Notre maison d'hôtes La Vagabonde
          </h2>
          
          {/* First section with salon image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="order-1 lg:order-1">
              <div className="text-base lg:text-lg text-stone-700 leading-relaxed space-y-4 text-left">
                <p>
                  Dans une maison bourgeoise des 17 et 18ème siècles, dans l'ancien quartier de marins de la Roquette, la chambre d'hôtes la "Vagabonde" est dans le centre historique d'Arles, proche des monuments antiques et du moyen-âge classés au patrimoine mondial, et des quais du Rhône, entre rue et jardin.
                </p>
                <p>
                  Elle comprend une chambre et une chambre communicante pouvant accueillir de 2 à 5 personnes. Salle de bains et WC privatifs. Entrée indépendante. Wifi gratuite.
                </p>
                <p>
                  La "Vagabonde" est non-fumeurs. Coin salon avec fauteuils et bureau. La salle de bain privative est équipée d'une douche et d'un sèche-cheveux. Plateau avec bouilloire, thés, tisanes.
                </p>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <img
                src="/salon.jpg"
                alt="Salon avec cheminée et décor brocante de La Vagabonde"
                className="w-full h-auto max-h-[400px] lg:max-h-[450px] object-contain rounded-sm shadow-lg bg-stone-50"
              />
            </div>
          </div>

          {/* Second section with garden image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src="/maison-entiere-exterieur.jpg"
                alt="Façade extérieure de La Vagabonde"
                className="w-full h-auto max-h-[400px] lg:max-h-[450px] object-contain rounded-sm shadow-lg bg-stone-50"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-base lg:text-lg text-stone-700 leading-relaxed space-y-4 text-left">
                <p>
                  Son décor brocante d'inspiration anglaise et campagnarde invite à un séjour hors du temps.
                </p>
                <p>
                  Le petit-déjeuner continental, composé de produits bio, faits maison et locaux, peut être dégusté dans la salle à manger, dans le jardin ou dans le confort de votre chambre.
                </p>
                <p>
                  Proche du musée de l'Arles antique, du musée des Beaux Arts, de la Fondation Van Gogh, du chemin de Saint-Jacques de Compostelle et des lieux peints par Van Gogh. Navette gratuite en centre ville. Un parking public payant est disponible à proximité. La gare d'Arles est à 1 km soit 15 minutes à pieds. La Vagabonde propose un garage fermé au prix de : 10 euros par jour.
                </p>
                <p>
                  Des guides et des ouvrages historiques et touristiques sont à la disposition des hôtes.
                </p>
                <p>
                  Beaux sites alentour : Avignon, Nîmes, Saint Rémy de Provence, les Baux de Provence...la Camargue
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Features section with full width */}
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
    </section>
  );
};

export default Presentation;