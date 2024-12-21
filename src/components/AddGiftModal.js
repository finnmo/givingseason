import React, { useState } from 'react';
import { useGiftContext } from '../context/GiftContext';

function AddGiftModal({ isOpen, onClose }) {
  const { addGift } = useGiftContext();
  const [newGift, setNewGift] = useState({
    title: '',
    description: '',
    imageUrl: '',
    storeUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newGift.title) {
      alert('Please enter at least a title');
      return;
    }
    
    addGift({ ...newGift, id: Date.now() });
    setNewGift({ title: '', description: '', imageUrl: '', storeUrl: '' });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Gift</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title *"
            value={newGift.title}
            onChange={(e) => setNewGift({...newGift, title: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newGift.imageUrl}
            onChange={(e) => setNewGift({...newGift, imageUrl: e.target.value})}
          />
          <input
            type="text"
            placeholder="Store URL"
            value={newGift.storeUrl}
            onChange={(e) => setNewGift({...newGift, storeUrl: e.target.value})}
          />
          <textarea
            placeholder="Description"
            value={newGift.description}
            onChange={(e) => setNewGift({...newGift, description: e.target.value})}
          />
          <div className="modal-buttons">
            <button type="submit">Add Gift</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddGiftModal; 