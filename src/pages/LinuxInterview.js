import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TerminalIcon from '@mui/icons-material/Terminal';

const linuxQuestions = [
  {
    question: 'What is Linux?',
    answer: `
      Linux is an open-source operating system kernel that:
      • Was created by Linus Torvalds in 1991
      • Is based on Unix principles
      • Is the core of many operating systems (distributions)
      
      Key characteristics:
      • Open source and free to use
      • Highly customizable
      • Excellent for servers and development
      • Strong security features
    `
  },
  {
    question: 'What are the different ways to find files in Linux?',
    answer: `
      There are several commands to find files in Linux:
      
      1. find command:
      • Basic syntax: find [path] [expression]
      • Examples:
        - find /home -name "file.txt"    # Find by name
        - find / -type f -size +100M     # Find files larger than 100MB
        - find . -mtime -7              # Find files modified in last 7 days
        - find / -perm 777              # Find files with specific permissions
      
      2. locate command:
      • Faster than find but uses a database
      • Syntax: locate [pattern]
      • Example: locate "file.txt"
      • Note: Database needs to be updated (updatedb)
      
      3. which command:
      • Finds executable files in PATH
      • Syntax: which [command]
      • Example: which python
      
      4. whereis command:
      • Locates binary, source, and manual files
      • Syntax: whereis [command]
      • Example: whereis python
    `
  },
  {
    question: 'How do you use grep command effectively?',
    answer: `
      grep (Global Regular Expression Print) is powerful for text searching:
      
      Basic syntax: grep [options] pattern [file]
      
      Common options:
      • -i: Case-insensitive search
      • -r: Recursive search in directories
      • -n: Show line numbers
      • -v: Invert match (show non-matching lines)
      • -l: Show only filenames
      
      Examples:
      • grep -i "error" log.txt         # Case-insensitive search
      • grep -r "function" ./src        # Search in all files recursively
      • grep -n "warning" log.txt       # Show line numbers
      • grep -v "success" log.txt       # Show lines without "success"
      • grep -l "main" *.js             # List files containing "main"
      
      Advanced usage:
      • grep -A 3 "error" log.txt       # Show 3 lines after match
      • grep -B 3 "error" log.txt       # Show 3 lines before match
      • grep -C 3 "error" log.txt       # Show 3 lines before and after
    `
  },
  {
    question: 'What is the difference between Linux and Unix?',
    answer: `
      Key differences between Linux and Unix:
      • Linux is open-source, while Unix is proprietary
      • Linux is a kernel, while Unix is a complete OS
      • Linux supports more hardware platforms
      • Linux has a larger community and more distributions
      
      Similarities:
      • Both follow similar design principles
      • Both use similar command-line interfaces
      • Both support multi-user environments
    `
  },
  {
    question: 'How do you manage processes in Linux?',
    answer: `
      Process management commands and techniques:
      
      1. Viewing Processes:
      • ps: List processes
        - ps aux: Show all processes
        - ps -ef: Show full format
        - ps -u username: Show user's processes
      
      2. Process Control:
      • kill: Send signal to process
        - kill -9 PID: Force kill
        - kill -15 PID: Graceful termination
      
      3. Process Priority:
      • nice: Run with modified priority
      • renice: Change priority of running process
      
      4. Background/Foreground:
      • &: Run in background
      • fg: Bring to foreground
      • bg: Send to background
      
      5. Process Monitoring:
      • top: Interactive process viewer
      • htop: Enhanced process viewer
      • pidof: Find process ID by name
    `
  },
  {
    question: 'What is a shell in Linux?',
    answer: `
      A shell is a command-line interpreter that:
      • Provides interface to the operating system
      • Executes commands
      • Supports scripting
      
      Common shells:
      • Bash (Bourne Again Shell): Most common
      • Zsh: Enhanced shell with better features
      • Fish: User-friendly shell
      • Ksh: Korn shell
    `
  },
  {
    question: 'How do you manage file permissions in Linux?',
    answer: `
      File permission management:
      
      1. Viewing Permissions:
      • ls -l: Show detailed permissions
      • stat: Show detailed file information
      
      2. Changing Permissions:
      • chmod: Change file permissions
        - chmod 755 file.txt
        - chmod u+x file.txt
        - chmod g-w file.txt
      
      3. Changing Ownership:
      • chown: Change file owner
        - chown user:group file.txt
      • chgrp: Change group ownership
        - chgrp group file.txt
      
      4. Special Permissions:
      • SUID (4000): Set user ID
      • SGID (2000): Set group ID
      • Sticky bit (1000): Prevent deletion
      
      Examples:
      • chmod 777 file.txt    # Full permissions
      • chmod 755 file.txt    # Owner: rwx, Others: rx
      • chmod 644 file.txt    # Owner: rw, Others: r
    `
  },
  {
    question: 'What is the Linux file system hierarchy?',
    answer: `
      The Linux file system hierarchy:
      • / (root): The top-level directory
      • /bin: Essential user command binaries
      • /etc: System configuration files
      • /home: User home directories
      • /usr: User programs and data
      • /var: Variable data files
      • /tmp: Temporary files
      • /dev: Device files
      • /proc: Process information
      • /boot: Boot loader files
    `
  },
  {
    question: 'What is a Linux distribution?',
    answer: `
      A Linux distribution is a complete operating system that:
      • Includes the Linux kernel
      • Contains system utilities and applications
      • Has a package management system
      
      Popular distributions:
      • Ubuntu: User-friendly, great for beginners
      • Debian: Stable and secure
      • Fedora: Cutting-edge features
      • Arch Linux: Highly customizable
    `
  },
  {
    question: 'What are Linux file permissions?',
    answer: `
      Linux file permissions:
      • Read (r): Permission to read file
      • Write (w): Permission to modify file
      • Execute (x): Permission to run file
      
      Permission types:
      • User (owner) permissions
      • Group permissions
      • Others permissions
      
      Example: rwxr-xr--
      • Owner: read, write, execute
      • Group: read, execute
      • Others: read only
    `
  },
  {
    question: 'What is a process in Linux?',
    answer: `
      A process is a running instance of a program that:
      • Has a unique process ID (PID)
      • Contains program code and data
      • Has its own memory space
      
      Process states:
      • Running: Currently executing
      • Sleeping: Waiting for resources
      • Stopped: Suspended
      • Zombie: Terminated but not cleaned up
    `
  }
];

