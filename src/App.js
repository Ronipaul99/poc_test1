import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import CourseDetails from "./Components/Course/CoursesDetails/CourseDetails";
import TDrawer from "./Components/Layout/Component/TeacherDrawer";
import Dashboard from "./Components/Layout/Dashboard";
import CourseDetailsInput from "./Components/Pages/Teacher-Pages/CreateCourse/CourseDetailsInput";
import CreateCourse from "./Components/Pages/Teacher-Pages/CreateCourse/CreateCourse";
import Schedule from "./Components/Pages/Teacher-Pages/Schedule/Schedule";
import TProfile from "./Components/Pages/Teacher-Pages/T-Dashboard/T-Profile/T-Profile";
import { U } from "./Components/Store/User";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import Doc from "./Components/Pages/Teacher-Pages/Documents/Documents";
import Header from './Components/Pages/Header'
import Footer from './Components/Pages/Footer'
import Grid from '@mui/material/Grid';
import Landing from "./Components/Pages/Landing";
import TeacherAccount from "./Components/Pages/TeacherAccount";
function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const e = useSelector(U);

  const string1 = "T"
  const string2 = e
  const string3 = "S"
  const string4 = e
  return (
    <div>

      <BrowserRouter>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Header />
          {!isLoggedIn && <Landing />}
          <Grid xs={(isLoggedIn && string1 === string2 ? 2 : 0)}>
            {isLoggedIn && string1 === string2 && <TDrawer />}
          </Grid>
          <Grid xs={(isLoggedIn ? 12 : 12) && (isLoggedIn && string3 === string4 ? 12 : 10) && (isLoggedIn && string1 === string2 ? 10 : 12)}>
            <Routes>
              <Route path="/" element={isLoggedIn && <Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/CourseDetails/:id" element={isLoggedIn && <CourseDetails />} />
              <Route path="/Tprofile" element={isLoggedIn && <TProfile />} />
              <Route path="/createCourse" element={isLoggedIn && <CreateCourse />} />
              <Route path="/CourseInput" element={isLoggedIn && <CourseDetailsInput />} />
              <Route path="/Schedule" element={isLoggedIn && <Schedule />} />
              <Route path="/Documents" element={isLoggedIn && <Doc />} />
              <Route path="/Account" element={<TeacherAccount />} />
            </Routes>
          </Grid>

        </Grid>
      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;