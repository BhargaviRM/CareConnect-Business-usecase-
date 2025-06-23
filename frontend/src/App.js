import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/index';
import Register from './components/Register/index';
import Login from './components/Login/index';
import Profile from './components/Profile/index';
import Appointments from './components/Appointments/index';
import Dependents from './components/Dependents/index';
import Dashboard from './components/Dashboard/index';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './components/Home/home';
import About from './components/Home/about';
import Services from './components/Home/services';
import Contact from './components/Home/contact';


let isToastShown = false;

function App() {
  const [token, setToken] = useState(null);
  
  useState(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          if (!isToastShown) { 
            isToastShown = true;
            toast.error('Invalid credentials or Session expired. Please log in again.');
            setTimeout(() => {
              isToastShown = false;
            }, 3000);
          }
          setToken(null);
          localStorage.removeItem('token');
        }
        return Promise.reject(error);
      }
    );
  }, []);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    isToastShown = false;
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {token && <Sidebar onLogout={handleLogout} />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Landing />} />
            <Route path ="/about" element={token ? <Navigate to="/dashboard" /> : <About />} />
            <Route path ="/services" element={token ? <Navigate to="/dashboard" /> : <Services />} />
            <Route path="/contact" element={token ? <Navigate to="/dashboard" /> : <Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={setToken} />} />
            <Route path="/dashboard" element={token ? <Dashboard token={token} /> : <Navigate to="/login" />} />
            <Route path="/profile" element={token ? <Profile token={token} /> : <Navigate to="/login" />} />
            <Route path="/appointments" element={token ? <Appointments token={token} /> : <Navigate to="/login" />} />
            <Route path="/dependents" element={token ? <Dependents token={token} /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Register from './components/Register';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Appointments from './components/Appointments';
// import Dependents from './components/Dependents';
// import Dashboard from './components/Dashboard';
// import Home from './components/home';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       toast.error('Invalid credentials or Session expired. Please log in again.');
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const handleLogout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         {token && <Sidebar onLogout={handleLogout} />}
//         <div style={{ flex: 1, padding: '20px' }}>
//           <Routes>
//             <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login onLogin={setToken} />} />
//             <Route path="/dashboard" element={token ? <Dashboard token={token}/> : <Navigate to="/login" />} />
//             <Route path="/profile" element={token ? <Profile token={token} /> : <Navigate to="/login" />} />
//             <Route path="/appointments" element={token ? <Appointments token={token} /> : <Navigate to="/login" />} />
//             <Route path="/dependents" element={token ? <Dependents token={token} /> : <Navigate to="/login" />} />
//           </Routes>
//         </div>
//       </div>
//       <ToastContainer />
//     </Router>
//   );
// }

// export default App;