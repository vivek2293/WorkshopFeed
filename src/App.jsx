import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Displaypage from "./pages/Displaypage";
import Updatepage from "./pages/Updatepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/display" element={<Displaypage />} />
        <Route path="/update/:_id" element={<Updatepage />} />
      </Routes>
    </>
  );
};

export default App;
