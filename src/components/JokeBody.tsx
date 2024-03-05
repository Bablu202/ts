import { useJoke } from "@/contexts/JokeProvider";
import Image from "next/image";
import { chuck, demoRef } from "../../public/images/image";
import CategoryTest from "@/test/CategoryTest";
const JokeBody = () => {
  const { isLoading, joke, handleJoke } = useJoke();
  return (
    <div className="flex flex-col flex-1  lg:flex-row">
      <div className="mt-1 h-auto w-auto sm:self-center sm:w-[420px] md:w-[480px] lg:flex-1">
        <Image src={chuck} alt="altmain" layout="responsive" />
      </div>

      <div className="flex flex-1 flex-col lg:flex-1">
        <div className=" lg:mt-10 justify-end ">
          <CategoryTest />
        </div>
        <div className=" h-28 overflow-y-auto flex-grow p-2 lg:h-52  ">
          {isLoading ? (
            <p className="joke">Loading...</p>
          ) : (
            <p className="joke">&rdquo;{joke}&ldquo;</p>
          )}
        </div>
        <div className="mt-auto ml-auto ">
          <button
            className=" p-2 m-2 rounded-md bg-gray-500 text-white "
            onClick={handleJoke}
          >
            Make me Laugh..
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeBody;
