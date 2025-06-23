// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/main.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import HeaderImg from '../../images/header.png'; 
// import BlogImg from '../../images/blog-2.jpg';


// const Landing = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (

//     <div style={{ fontFamily: "calibri, sans-serif" }}>

//       <Navbar />

//       <section className="landing text-white">
//         <div className="container mh-100 d-flex align-items-center">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="content">
//                 <div className="title fs-4" data-aos="fade-right">
//                   Care Center
//                 </div>
//                 <h1 className="display-3 fw-bold" data-aos="fade-left">
//                   New Approach to Pets, Child and Elders Care
//                 </h1>
//                 <p data-aos="fade-up-right">
//                   At CareConnect, we believe in providing compassionate and personalized care for every member of your
//                   family, including your beloved pets, children, and elders. Our innovative approach combines modern
//                   technology with a human touch to ensure that all their needs are met with the utmost care and attention.
//                   Whether it's scheduling regular health check-ups, managing daily routines, or offering specialized
//                   services, we are here to make life easier for you and your loved ones. Our team of dedicated professionals
//                   is committed to creating a safe, nurturing, and supportive environment where everyone can thrive.
//                   Experience the peace of mind that comes with knowing your family is in good hands. Let us help you build a
//                   healthier, happier future for your pets, children, and elders.

//                 </p>
//                 <a href="#" className="second-link text-decoration-none text-white d-inline-block py-3 px-5 rounded-pill">Learm
//                   More</a>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="image">
//                 <img src={HeaderImg} className="img-fluid" alt="img" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="features">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down-right">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-paw fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Pet Grooming</div>
//                   <p className="lh-lg text-muted">
//                     Professional grooming services to keep your pets clean, healthy, and happy.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-child fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Child Education</div>
//                   <p className="lh-lg text-muted">
//                     Engaging educational programs to nurture your child's growth and learning.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-down-left">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-heart fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Elderly Care</div>
//                   <p className="lh-lg text-muted">
//                     Compassionate care services to ensure the comfort and well-being of elders.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up-right">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-stethoscope fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Health Check-ups</div>
//                   <p className="lh-lg text-muted">
//                     Regular health check-ups for pets, children, and elders to ensure their well-being.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-utensils fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Nutritious Meals</div>
//                   <p className="lh-lg text-muted">
//                     Healthy and balanced meals tailored for pets, children, and elders.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col p-3">
//               <div className="item h-100 d-flex gap-3 bg-light shadow p-4 rounded" data-aos="fade-up-left">
//                 <div className="flex-shrink-0">
//                   <i className="fa-solid fa-bus fa-2xl"></i>
//                 </div>
//                 <div className="flex-grow-1">
//                   <div className="h4">Safe Transportation</div>
//                   <p className="lh-lg text-muted">
//                     Reliable transportation services for pets, children, and elders to appointments and activities.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="about-us bg-light">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-lg-2">
//             <div className="col p-3 d-flex align-items-center" data-aos="fade-right">
//               <div className="item text-center">
//                 <img src={BlogImg} className="img-fluid" alt="Pets Care" />
//               </div>
//             </div>

//             <div className="col p-3" data-aos="fade-left">
//               <div className="main-heading">
//                 <span className="special text-uppercase position-relative d-inline-block px-2">Learn About Us</span>
//                 <h2 className="fw-bold my-3">Compassionate Care for Pets, Children, and Elders</h2>
//               </div>

//               <div className="content">
//                 <p className="text-muted m-0 m-auto">
//                   At CareConnect, we are dedicated to providing exceptional care for your beloved pets, children, and
//                   elders. Our mission is to create a safe, nurturing, and supportive environment where every member of your
//                   family can thrive.
//                 </p>
//                 <div className="d-flex my-4 gap-3 flex-column flex-md-row">
//                   {/* <div className="flex-shrink-0">
//                 <img src={BlogImg} alt="Child Care" />
//               </div> */}
//                   <div className="flex-grow-1">
//                     <div
//                       className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                       Personalized care plans for children to support their growth and development.
//                     </div>
//                     <div
//                       className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                       Specialized services for pets, including grooming and health check-ups.
//                     </div>
//                     <div
//                       className="item py-2 px-4 position-relative d-flex align-items-center border-top justify-content-center justify-content-md-start">
//                       Compassionate elder care to ensure comfort and well-being.
//                     </div>
//                   </div>
//                 </div>
//                 <a href="#"
//                   className="main-link mb-2 mt-2 mb-lg-0 d-inline-block text-decoration-none text-white py-2 px-4 rounded-pill">Learn
//                   More</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />

//     </div>

//   );
// };

// export default Landing;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import Navbar from './navbar';
import Footer from './footer';
import HeaderImg from '../../images/header.png';
import BlogImg from '../../images/blog-2.jpg';
import { Typography, Box, Grid, Paper, Stack, Button, createTheme, ThemeProvider } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import BoyIcon from '@mui/icons-material/Boy';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';


const theme = createTheme({
  typography: {
    fontFamily: 'Calibri, Arial, sans-serif',
  },
});

const Landing = () => {
  const features = [
    {
      icon: <PetsIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Pet Grooming',
      desc: 'Professional grooming services to keep your pets clean, healthy, and happy.',
    },
    {
      icon: <BoyIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Child Education',
      desc: "Engaging educational programs to nurture your child's growth and learning.",
    },
    {
      icon: <FavoriteIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Elderly Care',
      desc: 'Compassionate care services to ensure the comfort and well-being of elders.',
    },
    {
      icon: <MedicalInformationIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Health Check-ups',
      desc: 'Regular health check-ups for pets, children, and elders to ensure their well-being.',
    },
    {
      icon: <RestaurantIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Nutritious Meals',
      desc: 'Healthy and balanced meals tailored for pets, children, and elders.',
    },
    {
      icon: <DirectionsBusFilledIcon fontSize="large" sx={{ color: "#127d8e" }} />,
      title: 'Safe Transportation',
      desc: 'Reliable transportation services for pets, children, and elders to appointments and activities.',
    }
  ];
  return (

    <ThemeProvider theme={theme}>

      <Navbar />

      <Grid container spacing={4} alignItems="center" style={{ backgroundColor: "#127d8e", padding: 30 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              color="#fff"
            >
              New Approach to Pets, Child and Elders Care
            </Typography>
            <Typography variant="body1" color="white" paragraph>
              At CareConnect, we believe in providing compassionate and personalized care for every member of your
              family, including your beloved pets, children, and elders. Our innovative approach combines modern
              technology with a human touch to ensure that all their needs are met with the utmost care and attention.
              Whether it's scheduling regular health check-ups, managing daily routines, or offering specialized
              services, we are here to make life easier for you and your loved ones. Our team of dedicated professionals
              is committed to creating a safe, nurturing, and supportive environment where everyone can thrive.
              Experience the peace of mind that comes with knowing your family is in good hands. Let us help you build a
              healthier, happier future for your pets, children, and elders.
            </Typography>
            <Button
              variant="outlined"
              href="#"
              sx={{
                mt: 2,
                px: 5,
                py: 1.5,
                borderRadius: '50px',
                color: 'white',
                borderColor: 'white',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#0d1b2a'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        {/* Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <img
              src={HeaderImg}
              alt="CareConnect"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Box>
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

      <Grid container spacing={4} pt={6} pb={7}>
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

      <Footer />

    </ThemeProvider>

  );
};

export default Landing;
