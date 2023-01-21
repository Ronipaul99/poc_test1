import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
