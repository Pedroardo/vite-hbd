"use client";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import { DraggableImg } from "../data";
function MainPage() {
  return (
    <div>
      <audio src="../../public/fix-you.mp3" autoPlay loop></audio>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center  font-black text-neutral-500 text-4xl dark:text-neutral-800">
          every year, you grow wiser, kinder, and even more amazing. happy
          birthday, my girl ❤️
        </p>

        {DraggableImg.map((item) => (
          <DraggableCardBody className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}

export default MainPage;
