import React from 'react';
import Presentation from '../components/Presentation';
import ImageCarousel from '../components/ImageCarousel';
import Rooms from '../components/Rooms';

const LaMaison = () => {
  return (
    <div>
      <Presentation />
      <ImageCarousel />
      <Rooms />
    </div>
  );
};

export default LaMaison;