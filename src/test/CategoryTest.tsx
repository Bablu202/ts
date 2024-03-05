import { useJoke } from "@/contexts/JokeProvider";
import React, { useEffect, useState } from "react";

export default function CategoryTest() {
  const { randomCategory, setRandomCategory, isLoading } = useJoke();

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

  console.log(jokeObjectCategory);

  useEffect(() => {
    setRandomCategory(
      pickCategory(
        jokeCategory[jokeObjectCategory ? jokeObjectCategory : "fun"]
      )
    );
  }, [isLoading]);

  return (
    <div className="flex justify-end  p-1 border-b border-gray-500 border-solid lg:mt-10">
      <label htmlFor="category">Category:</label>
      <select
        name="jokes"
        id="category"
        onChange={(e: any) => {
          setJokeObjectCategory(e.target.value);
        }}
      >
        {Object.keys(jokeCategory).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
