import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import BatImageSlider from "./components/BatImageSlider";
import MarutiToolDemo from "./components/ToolDemo";
import AstraToolDemo from "./components/AstraToolDemo";
import ArkemaDashboard from "./components/ArkemaDashboard";
import CheckinApp from "./components/CheckinApp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/batapp" element={<BatImageSlider />}></Route>
          <Route path="/marutitooldemo" element={<MarutiToolDemo />}></Route>
          <Route path="/astratoodemo" element={<AstraToolDemo />}></Route>
          <Route path="/arkemadashboard" element={<ArkemaDashboard />}></Route>
          <Route path="/checkinapp" element={<CheckinApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
