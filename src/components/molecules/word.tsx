"use client";

import { HangmanContext } from "@/contexts/hagman.context";
import { normalizeLetter } from "@/utils/normalize-letter";
import { Loader } from "lucide-react";
import { useContext } from "react";

export const Word = () => {
  const context = useContext(HangmanContext);
  const letters = context.word.split("");

  const isGameOver = context.wrongs.length >= context.maxLifes;

  if (letters.length === 0) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div className="flex flex-row gap-2 justify-center">
      {letters.map((letter, index) => {
        const inGuessedLetters = context.guesses.includes(
          normalizeLetter(letter)
        );
        return (
          <span
            className="flex justify-center items-center w-8 h-8 border-b-2 border-gray-700 uppercase font-semibold"
            key={index}
          >
            {inGuessedLetters || isGameOver ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};
