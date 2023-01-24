import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import Course from "./Components/Course/Course";
import TeacherDashboard from "./Components/Pages/T-Dashboard";
import { U } from "./Components/Store/User";

function App() {
  const e = useSelector(U);
  console.log(e);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Dashboard" element={e === "T" ? <TeacherDashboard /> : < Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;