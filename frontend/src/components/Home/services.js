// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import PetImg from '../../images/class-1.jpg';
// import ChildImg from '../../images/class-2.jpg';
// import ElderImg from '../../images/class-3.jpg';
// import FamilyImg from '../../images/family.jpg'


// const Services = () => {
//      useEffect(() => {
//     AOS.init();
//   }, []);

//     return(
//         <>
//         <div style={{ fontFamily: "calibri, sans-serif" }}>
//  <Navbar/>


//   <nav aria-label="breadcrumb" className="breadcrumb-section position-relative">
//     <div className="position-absolute top-50 start-50 translate-middle">
//       <h2 className="text-center display-3 text-white">Our Services</h2>
//       <ol className="breadcrumb justify-content-center">
//         <li className="breadcrumb-item">
//           <a href="/" className="text-white">Home</a>
//         </li>
//         <li className="breadcrumb-item active text-white" aria-current="page">
//           Our Services
//         </li>
//       </ol>
//     </div>
//   </nav>

//   <div className="popular-classes">
//     <div className="container">
//       <div className="main-heading text-center">
//         <span className="text-uppercase position-relative d-inline-block px-2">Popular Services</span>
//         <h2 className="fw-bold my-3">Services for Your Loved Ones</h2>
//       </div>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//         <div className="col p-3">
//           <div class="col p-3">
//           <div class="class bg-light text-center rounded overflow-hidden border" data-aos="fade-right">
//             <div class="image">
//               <img src={PetImg} class="img-fluid" alt="Pet Care" width="100%" />
//             </div>
//             <div class="content p-4">
//               <h3 class="m-0">Pet Care</h3>
//               <p class="py-4 text-muted border-bottom">
//                 Professional grooming services to keep your pets clean, healthy, and happy.
//               </p>
//               <div class="list mb-3">
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Service Time</span>
//                   <span class="py-2">09:00 - 06:00</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Total Slots</span>
//                   <span class="py-2">20 Slots</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Fee</span>
//                   <span class="py-2">$50 / Session</span>
//                 </div>
//               </div>
//               <a href="/login"
//                 class="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//   </div>

//         <div class="col p-3">
//           <div class="class bg-light text-center rounded overflow-hidden border" data-aos="fade-up">
//             <div class="image">
//               <img src={ChildImg} class="img-fluid" alt="Child Care"/>
//             </div>
//             <div class="content p-4">
//               <h3 class="m-0">Child Care</h3>
//               <p class="py-4 text-muted border-bottom">
//                 Engaging educational programs to nurture your child's growth and learning.
//               </p>
//               <div class="list mb-3">
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Age Group</span>
//                   <span class="py-2">3 - 10 Years</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Total Seats</span>
//                   <span class="py-2">30 Seats</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Fee</span>
//                   <span class="py-2">$200 / Session</span>
//                 </div>
//               </div>
//               <a href="/login"
//                 class="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">Join
//                 Now</a>
//             </div>
//           </div>
//         </div>

//         <div class="col p-3">
//           <div class="class bg-light text-center rounded overflow-hidden border" data-aos="fade-left">
//             <div class="image">
//               <img src={ElderImg} class="img-fluid" alt="Elder Care" width="100%"/>
//             </div>
//             <div class="content p-4">
//               <h3 class="m-0">Elderly Assistance</h3>
//               <p class="py-4 text-muted border-bottom">
//                 Compassionate care services to ensure the comfort and well-being of elders.
//               </p>
//               <div class="list mb-3">
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Service Time</span>
//                   <span class="py-2">09:00 - 06:00</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Total Slots</span>
//                   <span class="py-2">15 Slots</span>
//                 </div>
//                 <div class="item border-bottom d-flex">
//                   <span class="fw-bold py-2">Fee</span>
//                   <span class="py-2">$100 / Session</span>
//                 </div>
//               </div>
//               <a href="/login"
//                 class="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">Book
//                 Now</a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
//   <div className="book-seat bg-light">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6 p-3">
//           <div className="box" data-aos="fade-up-right">
//             <div className="main-heading">
//               <span className="special text-uppercase position-relative d-inline-block px-2">Book an Appointment</span>
//               <h2 className="fw-bold my-3">Book an Appointment for Your Loved Ones</h2>
//             </div>
//             <div className="content">
//               <p className="my-4 text-muted">
//                 At CareConnect, we make it easy to schedule appointments for your pets, children, and elders. Whether
//                 it's a grooming session, educational consultation, or elder care service, we've got you covered.
//               </p>
//               <ul className="list-unstyled px-0 mb-4">
//                 <li className="my-3 position-relative px-4">
//                   Personalized care for pets, children, and elders.
//                 </li>
//                 <li className="my-3 position-relative px-4">
//                   Flexible scheduling to suit your needs.
//                 </li>
//                 <li className="my-3 position-relative px-4">
//                   Trusted professionals for every service.
//                 </li>
//               </ul>
//               <a href="/login"
//                 className="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">
//                   Book Now</a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 p-3">
//           {/* <form className="text-center rounded overflow-hidden" data-aos="fade-up-left">
//             <h2 className="text-white p-4">Book an Appointment</h2>
//             <div className="p-5">
//               <input className="form-control p-3 m-3 shadow-none" type="text" name="name" id="name"
//                 placeholder="User Name" />
//               <input className="form-control p-3 m-3 shadow-none" type="email" name="email" id="email"
//                 placeholder="Password" />

