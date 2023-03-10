import React from "react";
// import { useSelector } from "react-redux";
// import { U } from "../Store/User";
import StudentDashboard from "../Pages/S-Dashboard";
import TDashboard from "../Pages/Teacher-Pages/T-Dashboard/T-Dashboard";



export default function Dashboard() {
    // const e = useSelector(U);
    return (
        <>
            {/* {e === "S" && <StudentDashboard />} */}
            {/* <StudentDashboard /> */}
            <TDashboard/>
        </>
    );
};