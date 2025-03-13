import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';

function Navbar() {
  return React.createElement(AppBar, { position: "static" },
    React.createElement(Toolbar, null,
      React.createElement(ComputerIcon, { sx: { mr: 2 } }),
      React.createElement(Typography, { 
        variant: "h6", 
        component: "div", 
        sx: { flexGrow: 1 } 
      }, "All About Linux"),
      React.createElement(Box, null,
        React.createElement(Button, { 
          color: "inherit", 
          component: RouterLink, 
          to: "/" 
        }, "Home"),
        React.createElement(Button, { 
          color: "inherit", 
          component: RouterLink, 
          to: "/distributions" 
        }, "Distributions"),
        React.createElement(Button, { 
          color: "inherit", 
          component: RouterLink, 
          to: "/commands" 
        }, "Commands"),
        React.createElement(Button, { 
          color: "inherit", 
          component: RouterLink, 
          to: "/system-admin" 
        }, "System Admin")
      )
    )
  );
}

export default Navbar; 