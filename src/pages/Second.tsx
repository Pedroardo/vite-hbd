import Card from "../components/Card";
import { NavCard } from "../data";
function Second() {
  const handleClick = () => {};

  return (
    <div className="h-lvh flex flex-col justify-center">
      <div className="font-baloo text-center">
        <h1 className=" text-red-700 font-bold text-2xl  tracking-widest">
          THESE ARE FOR YOU!
        </h1>
        <p className="tracking-wide text-neutral-800">
          i hope you like it, i love you!
        </p>
      </div>
      <div className="mx-auto px-6 grid grid-cols-2 gap-4">
        {NavCard.map((item) => {
          return <Card children={item.image} />;
        })}
      </div>
      <button onClick={handleClick} className="cursor-pointer">
        Back
      </button>
    </div>
  );
}

export default Second;
