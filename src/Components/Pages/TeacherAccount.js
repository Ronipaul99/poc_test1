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
                <Box sx={styles.one}>
                    <Box sx={styles.Two}>
                        <Box sx={styles.Box1}>
                            <Box sx={styles.Three}>
                                <Box sx={styles.Four}>
                                    <Box sx={styles.Five}>
                                        <Box sx={styles.Six}>
                                            <Typography sx={styles.Text1}>Account Preview</Typography>
                                        </Box>
                                        <Box sx={styles.Seven}>
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
                                    <Card sx={styles.Eight}>
                                        {/* upper box */}

                                    </Card>
                                </Box>
                                <Box sx={styles.L50}>
                                    <Box sx={styles.Nine}>
                                        <Card sx={styles.Ten}>
                                            {/* Card1 */}

                                        </Card>
                                        <Card sx={styles.Eleven}>

                                            {/* card2 */}
                                        </Card>
                                        <Card sx={styles.Twelve}>
                                            {/* Card3 */}

                                        </Card>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.Thirteen}>
                        <Box sx={styles.Fourteen}>
                            <Card sx={styles.Fifteen}>
                                {/* right side top card */}
                            </Card>
                            <Card sx={styles.Sixteen}>
                                {/* right side middle card */}
                            </Card>
                            <Card sx={styles.Seventeen}>
                                {/* right side bottom card */}
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TeacherAccount;
