import Header from "@/components/Header";
import JokeBody from "@/components/JokeBody";
import VisitersCount from "@/components/VisitersCount";
import { RandomJokeProvider } from "@/contexts/JokeProvider";
import CategoryTest from "@/test/CategoryTest";

export default function Home() {
  return (
    <div className="h-screen pt-5 px-2 flex flex-col">
      <RandomJokeProvider>
        <Header />
        <JokeBody />
        <VisitersCount />
      </RandomJokeProvider>
    </div>
  );
}
