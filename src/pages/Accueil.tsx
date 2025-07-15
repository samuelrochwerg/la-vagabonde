import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';

const Accueil = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    message: ''
  });
  
  const images = [
    {
      src: '/beau-jardin.jpg',
      alt: 'Jardin paisible avec table dressée pour le petit-déjeuner'
    },
    {
      src: '/salon copy.jpg',
      alt: 'Salon avec cheminée et décor brocante d\'époque'
    },
    {
      src: '/salle-a-manger-salon.jpg',
      alt: 'Salle à manger avec table dressée et escalier en colimaçon'
    },
    {
      src: '/salle-de-bain-entiere.jpg',
      alt: 'Salle de bain avec papier peint fleuri et mobilier d\'époque'
    },
    {
      src: '/chambre-1.jpg',
      alt: 'Chambre avec lit à baldaquin et murs colorés rouge et bleu'
    },
    {
      src: '/chambre-2.jpg',
      alt: 'Chambre avec cheminée et décor authentique aux tons bleus'
    },
    {
      src: '/lit-fait.jpg',
      alt: 'Lit à baldaquin préparé avec soin et linge blanc'
    },
    {
      src: '/table-the.jpg',
      alt: 'Coin bureau avec plateau de thé et livres'
    },
    {
      src: '/vaisselle-the.jpg',
      alt: 'Vaisselier ancien avec service à thé et porcelaine'
    }
  ];

  const reviews = [
    {
      name: "Samuel",
      comment: "Superbe maison d'hôte au centre d'Arles. La responsable, Marie-Annick, s'est montrée très accueillante et nous a donné de superbes recommandations pour visiter la ville! Nous reviendrons."
    },
    {
      name: "Yann",
      comment: "Nous sommes venus à 2 couples pour les Rencontres de la Photo, et avons passé un excellent séjour chez Marie-Annick. L'accueil, les chambres, le petit-déjeuner, l'emplacement : tout était parfait. Nous recommandons chaudement."
    },
    {
      name: "Gabriel",
      comment: "Un voyage dans le temps agrémenté d'un petit déjeuner exceptionnel accompagné de musiques merveilleuses. Accueil d'une extrême gentillesse. À quelques pas des lieux touristiques arlésiens. Vous pouvez y séjourner en toute confiance."
    },
    {
      name: "Flo",
      comment: "Très bon accueil, chambre spacieuse, très joliment décorée et qui garde la fraicheur en cette période de l'année (début Aout). Rue calme et petit déjeuner excellent dans un charmant jardin ! Idéal pour une escapade à 2."
    },
    {
      name: "Minotandco",
      comment: "Superbe maison de ville très bien située au centre d'Arles, près du Rhône. Rue calme, chambre spacieuse, très propre. Petit déjeuner copieux et très bon (confiture de figues).La propriétaire est très accueillante et donne de bons conseils pour visiter Arles."
    },
    {
      name: "Eric",
      comment: "Une chambre d'hôte qui vous transporte au début du siècle précédent avec une propriétaire qui vous accueille sans manière mais de façon très généreuse, discrète mais pourvoyeuse de bons conseils, et qui connait très bien sa ville."
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextReviews = () => {
    const maxIndex = Math.max(0, reviews.length - 3);
    setCurrentReviewIndex((prevIndex) => Math.min(prevIndex + 3, maxIndex));
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent('Demande de réservation - La Vagabonde');
    const body = encodeURIComponent(`
Bonjour,

Je souhaite faire une demande de réservation pour La Vagabonde.

Informations de contact :
- Nom : ${formData.name}
- Email : ${formData.email}
- Téléphone : ${formData.phone || 'Non renseigné'}

Détails du séjour :
- Dates souhaitées : ${formData.dates || 'À définir'}
- Nombre de personnes : ${formData.guests || 'Non renseigné'}

Message :
${formData.message || 'Aucun message particulier'}

Cordialement,
${formData.name}
    `);
    
    // Open email client with pre-filled content
    window.location.href = `mailto:marieannickpoulin@yahoo.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      {/* Hero Section with Photomontage */}
      <section className="relative bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
                La Vagabonde
                <span className="block text-2xl lg:text-3xl text-stone-600 mt-2">
                  Maison d'hôtes - Bed and Breakfast à Arles
                </span>
              </h1>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Découvrez Arles et la Camargue en séjournant à La Vagabonde, chambres d'hôtes au cœur du centre historique arlésien
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/la-maison"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-white px-8 py-3 rounded-sm transition-colors font-medium text-center"
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
                  Découvrir la maison
                </Link>
                <a 
                  href="#reservation-form"
                  className="border-2 px-8 py-3 rounded-sm transition-colors font-medium text-center"
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
                  Réserver
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/maison-entiere-exterieur.jpg"
                  alt="Façade extérieure de La Vagabonde"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-sm shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Presentation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
              Notre maison d'hôtes
            </h2>
            <div className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto space-y-4 text-center">
              <p>
                Au cœur du centre historique d'Arles, proche des rues piétonnes et commerçantes, la chambre d'hôtes "La Vagabonde" est idéalement située pour faire du tourisme culturel, découvrir des adresses gourmandes, participer aux événements se déroulant à Arles et ses environs.
              </p>
              <p>
                Ses monuments antiques et médiévaux, son centre ville, sont classés au patrimoine de l'Humanité.
              </p>
              <p>
                Visites guidées thématiques et familiales proposées par Alice, conférencière agréée par le Ministère de la Culture.
              </p>
              <p>
                Marie-Annick, originaire de Bourgogne et grande admiratrice de l'univers de l'écrivain Colette, vous accueillera dans un décor hors du temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
              Un aperçu de l'atmosphère unique de La Vagabonde
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

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ color: '#B91C1C' }}>
                Emplacement privilégié
              </h2>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                La Vagabonde bénéficie d'un emplacement exceptionnel au cœur d'Arles, 
                à seulement quelques minutes à pied du centre historique. Découvrez 
                facilement les arènes romaines, les musées, les marchés provençaux 
                et tous les trésors de cette ville chargée d'histoire.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-stone-700">Centre historique : 5 minutes à pied</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-stone-700">Arènes d'Arles : 7 minutes à pied</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-stone-700">Théâtre antique : 8 minutes à pied</span>
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
                title="Localisation de La Vagabonde à Arles"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
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
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
                <div key={currentReviewIndex + index} className="bg-stone-50 p-6 rounded-sm shadow-sm relative">
                  <Quote className="h-8 w-8 text-stone-300 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {renderStars(5)}
                    </div>
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
            
            {/* Navigation buttons */}
            {reviews.length > 3 && (
              <>
                <button
                  onClick={prevReviews}
                  disabled={currentReviewIndex === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-2 rounded-full shadow-md transition-all ${
                    currentReviewIndex === 0 
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                      : 'bg-white hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextReviews}
                  disabled={currentReviewIndex >= reviews.length - 3}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-2 rounded-full shadow-md transition-all ${
                    currentReviewIndex >= reviews.length - 3 
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                      : 'bg-white hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            
            {/* Dots indicator */}
            {reviews.length > 3 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentReviewIndex / 3) === index ? 'bg-stone-700' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* External Review Links */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
              <a
                href="https://www.tripadvisor.fr/Hotel_Review-g187211-d3348999-Reviews-La_Vagabonde-Arles_Bouches_du_Rhone_Provence_Alpes_Cote_d_Azur.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 text-stone-700 hover:text-red-700 transition-colors"
              >
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-600 mb-1">4,7/5 • 41 avis</p>
                </div>
                <span className="font-medium underline decoration-2 underline-offset-4" style={{ textDecorationColor: '#B91C1C' }}>
                  Découvrez nos avis sur Tripadvisor
                </span>
              </a>
              <a
                href="https://www.booking.com/reviews/fr/hotel/la-vagabonde.fr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 text-stone-700 hover:text-red-700 transition-colors"
              >
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-600 mb-1">9,6/10 • 27 avis</p>
                </div>
                <span className="font-medium underline decoration-2 underline-offset-4" style={{ textDecorationColor: '#B91C1C' }}>
                  Découvrez nos avis sur Booking
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Reservation Form */}
      <section id="reservation-form" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
              Demande de réservation
            </h2>
            <div className="text-stone-600 space-y-2">
              <p>
                Nous pouvons vous accueillir tout au long de l'année, sous réserve de disponibilités.
              </p>
              <p>
                Pour réserver, vous pouvez envoyer un message ou appeler le <a 
                  href="tel:0618725748"
                  className="text-red-700 hover:text-red-800 transition-colors underline"
                  style={{ color: '#B91C1C' }}
                >
                  06 18 72 57 48
                </a>. Nous vous répondrons au plus vite.
              </p>
              <p>
                Vous pouvez aussi remplir le formulaire de contact ci-dessous ou nous envoyer un mail (
                <a 
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="text-red-700 hover:text-red-800 transition-colors underline"
                  style={{ color: '#B91C1C' }}
                >
                  marieannickpoulin@yahoo.fr
                </a>
                )
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
                    Nombre de personnes
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  >
                    <option value="">Sélectionner</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="dates" className="block text-sm font-medium text-stone-700 mb-2">
                  Dates souhaitées
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  placeholder="Ex: du 15 au 20 juillet 2024"
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Parlez-nous de votre séjour, vos besoins particuliers..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-700 text-white px-8 py-3 rounded-sm hover:bg-red-800 transition-colors font-medium inline-flex items-center space-x-2"
                  style={{ backgroundColor: '#B91C1C' }}
                >
                  <Send className="h-4 w-4" />
                  <span>Envoyer la demande</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;