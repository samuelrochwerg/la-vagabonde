import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Un séjour merveilleux dans cette maison pleine de charme. L'accueil était chaleureux et les chambres magnifiques. Parfait pour découvrir Arles !",
      date: "Septembre 2024"
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      comment: "Emplacement idéal, à deux pas du centre historique. La maison respire l'authenticité et le petit déjeuner était délicieux. Nous reviendrons !",
      date: "Août 2024"
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Une adresse exceptionnelle ! Le jardin est un havre de paix et les propriétaires sont aux petits soins. Parfait pour un week-end romantique.",
      date: "Juillet 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
            Avis de nos hôtes
          </h2>
          <p className="text-stone-600">
            Découvrez les témoignages de ceux qui ont séjourné à La Vagabonde
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-stone-500">{review.date}</span>
              </div>
              <p className="text-stone-700 mb-4 italic">
                "{review.comment}"
              </p>
              <p className="text-stone-800 font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;