import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const devopsQuestions = [
  {
    title: 'What is DevOps?',
    content: `
      DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
      Key aspects include:
      • Continuous Integration/Continuous Deployment (CI/CD)
      • Infrastructure as Code (IaC)
      • Automated testing and deployment
      • Monitoring and logging
      • Collaboration between development and operations teams
    `
  },
  {
    title: 'What is CI/CD?',
    content: `
      CI/CD stands for Continuous Integration and Continuous Deployment/Delivery:
      • Continuous Integration: Automatically building and testing code changes
      • Continuous Delivery: Automatically deploying code to staging environments
      • Continuous Deployment: Automatically deploying code to production
      
      Popular CI/CD tools:
      • Jenkins
      • GitLab CI
      • GitHub Actions
      • CircleCI
    `
  },
  {
    title: 'What is Infrastructure as Code (IaC)?',
    content: `
      IaC is managing infrastructure through code rather than manual processes:
      • Version control for infrastructure
      • Automated provisioning
      • Consistent environments
      
      Popular IaC tools:
      • Terraform
      • Ansible
      • CloudFormation
      • Pulumi
    `
  },
  {
    title: 'What is Docker?',
    content: `
      Docker is a containerization platform that:
      • Packages applications and dependencies into containers
      • Ensures consistency across environments
      • Provides isolation and resource management
      
      Key concepts:
      • Images: Blueprint for containers
      • Containers: Running instances of images
      • Dockerfile: Instructions to build images
      • Docker Compose: Multi-container applications
    `
  },
  {
    title: 'What is Kubernetes?',
    content: `
      Kubernetes is an open-source container orchestration platform:
      • Manages containerized applications
      • Provides scaling and high availability
      • Handles deployment and updates
      
      Key components:
      • Pods: Smallest deployable units
      • Services: Network abstraction
      • Deployments: Manages replicas
      • ConfigMaps and Secrets: Configuration management
    `
  },
  {
    title: 'What is Git?',
    content: `
      Git is a distributed version control system:
      • Tracks changes in source code
      • Enables collaboration
      • Provides branching and merging
      
      Common commands:
      • git clone: Copy repository
      • git add: Stage changes
      • git commit: Save changes
      • git push: Upload changes
      • git pull: Download changes
    `
  }
];

function DevOpsInterview() {
  return React.createElement(Container, { maxWidth: "lg", sx: { mt: 4 } },
    React.createElement(Box, { sx: { textAlign: "center", mb: 6 } },
      React.createElement(Typography, { 
        variant: "h3", 
        component: "h1", 
        gutterBottom: true 
      }, "DevOps Interview Questions"),
      React.createElement(Typography, { 
        variant: "h8", 
        color: "text.secondary" 
      }, "Common interview questions and answers for DevOps roles")
    ),
    React.createElement(Box, { 
      sx: { display: "flex", alignItems: "center", mb: 4 } 
    },
      React.createElement(CodeIcon, { 
        sx: { fontSize: 40, mr: 2 }, 
        color: "primary" 
      }),
      React.createElement(Typography, { variant: "h5" },
        "Essential DevOps Topics"
      )
    ),
    devopsQuestions.map((question, index) =>
      React.createElement(Box, { key: index, sx: { mb: 2 } },
        React.createElement(Typography, { 
          variant: "h5", 
          sx: { color: "primary.main", fontWeight: "bold", mb: 0 } 
        }, question.title),
        React.createElement(Typography, {
          component: "pre",
          sx: {
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            color: "text.primary",
            lineHeight: 1.6,
            mt: -3
          }
        }, question.content)
      )
    )
  );
}

export default DevOpsInterview; 