import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Linux Commands', path: '/linux-commands' },
    { text: 'System Admin', path: '/system-admin' },
    { text: 'DevOps Interview', path: '/devops-interview' },
    { text: 'Linux Interview', path: '/linux-interview' }
  ];

  const handleMenuClick = (path) => {
    handleClose();
    const sectionId = path.slice(1) || 'home';
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            onClick: () => handleMenuClick(item.path),
            sx: {
              color: 'inherit',
              backgroundColor: activeSection === (item.path.slice(1) || 'home') ? 'action.selected' : 'transparent',
              '&:hover': {
                backgroundColor: 'action.hover',
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
          onClick: () => handleMenuClick(item.path),
          sx: {
            color: 'text.primary',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: 'primary.main',
              transform: activeSection === (item.path.slice(1) || 'home') ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease'
            },
            '&:hover::after': {
              transform: 'scaleX(1)'
            }
          }
        }, item.text)
      ))
    )
  );

  return React.createElement(AppBar, { 
    position: "sticky",
    sx: {
      backgroundColor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider'
    }
  },
    React.createElement(Toolbar, null,
      React.createElement(ComputerIcon, { sx: { mr: 2 } }),
      React.createElement(Typography, {
        variant: "h6",
        component: "div",
        sx: {
          flexGrow: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: 'text.primary'
        }
      }, "All About Linux"),
      isMobile ? renderMobileMenu() : renderDesktopMenu()
    )
  );
}

export default Navbar; 