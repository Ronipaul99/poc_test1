import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import CourseDetails from "./Components/Course/CoursesDetails/CourseDetails";
import Dashboard from "./Components/Layout/Dashboard";
import CourseDetailsInput from "./Components/Pages/Teacher-Pages/CreateCourse/CourseDetailsInput";
import CreateCourse from "./Components/Pages/Teacher-Pages/CreateCourse/CreateCourse";
import TProfile from "./Components/Pages/Teacher-Pages/T-Dashboard/T-Profile/T-Profile";
import { U } from "./Components/Store/User";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const e = useSelector(U);
  console.log(e);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Auth />} />
          <Route path="/Dashboard" element={isLoggedIn && <Dashboard />} />
          <Route path="/CourseDetails/:id" element={isLoggedIn && <CourseDetails />} />
          <Route path="/Tprofile" element={isLoggedIn && <TProfile />} />
          <Route path="/createCourse" element={isLoggedIn && <CreateCourse />} />
          <Route path="/CourseInput" element={isLoggedIn && <CourseDetailsInput />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;