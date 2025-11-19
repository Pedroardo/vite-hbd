import { useState } from "react";
import HomePage from "./HomePage";

import NavImg from "../../public/nav-img.svg";
import Flower from "../../public/flower.svg";

function Second() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  if (active) {
    return <HomePage />;
  }

  return (
    <div className="h-lvh flex flex-col justify-center mx-auto">
      <div className="font-baloo text-center">
        <h1 className=" text-red-700 font-bold text-3xl  tracking-widest">
          THESE ARE FOR YOU!
        </h1>
        <p className="tracking-wide text-neutral-800 mb-3 text-lg">
          i hope you like it, i love you!
        </p>
      </div>
      <div className="mx-auto px-6 grid grid-cols-2 gap-5">
        <a
          href="/memories"
          className="rounded-2xl p-4 bg-[#faf3f3] border-4 cursor-pointer border-red-700 hover:scale-105 flex flex-col justify-center transition-all duration-300 w-36 hover:rotate-2 sm:w-44 max-h-48"
        >
          <img src={NavImg} alt="Album" />
        </a>
        <a
          href="/bouquet"
          className="rounded-2xl p-4 bg-[#faf3f3] border-4 cursor-pointer border-red-700 hover:scale-105 flex flex-col justify-center transition-all duration-300 w-36 hover:rotate-2 sm:w-44 max-h-48"
        >
          <img src={Flower} alt="Bouquet" />
        </a>
        {/* {NavCard.map((item, index) => {
          return <Card children={item.image} link={item.link} key={index} />;
        })} */}
      </div>
      <button
        onClick={handleClick}
        className="border-red-600 border-3 bg-[#faf3f3]  text-black px-6  sm:px-12 py-3 rounded-full tracking-widest uppercase font-bold  hover:bg-[#ef5e5e] hover:text-white dark:text-neutral-200 transition duration-200 mx-auto my-5"
      >
        RETURN
      </button>
    </div>
  );
}

export default Second;
