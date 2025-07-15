import React from 'react';
import { Bed, Wifi, Coffee, Car, Heart } from 'lucide-react';

const Rooms = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
            Nos chambres
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Deux chambres communicantes d'exception dans une demeure historique, 
            alliant charme d'antan et confort moderne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-sm shadow-lg overflow-hidden">
            <img
              src="/chambre-1.jpg"
              alt="Chambre 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3" style={{ color: '#B91C1C' }}>
                Chambre 1
              </h3>
              <p className="text-stone-600 mb-4">
                Chambre romantique avec lit à baldaquin d'époque, 
                murs colorés et mobilier authentique.
              </p>
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-stone-500" />
                <span className="text-sm text-stone-600">Lit double</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-sm shadow-lg overflow-hidden">
            <img
              src="/chambre-2.jpg"
              alt="Chambre 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3" style={{ color: '#B91C1C' }}>
                Chambre 2
              </h3>
              <p className="text-stone-600 mb-4">
                Chambre spacieuse avec cheminée d'époque, 
                tons apaisants et atmosphère cosy.
              </p>
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-stone-500" />
                <span className="text-sm text-stone-600">Lit double</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Chambre d'hôtes entre ville et jardin */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif mb-6" style={{ color: '#B91C1C' }}>
            Chambre d'hôtes entre ville et jardin
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
          <div className="bg-white rounded-sm shadow-lg overflow-hidden">
            <img
              src="/beau-jardin.jpg"
              alt="Jardin paisible de La Vagabonde avec allée en pierre"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-serif mb-3" style={{ color: '#B91C1C' }}>
                Notre jardin paisible
              </h4>
              <p className="text-stone-600">
                Un havre de paix au cœur d'Arles, parfait pour savourer le petit-déjeuner 
                aux beaux jours ou se détendre après une journée de visite.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-sm shadow-lg overflow-hidden">
            <img
              src="/salle-a-manger-jardin copy.jpg"
              alt="Table dressée pour le petit-déjeuner dans le jardin"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-serif mb-3" style={{ color: '#B91C1C' }}>
                Petit-déjeuner raffiné
              </h4>
              <p className="text-stone-600">
                Un petit-déjeuner soigné servi dans la vaisselle d'époque, 
                au coin du feu en hiver ou dans le jardin aux beaux jours.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-sm shadow-lg p-8">
          <div className="text-stone-700 leading-relaxed space-y-4">
            <h4 className="text-xl font-serif mb-6 text-center" style={{ color: '#B91C1C' }}>
              Petit-déjeuner local & fait maison
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Jus de fruits frais ou artisanaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Meilleures viennoiseries de la ville ou brioche maison</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Pains spéciaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Yaourts maison</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Salade de fruits frais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Confiture maison</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full" style={{ backgroundColor: '#B91C1C' }}></div>
                  <span>Thés et cafés issus de l'agriculture biologique ou équitable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;