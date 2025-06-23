// // import React, { useEffect } from 'react';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Navbar from './navbar';
// // import Footer from './footer';
// // import MailIcon from '@mui/icons-material/Mail';
// // import CallIcon from '@mui/icons-material/Call';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import RoomIcon from '@mui/icons-material/Room';



// // const Contact = () => {
// //   useEffect(() => {
// //     AOS.init();
// //   }, []);

// //   return (
// //     <>
// //       <div style={{ fontFamily: "calibri, sans-serif" }}>
// //         <Navbar />

// //         <nav aria-label="breadcrumb" className="breadcrumb-section position-relative">
// //           <div className="position-absolute top-50 start-50 translate-middle">
// //             <h2 className="text-center display-3 text-white">Contact Us</h2>
// //             <ol className="breadcrumb justify-content-center">
// //               <li className="breadcrumb-item">
// //                 <a href="/" className="text-white">Home</a>
// //               </li>
// //               <li className="breadcrumb-item active text-white" aria-current="page">
// //                 Contact Us
// //               </li>
// //             </ol>
// //           </div>
// //         </nav>

// //         <form className="contact-us">
// //           <div className="container">
// //             <div className="main-heading text-center">
// //               <span className="text-uppercase position-relative d-inline-block px-2"
// //               >Get in touch</span
// //               >
// //               <h2 className="fw-bold my-3">Contact Us For Any Query</h2>
// //             </div>
// //             <div className="row row-cols-1 row-cols-lg-2">
// //               <div className="col p-3">
// //                 <div className="item">
// //                   <input
// //                     type="text"
// //                     className="form-control form-control-lg mb-3"
// //                     placeholder="Your Name"
// //                     aria-label="Your Name"
// //                   />

// //                   <input
// //                     type="email"
// //                     className="form-control form-control-lg mb-3"
// //                     placeholder="Your Email"
// //                     aria-label="Your Email"
// //                   />

// //                   <textarea
// //                     className="form-control form-control-lg mb-3"
// //                     placeholder="Message"
// //                     aria-label="Message"
// //                   ></textarea>

// //                   <button
// //                     className="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white border-0 py-2 px-4 rounded-pill"
// //                   >
// //                     send Feedback
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="col p-3">
// //                 <div className="item">
// //                   <p className="lead">
// //                     At CareConnect, we provide compassionate and personalized care
// //                     for pets, children, and elders. Whether it's grooming services
// //                     for your pets, educational programs for your children, or assistance
// //                     for your elders, we are here to help.
// //                   </p>

// //                   <div className="d-flex align-items-center gap-4 py-3">
// //                     <div className="icon">
// //                       {/* <i
// //                         className="fa-solid fa-location-dot p-3 text-white rounded-circle"
// //                       ></i> */}
// //                       <div
// //                         style={{
// //                           backgroundColor: '#127d8e',
// //                           padding: '12px',
// //                           borderRadius: '50%',
// //                           display: 'inline-flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                         }}
// //                       >
// //                         <RoomIcon style={{ color: 'white', fontSize: '24px' }} />
// //                       </div>
// //                     </div>
// //                     <div className="content">
// //                       <div className="h5 fw-bold">Address</div>
// //                       <span className="text-muted">123 Street, Hyderabad, Telangana</span>
// //                     </div>
// //                   </div>
// //                   <div className="d-flex align-items-center gap-4 py-3">
// //                     <div className="icon">
// //                       {/* <i
// //                         className="fa-solid fa-envelope p-3 text-white rounded-circle"
// //                       ></i> */}
// //                       <div
// //                         style={{
// //                           backgroundColor: '#127d8e',
// //                           padding: '12px',
// //                           borderRadius: '50%',
// //                           display: 'inline-flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                         }}
// //                       >
// //                         <MailIcon style={{ color: 'white', fontSize: '24px' }} />
// //                       </div>
// //                     </div>
// //                     <div className="content">
// //                       <div className="h5 fw-bold">Email</div>
// //                       <span className="text-muted">info@careconnect.com</span>
// //                     </div>
// //                   </div>
// //                   <div className="d-flex align-items-center gap-4 py-3">
// //                     <div className="icon">
// //                       {/* <i
// //                         className="fa-solid fa-phone p-3 text-white rounded-circle"
// //                       ></i> */}
// //                       <div
// //                         style={{
// //                           backgroundColor: '#127d8e',
// //                           padding: '12px',
// //                           borderRadius: '50%',
// //                           display: 'inline-flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                         }}
// //                       >
// //                         <CallIcon style={{ color: 'white', fontSize: '24px' }} />
// //                       </div>
// //                     </div>
// //                     <div className="content">
// //                       <div className="h5 fw-bold">Phone</div>
// //                       <span className="text-muted">+012 345 67890</span>
// //                     </div>
// //                   </div>

