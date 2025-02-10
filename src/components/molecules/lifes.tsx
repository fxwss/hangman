"use client";

import { HangmanContext } from "@/contexts/hagman.context";
import { Heart } from "lucide-react";
import { useContext } from "react";

export const Lifes = () => {
  const context = useContext(HangmanContext);

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
