import React, { useState } from 'react';
import './ItemExplore.css';
import Popup from './Popup'; // Import the Popup component

const ItemExplore = ({ items }) => {
  const [selectedAnime, setSelectedAnime] = useState(null); // State for selected anime
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  // Filter to get the anime with id = 1
  const firstAnime = items.find(item => item.id === "1");

  const handleImageClick = (anime) => {
    setSelectedAnime(anime); // Set the selected anime
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedAnime(null); // Reset selected anime
  };

  return (
    <div className="item-explore">
      <h1 className="explore-title">Explore</h1>
      <h2 className="explore-subtitle">What are you going to watch today?</h2>
      {firstAnime && ( // Check if firstAnime exists
        <div className="explore-item">
          <img
            src={firstAnime.image}
            alt={firstAnime.name}
            className="explore-image"
            onClick={() => handleImageClick(firstAnime)} // Handle image click
          />
        </div>
      )}
      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        anime={selectedAnime} 
      />
    </div>
  );
};

export default ItemExplore;
