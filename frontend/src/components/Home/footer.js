// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Footer = () => {
//     useEffect(() => {
//         AOS.init();
//     }, []);
//     return (

//         <div style={{ fontFamily: "calibri, sans-serif" }}>

//             <footer>
//                 <div className="container text-white">
//                     <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
//                         <div className="col p-3">
//                             <div className="box">
//                                 <a className="display-5 fw-bold text-decoration-none text-white" href="/">Care Connect</a>
//                                 <p className="my-3">
//                                     At CareConnect, we provide compassionate and personalized care for pets, children, and elders. Our mission
//                                     is to create a safe and nurturing environment for your loved ones.
//                                 </p>
//                                 <ul className="list-unstyled mb-0 p-0 d-flex gap-2">
//                                     <li>
//                                         <a href="#" aria-label="facebook-icon">
//                                             <i className="fa-brands fa-facebook-f text-white border rounded-circle p-2">
//                                             </i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#" aria-label="instagram-icon">
//                                             <i className="fa-brands fa-instagram text-white border rounded-circle p-2">
//                                             </i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#" aria-label="twitter-icon">
//                                             <i className="fa-brands fa-twitter text-white border rounded-circle p-2">
//                                             </i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#" aria-label="linkedin-icon">
//                                             <i className="fa-brands fa-linkedin-in text-white border rounded-circle p-2">
//                                             </i>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col p-3">
//                             <div className="box">
//                                 <div className="title fw-bold h4">Get In Touch</div>
//                                 <div className="address d-flex mt-3 gap-3">
//                                     <div className="flex-shrink-0">
//                                         <i className="icon fa-solid fa-location-dot fa-xl"></i>
//                                     </div>
//                                     <div className="flex-grow-1">
//                                         <div className="h4">Address</div>
//                                         <div>123 Street, Hyderabad, Telangana</div>
//                                     </div>
//                                 </div>
//                                 <div className="email d-flex mt-3 gap-3">
//                                     <div className="flex-shrink-0">
//                                         <i className="icon fa-solid fa-envelope fa-xl"></i>
//                                     </div>
//                                     <div className="flex-grow-1">
//                                         <div className="h4">Email</div>
//                                         <div>info@careconnect.com</div>
//                                     </div>
//                                 </div>
//                                 <div className="phone d-flex mt-3 gap-3">
//                                     <div className="flex-shrink-0">
//                                         <i className="icon fa-solid fa-phone fa-xl"></i>
//                                     </div>
//                                     <div className="flex-grow-1">
//                                         <div className="h4">Phone</div>
//                                         <div>+012 345 67890</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col p-3">
//                             <div className="box">
//                                 <div className="title fw-bold h4">Quick Links</div>
//                                 <div className="links">
//                                     <a href="/" className="d-block text-decoration-none text-white mt-2 px-4 position-relative">Home</a>
//                                     <a href="/about" className="d-block text-decoration-none text-white mt-2 px-4 position-relative">About
//                                         Us</a>
//                                     <a href="/services" className="d-block text-decoration-none text-white mt-2 px-4 position-relative">Our
//                                         services</a>
//                                     <a href="/contact" className="d-block text-decoration-none text-white mt-2 px-4 position-relative">Contact
//                                         Us</a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="copy-right text-center border-top">
//                         &copy;
//                         <a href="#" className="text-decoration-none">
//                             <span>CareConnect </span>
//                         </a>
//                         All Rights Reserved.
//                     </div>
//                 </div>
//             </footer>

//         </div>

//     );
// };

// export default Footer;


import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
  createTheme,
  ThemeProvider
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  LocationOn,
  Email,
  Phone
} from '@mui/icons-material';

const theme = createTheme({
      typography: {
          fontFamily: 'Calibri, Arial, sans-serif',
      },
  });

const Footer = () => {

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ fontFamily: 'calibri, sans-serif', bgcolor: '#00394f', color: 'white', pt: 6, pb: 3 }}>
      <Container>
        <Grid container spacing={2}>
          {/* Brand and Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              <Link href="/" color="inherit" underline="none">
                CareConnect
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              At CareConnect, we provide compassionate and personalized care for pets, children, and elders. Our mission is to create a safe and nurturing environment for your loved ones.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton href="#" aria-label="facebook-icon" sx={{ color: 'white', border: '1px solid white' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" aria-label="instagram-icon" sx={{ color: 'white', border: '1px solid white' }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" aria-label="twitter-icon" sx={{ color: 'white', border: '1px solid white' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" aria-label="linkedin-icon" sx={{ color: 'white', border: '1px solid white' }}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1fd7f4">
              Get In Touch
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <LocationOn fontSize="medium" sx={{color:"#1fd7f4"}} />
              <Box>
                <Typography variant="h6">Address</Typography>
                <Typography>123 Street, Hyderabad, Telangana</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
              <Email fontSize="medium" sx={{color:"#1fd7f4"}} />
              <Box>
                <Typography variant="h6">Email</Typography>
                <Typography>info@careconnect.com</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
              <Phone fontSize="medium" sx={{color:"#1fd7f4"}} />
              <Box>
                <Typography variant="h6">Phone</Typography>
                <Typography>+012 345 67890</Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1fd7f4">
              Quick Links
            </Typography>
            <Box mt={2}>
              <Link href="/" color="inherit" underline="hover" display="block" sx={{ mt: 1, pl: 2 }}>
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" display="block" sx={{ mt: 1, pl: 2 }}>
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="hover" display="block" sx={{ mt: 1, pl: 2 }}>
                Our Services
              </Link>
              <Link href="/contact" color="inherit" underline="hover" display="block" sx={{ mt: 1, pl: 2 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
        <Typography align="center" variant="body2">
          &copy; <Link href="#" color="inherit" underline="hover">CareConnect</Link> All Rights Reserved.
        </Typography>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Footer;
