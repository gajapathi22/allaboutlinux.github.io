import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar, Link } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

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
    ),
    React.createElement(Box, { 
      sx: { 
        mt: 8,
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: 8
      } 
    },
      React.createElement(Container, { maxWidth: "lg" },
        React.createElement(Box, { 
          sx: { 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12
          } 
        },
          React.createElement(Box, {
            sx: {
              flex: '0 0 auto',
              pr: 4
            }
          },
            React.createElement(Avatar, {
              sx: { 
                width: 200, 
                height: 200, 
                border: '4px solid #fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              },
              alt: "Author Profile",
              src: "/path-to-your-image.jpg"
            })
          ),
          React.createElement(Box, {
            sx: {
              flex: '1 1 auto',
              textAlign: 'left',
              pl: 4
            }
          },
            React.createElement(Typography, { 
              variant: "h3", 
              gutterBottom: true,
              sx: { 
                fontWeight: 'bold',
                color: '#fff'
              }
            }, "About the Author"),
            React.createElement(Typography, { 
              paragraph: true,
              sx: { 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#fff'
              }
            },
              "Hi! I'm [Your Name], a passionate Linux enthusiast and system administrator with [X] years of experience. " +
              "I love sharing my knowledge about Linux and helping others master this powerful operating system. " +
              "Through this platform, I aim to make Linux more accessible to everyone."
            ),
            React.createElement(Box, {
              sx: {
                display: 'flex',
                gap: 3,
                mt: 2
              }
            },
              React.createElement(Link, {
                href: "https://github.com/yourusername",
                target: "_blank",
                rel: "noopener noreferrer",
                sx: { 
                  color: '#fff',
                  '&:hover': { color: '#e0e0e0' }
                }
              },
                React.createElement(GitHubIcon, { sx: { fontSize: 35 } })
              ),
              React.createElement(Link, {
                href: "https://linkedin.com/in/yourusername",
                target: "_blank",
                rel: "noopener noreferrer",
                sx: { 
                  color: '#fff',
                  '&:hover': { color: '#e0e0e0' }
                }
              },
                React.createElement(LinkedInIcon, { sx: { fontSize: 35 } })
              ),
              React.createElement(Link, {
                href: "https://twitter.com/yourusername",
                target: "_blank",
                rel: "noopener noreferrer",
                sx: { 
                  color: '#fff',
                  '&:hover': { color: '#e0e0e0' }
                }
              },
                React.createElement(TwitterIcon, { sx: { fontSize: 35 } })
              ),
              React.createElement(Link, {
                href: "mailto:your.email@example.com",
                sx: { 
                  color: '#fff',
                  '&:hover': { color: '#e0e0e0' }
                }
              },
                React.createElement(EmailIcon, { sx: { fontSize: 35 } })
              )
            )
          )
        )
      )
    )
  );
}

export default Home; 