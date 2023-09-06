import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navigation() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab label="Registration" sx={{ backgroundColor: 'lightblue' }} />
        <Tab label="Log In" sx={{ backgroundColor: 'lightblue' }}/>
        <Tab label="Contacts" sx={{ backgroundColor: 'lightblue' }} />
      </Tabs>
    </AppBar>
  );
}

export default Navigation;
