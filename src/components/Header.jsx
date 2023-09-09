import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Header() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
