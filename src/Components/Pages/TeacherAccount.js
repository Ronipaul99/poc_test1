import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../Style/TeacherAccountStyle'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const TeacherAccount = () => {

    const currencies = [
        {
            value: 'Last Month',
            label: 'Last Month',
        },
        {
            value: 'This Month',
            label: 'This Month',
        }
    ];
    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.Box}>
                <Box sx={{ width: "100%", display: "flex" }}>
                    <Box sx={{ width: "70%" }}>
                        <Box sx={styles.Box1}>
                            <Box sx={{ height: "10%", width: "100%" }}>
                                <Box sx={{ width: "100%" }}>
                                    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                                        <Box sx={{ width: "70%", alignItems: "center" }}>
                                            <Typography sx={styles.Text1}>Account Preview</Typography>
                                        </Box>
                                        <Box sx={{ width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                defaultValue="Last Month"
                                                sx={{ width: "20ch" }}
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={styles.Box12}>
                                <Box sx={styles.U50}>
                                    <Card sx={{ height: "100%", width: "100%",boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"}}>


                                    </Card>
                                </Box>
                                <Box sx={styles.L50}>
                                    <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-between" }}>
                                        <Card sx={{ width: "28%", height: "100%" ,backgroundColor: "#aff3eb", opacity: "inherit", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>

                                        </Card>
                                        <Card sx={{ width: "28%", height: "100%",backgroundColor: "#dbcadd", opacity: "inherit", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"  }}>
                                        </Card>
                                        <Card sx={{ width: "28%", height: "100%",backgroundColor: "#dbcadd", opacity: "inherit", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"  }}>

                                        </Card>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "30%", height: "100%", display: "flex" }}>
                        <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                            <Card sx={{ width: "80%", height: "27%", backgroundColor: "#2a2a2c", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>

                            </Card>
                            <Card sx={{ width: "80%", height: "40%", backgroundColor: "#aff3eb", opacity: "inherit", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>

                            </Card>
                            <Card sx={{ width: "80%", height: "27%", backgroundColor: "#2a2a2c", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>

                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TeacherAccount;
