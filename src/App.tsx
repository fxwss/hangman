import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/Theme';
import HangmanPage from './pages/Index';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeContextProvider>
        <div className="flex flex-col dark:bg-zinc-800 dark:text-white transition min-h-screen w-screen">
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<HangmanPage />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </AnimatePresence>
  );
}

export default App;
