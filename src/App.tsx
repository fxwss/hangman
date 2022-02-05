import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HangmanPage from './pages/Hangman';
import IndexPage from './pages/Index';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<IndexPage />} />
        <Route path="hangman" element={<HangmanPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
