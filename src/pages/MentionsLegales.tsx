import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8" style={{ color: '#B91C1C' }}>Mentions Légales</h1>
        
        <div className="prose prose-stone max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Informations légales</h2>
            <div className="space-y-2 text-stone-700">
              <p><strong>Dénomination :</strong> La Vagabonde</p>
              <p><strong>Forme juridique :</strong> Maison d'hôtes</p>
              <p><strong>Adresse :</strong> 8 Rue Laurent Bonnement, 13200 Arles</p>
              <p><strong>Téléphone :</strong> <a 
                href="tel:0618725748"
                className="text-red-700 hover:text-red-800 transition-colors underline"
                style={{ color: '#B91C1C' }}
              >
                06 18 72 57 48
              </a></p>
              <p><strong>Email :</strong> <a 
                href="mailto:marieannickpoulin@yahoo.fr"
                className="text-red-700 hover:text-red-800 transition-colors underline"
                style={{ color: '#B91C1C' }}
              >
                marieannickpoulin@yahoo.fr
              </a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Responsable de la publication</h2>
            <div className="space-y-2 text-stone-700">
              <p><strong>Directeur de la publication :</strong> Marie-Annick Poulin</p>
              <p><strong>Contact :</strong> <a 
                href="mailto:marieannickpoulin@yahoo.fr"
                className="text-red-700 hover:text-red-800 transition-colors underline"
                style={{ color: '#B91C1C' }}
              >
                marieannickpoulin@yahoo.fr
              </a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Hébergement du site</h2>
            <div className="space-y-2 text-stone-700">
              <p>Ce site est hébergé par un prestataire technique.</p>
              <p>Les informations d'hébergement sont disponibles sur demande.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Propriété intellectuelle</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse 
                du directeur de la publication.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Responsabilité</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site remis à jour à différentes périodes de l'année.
              </p>
              <p>
                Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra 
                donc s'assurer de l'exactitude des informations auprès de La Vagabonde 
                et signaler toutes modifications du site qu'il jugerait utile.
              </p>
              <p>
                La Vagabonde n'est en aucun cas responsable de l'utilisation faite de 
                ces informations, et de tout préjudice direct ou indirect pouvant en découler.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Liens hypertextes</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web 
                en direction d'autres ressources présentes sur le réseau Internet ne 
                sauraient engager la responsabilité de La Vagabonde.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4" style={{ color: '#B91C1C' }}>Litiges</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Les présentes conditions du site web et votre utilisation de ce site 
                sont régies par la loi française. Tout litige portant sur l'utilisation 
                du site sera de la compétence exclusive des tribunaux d'Arles.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;