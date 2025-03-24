import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TerminalIcon from '@mui/icons-material/Terminal';

const commandCategories = [
  {
    category: 'File Management',
    commands: [
      { command: 'ls', description: 'List directory contents' },
      { command: 'cd', description: 'Change directory' },
      { command: 'pwd', description: 'Print working directory' },
      { command: 'cp', description: 'Copy files and directories' },
      { command: 'mv', description: 'Move/rename files and directories' },
      { command: 'rm', description: 'Remove files and directories' },
      { command: 'mkdir', description: 'Create directories' },
      { command: 'touch', description: 'Create empty files or update timestamps' }
    ]
  },
  {
    category: 'System Information',
    commands: [
      { command: 'uname', description: 'Print system information' },
      { command: 'top', description: 'Display system processes' },
      { command: 'df', description: 'Show disk space usage' },
      { command: 'free', description: 'Display memory usage' },
      { command: 'ps', description: 'Show process status' },
      { command: 'who', description: 'Show who is logged in' }
    ]
  },
  {
    category: 'Text Processing',
    commands: [
      { command: 'cat', description: 'Concatenate and display file content' },
      { command: 'grep', description: 'Search text patterns in files' },
      { command: 'sed', description: 'Stream editor for text manipulation' },
      { command: 'awk', description: 'Pattern scanning and text processing' },
      { command: 'head', description: 'Display first lines of a file' },
      { command: 'tail', description: 'Display last lines of a file' }
    ]
  },
  {
    category: 'Network Commands',
    commands: [
      { command: 'ping', description: 'Test network connectivity' },
      { command: 'ifconfig/ip', description: 'Configure network interfaces' },
      { command: 'netstat', description: 'Network statistics' },
      { command: 'ssh', description: 'Secure shell remote login' },
      { command: 'wget', description: 'Download files from the web' },
      { command: 'curl', description: 'Transfer data from/to servers' }
    ]
  },
  {
    category: 'User Management',
    commands: [
      { command: 'useradd', description: 'Create a new user' },
      { command: 'usermod', description: 'Modify user properties' },
      { command: 'userdel', description: 'Delete a user' },
      { command: 'passwd', description: 'Change user password' },
      { command: 'su', description: 'Switch user' },
      { command: 'sudo', description: 'Execute command as superuser' }
    ]
  }
];

function LinuxCommands() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h3", 
        component: "h1", 
        gutterBottom: true 
      }, "Linux Commands"),
      React.createElement(Typography, { 
        variant: "h6", 
        color: "text.secondary" 
      }, "Essential commands for Linux system administration")
    ),
    React.createElement(Box, { 
      sx: { display: "flex", alignItems: "center", mb: 4 } 
    },
      React.createElement(TerminalIcon, { 
        sx: { fontSize: 40, mr: 2 }, 
        color: "primary" 
      }),
      React.createElement(Typography, { variant: "h5" },
        "Command Categories"
      )
    ),
    commandCategories.map((category, index) =>
      React.createElement(Accordion, { 
        key: index, 
        sx: { 
          mb: 2,
          '&:before': {
            display: 'none',
          },
        }
      },
        React.createElement(AccordionSummary, {
          expandIcon: React.createElement(ExpandMoreIcon),
          "aria-controls": `panel${index}-content`,
          id: `panel${index}-header`,
          sx: {
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }
        },
          React.createElement(Typography, { 
            variant: "h6",
            sx: { color: 'primary.main' }
          }, category.category)
        ),
        React.createElement(AccordionDetails, null,
          React.createElement(Box, {
            sx: {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 2
            }
          },
            category.commands.map((cmd, cmdIndex) =>
              React.createElement(Box, {
                key: cmdIndex,
                sx: {
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  backgroundColor: 'background.paper'
                }
              },
                React.createElement(Typography, {
                  variant: "subtitle1",
                  component: "code",
                  sx: { 
                    display: 'block',
                    color: 'primary.main',
                    mb: 1
                  }
                }, cmd.command),
                React.createElement(Typography, {
                  variant: "body2",
                  color: "text.secondary"
                }, cmd.description)
              )
            )
          )
        )
      )
    )
  );
}

export default LinuxCommands; 