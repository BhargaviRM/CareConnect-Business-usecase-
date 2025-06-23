// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import BlogImg from '../../images/blog-2.jpg';
    
 
// const About = () => {
//      useEffect(() => {
//     AOS.init();
//   }, []);

//     return(
//         <>
//         <div style={{ fontFamily: "calibri, sans-serif" }}>
//  <Navbar/>

//   <nav aria-label="breadcrumb" className="breadcrumb-section position-relative">
//     <div className="position-absolute top-50 start-50 translate-middle">
//       <h2 className="text-center display-3 text-white">About Us</h2>
//       <ol className="breadcrumb justify-content-center">
//         <li className="breadcrumb-item">
//           <a href="/" className="text-white">Home</a>
//         </li>
//         <li className="breadcrumb-item active text-white" aria-current="page">
//           About
//         </li>
//       </ol>
//     </div>
//   </nav>

//   <div className="about-us bg-light">
//     <div className="container">
//       <div className="row row-cols-1 row-cols-lg-2">
//         <div className="col p-3 d-flex align-items-center" data-aos="fade-right">
//           <div className="item text-center">
//             <img src={BlogImg} className="img-fluid" alt="Pets Care" />
//           </div>
//         </div>

//         <div className="col p-3" data-aos="fade-left">
//           <div className="main-heading">
//             <span className="special text-uppercase position-relative d-inline-block px-2">Learn About Us</span>
//             <h2 className="fw-bold my-3">Compassionate Care for Pets, Children, and Elders</h2>
//           </div>

//           <div className="content">
//             <p className="text-muted m-0 m-auto">
//               At CareConnect, we are dedicated to providing exceptional care for your beloved pets, children, and
//               elders. Our mission is to create a safe, nurturing, and supportive environment where every member of your
//               family can thrive.
//             </p>
//             <div className="d-flex my-4 gap-3 flex-column flex-md-row">
//               {/* <div className="flex-shrink-0">
//                 <img src={BlogImg} alt="Child Care" />
//               </div> */}
//               <div className="flex-grow-1">
//                 <div
//                   className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                   Personalized care plans for children to support their growth and development.
//                 </div>
//                 <div
//                   className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                   Specialized services for pets, including grooming and health check-ups.
//                 </div>
//                 <div
//                   className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                   Compassionate elder care to ensure comfort and well-being.
//                 </div>
//               </div>
//             </div>
//             <a href="#"
//               className="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">Learn
//               More</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="features">
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down-right">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-paw fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Pet Grooming</div>
//               <p className="lh-lg text-muted">
//                 Professional grooming services to keep your pets clean, healthy, and happy.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-child fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Child Education</div>
//               <p className="lh-lg text-muted">
//                 Engaging educational programs to nurture your child's growth and learning.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down-left">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-heart fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Elderly Care</div>
//               <p className="lh-lg text-muted">
//                 Compassionate care services to ensure the comfort and well-being of elders.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up-right">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-stethoscope fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Health Check-ups</div>
//               <p className="lh-lg text-muted">
//                 Regular health check-ups for pets, children, and elders to ensure their well-being.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-utensils fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Nutritious Meals</div>
//               <p className="lh-lg text-muted">
//                 Healthy and balanced meals tailored for pets, children, and elders.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col p-3">
//           <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up-left">
//             <div className="flex-shrink-0">
//               <i className="fa-solid fa-bus fa-2xl"></i>
//             </div>
//             <div className="flex-grow-1">
//               <div className="h4">Safe Transportation</div>
//               <p className="lh-lg text-muted">
//                 Reliable transportation services for pets, children, and elders to appointments and activities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
  
// <Footer/>

// </div>
//         </>
//     )
// }


// export default About;


import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Footer from './footer';
import BlogImg from '../../images/blog-2.jpg';
import { Breadcrumbs, Typography, Box, styled, Grid, Paper, Stack, Button, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import BoyIcon from '@mui/icons-material/Boy';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

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


const About = () => {

  const features = [
    {
      icon: <PetsIcon fontSize="large" sx={{color:"#127d8e"}}/>,
      title: 'Pet Grooming',
      desc: 'Professional grooming services to keep your pets clean, healthy, and happy.',
      aos: 'fade-down-right'
    },
    {
      icon: <BoyIcon fontSize="large" sx={{color:"#127d8e"}}/>,
      title: 'Child Education',
      desc: "Engaging educational programs to nurture your child's growth and learning.",
      aos: 'fade-down'
    },
    {
      icon: <FavoriteIcon fontSize="large" sx={{color:"#127d8e"}} />,
      title: 'Elderly Care',
      desc: 'Compassionate care services to ensure the comfort and well-being of elders.',
      aos: 'fade-down-left'
    },
    {
      icon: <MedicalInformationIcon fontSize="large" sx={{color:"#127d8e"}} />,
      title: 'Health Check-ups',
      desc: 'Regular health check-ups for pets, children, and elders to ensure their well-being.',
      aos: 'fade-up-right'
    },
    {
      icon: <RestaurantIcon fontSize="large" sx={{color:"#127d8e"}}/>,
      title: 'Nutritious Meals',
      desc: 'Healthy and balanced meals tailored for pets, children, and elders.',
      aos: 'fade-up'
    },
    {
      icon: <DirectionsBusFilledIcon fontSize="large" sx={{color:"#127d8e"}} />,
      title: 'Safe Transportation',
      desc: 'Reliable transportation services for pets, children, and elders to appointments and activities.',
      aos: 'fade-up-left'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BreadcrumbSection>
        <Typography variant="h3">About Us</Typography>
        <Breadcrumbs sx={{ justifyContent: 'center', display: 'flex', mt: 2, color: "#fff" }} separator="/">
          <Link underline="hover" color="inherit" href="/" style={{ color: "#fff" }}>Home</Link>
          <Typography color="white">About</Typography>
        </Breadcrumbs>
      </BreadcrumbSection>

      <Grid container spacing={4} pt={6} px={2}>
        {/* Image Section */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" alignItems="center">
          <Box textAlign="center" width="100%">
            <img src={BlogImg} alt="Pets Care" style={{ maxWidth: '100%', borderRadius: 8 }} />
          </Box>
        </Grid>

        {/* Text Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="subtitle2"
            color="#127d8e"
            fontWeight="bold"
            textTransform="uppercase"
            gutterBottom
          >
            Learn About Us
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#00394f">
            Compassionate Care for Pets, Children, and Elders
          </Typography>
          <Typography color="text.secondary" paragraph>
            At CareConnect, we are dedicated to providing exceptional care for your beloved pets, children, and
            elders. Our mission is to create a safe, nurturing, and supportive environment where every member of your
            family can thrive.
          </Typography>

          <Stack spacing={2} mt={3}>
            <Paper elevation={1} sx={{ p: 2 }}>
              Personalized care plans for children to support their growth and development.
            </Paper>
            <Paper elevation={1} sx={{ p: 2 }}>
              Specialized services for pets, including grooming and health check-ups.
            </Paper>
            <Paper elevation={1} sx={{ p: 2 }}>
              Compassionate elder care to ensure comfort and well-being.
            </Paper>
          </Stack>

          <Button
            variant="contained"
            sx={{ mt: 4, borderRadius: '50px', textTransform: 'none', backgroundColor: "#127d8e" }}
            href="#"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4} pt={7} pb={7}>
        {features.map((feature, index) => (
          <Grid item size={{ xs: 12, md: 4 }} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                bgcolor: '#fff',
                borderRadius: 2
              }}
            >
              <Box color="primary.main">{feature.icon}</Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.desc}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Footer />

    </ThemeProvider>
  )
}


export default About;