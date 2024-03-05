import { useJoke } from "@/contexts/JokeProvider";
import React, { useEffect, useState } from "react";

export default function CategoryTest() {
  const { setRandomCategory, isLoading } = useJoke();

  const [jokeObjectCategory, setJokeObjectCategory] = useState<string>("fun");

  const jokeCategory: { [key: string]: string[] } = {
    fun: ["career", "celebrity", "dev", "travel", "explicit"],
    lifeStyle: ["fashion", "food", "movie", "music", "sport"],
    science: ["science"],
    animal: ["animal"],
    history: ["history"],
    society: ["political", "money", "religion"],
  };
  const pickCategory = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    if (jokeObjectCategory) {
      setRandomCategory(pickCategory(jokeCategory[jokeObjectCategory]));

      console.log(pickCategory(jokeCategory[jokeObjectCategory]));
    }
  }, [isLoading]);
  return (
    <div className="flex  justify-end items-center p-1 border-b border-gray-500 border-solid lg:mt-10">
      <label className="text-gray-500 font-bold  pr-5" htmlFor="category">
        Category:
      </label>
      <select
        className="appearance-none border border-gray-500 
        rounded-md shadow-sm text-base
         focus:outline-none focus:ring-gray-500
          focus:border-gray-500 sm:text-sm"
        name="jokes"
        id="category"
        onChange={(e: any) => {
          setJokeObjectCategory(e.target.value);
        }}
      >
        {Object.keys(jokeCategory).map((key) => (
          <option
            className="bg-gray-500 text-white pr-6 outline-none"
            key={key}
            value={key}
          >
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
