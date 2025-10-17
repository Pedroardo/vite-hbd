import { useState } from "react";
import HomePage from "./pages/HomePage";
import PreLoader from "./pages/PreLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router";
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
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
