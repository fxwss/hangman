import { useEffect, useState } from 'react';
import allLetters from '../utils/allLetters';
import removeAccents from '../utils/removeAccents';
import { useRandomWord } from './useRandomWord';

function includesAll(word: string, letters: string[]) {
  word = removeAccents(word);
  word = word.toLowerCase().replace(/[-]/g, '');
  const wordLetters = Array.from(word);
  return wordLetters.every((letter) => letters.includes(letter));
}

const possibilities = allLetters();

export function useHangman(initialLifes = 5) {
  const [word, updateWord] = useRandomWord();
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lifes, setLifes] = useState(initialLifes);
  const [win, setWin] = useState(false);

  const addLetter = (letter: string) => {
    if (possibilities.includes(letter) && !guessedLetters.includes(letter)) {
      if (!removeAccents(word).includes(letter)) {
        setLifes((lifes) => lifes - 1);
      }
      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    }
  };

  // Reset game
  useEffect(() => {
    setGuessedLetters([]);
    setLifes(initialLifes);
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
      setGuessedLetters(possibilities);
    }
  }, [lifes]);

  return {
    word,
    updateWord,
    guessedLetters,
    addLetter,
    lifes,
    win,
  };
}
