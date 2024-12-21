export const theme = {
  colors: {
    primary: '#ff4d4d',
    secondary: '#4dff4d',
    background: '#fff5f5',
    text: '#333333',
    accent: '#ffcd4d'
  },
  patterns: {
    wrappingPaper: `
      background-color: #fff5f5;
      background-image: repeating-linear-gradient(45deg, #ff4d4d 25%, transparent 25%, transparent 75%, #ff4d4d 75%, #ff4d4d),
      repeating-linear-gradient(45deg, #ff4d4d 25%, #fff5f5 25%, #fff5f5 75%, #ff4d4d 75%, #ff4d4d);
      background-position: 0 0, 10px 10px;
      background-size: 20px 20px;
    `
  }
}; 