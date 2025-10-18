"use client";

function Card({
  children,
  className,
  link,
}: {
  children: string;
  className?: string;
  link: string;
}) {
  return (
    <a
      className={`${className} rounded-2xl p-4 bg-slate-100 border-4 cursor-pointer border-red-700 hover:scale-105 flex flex-col justify-center transition-all duration-300 w-24 hover:rotate-2 sm:w-44`}
      href={link}
    >
      <img src={children} alt="" />
    </a>
  );
}

export default Card;
