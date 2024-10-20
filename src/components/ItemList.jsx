import React, { useState } from 'react';
import './ItemList.css';
import Popup from './Popup'; // Import the Popup component

const ItemList = ({ items }) => {
  const [selectedAnime, setSelectedAnime] = useState(null); // State to store the selected anime
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage pop-up visibility

  // Filter the items to only include those with IDs between 2 and 7
  const filteredItems = items.filter(item => parseInt(item.id) >= 2 && parseInt(item.id) <= 7);

  const handleCardClick = (anime) => {
    setSelectedAnime(anime); // Set the selected anime
    setIsPopupOpen(true); // Open the pop-up
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the pop-up
    setSelectedAnime(null); // Reset selected anime
  };

  return (
    <div className="item-list">
      <h3>New Release</h3>
      <div className="item-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="item-card" onClick={() => handleCardClick(item)}>
            <img src={item.image} alt={item.name} className="item-image" />
            <h4>{item.name}</h4>
            <p>Episode: {item.episode}</p>
          </div>
        ))}
      </div>
      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        anime={selectedAnime} 
      />
    </div>
  );
};

export default ItemList;
