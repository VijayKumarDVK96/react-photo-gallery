// src/components/MasonryGrid.js
import React from 'react';

const MasonryGrid = ({ images, openModal }) => {
  return (
    <div className="masonry-grid">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="masonry-item"
          onClick={() => openModal(index)} 
        >
          <img src={image.src} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
