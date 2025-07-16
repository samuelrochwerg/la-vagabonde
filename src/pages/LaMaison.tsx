import React from 'react';
import Presentation from '../components/Presentation';
import ImageCarousel from '../components/ImageCarousel';
import Rooms from '../components/Rooms';
import PresentationFeatures from '../components/PresentationFeatures';

const LaMaison = () => {
  return (
    <div>
      <ImageCarousel />
      <PresentationFeatures />
      <div className="mb-8" />
      <Rooms />
    </div>
  );
};

export default LaMaison;