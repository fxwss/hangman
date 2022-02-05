import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

type WordApiResponse = {
  wid: number;
  sense: number;
  word: string;
};

type UseRandomWordReturn = [string, () => void];

export const useRandomWord = (): UseRandomWordReturn => {
  const [word, setWord] = useState('');

  // useCallback is used to prevent the function from re-rendering.
  // Can also be called to get a new word.
  const getRandomWord = useCallback(async () => {
    setWord('');
    const response = await axios.get<WordApiResponse>('https://api.dicionario-aberto.net/random');
    setWord(response.data.word);
  }, []);

  // Get a random word on component mount
  useEffect(() => {
    getRandomWord();
  }, []);

  return [word, getRandomWord];
};
