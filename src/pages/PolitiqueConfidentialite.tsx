import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8" style={{ color: '#B91C1C' }}>Politique de Confidentialité</h1>
        
        <div className="prose prose-stone max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Introduction</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                La présente politique de confidentialité a pour but d'informer les utilisateurs 
                du site des données personnelles que nous recueillons, ainsi que les informations 
                suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Quelles données personnelles nous recueillons</li>
                <li>L'usage que nous faisons de ces données</li>
                <li>Qui a accès à ces données</li>
                <li>Les droits des utilisateurs du site</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Données personnelles collectées</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Les données personnelles que nous collectons sont les suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations de réservation (dates, nombre de personnes)</li>
                <li>Messages et demandes spécifiques</li>
              </ul>
              <p>
                Ces données sont collectées lorsque l'utilisateur :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remplit le formulaire de contact</li>
                <li>Effectue une demande de réservation</li>
                <li>Nous contacte par email ou téléphone</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Utilisation des données</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Les données personnelles que nous collectons et traitons ont pour finalité :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Traiter les demandes de réservation</li>
                <li>Répondre aux questions et demandes d'information</li>
                <li>Assurer le suivi de la relation client</li>
                <li>Améliorer nos services</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Partage des données</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Nous ne vendons, n'échangeons et ne transférons pas vos données personnelles 
                à des tiers, sauf dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Avec votre consentement explicite</li>
                <li>Pour répondre à une obligation légale</li>
                <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Conservation des données</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Nous conservons vos données personnelles pendant la durée nécessaire aux 
                finalités pour lesquelles elles ont été collectées, et conformément aux 
                obligations légales applicables.
              </p>
              <p>
                Les données de réservation sont conservées pendant 3 ans après la fin 
                du séjour, sauf obligation légale contraire.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Vos droits</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                <a 
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="text-red-700 hover:text-red-800 transition-colors underline"
                  style={{ color: '#B91C1C' }}
                >
                  marieannickpoulin@yahoo.fr
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Sécurité</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles 
                appropriées pour protéger vos données personnelles contre la destruction, 
                la perte, l'altération, la divulgation ou l'accès non autorisés.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Cookies</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                Les cookies sont de petits fichiers stockés sur votre appareil qui nous 
                aident à analyser l'utilisation du site.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies, 
                mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Contact</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Pour toute question concernant cette politique de confidentialité 
                ou le traitement de vos données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Par email : <a 
                  href="mailto:marieannickpoulin@yahoo.fr"
                  className="text-red-700 hover:text-red-800 transition-colors underline"
                  style={{ color: '#B91C1C' }}
                >
                  marieannickpoulin@yahoo.fr
                </a></li>
                <li>Par téléphone : <a 
                  href="tel:0618725748"
                  className="text-red-700 hover:text-red-800 transition-colors underline"
                  style={{ color: '#B91C1C' }}
                >
                  06 18 72 57 48
                </a></li>
                <li>Par courrier : 8 Rue Laurent Bonnement, 13200 Arles</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Modifications</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité 
                à tout moment. Les modifications prendront effet dès leur publication sur le site.
              </p>
              <p>
                <strong>Dernière mise à jour :</strong> Décembre 2024
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;