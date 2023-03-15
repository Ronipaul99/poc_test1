import { Box } from "@mui/material";
import React from "react";
import TDrawerStyle from "../Style/T-Drawer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from "react-router-dom";



export default function TDrawer() {

    const navigate = useNavigate()
    const id = JSON.parse(window.localStorage.getItem("TaskbarId"))

    const [value, setValue] = React.useState(id);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const goto = () => {
        navigate("/Dashboard")
    };
    const goto2 = () => {
        navigate("/createCourse")
    };
    const goto3 = () => {
        navigate("/Schedule")
    };
    const goto4 = () => {
        navigate("/Documents")
    };
    return (
        <Box sx={TDrawerStyle.Drawer}>

            <Box sx={TDrawerStyle.Box1}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Dashboard" onClick={() => (goto)(window.localStorage.setItem("TaskbarId", 0))} />
                    <Tab label="Create course" onClick={() => (goto2)(window.localStorage.setItem("TaskbarId", 1))} />
                    <Tab label="Schedule" onClick={() => (goto3)(window.localStorage.setItem("TaskbarId", 2))} />
                    <Tab label="Documents" onClick={() => (goto4)(window.localStorage.setItem("TaskbarId", 3))} />
                    <Tab label="Account" onClick={() => (window.localStorage.setItem("TaskbarId", 4))} />
                </Tabs>
            </Box>
        </Box >
    )

};