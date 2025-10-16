import { useState } from "react";
import { FlipWords } from "../components/ui/flip-words";
import MainPage from "./MainPage";

function HomePage() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [showComponent, setShowComponent] = useState(false);
  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 200 - 100);
    const randomY = Math.floor(Math.random() * 200 - 100);
    setTranslate({ x: randomX, y: randomY });
  };
  if (showComponent) {
    return <MainPage />;
  }

  return (
    <div className="h-lvh flex flex-col justify-center">
      <div className="items-center justify-center flex flex-col font-display mx-auto">
        <img src="../../public/1.gif" alt="Cute Icon" className="size-52" />
        <h1 className="font-bold text-pink-500 text-[1.8rem] text-center">
          happy birthday <br /> my
          <FlipWords
            words={["girlfriend", "love", "half", "only one"]}
            className="text-pink-500"
          />
        </h1>
        <div className="flex flex-col gap-2 my-4 text-center items-center justify-center relative">
          <p className=" text-pink-600 text-lg">Do You Love Me?</p>
          <div className="flex gap-2">
            <button
              className="border-2  text-white rounded-lg py-2 px-8 hover:bg-green-600 transition-all bg-green-400"
              onClick={() => setShowComponent(true)}
            >
              YES!!!
            </button>
            {showComponent && <MainPage />}
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
