"use client";

import { useState } from "react";

function Header() {
  return (
    <header className="text-center">
      <h1 className="">
        <span className="block text-3xl font-semibold leading-none sm:text-4xl">
          <span
            role="none"
            className="select-none p-2 font-symbols font-normal"
          >
            🙠
          </span>
          Dice to Distribution
          <span
            role="none"
            className="select-none p-2 font-symbols font-normal"
          >
            🙢
          </span>
        </span>
        <span className="block text-2xl italic leading-none sm:text-3xl">
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
      <div className="overflow-hidden rounded-xl border-2 border-gray-300 shadow-lg dark:border-gray-700">
        <div className="border-b-2 border-gray-300 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800">
          <form>
            <p>
              <label>
                number of dice <span className="italic">(A)</span>:{" "}
                <input type="number" />
              </label>
            </p>
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
    <main className="text-grey-950 min-h-screen  bg-gray-50 px-4 py-16 text-base dark:bg-gray-950 dark:text-gray-50 sm:text-lg">
      <div className="mx-auto max-w-2xl">
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
