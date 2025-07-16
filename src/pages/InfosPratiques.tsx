import React from 'react';
import { Clock, Car, Heart, Coffee, Wifi, MapPin, Euro, ExternalLink, Plane, Train } from 'lucide-react';

const InfosPratiques = () => {
  return (
    <div>
      {/* Comment venir à La Vagabonde */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
              Comment venir à La Vagabonde ?
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
              <div className="bg-stone-50 p-6 rounded-sm shadow-sm max-w-md w-full">
                <h3 className="text-lg font-medium text-stone-800 mb-2">Adresse</h3>
                <p className="text-stone-700">
                  La Vagabonde<br />
                  8 Rue Laurent Bonnement<br />
                  13200 Arles
                </p>
              </div>
              <div className="bg-stone-200 rounded-sm shadow-lg overflow-hidden flex-shrink-0" style={{ width: '350px', height: '250px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8!2d4.6276!3d43.6761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6f50c7c8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s8%20Rue%20Laurent%20Bonnement%2C%2013200%20Arles%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de La Vagabonde à Arles"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="bg-stone-50 p-6 rounded-sm shadow-sm mb-8">
                <h3 className="text-xl font-serif mb-4" style={{ color: '#B91C1C' }}>Depuis la gare d'Arles</h3>
                <p className="text-stone-700 leading-relaxed">
                  Suivez les quais du Rhône depuis la gare SNCF d'Arles et arrivez à La Vagabonde en 15 minutes à pied. 
                  Si vous désirez réserver la place de parking près de "la Vagabonde", mettez vous en relation avec Marie-Annick pour l'itinéraire.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-stone-50 p-6 rounded-sm shadow-sm mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Plane className="h-6 w-6 text-stone-600" />
                  <h3 className="text-xl font-serif" style={{ color: '#B91C1C' }}>Depuis un aéroport</h3>
                </div>
                <div className="space-y-2 text-stone-700">
                  <p>45 minutes des aéroports de Marseille ou de Montpellier</p>
                  <p>20 minutes de l'aéroport de Nîmes-Garons</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-stone-50 p-6 rounded-sm shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Train className="h-6 w-6 text-stone-600" />
              <h3 className="text-xl font-serif" style={{ color: '#B91C1C' }}>Depuis une gare</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-700">
              <div className="space-y-2">
                <p>30 minutes depuis la gare TGV de Nîmes</p>
                <p>40 minutes de la gare TGV d'Avignon</p>
                <p>50 minutes de la gare TGV d'Aix en Provence</p>
              </div>
              <div className="space-y-2">
                <p>55 minutes de la gare TGV de Montpellier</p>
                <p className="font-medium">10 minutes à pied depuis la gare d'Arles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disponibilités */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
              Disponibilités
            </h2>
            <div className="bg-stone-50 p-8 rounded-sm shadow-sm">
              <p className="text-lg text-stone-700 mb-6">
                Pour connaître nos disponibilités, veuillez nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="tel:0618725748"
                  className="text-white px-6 py-3 rounded-sm transition-colors font-medium"
                  style={{ backgroundColor: '#B91C1C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#991B1B';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#B91C1C';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  06 18 72 57 48
                </a>
                <a
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="border-2 px-6 py-3 rounded-sm transition-colors font-medium"
                  style={{ borderColor: '#B91C1C', color: '#B91C1C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B91C1C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#B91C1C';
                  }}
                >
                  marieannickpoulin@yahoo.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos et actualités sur Arles */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
              Infos et actualités sur Arles
            </h2>
            <p className="text-stone-600">
              Ville d'Art et d'Histoire, importante à différentes époques, Arles a gardé un urbanisme historique. Toutes ces périodes sont encore visibles en parcourant ses rues et ses places.
            </p>
            
            {/* Image of Arles quays */}
            <div className="mt-8 mb-8">
              <img
                src="/quais-arles.jpg"
                alt="Les quais d'Arles au coucher du soleil avec vue sur le Rhône"
                className="w-full h-64 lg:h-80 object-contain rounded-sm shadow-lg mx-auto bg-stone-100"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Patrimoine et tourisme</h3>
              <div className="space-y-3">
                <a
                  href="https://www.patrimoine.ville-arles.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Site du patrimoine</span>
                </a>
                <a
                  href="https://www.arlestourisme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Office de tourisme</span>
                </a>
                <a
                  href="https://www.ville-arles.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Vie culturelle et actualité</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Transport écologique</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-stone-700 mb-2">Circulez en ville écologiquement avec le TACO VELO :</p>
                  <a
                    href="https://www.tacoandco.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors mb-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>www.tacoandco.fr</span>
                  </a>
                  <p className="text-stone-600 text-sm">
                    Tél : <a 
                      href="tel:0650296000"
                      className="text-stone-700 hover:text-red-700 transition-colors underline"
                    >
                      06 50 29 60 00
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Visites guidées</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-stone-700 mb-2">Envie de découvrir Arles ? Contactez Alice Vallat, "les visites d'Alice", conférencière agréée par le Ministère de la Culture :</p>
                  <div className="space-y-1">
                    <a
                      href="https://www.lesvisitesdalice.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>www.lesvisitesdalice.com</span>
                    </a>
                    <a
                      href="https://www.guidearles.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>www.guidearles.com</span>
                    </a>
                    <p className="text-stone-600 text-sm">
                      Tél : <a 
                        href="tel:0674012254"
                        className="text-stone-700 hover:text-red-700 transition-colors underline"
                      >
                        06 74 01 22 54
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#B91C1C' }}>Culture et cinéma</h3>
              <div className="space-y-3">
                <a
                  href="https://www.actes-sud.fr/cinemas-actes-sud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Programme cinémas Actes-Sud</span>
                </a>
                <a
                  href="https://www.fondation-vincentvangogh-arles.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-700 hover:text-red-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Fondation Van Gogh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfosPratiques;