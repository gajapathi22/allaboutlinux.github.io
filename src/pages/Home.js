import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';

function Home() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h2", 
        component: "h1", 
        gutterBottom: true 
      }, "Welcome to All About Linux"),
      React.createElement(Typography, { 
        variant: "h5", 
        color: "text.secondary", 
        paragraph: true 
      }, "Your comprehensive guide to understanding and mastering Linux operating systems")
    ),
    React.createElement(Grid, { container: true, spacing: 4 },
      React.createElement(Grid, { item: true, xs: 12 },
        React.createElement(Paper, { sx: { p: 4 } },
          React.createElement(Typography, { 
            variant: "h4", 
            gutterBottom: true 
          }, "What is Linux?"),
          React.createElement(Typography, { paragraph: true },
            "Linux is a free and open-source operating system kernel first released by Linus Torvalds in 1991. " +
            "Today, it powers everything from smartphones to supercomputers, making it one of the most important " +
            "pieces of software in the world."
          )
        )
      ),
      React.createElement(Grid, { item: true, xs: 12, md: 6 },
        React.createElement(Paper, { sx: { p: 3, height: "100%" } },
          React.createElement(Box, { 
            sx: { display: "flex", alignItems: "center", mb: 2 } 
          },
            React.createElement(SecurityIcon, { 
              sx: { mr: 2, fontSize: 40 }, 
              color: "primary" 
            }),
            React.createElement(Typography, { variant: "h5" }, "Secure")
          ),
          React.createElement(Typography, null,
            "Linux is known for its robust security model and regular security updates, making it a preferred " +
            "choice for servers and enterprise systems."
          )
        )
      ),
      React.createElement(Grid, { item: true, xs: 12, md: 6 },
        React.createElement(Paper, { sx: { p: 3, height: "100%" } },
          React.createElement(Box, { 
            sx: { display: "flex", alignItems: "center", mb: 2 } 
          },
            React.createElement(SpeedIcon, { 
              sx: { mr: 2, fontSize: 40 }, 
              color: "primary" 
            }),
            React.createElement(Typography, { variant: "h5" }, "Efficient")
          ),
          React.createElement(Typography, null,
            "With its lightweight architecture and efficient resource management, Linux can run on almost any " +
            "hardware configuration."
          )
        )
      ),
      React.createElement(Grid, { item: true, xs: 12, md: 6 },
        React.createElement(Paper, { sx: { p: 3, height: "100%" } },
          React.createElement(Box, { 
            sx: { display: "flex", alignItems: "center", mb: 2 } 
          },
            React.createElement(GroupIcon, { 
              sx: { mr: 2, fontSize: 40 }, 
              color: "primary" 
            }),
            React.createElement(Typography, { variant: "h5" }, "Community Driven")
          ),
          React.createElement(Typography, null,
            "Linux benefits from a vast community of developers and users who contribute to its continuous " +
            "improvement and support."
          )
        )
      ),
      React.createElement(Grid, { item: true, xs: 12, md: 6 },
        React.createElement(Paper, { sx: { p: 3, height: "100%" } },
          React.createElement(Box, { 
            sx: { display: "flex", alignItems: "center", mb: 2 } 
          },
            React.createElement(CodeIcon, { 
              sx: { mr: 2, fontSize: 40 }, 
              color: "primary" 
            }),
            React.createElement(Typography, { variant: "h5" }, "Customizable")
          ),
          React.createElement(Typography, null,
            "With complete access to the source code and a wide range of desktop environments, Linux can be " +
            "customized to meet any specific need."
          )
        )
      )
    )
  );
}

export default Home; 