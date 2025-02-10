"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from "react";

interface HangmanContextType {
  word: string;
  guesses: string[];
  maxLifes: number;
  lifes: number;
  wrongs: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  setWord: Dispatch<SetStateAction<string>>;
  updateWord: () => Promise<void>;
}

const voidFn = () => {};
const asyncVoidFn = async () => {};

export const HangmanContext = createContext<HangmanContextType>({
  word: "",
  guesses: [],
  maxLifes: 0,
  lifes: 0,
  wrongs: [],
  setGuesses: voidFn,
  setWord: voidFn,
  updateWord: asyncVoidFn,
});

export const HangmanProvider = (
  props: PropsWithChildren<{ word?: string }>
) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [word, _setWord] = useState<string>(props.word ?? "");
  const maxLifes = 5;

  const wrongs = guesses.filter((letter) => !word.includes(letter));
  const lifes = maxLifes - wrongs.length;

  const setWord = useCallback((word: string | ((prev: string) => string)) => {
    _setWord(word);
    setGuesses([]);
  }, []);

  const updateWord = useCallback(async () => {
    const response = await fetch("/api/random-word");
    const data = await response.json();
    setWord(data.word);
  }, [setWord]);

  return (
    <HangmanContext.Provider
      value={{
        word,
        guesses,
        setGuesses,
        setWord,
        updateWord,
        maxLifes,
        wrongs,
        lifes,
      }}
    >
      {props.children}
    </HangmanContext.Provider>
  );
};
