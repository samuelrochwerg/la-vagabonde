import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import LaMaison from './pages/LaMaison';
import InfosPratiques from './pages/InfosPratiques';
import Contact from './pages/Contact';
import Tarifs from './pages/Tarifs';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/la-maison" element={<LaMaison />} />
            <Route path="/infos-pratiques" element={<InfosPratiques />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;