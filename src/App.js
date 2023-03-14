import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import CourseDetails from "./Components/Course/CoursesDetails/CourseDetails";
import NavDrawer from "./Components/Layout/Component/Nav&Drawer";
import TDrawer from "./Components/Layout/Component/TeacherDrawer";
import Dashboard from "./Components/Layout/Dashboard";
import CourseDetailsInput from "./Components/Pages/Teacher-Pages/CreateCourse/CourseDetailsInput";
import CreateCourse from "./Components/Pages/Teacher-Pages/CreateCourse/CreateCourse";
import Schedule from "./Components/Pages/Teacher-Pages/Schedule/Schedule";
import TProfile from "./Components/Pages/Teacher-Pages/T-Dashboard/T-Profile/T-Profile";
import { U } from "./Components/Store/User";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const e = useSelector(U);

  const string1 = "T"
  const string2 = e
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <NavDrawer />}
        {isLoggedIn && string1 === string2 && <TDrawer />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Auth />} />
          <Route path="/Dashboard" element={isLoggedIn && <Dashboard />} />
          <Route path="/CourseDetails/:id" element={isLoggedIn && <CourseDetails />} />
          <Route path="/Tprofile" element={isLoggedIn && <TProfile />} />
          <Route path="/createCourse" element={isLoggedIn && <CreateCourse />} />
          <Route path="/CourseInput" element={isLoggedIn && <CourseDetailsInput />} />
          <Route path="/Schedule" element={isLoggedIn && <Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;