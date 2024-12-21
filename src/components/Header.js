import React from 'react';
import headerBg from '../assets/header-bg.jpeg';

function Header({ onAddClick }) {
  return (
    <header className="App-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="header-content">
        <div className="unwrap-animation">
          <h1>It's ✨ Giving ✨ Season</h1>
        </div>
      </div>
      <button className="add-button" onClick={onAddClick}>
        +
      </button>
    </header>
  );
}

export default Header; 