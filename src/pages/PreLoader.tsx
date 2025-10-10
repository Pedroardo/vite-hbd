import { useEffect, useState } from "react";
import { LoaderFive } from "../components/ui/loader";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { LoadingGambar } from "../data.ts";

interface PreloaderProps {
  onFinish: () => void;
}

const PreLoader = ({ onFinish }: PreloaderProps) => {
  const [step, setStep] = useState<"first" | "second">("first");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep("second"), 3000;
    });

    const timer2 = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="w-screen flex h-screen fixed items-center justify-center bg-[#d3d1b9] z-50">
      {step === "first" ? (
        <LoaderFive text="Loading dulu..." />
      ) : (
        <div>
          <InfiniteMovingCards
            direction="right"
            speed="fast"
            items={LoadingGambar}
          />
        </div>
      )}
    </div>
  );
};

export default PreLoader;
