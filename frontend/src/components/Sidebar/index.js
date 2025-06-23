import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { FaListCheck } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Typography
} from '@mui/material';

function Sidebar({ onLogout }) {
  const location = useLocation(); // Get the current route
  const [selected, setSelected] = useState('');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <AiOutlineDashboard />, link: '/dashboard' },
    { id: 'appointments', label: 'Schedules', icon: <FaListCheck />, link: '/appointments' },
    { id: 'dependents', label: 'Dependents', icon: <MdFamilyRestroom />, link: '/dependents' },
    { id: 'profile', label: 'Profile Settings', icon: <GrUserSettings />, link: '/profile' },
  ];

  // Set the selected menu item based on the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = menuItems.find(item => item.link === currentPath);
    if (currentItem) {
      setSelected(currentItem.id);
    }
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',
          backgroundColor: '#f9f9f9',
          fontFamily: 'Calibri, sans-serif',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          padding: '16px 0',
          fontWeight: 'bold',
          color: '#333',
          borderBottom: '1px solid #ddd',
          fontFamily: 'Calibri, sans-serif',
        }}
      >
        CareConnect
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              sx={{
                borderRadius: 2,
                margin: '8px',
                '&.Mui-selected': {
                  backgroundColor: '#127d8e',
                  color: '#fff',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                },
                '&:hover': {
                  backgroundColor: '#f0e1c0',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: '500',
                      fontFamily: 'Calibri, sans-serif',
                    }}
                  >
                    {item.label}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ marginTop: 'auto', padding: '16px' }}>
          <Button
            variant="contained"
            color="error"
            onClick={onLogout}
            sx={{
              width: '100%',
              borderRadius: 2,
              fontWeight: 'bold',
              fontFamily: 'Calibri, sans-serif',
              '&:hover': {
                backgroundColor: '#CC0000',
              },
            }}
          >
            <Link to="/login" style={{ textDecoration: 'none', color: '#fff', fontFamily: 'Calibri, sans-serif' }}>
              Logout
            </Link>
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;