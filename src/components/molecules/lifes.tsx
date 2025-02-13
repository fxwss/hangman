"use client";

import { HangmanContext } from "@/contexts/hagman.context";
import { normalizeLetter } from "@/utils/normalize-letter";
import { Heart } from "lucide-react";
import { useContext } from "react";
import { If } from "../atoms/if";

export const Lifes = () => {
  const context = useContext(HangmanContext);

  const hasLosed = context.wrongs.length >= context.maxLifes;
  const hasWon =
    !!context.word &&
    context.word
      .split("")
      .every((letter) => context.guesses.includes(normalizeLetter(letter)));

  if (hasLosed || hasWon) {
    return (
      <button
        className="flex flex-col justify-center shadow items-center bg-gray-200 hover:bg-gray-100 transition px-4 py-2"
        onClick={context.updateWord}
      >
        <If condition={hasLosed}>
          <span className="text-red-800 font-extrabold text-md">Game Over</span>
          <span className="text-xs font-thin">Press here to restart</span>
        </If>
        <If condition={hasWon}>
          <span className="text-green-800 font-extrabold text-md">
            You Won!
          </span>
          <span className="text-xs font-thin">Press here to restart</span>
        </If>
      </button>
    );
  }

  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      {Array(context.maxLifes)
        .fill(0)
        .map((_, index) => (
          <Heart
            className="w-6 h-6 text-red-800 fill-transparent data-[filled='true']:fill-red-500 transition-all duration-300"
            data-filled={index < context.lifes}
            key={index}
          />
        ))}
    </div>
  );
};
