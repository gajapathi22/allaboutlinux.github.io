import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const distributions = [
  {
    name: 'Ubuntu',
    description: 'Popular Linux distribution based on Debian, known for its ease of use and regular releases.',
    image: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png'
  },
  {
    name: 'Fedora',
    description: 'A community-driven distribution sponsored by Red Hat, focusing on the latest open source technologies.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fedora_icon_%282021%29.svg/512px-Fedora_icon_%282021%29.svg.png'
  },
  {
    name: 'Debian',
    description: 'One of the oldest distributions known for its stability and vast software repository.',
    image: 'https://www.debian.org/logos/openlogo-nd.svg'
  },
  {
    name: 'Arch Linux',
    description: 'A lightweight and flexible distribution for advanced users who want complete control.',
    image: 'https://archlinux.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png'
  }
];

function Distributions() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Typography, { 
      variant: "h3", 
      component: "h1", 
      gutterBottom: true, 
      align: "center" 
    }, "Linux Distributions"),
    React.createElement(Typography, { 
      variant: "h6", 
      color: "text.secondary", 
      paragraph: true, 
      align: "center" 
    }, "Explore the most popular Linux distributions and find the one that suits your needs"),
    React.createElement(Grid, { 
      container: true, 
      spacing: 4, 
      sx: { mt: 2 } 
    },
      distributions.map((distro) =>
        React.createElement(Grid, { 
          item: true, 
          xs: 12, 
          sm: 6, 
          md: 4, 
          key: distro.name 
        },
          React.createElement(Card, { sx: { height: "100%" } },
            React.createElement(CardActionArea, null,
              React.createElement(CardMedia, {
                component: "img",
                height: "140",
                image: distro.image,
                alt: distro.name,
                sx: { objectFit: "contain", p: 2, bgcolor: "background.paper" }
              }),
              React.createElement(CardContent, null,
                React.createElement(Typography, { 
                  gutterBottom: true, 
                  variant: "h5", 
                  component: "div" 
                }, distro.name),
                React.createElement(Typography, { 
                  variant: "body2", 
                  color: "text.secondary" 
                }, distro.description)
              )
            )
          )
        )
      )
    )
  );
}

export default Distributions; 