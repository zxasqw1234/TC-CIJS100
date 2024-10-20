// src/components/Popup.jsx
import React from 'react';
import './Popup.css'; // Import CSS for styling

const Popup = ({ isOpen, onClose, anime }) => {
  if (!isOpen) return null; // If not open, return null (nothing is rendered)

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{anime.name}</h2>
        <p>{anime.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
