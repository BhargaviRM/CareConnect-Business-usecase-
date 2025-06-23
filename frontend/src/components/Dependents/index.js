import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { jwtDecode } from 'jwt-decode';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableFooter,
    TablePagination,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    createTheme,
    ThemeProvider,
    FormControl,
    InputLabel,
    CircularProgress,
} from '@mui/material';
import './index.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Calibri, Arial, sans-serif',
    },
});

function Dependents({ token }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dependents, setDependents] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [editingId, setEditingId] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredDependents, setFilteredDependents] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const isAdmin = jwtDecode(token)?.is_admin || false;
    const loggedInUsername = jwtDecode(token)?.username || '';

    useEffect(() => {
        if (isAdmin) {
            axios.get('http://localhost:5000/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => setUsers(res?.data))
                .catch((err) => toast.error(err?.response?.data?.message || 'Error fetching users'));
        }
    }, [token]);

    const addOrUpdate = async () => {
        if (!name || !type || !age) {
                    toast.error("All mandatory fields are required!");
                    return;
        }
        try {
            if (editingId) {
                const data = isAdmin ?
                    {
                        name,
                        type,
                        created_for_user_name: username,
                        age
                    }
                    :
                    {
                        name,
                        type,
                        created_for_user_name: loggedInUsername,
                        age
                    };
                await axios.put(
                    `http://localhost:5000/update-dependent/${editingId}`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                toast.success('Dependent updated successfully');
            } else {
                if (!name || !type || !age) {
                    toast.error("All mandatory fields are required!");
                    return;
                }
                const data = isAdmin ?
                    {
                        name,
                        type,
                        created_for_user_name: username,
                        age
                    } :
                    {
                        name,
                        type,
                        created_for_user_name: loggedInUsername,
                        age
                    };
                await axios.post(
                    'http://localhost:5000/add-dependent',
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                toast.success('Dependent added successfully');
            }
            setName('');
            setType('');
            setAge('')
            setUsername('');
            setEditingId(null);
            fetchDependents();
        } catch (err) {
            toast.error(err.response?.data?.message || 'Error adding/updating dependent');
        }
    };

    const fetchDependents = () => {
        setLoading(true);
        axios
            .get('http://localhost:5000/dependents', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setDependents(res?.data);
                setFilteredDependents(res?.data);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message || 'Error fetching dependents')
                setLoading(false);
            })
    };

    const confirmDeleteDependent = (id) => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const deleteDependent = async () => {
        try {
            await axios.delete(`http://localhost:5000/delete-dependent/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Dependent deleted successfully');
            setDeleteDialogOpen(false);
            fetchDependents();
        } catch (err) {
            toast.error(err.response?.data?.message || 'Error deleting dependent');
        }
    };

    const editDependent = (dependent) => {
        console.log(dependent);
        setName(dependent.name);
        setType(dependent.type);
        setAge(dependent.age);
        setEditingId(dependent.id);
        setUsername(dependent.username)
    };

    useEffect(() => {
        fetchDependents();
    }, [token]);

    useEffect(() => {
        // Filter dependents based on the search query
        console.log(dependents, "dependents");
        const filtered = dependents.filter((dependent) =>
            dependent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dependent.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDependents(filtered);
    }, [searchQuery, dependents]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const emptyRows =
    //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dependents.length) : 0;

    return (
        <ThemeProvider theme={theme}>
            <Box className="dependents-container">
                <Typography variant="h6" gutterBottom>
                    {editingId ? 'Edit Dependent' : 'Add Dependent'}
                </Typography>
                <Box component="form" className="form-container" sx={{ width: "80%" }}>
                    <Box className="form-row">
                        {isAdmin && (
                            <FormControl fullWidth className="form-control" size='small'>
                                <InputLabel>Select User*</InputLabel>
                                <Select
                                    value={username}
                                    size="small"
                                    onChange={(e) => setUsername(e.target.value)}
                                    label="Select User*"
                                >
                                    <MenuItem value="">
                                        <em>Select User*</em>
                                    </MenuItem>

                                    {users.map((user) => (
                                        <MenuItem key={user.id} value={user.username} style={{ color: "black" }}>
                                            {user.username}
                                        </MenuItem>))}
                                </Select>
                            </FormControl>
                        )}
                        <FormControl fullWidth className="form-control" size='small'>
                            <InputLabel>Select Dependent Type*</InputLabel>
                            <Select
                                value={type}
                                size="small"
                                onChange={(e) => setType(e.target.value)}
                                label="Select Dependent Type*"
                            >
                                <MenuItem value="">
                                    <em>Select Dependent Type*</em>
                                </MenuItem>
                                <MenuItem value="pet">Pet</MenuItem>
                                <MenuItem value="child">Child</MenuItem>
                                <MenuItem value="elderly">Elderly</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className="form-row">
                        <TextField
                            fullWidth
                            label="Dependent Name*"
                            variant="outlined"
                            value={name}
                            size="small"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Age*"
                            variant="outlined"
                            value={age}
                            size="small"
                            onChange={(e) => setAge(e.target.value)}
                        />

                    </Box>
                    <Box className="form-row">
                        <Button
                            // variant="contained"
                            // color="primary"
                            sx={{backgroundColor: '#127d8e', color: '#fff'}}
                            onClick={addOrUpdate}
                        >
                            {editingId ? 'Update' : 'Add'}
                        </Button>
                    </Box>

                </Box>
                <Typography variant="h6" gutterBottom>
                    All Dependents
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
                        <TableContainer component={Paper} className="table-container">
                            <Table>
                                <TableHead className="table-head">
                                    <TableRow>
                                        {isAdmin && (
                                            <TableCell>User Name</TableCell>
                                        )}
                                        <TableCell>Dependent Type</TableCell>
                                        <TableCell>Dependent Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredDependents.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} align="center">
                                                No Appointments Found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        (rowsPerPage > 0
                                            ? filteredDependents.slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            : filteredDependents
                                        ).map((d) => (
                                            <TableRow key={d.id}>
                                                {isAdmin && (<TableCell>{d.username}</TableCell>)}
                                                <TableCell>{d.type}</TableCell>
                                                <TableCell>{d.name}</TableCell>
                                                <TableCell>{d.age}</TableCell>
                                                <TableCell>
                                                    <BiSolidEdit
                                                        variant="outlined"
                                                        color="primary"
                                                        onClick={() => editDependent(d)}
                                                        className="action-button"
                                                        title="Edit"
                                                        fontSize={24}
                                                    />

                                                    <RiDeleteBin5Line
                                                        variant="outlined"
                                                        color="error"
                                                        onClick={() => confirmDeleteDependent(d.id)}
                                                        className="action-button"
                                                        title="Delete"
                                                        fontSize={24}
                                                    />

                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                    {/* {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={3} />
                                        </TableRow>
                                    )} */}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[3, 5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={dependents.length}
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

                <Dialog
                    open={deleteDialogOpen}
                    onClose={() => setDeleteDialogOpen(false)}
                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this dependent? This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={deleteDependent} color="error">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
}

export default Dependents;