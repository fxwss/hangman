import { motion } from 'framer-motion';
import React, { memo } from 'react';
import removeAccents from '../../utils/removeAccents';

const letterAnimation = {
  initial: {
    opacity: 0,
    rotateY: 0,
    y: 0,
  },
  animate: {
    rotateY: [90, 0],
    opacity: 1,
    y: [0, -10, 0],
  },
  transition: {
    duration: 0.3,
  },
};

type WordProps = {
  word: string;
  guessedLetters: string[];
};

const Word = ({ word, guessedLetters }: WordProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-2xl w-full md:min-w-max">
      {word.split('').map((letter, index) => {
        return (
          <span
            className="border-b-2 h-8 mt-auto border-gray-300 text-center w-8 min-w-max uppercase font-bold"
            key={index}
          >
            {guessedLetters.includes(removeAccents(letter)) || letter === '-' ? (
              <motion.div {...letterAnimation}>{letter}</motion.div>
            ) : (
              ' '
            )}
          </span>
        );
      })}
    </div>
  );
};

export default memo(Word);
