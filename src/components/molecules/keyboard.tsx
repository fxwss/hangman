"use client";

import { useContext } from "react";
import { Key } from "@/components/atoms/key";
import { HangmanContext } from "@/contexts/hagman.context";
import { useKeyboard } from "@/hooks/use-keyboard";
import { normalizeLetter } from "@/utils/normalize-letter";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const margins = ["md:ml-0", "md:ml-4", "md:ml-8"];

export const Keyboard = () => {
  const context = useContext(HangmanContext);

  useKeyboard((_, letter) => context.setGuesses((keys) => [...keys, letter]), {
    acceptableKeys: keys.flat(),
    transformer: (event) => normalizeLetter(event.key),
  });

  return (
    <div className="flex flex-col gap-2">
      {keys.map((row, index) => {
        const styles =
          "flex gap-2 justify-center md:justify-start " + margins[index];
        return (
          <div className={styles} key={index}>
            {row.map((key) => {
              const inGussedLetters = context.guesses.includes(key);
              return (
                <Key
                  onClick={() => context.setGuesses((keys) => [...keys, key])}
                  active={!inGussedLetters}
                  key={key}
                >
                  {key}
                </Key>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
