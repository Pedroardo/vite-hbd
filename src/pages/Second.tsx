import { useState } from "react";
import Card from "../components/Card";
import { NavCard } from "../data";
import HomePage from "./HomePage";
import { IoReturnUpBack } from "react-icons/io5";

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
        <h1 className=" text-red-700 font-bold text-2xl  tracking-widest">
          THESE ARE FOR YOU!
        </h1>
        <p className="tracking-wide text-neutral-800 mb-3">
          i hope you like it, i love you!
        </p>
      </div>
      <div className="mx-auto px-6 grid grid-cols-2 gap-4">
        {NavCard.map((item) => {
          return <Card children={item.image} link={item.link} />;
        })}
      </div>
      <button
        onClick={handleClick}
        className="border-red-600 border-3  text-black px-6  sm:px-12 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 mx-auto my-5"
      >
        <IoReturnUpBack />
      </button>
    </div>
  );
}

export default Second;