//               <a href="#" className="second-link p-3 m-3 d-block w-100 text-decoration-none text-white rounded-pill">
//                 Book Now</a>
//             </div>
//           </form> */}
//           <div className="image">
//               <img src={FamilyImg} className="img-fluid" alt="Elder Care" width="100%" />
//             </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Footer/>
// </div>
//         </>
//     )
// }


// export default Services;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Footer from './footer';
import PetImg from '../../images/class-1.jpg';
import ChildImg from '../../images/class-2.jpg';
import ElderImg from '../../images/class-3.jpg';
import FamilyImg from '../../images/family.jpg'
import { Box, Typography, Breadcrumbs, styled, Grid, Stack, Paper, Button, List, ListItem, ListItemText, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';


const BreadcrumbSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #127d8e, #127d8e)',
  padding: theme.spacing(12, 2),
  color: 'white',
  textAlign: 'center',
  position: 'relative'
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Calibri, Arial, sans-serif',
  },
});

const Services = () => {

  const services = [
    {
      title: 'Pet Care',
      image: PetImg,
      description: 'Professional grooming services to keep your pets clean, healthy, and happy.',
      details: [
        { label: 'Service Time', value: '09:00 - 06:00' },
        { label: 'Total Slots', value: '20 Slots' },
        { label: 'Fee', value: '₹ 500 / Session' }
      ],
      button: 'Book Now',

    },
    {
      title: 'Child Care',
      image: ChildImg,
      description: "Engaging educational programs to nurture your child's growth and learning.",
      details: [
        { label: 'Age Group', value: '3 - 10 Years' },
        { label: 'Total Seats', value: '30 Seats' },
        { label: 'Fee', value: '₹ 1000 / Session' }
      ],
      button: 'Book Now',

    },
    {
      title: 'Elderly Assistance',
      image: ElderImg,
      description: 'Compassionate care services to ensure the comfort and well-being of elders.',
      details: [
        { label: 'Service Time', value: '09:00 - 06:00' },
        { label: 'Total Slots', value: '15 Slots' },
        { label: 'Fee', value: '₹ 1500 / Session' }
      ],
      button: 'Book Now',

    }
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <BreadcrumbSection>
          <Typography variant="h3">Our Services</Typography>
          <Breadcrumbs sx={{ justifyContent: 'center', display: 'flex', mt: 2, color: "#fff" }} separator="/">
            <Link underline="hover" color="inherit" href="/" style={{ color: "#fff" }}>Home</Link>
            <Typography color="white">Services</Typography>
          </Breadcrumbs>
        </BreadcrumbSection>

        <Typography variant="h4" fontWeight="bold" gutterBottom color="#00394f" pt={7} sx={{ textAlign: 'center' }}>
          Services for Your Loved Ones
        </Typography>

        <Grid container spacing={4} pt={5}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2 }}>
                <Box component="img" src={service.image} alt={service.title} width="100%" />
                <Box p={3} textAlign="center">
                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" py={2} borderBottom={1}>
                    {service.description}
                  </Typography>
                  <Box mb={3}>
                    {service.details.map((item, i) => (
                      <Stack
                        key={i}
                        direction="row"
                        justifyContent="space-between"
                        borderBottom={1}
                        py={1}
                      >
                        <Typography fontWeight="bold">{item.label}</Typography>
                        <Typography>{item.value}</Typography>
                      </Stack>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    href="/login"
                    sx={{ borderRadius: '50px', textTransform: 'none', backgroundColor: '#127d8e', '&:hover': { backgroundColor: '#0f6b7a' } }}
                  >
                    {service.button}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} pt={7} pb={7}>
          <Grid size={{ xs: 12, md: 6 }} >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#00394f' }}>
                Book an Appointment for Your Loved Ones
              </Typography>
              <Typography color="text.secondary" paragraph>
                At CareConnect, we make it easy to schedule appointments for your pets, children, and elders. Whether
                it's a grooming session, educational consultation, or elder care service, we've got you covered.
              </Typography>

              <List sx={{ pl: 2 }}>
                {[
                  'Personalized care for pets, children, and elders.',
                  'Flexible scheduling to suit your needs.',
                  'Trusted professionals for every service.'
                ].map((text, index) => (
                  <ListItem key={index} disablePadding sx={{ my: 1 }}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>

              <Button
                variant="contained"
                href="/login"
                sx={{ mt: 3, borderRadius: '50px', textTransform: 'none', backgroundColor: '#127d8e' }}
              >
                Book Now
              </Button>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box component="img" src={FamilyImg} alt="Elder Care" width="100%" borderRadius={2} />
          </Grid>
        </Grid>

        <Footer />
      </ThemeProvider>
    </>
  )
}


export default Services;
