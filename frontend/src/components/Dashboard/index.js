import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    createTheme,
    ThemeProvider,
    CircularProgress
} from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './index.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Calibri, Arial, sans-serif',
    },
});

function Dashboard({ token }) {
    const [totalDependents, setTotalDependents] = useState(0);
    const [totalAppointments, setTotalAppointments] = useState(0);
    const [appointmentsInWeek, setAppointmentsInWeek] = useState(0);
    const [appointmentsInMonth, setAppointmentsInMonth] = useState(0);
    const [petAppointments, setPetAppointments] = useState(0);
    const [childAppointments, setChildAppointments] = useState(0);
    const [elderAppointments, setElderAppointments] = useState(0);
    const [petDependents, setPetDependents] = useState(0);
    const [childDependents, setChildDependents] = useState(0);
    const [elderDependents, setElderDependents] = useState(0);
    const [loading, setLoading] = useState(true);

    const isAdmin = jwtDecode(token)?.is_admin || false;

    useEffect(() => {
        axios
            .get('http://localhost:5000/dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setAppointmentsInMonth(response.data.appointments_in_month);
                setAppointmentsInWeek(response.data.appointments_in_week);
                setTotalAppointments(response.data.total_appointments);
                setTotalDependents(response.data.total_dependents);
                setChildAppointments(response.data.child_appointments);
                setPetAppointments(response.data.pet_appointments);
                setElderAppointments(response.data.elder_appointments);
                setPetDependents(response.data.pet_dependents);
                setChildDependents(response.data.child_dependents);
                setElderDependents(response.data.elder_dependents);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching dashboard data:', error);
                setLoading(false);
            });
    }, []);

    const barChartData = {
        labels: ['Appointments in Week', 'Appointments in Month'],
        datasets: [
            {
                label: 'Appointments',
                data: [appointmentsInWeek, appointmentsInMonth],
                backgroundColor: ['#3f51b5', '#f50057'],
            },
        ],
    };

    const lineChartData = {
        labels: ['Pet Appointments', 'Child Appointments', 'Elder Appointments'],
        datasets: [
            {
                label: 'Monthly Appointments',
                data: [petAppointments, childAppointments, elderAppointments],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                fill: true,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const pieChartData = {
        labels: ['Pet Appointments', 'Child Appointments', 'Elder Appointments'],
        datasets: [
            {
                data: [petAppointments, childAppointments, elderAppointments],
                backgroundColor: ['#3f51b5', '#f50057', '#4caf50'],
            },
        ],
    };


    return (
        <ThemeProvider theme={theme}>
            <div className="dashboard-container">
                {loading ? (
                    <Box className="loading">
                        <CircularProgress />
                    </Box>
                ) :
                    (<>
                        <h2>{ isAdmin? "Admin": "User"} Dashboard</h2>
                        <Grid container spacing={3} gap={5} className="grid-container">
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Total Appointments</Typography>
                                            <Typography variant="h5">{totalAppointments}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Pet Appointments</Typography>
                                            <Typography variant="h5">{petAppointments}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Child Appointments</Typography>
                                            <Typography variant="h5">{childAppointments}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Elder Appointments</Typography>
                                            <Typography variant="h5">{elderAppointments}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} gap={8} className="grid-container">
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Total Dependents</Typography>
                                            <Typography variant="h5">{totalDependents}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Pet Dependents</Typography>
                                            <Typography variant="h5">{petDependents}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Child Dependents</Typography>
                                            <Typography variant="h5">{childDependents}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box className="card-content">
                                            <Typography variant="h6">Elder Dependents</Typography>
                                            <Typography variant="h5">{elderDependents}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="chart-container">
                            <Grid item xs={12} sm={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" align="center">Appointments Overview</Typography>
                                        <Bar data={barChartData} options={chartOptions} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" align="center">Monthly Appointments by Type</Typography>
                                        <Line data={lineChartData} options={chartOptions} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" align="center">Appointments Distribution</Typography>
                                <Pie data={pieChartData} />
                            </CardContent>
                        </Card>
                    </Grid> */}
                        </Grid>
                    </>)}
            </div>
        </ThemeProvider>
    );
}

export default Dashboard;