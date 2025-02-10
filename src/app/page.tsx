import { Keyboard } from "@/components/molecules/keyboard";
import { Lifes } from "@/components/molecules/lifes";
import { Word } from "@/components/molecules/word";
import { Github } from "lucide-react";
import { HangmanProvider } from "@/contexts/hagman.context";
import { getRandomWordAction } from "@/actions/random-word";

export default async function Home() {
  return (
    <HangmanProvider word={await getRandomWordAction()}>
      <main className="flex flex-col w-screen h-screen font-mono">
        <nav className="flex justify-between px-4 py-2 border-b-[1px] ">
          <h1 className="text-xl font-bold">Hangman</h1>
          <a href="https://github.com/fxwss/hangman">
            <Github />
          </a>
        </nav>

        <div className="flex flex-col gap-24 justify-center items-center h-full">
          <Word />
          <div className="flex flex-col gap-4">
            <Lifes />
            <Keyboard />
          </div>
        </div>
      </main>
    </HangmanProvider>
  );
}
