import React from 'react';
import { Users, Baby, Heart } from 'lucide-react';

const Tarifs = () => {
  return (
    <div>
      {/* Tarifs et conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
              Tarifs et conditions
            </h1>
            <p className="text-lg text-stone-700">
              Tarifs de la "Vagabonde" : petit déjeuner compris
            </p>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-sm shadow-sm mb-8">
            <h2 className="text-xl font-serif mb-6 text-center" style={{ color: '#B91C1C' }}>Tarifs par nuit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-stone-600" />
                    <span className="font-medium text-stone-800">1 personne</span>
                  </div>
                  <span className="text-lg font-medium text-stone-800">88€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-stone-600" />
                    <span className="font-medium text-stone-800">2 personnes</span>
                  </div>
                  <span className="text-lg font-medium text-stone-800">98€</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-stone-600" />
                    <span className="font-medium text-stone-800">3 personnes</span>
                  </div>
                  <span className="text-lg font-medium text-stone-800">123€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-stone-600" />
                    <span className="font-medium text-stone-800">4 personnes</span>
                  </div>
                  <span className="text-lg font-medium text-stone-800">158€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Frais supplémentaires</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-stone-700">Taxe de séjour (par personne/jour, +18 ans)</span>
                  <span className="font-medium text-stone-800">1€</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-700">Parking fermé sur demande (par jour)</span>
                  <span className="font-medium text-stone-800">12€</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Services gratuits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Baby className="h-5 w-5 text-stone-600" />
                  <span className="text-stone-700">Gratuit pour les enfants en-dessous de 2 ans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Baby className="h-5 w-5 text-stone-600" />
                  <span className="text-stone-700">Possibilité d'ajouter un lit pour bébé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-stone-600" />
                  <span className="text-stone-700">Animal accepté sur demande</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Tarifs;