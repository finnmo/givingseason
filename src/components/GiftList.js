import React from 'react';
import Gift from './Gift';
import { useGiftContext } from '../context/GiftContext';

function GiftList() {
  const { gifts } = useGiftContext();

  return (
    <div className="gifts-container">
      {gifts.map(gift => (
        <Gift key={gift.id} gift={gift} />
      ))}
    </div>
  );
}

export default GiftList; 