import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Distributions', path: '/distributions' },
    { text: 'Commands', path: '/commands' },
    { text: 'System Admin', path: '/system-admin' }
  ];

  const renderMobileMenu = () => (
    React.createElement(React.Fragment, null,
      React.createElement(IconButton, {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        onClick: handleMenu,
        sx: { ml: 'auto' }
      },
        React.createElement(MenuIcon, null)
      ),
      React.createElement(Menu, {
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      },
        menuItems.map((item) => (
          React.createElement(MenuItem, {
            key: item.text,
            component: RouterLink,
            to: item.path,
            onClick: handleClose,
            sx: {
              color: 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }
          }, item.text)
        ))
      )
    )
  );

  const renderDesktopMenu = () => (
    React.createElement(Box, { sx: { display: 'flex', gap: 2 } },
      menuItems.map((item) => (
        React.createElement(Button, {
          key: item.text,
          color: "inherit",
          component: RouterLink,
          to: item.path,
          sx: {
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          }
        }, item.text)
      ))
    )
  );

  return React.createElement(AppBar, { position: "static" },
    React.createElement(Toolbar, null,
      React.createElement(ComputerIcon, { sx: { mr: 2 } }),
      React.createElement(Typography, { 
        variant: "h6", 
        component: "div", 
        sx: { 
          flexGrow: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        } 
      }, "All About Linux"),
      isMobile ? renderMobileMenu() : renderDesktopMenu()
    )
  );
}

export default Navbar; 