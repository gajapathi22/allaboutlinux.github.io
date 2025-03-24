import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LinuxCommands from './pages/LinuxCommands';
import SystemAdmin from './pages/SystemAdmin';
import DevOpsInterview from './pages/DevOpsInterview';
import LinuxInterview from './pages/LinuxInterview';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
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
        React.createElement(Route, { path: "/linux-commands", element: React.createElement(LinuxCommands) }),
        React.createElement(Route, { path: "/system-admin", element: React.createElement(SystemAdmin) }),
        React.createElement(Route, { path: "/devops-interview", element: React.createElement(DevOpsInterview) }),
        React.createElement(Route, { path: "/linux-interview", element: React.createElement(LinuxInterview) })
      )
    )
  );
}

export default App;
