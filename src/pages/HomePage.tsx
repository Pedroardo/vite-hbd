import { useState } from "react";
import { FlipWords } from "../components/ui/flip-words";
import Second from "./Second";

function HomePage() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [showComponent, setShowComponent] = useState(false);
  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 200 - 100);
    const randomY = Math.floor(Math.random() * 200 - 100);
    setTranslate({ x: randomX, y: randomY });
  };
  if (showComponent) {
    return <Second />;
  }

  return (
    <div className="h-lvh flex flex-col justify-center">
      <div className="items-center justify-center flex flex-col font-baloo mx-auto">
        <img src="../../public/1.gif" alt="Cute Icon" className="size-52" />
        <div className="font-bold text-[1.8rem] text-center flex flex-col justify-center items-center">
          <h1 className=" font-baloo">Hello my </h1>
          <p className="text-red-700">
            <FlipWords
              words={["love", "beauty", "girl"]}
              className="text-red-700"
            />
          </p>
        </div>
        <div className="flex flex-col gap-2 my-4 text-center items-center justify-center relative">
          <p className=" text-red-500 text-lg font-semibold">
            Do you want to see your gift?
          </p>
          <div className="flex gap-2 font-semibold">
            <button
              className="border-2  text-white rounded-lg py-2 px-8 hover:bg-green-600 transition-all bg-green-400"
              onClick={() => setShowComponent(true)}
            >
              YES!!!
            </button>
            {showComponent && <Second />}
            <button
              className="border-1 rounded-lg py-2 px-8 transition-transform duration-300 border-black bg-red-500 text-white"
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
              }}
              onMouseEnter={moveButton}
            >
              NO!!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
