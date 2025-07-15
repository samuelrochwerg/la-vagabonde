import React, { useState } from 'react';
import ContactComponent from '../components/Contact';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    message: ''
  });

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
      <ContactComponent />
      
      {/* Reservation Form - Same as homepage */}
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
                  className="transition-colors underline"
                  style={{ color: '#B91C1C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#991B1B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B91C1C';
                  }}
                >
                  06 18 72 57 48
                </a>. Nous vous répondrons au plus vite.
              </p>
              <p>
                Vous pouvez aussi remplir le formulaire de contact ci-dessous ou nous envoyer un mail (
                <a 
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="transition-colors underline"
                  style={{ color: '#B91C1C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#991B1B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B91C1C';
                  }}
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
                  className="text-white px-8 py-3 rounded-sm transition-colors font-medium inline-flex items-center space-x-2"
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

export default Contact;