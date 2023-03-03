import React from "react";
// import { useSelector } from "react-redux";
import StudentDashboard from "../Pages/S-Dashboard";
import TDashboard from "../Pages/T-Dashboard/T-Dashboard";
// import { U } from "../Store/User";


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