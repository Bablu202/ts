import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgLogo from "../images/w-s.png";
import man from "../images/man.png";

interface JokeResponse {
  value: string;
}

export default function Home() {
  const [joke, setJoke] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string>("");

  const getResponse = async (): Promise<void> => {
    setIsLoading(true);
    try {
      let endpoint: string = `https://api.chucknorris.io/jokes/random`;
      let json: JokeResponse = await (await fetch(endpoint)).json();
      setJoke(json.value);
      setIsLoading(false);
    } catch (err) {
      setSearchError: String(err);
      setIsLoading(false);
    } finally {
      if (searchError)
        console.log("there is an error with search Data ", searchError);
      setIsLoading(false);
    }
  };

  const handleJoke = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    getResponse();
  };

  useEffect(() => {
    getResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="m-2 flex  p-4">
        <Image className="w-16" src={imgLogo} alt={"w-sLogo"} priority />
        <h3 className="font-semibold text-xl ml-auto ">Here we go..!</h3>
      </div>

      <div className="flex flex-1 flex-col items-center max-w-3xl w-full mx-auto md:flex-row ">
        <div>
          <Image width={220} height={180} priority src={man} alt={"man"} />
          <button
            onClick={handleJoke}
            className="mt-20  font-semibold tracking-wider bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 hidden md:inline"
          >
            Make me Laugh..
          </button>
        </div>

        <div className="px-5 mt-5 flex flex-1 flex-col justify-center ">
          {isLoading ? (
            <p className="joke">Loading...</p>
          ) : (
            <div>
              <p className="joke">"{joke}"</p>
            </div>
          )}

          <div className="flex justify-center md:justify-normal py-4">
            <button
              onClick={handleJoke}
              className="mt-20  font-semibold tracking-wider bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 inline md:hidden"
            >
              Make me Laugh..
            </button>
          </div>
        </div>
      </div>
      <footer className="border-t-black/40 border-[1px] py-4 text-center ">
        <p>Number of Visitors are</p>
      </footer>
    </div>
  );
}