// //                   <div className="d-flex align-items-center gap-4 py-3">
// //                     <div className="icon">
// //                       <div
// //                         style={{
// //                           backgroundColor: '#127d8e',
// //                           padding: '12px',
// //                           borderRadius: '50%',
// //                           display: 'inline-flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                         }}
// //                       >
// //                         <AccessTimeIcon style={{ color: 'white', fontSize: '24px' }} />
// //                       </div>
// //                     </div>
// //                     <div className="content">
// //                       <div className="h5 fw-bold">Opening Hours</div>
// //                       <span className="text-muted">
// //                         <span className="fw-bold">Sunday - Friday :</span>
// //                         09:00 AM - 06:00 PM</span
// //                       >
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </form>

// //         <Footer />

// //       </div>
// //     </>
// //   )
// // }


// // export default Contact;

// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import MailIcon from '@mui/icons-material/Mail';
// import CallIcon from '@mui/icons-material/Call';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import RoomIcon from '@mui/icons-material/Room';
// import { toast } from 'react-toastify';


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name.trim() && !formData.email.trim() && !formData.message.trim()) {
//     toast.error('Please fill out all fields before submitting.');
//     return;
//   }
//     toast.success(`Thank you for your feedback, ${formData.name}!`);
//     console.log('Form Data:', formData);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <>
//       <div style={{ fontFamily: 'calibri, sans-serif' }}>
//         <Navbar />

//         <nav aria-label="breadcrumb" classNameName="breadcrumb-section position-relative">
//           <div classNameName="position-absolute top-50 start-50 translate-middle">
//             <h2 classNameName="text-center display-3 text-white">Contact Us</h2>
//             <ol classNameName="breadcrumb justify-content-center">
//               <li classNameName="breadcrumb-item">
//                 <a href="/" classNameName="text-white">Home</a>
//               </li>
//               <li classNameName="breadcrumb-item active text-white" aria-current="page">
//                 Contact Us
//               </li>
//             </ol>
//           </div>
//         </nav>

//         <form classNameName="contact-us" onSubmit={handleSubmit}>
//           <div classNameName="container">
//             <div classNameName="main-heading text-center">
//               <span classNameName="text-uppercase position-relative d-inline-block px-2">Get in touch</span>
//               <h2 classNameName="fw-bold my-3">Contact Us For Any Query</h2>
//             </div>
//             <div classNameName="row row-cols-1 row-cols-lg-2">
//               <div classNameName="col p-3">
//                 <div classNameName="item">
//                   <input
//                     type="text"
//                     name="name"
//                     classNameName="form-control form-control-lg mb-3"
//                     placeholder="Your Name"
//                     aria-label="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     classNameName="form-control form-control-lg mb-3"
//                     placeholder="Your Email"
//                     aria-label="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />

//                   <textarea
//                     name="message"
//                     classNameName="form-control form-control-lg mb-3"
//                     placeholder="Message"
//                     aria-label="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>

//                   <button
//                     type="submit"
//                     classNameName="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white border-0 py-2 px-4 rounded-pill"
//                   >
//                     Send Feedback
//                   </button>
//                 </div>
//               </div>

//               <div classNameName="col p-3">
//                 <div classNameName="item">
//                   <p classNameName="lead">
//                     At CareConnect, we provide compassionate and personalized care for pets, children, and elders. Whether it's grooming services for your pets, educational programs for your children, or assistance for your elders, we are here to help.
//                   </p>

//                   <div classNameName="d-flex align-items-center gap-4 py-3">
//                     <div classNameName="icon">
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <RoomIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div classNameName="content">
//                       <div classNameName="h5 fw-bold">Address</div>
//                       <span classNameName="text-muted">123 Street, Hyderabad, Telangana</span>
//                     </div>
//                   </div>
//                   <div classNameName="d-flex align-items-center gap-4 py-3">
//                     <div classNameName="icon">
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <MailIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div classNameName="content">
//                       <div classNameName="h5 fw-bold">Email</div>
//                       <span classNameName="text-muted">info@careconnect.com</span>
//                     </div>
//                   </div>
//                   <div classNameName="d-flex align-items-center gap-4 py-3">
//                     <div classNameName="icon">
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <CallIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div classNameName="content">
//                       <div classNameName="h5 fw-bold">Phone</div>
//                       <span classNameName="text-muted">+012 345 67890</span>
//                     </div>
//                   </div>

//                   <div classNameName="d-flex align-items-center gap-4 py-3">
//                     <div classNameName="icon">
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <AccessTimeIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div classNameName="content">
//                       <div classNameName="h5 fw-bold">Opening Hours</div>
//                       <span classNameName="text-muted">
//                         <span classNameName="fw-bold">Sunday - Friday :</span> 09:00 AM - 06:00 PM
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Contact;

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import MailIcon from '@mui/icons-material/Mail';
// import CallIcon from '@mui/icons-material/Call';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import RoomIcon from '@mui/icons-material/Room';



// const Contact = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <div style={{ fontFamily: "calibri, sans-serif" }}>
//         <Navbar />

//         <nav aria-label="breadcrumb" className="breadcrumb-section position-relative">
//           <div className="position-absolute top-50 start-50 translate-middle">
//             <h2 className="text-center display-3 text-white">Contact Us</h2>
//             <ol className="breadcrumb justify-content-center">
//               <li className="breadcrumb-item">
//                 <a href="/" className="text-white">Home</a>
//               </li>
//               <li className="breadcrumb-item active text-white" aria-current="page">
//                 Contact Us
//               </li>
//             </ol>
//           </div>
//         </nav>

//         <form className="contact-us">
//           <div className="container">
//             <div className="main-heading text-center">
//               <span className="text-uppercase position-relative d-inline-block px-2"
//               >Get in touch</span
//               >
//               <h2 className="fw-bold my-3">Contact Us For Any Query</h2>
//             </div>
//             <div className="row row-cols-1 row-cols-lg-2">
//               <div className="col p-3">
//                 <div className="item">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg mb-3"
//                     placeholder="Your Name"
//                     aria-label="Your Name"
//                   />

//                   <input
//                     type="email"
//                     className="form-control form-control-lg mb-3"
//                     placeholder="Your Email"
//                     aria-label="Your Email"
//                   />

//                   <textarea
//                     className="form-control form-control-lg mb-3"
//                     placeholder="Message"
//                     aria-label="Message"
//                   ></textarea>

//                   <button
//                     className="main-link mb-2 mb-lg-0 d-inline-block text-decoration-none text-white border-0 py-2 px-4 rounded-pill"
//                   >
//                     send Feedback
//                   </button>
//                 </div>
//               </div>

//               <div className="col p-3">
//                 <div className="item">
//                   <p className="lead">
//                     At CareConnect, we provide compassionate and personalized care
//                     for pets, children, and elders. Whether it's grooming services
//                     for your pets, educational programs for your children, or assistance
//                     for your elders, we are here to help.
//                   </p>

//                   <div className="d-flex align-items-center gap-4 py-3">
//                     <div className="icon">
//                       {/* <i
//                         className="fa-solid fa-location-dot p-3 text-white rounded-circle"
//                       ></i> */}
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <RoomIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div className="content">
//                       <div className="h5 fw-bold">Address</div>
//                       <span className="text-muted">123 Street, Hyderabad, Telangana</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4 py-3">
//                     <div className="icon">
//                       {/* <i
//                         className="fa-solid fa-envelope p-3 text-white rounded-circle"
//                       ></i> */}
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <MailIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div className="content">
//                       <div className="h5 fw-bold">Email</div>
//                       <span className="text-muted">info@careconnect.com</span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4 py-3">
//                     <div className="icon">
//                       {/* <i
//                         className="fa-solid fa-phone p-3 text-white rounded-circle"
//                       ></i> */}
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <CallIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div className="content">
//                       <div className="h5 fw-bold">Phone</div>
//                       <span className="text-muted">+012 345 67890</span>
//                     </div>
//                   </div>

//                   <div className="d-flex align-items-center gap-4 py-3">
//                     <div className="icon">
//                       <div
//                         style={{
//                           backgroundColor: '#127d8e',
//                           padding: '12px',
//                           borderRadius: '50%',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <AccessTimeIcon style={{ color: 'white', fontSize: '24px' }} />
//                       </div>
//                     </div>
//                     <div className="content">
//                       <div className="h5 fw-bold">Opening Hours</div>
//                       <span className="text-muted">
//                         <span className="fw-bold">Sunday - Friday :</span>
//                         09:00 AM - 06:00 PM</span
//                       >
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         <Footer />

//       </div>
//     </>
//   )
// }


// export default Contact;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Footer from './footer';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import { toast } from 'react-toastify';
import { Box, Typography, Breadcrumbs, styled, Grid, Stack, Paper, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() && !formData.email.trim() && !formData.message.trim()) {
      toast.error('Please fill out all fields before submitting.');
      return;
    }
    toast.success(`Thank you for your feedback, ${formData.name}!`);
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <BreadcrumbSection>
          <Typography variant="h3">Contact Us</Typography>
          <Breadcrumbs sx={{ justifyContent: 'center', display: 'flex', mt: 2, color: "#fff" }} separator="/">
            <Link underline="hover" color="inherit" href="/" style={{ color: "#fff" }}>Home</Link>
            <Typography color="white">Contact</Typography>
          </Breadcrumbs>
        </BreadcrumbSection>

        <Box textAlign="center" mb={5} pt={4}>
          <Typography variant="h4" fontWeight="bold" mt={2} sx={{ color: '#00394f' }}>
            Contact Us For Any Query
          </Typography>
        </Box>

        <Grid container spacing={4} pb={7}>
          {/* Form Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: '50px', textTransform: 'none', backgroundColor: '#127d8e' }}
                  onClick={handleSubmit}
                >
                  Send Feedback
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Info Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" color="text.secondary" mb={3}>
              At CareConnect, we provide compassionate and personalized care for pets, children, and elders. Whether it's grooming services for your pets, educational programs for your children, or assistance for your elders, we are here to help.
            </Typography>

            {[
              {
                icon: <RoomIcon sx={{ color: 'white' }} />,
                title: 'Address',
                text: '123 Street, Hyderabad, Telangana'
              },
              {
                icon: <MailIcon sx={{ color: 'white' }} />,
                title: 'Email',
                text: 'info@careconnect.com'
              },
              {
                icon: <CallIcon sx={{ color: 'white' }} />,
                title: 'Phone',
                text: '+012 345 67890'
              },
              {
                icon: <AccessTimeIcon sx={{ color: 'white' }} />,
                title: 'Opening Hours',
                text: 'Sunday - Friday : 09:00 AM - 06:00 PM'
              }
            ].map((item, index) => (
              <Stack direction="row" spacing={2} alignItems="center" py={2} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#127d8e',
                    p: 1.5,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </Box>
              </Stack>
            ))}
          </Grid>
        </Grid>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Contact;