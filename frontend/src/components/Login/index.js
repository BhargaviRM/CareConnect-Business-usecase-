import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Link, Box } from '@mui/material';
import { toast } from 'react-toastify';
import './index.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            toast.error("All mandatory fields are required!");
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/login', { username, password });
            onLogin(res?.data?.access_token);
            localStorage.setItem('token', res.data.access_token);
            navigate('/dashboard');
            toast.success('Login successful!');
        } catch (error) {
            if (error?.response) {
                if (error?.response?.status === 401) {
                    console.log('Invalid credentials. Please try again.');
                } else {
                    toast.error(`Server error: ${error.response.status}`);
                }
            } else if (error?.request) {
                toast.error('Unable to connect to the server. Please try again later.');
            } else {
                toast.error('An unexpected error occurred.');
            }
        }
    };

    return (
        <Container maxWidth="xs"
            className='login-container'
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username*"
                variant="outlined"
                fullWidth
                margin="normal"
                size='small'
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label="Password*"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                size='small'
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleLogin}
            >
                Login
            </Button>
            <Box mt={2}>
                <Typography variant="body2">
                    Don't have an account?{' '}
                    <Link href="/register" underline="hover">
                        Register here
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Login;