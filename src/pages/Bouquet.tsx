import { useState } from "react";
import bouquet from "../../public/bouquet.png";
import Second from "./Second";
import { FlipWords } from "../components/ui/flip-words";

function Bouquet() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  if (active) {
    return <Second />;
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="rounded-2xl p-2 font-baloo bg-[#faf3f3] border-4 text-center mx-auto justify-center border-red-900 mt-28">
        <img src={bouquet} alt="" className="max-w-[16rem]" />
        <h1 className="text-red-700 underline uppercase  text-[1.5rem] tracking-wider font-semibold">
          baby breath
        </h1>
        <p className="italic text-red-800">your favorite flower</p>
      </div>

      <div className="rounded-2xl bg-[#f8e6e6] border-3 border-red-900   text-center mx-4 p-2 my-6 text-red-700 tracking-wide">
        {/* <p>
          you deserve all the love in the world today and always. happy
          birthday, my girlfriend 🤍
        </p> */}
        <FlipWords
          words={[
            "you deserve all the love in the world today and always. happy birthday, my girlfriend",
            "i swear every time we take a photo together, i end up liking you even more",
          ]}
          className="text-red-700 text-center"
          duration={9000}
        />
      </div>
      <div className="mx-auto mt-14 text-center">
        <hr className="mx-auto my-7 h-1 w-64 border bg-red-700" />
        <h1 className="text-red-700 font-bold italic text-[1.4rem] uppercase tracking-wider font-display">
          Virtual Flower
        </h1>
        <button
          onClick={handleClick}
          className="border-2 border-red-700 text-black px-10 py-2 underline rounded-full tracking-widest uppercase font-medium cursor-pointer hover:bg-[#faf3f3] transition duration-200 mx-auto my-2"
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default Bouquet;
