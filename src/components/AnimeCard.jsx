// src/components/AnimeCard.jsx
import React from 'react';
import './AnimeCard.css';

const AnimeCard = ({ image, episode, name }) => (
  <div className="anime-card">
    <img src={image} alt={name} className="anime-image" />
    <div className="anime-info">
      <p>Episode: {episode}</p>
      <h3>{name}</h3>
    </div>
  </div>
);

export default AnimeCard;
