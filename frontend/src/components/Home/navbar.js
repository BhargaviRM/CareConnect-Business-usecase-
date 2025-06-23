// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Navbar = () => {
//     useEffect(() => {
//         AOS.init();
//     }, []);
//     return (

//         <div style={{ fontFamily: "calibri, sans-serif" }}>

//             <nav className="navbar navbar-expand-lg bg-light shadow-lg sticky-top">
//                 <div className="container">
//                     <a className="navbar-brand fs-1 fw-bold" href="/">CareConnect</a>
//                     <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav m-auto mb-2 mb-lg-0 p-0">
//                             <li className="nav-item">
//                                 <a className="nav-link py-2 px-3 fw-bold text-black active" aria-current="page" href="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link py-2 px-3 fw-bold text-black" href="/about">About</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link py-2 px-3 fw-bold text-black" href="/services">Services</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link py-2 px-3 fw-bold text-black" href="/contact">Contact</a>
//                             </li>
//                         </ul>
//                         <a href="/login"
//                             className="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">
//                             Login
//                         </a>
//                     </div>
//                 </div>
//             </nav>

//         </div>

//     );
// };

// export default Navbar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    IconButton,
    createTheme,
    ThemeProvider
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Calibri, Arial, sans-serif',
    },
});

const Navbar = () => {
    const location = useLocation(); // Get the current route

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color="default" elevation={4}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: '#127d8e',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                        }}
                    >
                        CareConnect
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                        <Button
                            component={Link}
                            to="/"
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: location.pathname === '/' ? '#127d8e' : 'inherit', // Highlight "Home"
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: location.pathname === '/about' ? '#127d8e' : 'inherit', // Highlight "About"
                            }}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/services"
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: location.pathname === '/services' ? '#127d8e' : 'inherit', // Highlight "Services"
                            }}
                        >
                            Services
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: location.pathname === '/contact' ? '#127d8e' : 'inherit', // Highlight "Contact"
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            borderRadius: '50px',
                            padding: '8px 16px',
                            fontWeight: 'bold',
                            backgroundColor: '#127d8e',
                        }}
                    >
                        Login
                    </Button>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
