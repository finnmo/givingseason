// In your component
const fetchGifts = async () => {
  try {
    const response = await fetch('/api/gifts');
    const gifts = await response.json();
    setGifts(gifts);
  } catch (error) {
    console.error('Error fetching gifts:', error);
  }
};

const updateGift = async (gift) => {
  try {
    await fetch('/api/updateGift', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gift),
    });
    fetchGifts(); // Refresh the list
  } catch (error) {
    console.error('Error updating gift:', error);
  }
}; 