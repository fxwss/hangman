import React, { memo } from 'react';
import Key from '../atoms/Key';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const margins = ['md:ml-0', 'md:ml-4', 'md:ml-8'];

type KeyboardProps = {
  guessedLetters: string[];
  addLetter: (letter: string) => void;
};

const Keyboard = ({ guessedLetters, addLetter }: KeyboardProps) => {
  return (
    <div className="flex flex-col gap-2">
      {keys.map((row, index) => {
        const styles = 'flex gap-2 justify-center md:justify-start ' + margins[index];
        return (
          <div className={styles} key={index}>
            {row.map((key) => {
              const inGussedLetters = guessedLetters.includes(key);
              return (
                <Key onClick={() => addLetter(key)} active={!inGussedLetters} key={key}>
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

export default memo(Keyboard);
