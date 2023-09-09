import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    if (location.pathname === '/register') {
      setSelectedTab(0);
    } else if (location.pathname === '/login') {
      setSelectedTab(1);
    } else if (location.pathname === '/contacts') {
      setSelectedTab(2);
    }
  }, [location]);


  return (
    <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab 
          label="Register" 
          sx={{ backgroundColor: 'lightblue' }} 
          component={Link} 
          to="/register" 
          value={0} 
        />
        <Tab 
          label="Login" 
          sx={{ backgroundColor: 'lightblue' }} 
          component={Link} 
          to="/login" 
          value={1} 
        />
        <Tab 
          label="Contacts" 
          sx={{ backgroundColor: 'lightblue' }} 
          component={Link} 
          to="/contacts" 
          value={2} 
        />
      </Tabs>
    </AppBar>
  );
}

export default Header;
