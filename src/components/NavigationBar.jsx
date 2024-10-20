// src/components/NavigationBar.jsx
import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => (
  <nav className="navbar">
    <h1>Anonime</h1>
    <a href="#">Home</a>
    <a href="#">List Anime</a>
    <div className="search-container">
      <input type="text" placeholder="Search anime or movie" />
    </div>
  </nav>
);

export default NavigationBar;
