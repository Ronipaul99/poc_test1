import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Layout/Dashboard";
import Footer from "./Components/Pages/Footer";
import Header from "./Components/Pages/Header";
import LandingPage from "./Components/Pages/LandingPage";
import { U } from "./Components/Store/User";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/auth" element={<Auth/>}/>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;