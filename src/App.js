import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Distributions from './pages/Distributions';
import Commands from './pages/Commands';
import SystemAdmin from './pages/SystemAdmin';

const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return React.createElement(ThemeProvider, { theme },
    React.createElement(React.Fragment, null,
      React.createElement(CssBaseline),
      React.createElement(Navbar),
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/home", element: React.createElement(Navigate, { to: "/" }) }),
        React.createElement(Route, { path: "/distributions", element: React.createElement(Distributions) }),
        React.createElement(Route, { path: "/commands", element: React.createElement(Commands) }),
        React.createElement(Route, { path: "/system-admin", element: React.createElement(SystemAdmin) }),
        React.createElement(Route, { path: "*", element: React.createElement(Navigate, { to: "/" }) })
      )
    )
  );
}

export default App;
