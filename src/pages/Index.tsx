import { RefreshIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import Fade from '../components/atoms/Fade';
import Header from '../components/molecules/Header';
import Keyboard from '../components/organisms/Keyboard';
import Lifes from '../components/organisms/Lifes';
import Word from '../components/organisms/Word';
import { useHangman } from '../hooks/useHangman';
import { useKeyboard } from '../hooks/useKeyboard';
import allLetters from '../utils/allLetters';

const animations = {
  rotate: {
    rotate: -360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Hangman = () => {
  const [initialLifes] = useState(5);

  const { word, updateWord, lifes, guessedLetters, addLetter, win } = useHangman(initialLifes);

  useKeyboard((event: KeyboardEvent) => addLetter(event.key));
  useKeyboard(() => (win || lifes <= 0) && updateWord(), [' ', 'Enter']);

  if (!word) {
    return <></>;
  }

  return (
    <Fade className="flex flex-col flex-1 w-full justify-between">
      <Header />
      <div className="flex flex-col my-auto items-center justify-center gap-16 px-4 md:px-0">
        <h1
          className={`text-4xl font-bold ${win ? 'text-green-400' : 'text-red-500'} ${
            win || lifes <= 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {win ? 'Você venceu!' : 'Você perdeu!'}
        </h1>

        <Word word={word} guessedLetters={guessedLetters} />

        <Lifes total={initialLifes} current={lifes} />

        <div className="flex flex-col gap-8">
          <Keyboard
            guessedLetters={lifes <= 0 || win ? allLetters() : guessedLetters}
            addLetter={addLetter}
          />

          <motion.div
            className="min-h-[40px] mx-auto max-w-max"
            whileHover="rotate"
            whileTap="rotate"
          >
            {(lifes <= 0 || win) && (
              <Button
                onClick={updateWord}
                className="bg-indigo-500 hover:bg-indigo-300 text-white hover:text-black flex gap-2 mx-auto"
              >
                Nova partida
                <motion.div className="flex" variants={animations}>
                  <RefreshIcon className="w-4 h-4 my-auto" />
                </motion.div>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </Fade>
  );
};

export default Hangman;
