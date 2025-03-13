import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const adminTopics = [
  {
    title: 'User Management',
    content: `
      User management is a critical aspect of Linux system administration. Key tasks include:
      • Creating new users (useradd)
      • Modifying user properties (usermod)
      • Setting passwords (passwd)
      • Managing user groups (groupadd, groupmod)
      • Setting file permissions and ownership (chmod, chown)
    `
  },
  {
    title: 'Package Management',
    content: `
      Different Linux distributions use different package managers:
      • apt (Debian/Ubuntu): apt update, apt install, apt remove
      • dnf (Fedora/RHEL): dnf update, dnf install, dnf remove
      • pacman (Arch): pacman -Syu, pacman -S, pacman -R
      
      Regular system updates are crucial for security and stability.
    `
  },
  {
    title: 'Service Management',
    content: `
      systemd is the init system and service manager for most modern Linux distributions:
      • Starting services: systemctl start service-name
      • Stopping services: systemctl stop service-name
      • Enabling services at boot: systemctl enable service-name
      • Checking service status: systemctl status service-name
    `
  },
  {
    title: 'System Monitoring',
    content: `
      Essential monitoring tasks and tools:
      • Process monitoring: top, htop, ps
      • Resource usage: free, df, du
      • System logs: journalctl, /var/log files
      • Network monitoring: netstat, ss, iftop
    `
  },
  {
    title: 'Backup and Recovery',
    content: `
      Important backup considerations:
      • Regular backups of critical data
      • System backup tools: rsync, tar
      • Backup verification and testing
      • Recovery procedures and documentation
      • Backup automation and scheduling
    `
  }
];

function SystemAdmin() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h3", 
        component: "h1", 
        gutterBottom: true 
      }, "System Administration"),
      React.createElement(Typography, { 
        variant: "h6", 
        color: "text.secondary" 
      }, "Essential knowledge and tasks for Linux system administrators")
    ),
    React.createElement(Box, { 
      sx: { display: "flex", alignItems: "center", mb: 4 } 
    },
      React.createElement(AdminPanelSettingsIcon, { 
        sx: { fontSize: 40, mr: 2 }, 
        color: "primary" 
      }),
      React.createElement(Typography, { variant: "h5" },
        "Core System Administration Topics"
      )
    ),
    adminTopics.map((topic, index) =>
      React.createElement(Accordion, { key: index, sx: { mb: 2 } },
        React.createElement(AccordionSummary, {
          expandIcon: React.createElement(ExpandMoreIcon),
          "aria-controls": `panel${index}-content`,
          id: `panel${index}-header`
        },
          React.createElement(Typography, { variant: "h6" }, topic.title)
        ),
        React.createElement(AccordionDetails, null,
          React.createElement(Typography, {
            component: "pre",
            sx: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              fontSize: "0.9rem"
            }
          }, topic.content)
        )
      )
    )
  );
}

export default SystemAdmin; 