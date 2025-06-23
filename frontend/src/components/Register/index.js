import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Link, Box } from '@mui/material';
import { toast} from 'react-toastify';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const register = async () => {
        if (!username || !password || !mobileNumber || !email || !location) {
            toast.error("All mandatory fields are required!");
            return;
        }
        try {
            await axios.post('http://localhost:5000/register', { username, password, mobile_number: mobileNumber, email, location });
            toast.success("Registration successful! Please login.");
            setUsername('');
            setPassword('');
            setMobileNumber('');
            setEmail('');
            setLocation('');
        } catch (err) {
            toast.error(err?.response?.data?.message);
        }
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username *"
                    variant="outlined"
                    value={username}
                    size='small'
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password *"
                    type="password"
                    variant="outlined"
                    size='small'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email *"
                    variant="outlined"
                    size='small'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Mobile Number *"
                    variant="outlined"
                    size='small'
                    value={mobileNumber}
                    onChange={e => setMobileNumber(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Location *"
                    variant="outlined"
                    size='small'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={register}
                >
                    Register
                </Button>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover">
                    Login
                </Link>
            </Typography>
        </Container>
    );
}

export default Register;