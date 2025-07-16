import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#B91C1C' }}>
            Contactez-Nous
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Nous serons ravis de vous accueillir à La Vagabonde. 
            N'hésitez pas à nous contacter pour toute question ou réservation.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-center">
            <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-stone-600" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Téléphone</h3>
            <a 
              href="tel:0618725748"
              className="text-stone-600 hover:text-red-700 transition-colors"
              style={{ '--hover-color': '#B91C1C' } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#B91C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#57534e';
              }}
            >
              06 18 72 57 48
            </a>
          </div>
          
          <div className="text-center">
            <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-stone-600" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: '#B91C1C' }}>Email</h3>
            <a 
              href="mailto:marieannickpoulin@yahoo.fr"
              className="text-stone-600 hover:text-red-700 transition-colors"
              style={{ '--hover-color': '#B91C1C' } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#B91C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#57534e';
              }}
            >
              marieannickpoulin@yahoo.fr
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#reservation-form"
            className="text-white px-8 py-3 rounded-sm transition-colors font-medium inline-block"
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
            Réserver Maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;