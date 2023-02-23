import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import CourseDetails from "./Components/Course/CoursesDetails/CourseDetails";
import Dashboard from "./Components/Layout/Dashboard";
import { U } from "./Components/Store/User";

function App() {
  const e = useSelector(U);
  console.log(e);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CourseDetails/:id" element={<CourseDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;