import { createContext, useContext, useEffect, useState } from "react";
interface JokeResponse {
  value: string;
}
const RandomJokeContext = createContext<any>({});
export const RandomJokeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [joke, setJoke] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string>("food");
  const [randomCategory, setRandomCategory] = useState<string>("");

  const getResponse = async (): Promise<void> => {
    setIsLoading(true);
    try {
      let category = randomCategory ? `category=${randomCategory}` : "";
      console.log("55 -", category);
      let endpoint: string = `https://api.chucknorris.io/jokes/random?${category}`;
      let response = await fetch(endpoint);
      let json: JokeResponse = await response.json();
      setJoke(json.value);
      // console.log(joke);
      setIsLoading(false);
    } catch (err: any) {
      setSearchError("API fetch error " + err);
      setJoke(err);
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
    <RandomJokeContext.Provider
      value={{ joke, isLoading, searchError, handleJoke, setRandomCategory }}
    >
      {children}
    </RandomJokeContext.Provider>
  );
};

export const useJoke = () => useContext(RandomJokeContext);
