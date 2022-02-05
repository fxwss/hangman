import { RefreshIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Button from '../components/atoms/Button';
import Fade from '../components/atoms/Fade';
import Keyboard from '../components/organisms/Keyboard';
import Lifes from '../components/organisms/Lifes';
import Word from '../components/organisms/Word';
import { useRandomWord } from '../hooks/useRandomWord';
import removeAccents from '../utils/removeAccents';

function allLetters() {
  return Array.from('abcdefghijklmnopqrstuvwxyzç');
}

function includesAll(word: string, letters: string[]) {
  word = removeAccents(word);
  word = word.toLowerCase().replace(/[-]/g, '');
  const wordLetters = Array.from(word);
  return wordLetters.every((letter) => letters.includes(letter));
}

const animations = {
  rotation: {
    rotate: -360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Hangman = () => {
  const [word, updateWord] = useRandomWord();
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lifes, setLifes] = useState(5);
  const [win, setWin] = useState(false);

  const addLetter = (letter: string) => {
    if (!removeAccents(word).includes(letter)) {
      setLifes((lifes) => lifes - 1);
    }
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
  };

  // Reset game
  useEffect(() => {
    setGuessedLetters([]);
    setLifes(5);
    setWin(false);
  }, [word]);

  // Win condition
  useEffect(() => {
    if (includesAll(word, guessedLetters) && lifes > 0) {
      setWin(true);
    }
  }, [guessedLetters, lifes]);

  // Lost condition
  useEffect(() => {
    if (lifes <= 0) {
      setGuessedLetters(allLetters());
    }
  }, [lifes]);

  if (!word) {
    return <></>;
  }

  return (
    <Fade>
      <div className="flex items-center flex-col justify-center h-screen gap-16">
        <div className="">
          <h1
            className={`text-4xl font-bold ${win ? 'text-green-400' : 'text-red-500'} ${
              win || lifes <= 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {win ? 'Você venceu!' : 'Você perdeu!'}
          </h1>
        </div>

        <Word word={word} guessedLetters={guessedLetters} />

        <Lifes total={5} current={lifes} />

        <div className="flex flex-col gap-8">
          <Keyboard
            guessedLetters={lifes <= 0 || win ? allLetters() : guessedLetters}
            addLetter={addLetter}
          />

          <motion.div whileHover="rotation">
            {(lifes <= 0 || win) && (
              <Button
                onClick={() => updateWord()}
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