function LinuxInterview() {
  return React.createElement(Container, { 
    maxWidth: "lg", 
    sx: { 
      mt: 4,
      p: 4  // Adding padding of 32px (theme.spacing(4))
    } 
  },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h3", 
        component: "h1", 
        gutterBottom: true 
      }, "Linux Interview Questions"),
      React.createElement(Typography, { 
        variant: "h8", 
        color: "text.secondary" 
      }, "Common interview questions and answers for Linux roles")
    ),
    React.createElement(Box, { 
      sx: { display: "flex", alignItems: "center", mb: 4 } 
    },
      React.createElement(TerminalIcon, { 
        sx: { fontSize: 40, mr: 2 }, 
        color: "primary" 
      }),
      React.createElement(Typography, { variant: "h5" },
        "Essential Linux Topics"
      )
    ),
    linuxQuestions.map((item, index) =>
      React.createElement(Accordion, { 
        key: index, 
        sx: { 
          mb: 2,
          '&:before': {
            display: 'none',
          },
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }
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
          }, item.question)
        ),
        React.createElement(AccordionDetails, null,
          React.createElement(Typography, {
            component: "pre",
            sx: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              fontSize: "1.1rem",
              color: "text.primary",
              lineHeight: 1.6
            }
          }, item.answer)
        )
      )
    )
  );
}

export default LinuxInterview; 