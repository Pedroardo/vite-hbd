/* eslint-disable @next/next/no-img-element */
import { cn } from "../lib/utils";
import { Marquee } from "../components/ui/marquee";
import { useEffect, useState } from "react";
import Second from "./Second";
import { reviews } from "../data";
import MainPage from "./MainPage";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center">
        <img className="" alt="" src={img} />
      </div>
    </figure>
  );
};

export function Marquee3D() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsSmallScreen(window.innerWidth < 350);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div
      className={`relative flex h-lvh w-full flex-row items-center justify-center overflow-hidden`}
    >
      {isSmallScreen ? (
        <>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
        </>
      ) : (
        <>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
        </>
      )}
    </div>
  );
}

export default function Memories() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  if (active) {
    return <Second />;
  }
  const handleClick2 = () => {
    setActive2(!active2);
  };
  if (active2) {
    return <MainPage />;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="h-lvh">
        <Marquee3D />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <button
          onClick={handleClick}
          className="shadow-[inset_0_0_0_2px_#616467] text-black px-6  sm:px-12 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 mx-auto my-5"
        >
          Return
        </button>
        <button
          onClick={handleClick2}
          className="shadow-[inset_0_0_0_2px_#616467] text-black px-6  sm:px-12 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#27db51] hover:text-white dark:text-neutral-200 transition duration-200 mx-auto my-5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
