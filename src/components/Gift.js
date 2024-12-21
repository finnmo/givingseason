import React from 'react';
import { useGiftContext } from '../context/GiftContext';

function Gift({ gift }) {
  const { togglePurchased } = useGiftContext();

  return (
    <div className={`gift-card ${gift.purchased ? 'purchased' : ''}`}>
      <div className="gift-header">
        <h2>{gift.title}</h2>
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={gift.purchased}
            onChange={() => togglePurchased(gift.id)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      {gift.imageUrl && (
        <a href={gift.storeUrl || '#'} target="_blank" rel="noopener noreferrer">
          <img src={gift.imageUrl} alt={gift.title} />
        </a>
      )}
      {gift.description && <p>{gift.description}</p>}
    </div>
  );
}

export default Gift; 