"use client";

import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { LoadingGambar } from "../data.ts";
const Preloader2 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    loading && (
      <div className="w-screen flex h-screen fixed items-center justify-center bg-[#d3d1b9] z-50">
        <InfiniteMovingCards
          direction="right"
          speed="normal"
          items={LoadingGambar}
        />
      </div>
    )
  );
};

export default Preloader2;
