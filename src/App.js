import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import GiftList from './components/GiftList';
import AddGiftModal from './components/AddGiftModal';
import { GiftProvider } from './context/GiftContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GiftProvider>
        <Router>
          <GlobalStyles />
          <div className="App">
            <Header onAddClick={() => setIsModalOpen(true)} />
            <main>
              <GiftList />
            </main>
            {isModalOpen && (
              <AddGiftModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
              />
            )}
            <footer className="footer">
              <p>by Finn Morris</p>
            </footer>
          </div>
        </Router>
      </GiftProvider>
    </ThemeProvider>
  );
}

export default App; 