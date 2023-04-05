import React from "react";
import { useSelector } from "react-redux";
import { U } from "../Store/User";
// import StudentDashboard from "../Pages/S-Dashboard";
import TDashboard from "../Pages/Teacher-Pages/T-Dashboard/T-Dashboard";
import StudentLanding from "../Pages/StudentLanding";



export default function Dashboard() {
    const e = useSelector(U);


    const string1 = "T"
    const string2 = e
    const string3 = "S"
    const string4 = e

    return (
        <>
            {string3 === string4 && <StudentLanding />}
            {/* <StudentDashboard /> */}

            {string1 === string2 && <TDashboard />}
            {/* <TDashboard /> */}
        </>
    );
};