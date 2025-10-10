import { useState } from "react";
import HomePage from "./pages/HomePage";
import PreLoader from "./pages/PreLoader";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="bg-[#d3d1b9]">
      {!loadingDone ? (
        <PreLoader onFinish={() => setLoadingDone(true)} />
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;
