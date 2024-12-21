import React, { createContext, useContext, useState, useEffect } from 'react';

const GiftContext = createContext();

export function GiftProvider({ children }) {
  // Load gifts from localStorage on initial render
  const [gifts, setGifts] = useState(() => {
    const savedGifts = localStorage.getItem('gifts');
    return savedGifts ? JSON.parse(savedGifts) : [];
  });

  // Save gifts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(gifts));
  }, [gifts]);

  const addGift = (newGift) => {
    setGifts(prevGifts => [...prevGifts, { ...newGift, purchased: false }]);
  };

  const togglePurchased = (giftId) => {
    setGifts(prevGifts =>
      prevGifts.map(gift =>
        gift.id === giftId
          ? { ...gift, purchased: !gift.purchased }
          : gift
      )
    );
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift, togglePurchased }}>
      {children}
    </GiftContext.Provider>
  );
}

export const useGiftContext = () => useContext(GiftContext); 