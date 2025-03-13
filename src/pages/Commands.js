import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';

const commands = [
  {
    category: 'File Operations',
    commands: [
      { name: 'ls', description: 'List directory contents' },
      { name: 'cd', description: 'Change directory' },
      { name: 'cp', description: 'Copy files and directories' },
      { name: 'mv', description: 'Move or rename files and directories' },
      { name: 'rm', description: 'Remove files or directories' }
    ]
  },
  {
    category: 'System Information',
    commands: [
      { name: 'uname', description: 'Print system information' },
      { name: 'top', description: 'Display system processes' },
      { name: 'df', description: 'Show disk space usage' },
      { name: 'free', description: 'Display memory usage' }
    ]
  },
  {
    category: 'Text Processing',
    commands: [
      { name: 'cat', description: 'Concatenate and display file content' },
      { name: 'grep', description: 'Search for patterns in files' },
      { name: 'sed', description: 'Stream editor for filtering and transforming text' },
      { name: 'awk', description: 'Pattern scanning and text processing language' }
    ]
  }
];

function Commands() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h3", 
        component: "h1", 
        gutterBottom: true 
      }, "Essential Linux Commands"),
      React.createElement(Typography, { 
        variant: "h6", 
        color: "text.secondary" 
      }, "Master these fundamental commands to navigate and manage your Linux system")
    ),
    commands.map((category, index) =>
      React.createElement(Paper, { key: index, sx: { p: 3, mb: 4 } },
        React.createElement(Box, { 
          sx: { display: "flex", alignItems: "center", mb: 3 } 
        },
          React.createElement(TerminalIcon, { 
            sx: { mr: 2, fontSize: 30 }, 
            color: "primary" 
          }),
          React.createElement(Typography, { variant: "h5" }, category.category)
        ),
        category.commands.map((cmd, cmdIndex) =>
          React.createElement(Box, { key: cmdIndex },
            React.createElement(Box, { sx: { py: 2 } },
              React.createElement(Typography, { 
                variant: "h6", 
                component: "code", 
                sx: { 
                  bgcolor: "background.paper",
                  p: 1,
                  borderRadius: 1,
                  fontFamily: "monospace"
                } 
              }, cmd.name),
              React.createElement(Typography, { sx: { mt: 1 } }, cmd.description)
            ),
            cmdIndex < category.commands.length - 1 && React.createElement(Divider)
          )
        )
      )
    )
  );
}

export default Commands; 