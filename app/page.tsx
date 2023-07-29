"use client";

import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

function Header() {
  return (
    <header className="text-center">
      <h1 className="">
        <span className="block text-3xl sm:text-4xl font-semibold leading-none">
          <span
            role="none"
            className="p-2 font-symbols font-normal select-none"
          >
            🙠
          </span>
          Dice to Distribution
          <span
            role="none"
            className="p-2 font-symbols  font-normal select-none"
          >
            🙢
          </span>
        </span>
        <span className="block text-2xl sm:text-3xl italic leading-none">
          and the Killable Zone
        </span>
      </h1>
    </header>
  );
}

function Calculator(props: {
  numOfDice: number;
  sidesOnDie: number;
  rollModifier: number;
}) {
  return (
    <div className="my-8 text-center">
      <div className="border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 border-b-2 border-gray-300 dark:border-gray-700">
          <form>
            <p><label>number of dice <span className="italic">(A)</span>: <input type="number"/></label></p>
          </form>
        </div>
        <div className="p-4">
          <p>Test</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [numOfDice, setNumOfDice] = useState<number>(3);
  const [sidesOnDie, setSidesOnDie] = useState<number>(10);
  const [rollModifier, setRollModifier] = useState<number>(0);

  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50 text-grey-950 dark:bg-gray-950 dark:text-gray-50 text-base sm:text-lg">
      <div className="max-w-2xl mx-auto">
        <Header />
        <Calculator
          numOfDice={numOfDice}
          sidesOnDie={sidesOnDie}
          rollModifier={rollModifier}
        />
      </div>
    </main>
  );
}
