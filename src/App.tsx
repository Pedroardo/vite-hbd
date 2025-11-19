import { useState } from "react";
import HomePage from "./pages/HomePage";
import PreLoader from "./pages/PreLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Memories from "./pages/Memories";
import Bouquet from "./pages/Bouquet";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="bg-[#d3d1b9]">
      {!loadingDone ? (
        <PreLoader onFinish={() => setLoadingDone(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/bouquet" element={<Bouquet />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
