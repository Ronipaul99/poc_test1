import { Box, Typography } from "@mui/material";
import React from "react";
import TDrawerStyle from "../Style/T-Drawer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from "react-router-dom";



export default function TDrawer() {

    const navigate = useNavigate()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
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
                    <Tab label="Dashboard" onClick={()=>navigate("/Dashboard")}/>
                    <Tab label="Create course" />
                    <Tab label="Schedule" />
                    <Tab label="All courses" />
                    <Tab label="Documents" />
                    <Tab label="Settings" />
                </Tabs>
            </Box>
        </Box >
    )

};