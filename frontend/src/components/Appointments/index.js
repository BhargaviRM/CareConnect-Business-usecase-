import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableFooter,
    TablePagination,
    TextField,
    Typography,
    createTheme,
    ThemeProvider,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Autocomplete,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from 'react-toastify';
import './index.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Calibri, Arial, sans-serif',
    },
});

function Appointments({ token }) {
    const [type, setType] = useState('');
    const [dependents, setDependents] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [pickup_date, setDate] = useState('');
    const [dropoff_date, setDropoffDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [editingId, setEditingId] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState([])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const isAdmin = jwtDecode(token)?.is_admin || false;

    const typeAmounts = {
        pet: 500,
        child: 1000,
        elderly: 1500,
    };

    useEffect(() => {
        if (type) {
            axios
                .get('http://localhost:5000/dependents', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    const filtered = res?.data?.filter((d) => d?.type === type.toLowerCase());
                    setDependents(filtered);
                    setAmount(typeAmounts[type]);
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.message || 'Error fetching dependents');
                });
        }
    }, [type, token]);

    useEffect(() => {
        fetchAppointments();
    }, [token]);

    useEffect(() => {
        // Filter appointments based on the search query
        const filtered = appointments.filter((appointment) =>
            appointment.dependent_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appointment.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredAppointments(filtered);
    }, [searchQuery, appointments]);

    const fetchAppointments = () => {
        setLoading(true);
        axios
            .get('http://localhost:5000/appointments', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setAppointments(res?.data);
                setFilteredAppointments(res?.data);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message || 'Error fetching appointments');
                setLoading(false);
            });
    };

    const bookOrUpdate = async () => {
        if (!pickup_date || !dropoff_date || !description) {
                    toast.error("All mandatory fields are required!");
                    return;
        }
        try {
            if (editingId) {
                await axios.put(
                    `http://localhost:5000/update-appointment/${editingId}`,
                    {
                        dependent_id: parseInt(selectedId),
                        pickup_date,
                        dropoff_date,
                        description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                toast.success('Appointment updated successfully');
            } else {
                if (!pickup_date || !dropoff_date || !description) {
                    toast.error("All mandatory fields are required!");
                    return;
                }
                const res = await axios.post(
                    'http://localhost:5000/schedule-appointment',
                    {
                        dependent_id: parseInt(selectedId),
                        pickup_date,
                        dropoff_date,
                        description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                await axios.post(
                    'http://localhost:5000/make-payment',
                    {
                        appointment_id: res?.data?.appointment_id,
                        amount: parseFloat(amount),
                        payment_status: "Payment Pending",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                toast.success('Appointment booked successfully');
            }
            resetForm();
            fetchAppointments();
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Error booking/updating appointment');
        }
    };

    const resetForm = () => {
        setDate('');
        setDropoffDate('');
        setDescription('');
        setAmount('');
        setType('');
        setDependents([]);
        setEditingId(null);
    };

    const editAppointment = (appointment) => {
        setSelectedId(appointment.dependent_id);
        setDate(appointment.pickup_date);
        setDropoffDate(appointment.dropoff_date);
        setDescription(appointment.description);
        setType(appointment.dependent_type);
        setEditingId(appointment.id);
    };

    const confirmDeleteAppointment = (id) => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const deleteAppointment = async () => {
        try {
            await axios.delete(`http://localhost:5000/delete-appointment/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Appointment deleted successfully');
            setDeleteDialogOpen(false);
            fetchAppointments();
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Error deleting appointment');
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const emptyRows =
    //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - appointments.length) : 0;

    const handlePayment = (appointment_id) => {
        console.log(appointment_id, " appointment_id");

        axios.get('http://localhost:5000/appointment/payment', {
            params: { appointment_id },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            const amount = res?.data?.amount;
            const options = {
                key: "rzp_test_vv1FCZvuDRF6lQ",
                amount: parseFloat(amount) * 100,
                currency: "INR",
                name: "Web Mastery",
                description: "Test Payment",
                handler: function (response) {
                    console.log("Payment response:", response);
                    console.log("✅ Payment successful:", response.razorpay_payment_id);
                    console.log(appointment_id, " appointment_id_success");
                    axios.put(
                        'http://localhost:5000/update-payment',
                        {
                            appointment_id,
                            amount: parseFloat(amount),
                            payment_status: "Payment Paid",
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    ).then(() => {
                        toast.success('Payment successful');
                        fetchAppointments();
                    }).catch((err) => {
                        toast.error(err?.response?.data?.message || 'Error processing payment');
                    });
                },
                theme: {
                    color: "#07a291db",
                },
            };

            const pay = new window.Razorpay(options);

            pay.on("payment.failed", function (response) {
                console.error("❌ Payment failed:", response.error);
                console.log(appointment_id, " appointment_failure");
                axios.put(
                    'http://localhost:5000/update-payment',
                    {
                        appointment_id,
                        amount: parseFloat(amount),
                        payment_status: "Payment Pending",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                ).then(() => {
                    toast.success('Payment marked as pending');
                    fetchAppointments();
                }).catch((err) => {
                    toast.error(err?.response?.data?.message || 'Error processing payment');
                });
            });

            pay.open();
        }).catch((err) => {
            toast.error(err?.response?.data?.message || 'Error fetching appointment amount');
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h6" gutterBottom>
                    {editingId ? 'Edit Schedule' : 'Create Schedule'}
                </Typography>
                <Box component="form" className="form-container">
                    <Box className="form-row">
                        <FormControl fullWidth className="form-control" size='small'>
                            <InputLabel>Dependent Type*</InputLabel>
                            <Select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                disabled={editingId}
                                label="Dependent Type"
                            >
                                <MenuItem value="">Select Dependent Type</MenuItem>
                                <MenuItem value="pet">Pet</MenuItem>
                                <MenuItem value="child">Child</MenuItem>
                                <MenuItem value="elderly">Elderly</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <FormControl fullWidth className="form-control" size='small'>
                            <InputLabel>Dependent Name*</InputLabel>
                            <Select
                                value={selectedId}
                                onChange={(e) => setSelectedId(e.target.value)}
                                label="Dependent Name"
                            >
                                <MenuItem value="">Select Dependent Name</MenuItem>
                                {dependents.map((d) => (
                                    <MenuItem key={d.id} value={d.id}>
                                        {d.name} (User :{d.username})
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                        <FormControl fullWidth className="form-control" size="small">
                            <Autocomplete
                                options={dependents}
                                disabled={editingId}
                                size='small'
                                getOptionLabel={(option) => `${option.name} (User: ${option.username})`}
                                value={dependents.find((d) => d.id === selectedId) || null}
                                onChange={(event, newValue) => setSelectedId(newValue ? newValue.id : '')}
                                renderInput={(params) => <TextField {...params} label="Dependent Name*" />}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                            />
                        </FormControl>
                    </Box>
                    <Box className="form-row">
                        <TextField
                            fullWidth
                            size="small"
                            value={pickup_date}
                            label="Pickup Date (YYYY-MM-DD)*"
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            size="small"
                            value={dropoff_date}
                            label="Dropoff Date (YYYY-MM-DD)*"
                            onChange={(e) => setDropoffDate(e.target.value)}
                        />
                    </Box>
                    <Box className="form-row">
                        <TextField
                            fullWidth
                            size='small'
                            value={description}
                            label="Description*"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            disabled={editingId}
                            size='small'
                            value={amount}
                            label="Amount*"
                            InputProps={{ readOnly: true }}
                        />
                    </Box>
                    <Button 
                    // variant="contained" color="primary"
                    sx={{backgroundColor: '#127d8e', color: '#fff'}}
                     onClick={bookOrUpdate}>
                        {editingId ? 'Update' : 'Book'}
                    </Button>
                </Box>

                <Typography variant="h6" gutterBottom>
                    All Schedules
                </Typography>
                {loading ? (
                    <Box className="loading-container">
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Box display="flex" justifyContent="flex-end" mb={2}>
                            <TextField
                                fullWidth={false}
                                size="small"
                                placeholder={
                                    isAdmin
                                        ? "Search by dependent name or user name"
                                        : "Search by dependent name"
                                }
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={{ width: '36%' }} // Set the width to 50%
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className="table-head">
                                    <TableRow>
                                        {isAdmin && (<TableCell>User Name</TableCell>)}
                                        <TableCell>Name</TableCell>
                                        <TableCell>Dependent Type</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Pickup Date</TableCell>
                                        <TableCell>Dropoff Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        {isAdmin && <TableCell>Actions</TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredAppointments.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} align="center">
                                                No Appointments Found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        (rowsPerPage > 0
                                            ? filteredAppointments.slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            : filteredAppointments
                                        ).map((a) => (
                                            <TableRow key={a.id}>
                                                {isAdmin && (<TableCell>{a.username}</TableCell>)}
                                                <TableCell>{a.dependent_name}</TableCell>
                                                <TableCell>{a.dependent_type}</TableCell>
                                                <TableCell>{a.description}</TableCell>
                                                <TableCell>{a.pickup_date}</TableCell>
                                                <TableCell>{a.dropoff_date}</TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="outlined"
                                                        color={a.payment_status === "Payment Pending" ? "secondary" : "success"}
                                                        onClick={() => handlePayment(a.id)}
                                                        disabled={a.payment_status !== 'Payment Pending'}
                                                    >
                                                        {a.payment_status === 'Payment Pending' ? 'Pay' : 'Paid'}
                                                    </Button>
                                                </TableCell>
                                                {isAdmin && (
                                                    <TableCell>
                                                        <BiSolidEdit
                                                            variant="outlined"
                                                            color="primary"
                                                            onClick={() => editAppointment(a)}
                                                            style={{ marginRight: 10 }}
                                                            fontSize={24}
                                                            title="Edit"
                                                        />
                                                        <RiDeleteBin5Line
                                                            variant="outlined"
                                                            color="error"
                                                            onClick={() => confirmDeleteAppointment(a.id)}
                                                            fontSize={24}
                                                            title="Delete"
                                                        />
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))
                                    )}

                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[3, 5, 10, 15, { label: 'All', value: -1 }]}
                                            colSpan={5}
                                            count={appointments.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </>
                )}

                <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this appointment? This action cannot
                            be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={deleteAppointment} color="error">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={paymentDialogOpen} onClose={() => setPaymentDialogOpen(false)}>
                    <DialogTitle>Payment Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Currently, only cash payment is available. Please make the payment at
                            the time of pickup.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setPaymentDialogOpen(false)} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </ThemeProvider>
    );
}

export default Appointments;