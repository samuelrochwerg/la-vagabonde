import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const images = [
    {
      src: '/maison-entiere-exterieur.jpg',
      alt: 'Façade extérieure de La Vagabonde'
    },
    {
      src: '/beau-jardin.jpg',
      alt: 'Jardin paisible avec table dressée pour le petit-déjeuner'
    },
    {
      src: '/rosiers.jpg',
      alt: 'Rosiers dans le jardin de La Vagabonde'
    },
    {
      src: '/salon.jpg',
      alt: 'Salon avec cheminée et décor brocante d\'époque'
    },
    {
      src: '/salle-a-manger-salon.jpg',
      alt: 'Salle à manger avec table dressée et escalier en colimaçon'
    },
    {
      src: '/salle-a-manger-jardin.jpg',
      alt: 'Table dressée dans le jardin pour le petit déjeuner'
    },
    {
      src: '/chambre-entiere-2.jpg',
      alt: 'Chambre avec cheminée - vue d\'ensemble'
    },
    {
      src: '/chambre-1.jpg',
      alt: 'Chambre avec lit à baldaquin et murs colorés rouge et bleu'
    },
    {
      src: '/lit-fait.jpg',
      alt: 'Lit à baldaquin préparé avec soin et linge blanc'
    },
    {
      src: '/haut-du-lit.jpg',
      alt: 'Détail du lit à baldaquin avec ciel de lit'
    },
    {
      src: '/table-the.jpg',
      alt: 'Coin bureau avec plateau de thé et livres'
    },
    {
      src: '/vaisselle-the.jpg',
      alt: 'Vaisselier ancien avec service à thé et porcelaine'
    },
    {
      src: '/miroir-salle-de-bain.jpg',
      alt: 'Salle de bain avec lavabo ancien et miroir'
    },
    {
      src: '/salle-de-bain-entiere.jpg',
      alt: 'Salle de bain avec papier peint fleuri et mobilier d\'époque'
    },
    {
      src: '/armoire1.jpg',
      alt: 'Armoire blanche d\'époque avec tissus à motifs dans la chambre'
    },
    {
      src: '/armoire2.jpg',
      alt: 'Commode ancienne en bois avec étagère murale et porcelaine'
    },
    {
      src: '/chaise-jardin.jpg',
      alt: 'Chaise en fer forgé avec coussin fleuri près de la fenêtre du jardin'
    },
    {
      src: '/chaises-chambres.jpg',
      alt: 'Fauteuils rouges à motifs dans le coin salon de la chambre'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
            Toutes les photos de notre maison
          </h2>
        </div>
        
        <div className="relative">
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-sm shadow-lg bg-stone-100">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain transition-opacity duration-500"
            />
          </div>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-stone-700" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
          >
            <ChevronRight className="h-6 w-6 text-stone-700" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-stone-700' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;