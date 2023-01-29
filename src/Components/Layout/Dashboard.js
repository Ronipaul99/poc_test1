import React from "react";
import { useSelector } from "react-redux";
import StudentDashboard from "../Pages/Student-Dashboard";
import { U } from "../Store/User";


export default function Dashboard() {
    const e = useSelector(U);
    return (
        <>
            {e==="S" && <StudentDashboard />}
        </>
    );
};