import React from 'react';
import './WorldMap.css';

const WorldMap = () => {
  return (
    <section className="worldwide-section">
      <div className="map-grid">
        <div className="map-grid-line"></div>
        <div className="map-grid-line"></div>
        <div className="map-grid-line"></div>
      </div>

      <div className="heading-container">
        <h2 className="worldwide-heading">
          <span className="text-dark">We Are</span>
          <span className="text-gold">Worldwide</span>
        </h2>
        <div className="zigzag-decoration"></div>
      </div>

      <div className="map-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
          alt="Dotted World Map" 
          className="map-image"
          style={{ filter: 'invert(90%) sepia(5%) saturate(10%) hue-rotate(320deg) brightness(95%)' }}
        />

        <div className="map-marker marker-1"></div>
        <div className="map-marker marker-2"></div>
        <div className="map-marker marker-3"></div>
        <div className="map-marker marker-4"></div>
        <div className="map-marker marker-5"></div>
        <div className="map-marker marker-6"></div>
        <div className="map-marker marker-7"></div>
        <div className="map-marker marker-8"></div>
        <div className="map-marker marker-9"></div>
      </div>
    </section>
  );
};

export default WorldMap;