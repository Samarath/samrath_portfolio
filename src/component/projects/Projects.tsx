"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogActions,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import styles from "./projects.module.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  fullDescription: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Admin Client Dashboard",
    description:
      "A React-based admin dashboard for managing product activities and survey operations.",
    image: "https://placehold.co/500x300?text=Admin+App&font=roboto",
    technologies: ["React", "Redux", "SCSS", "React Router", "Spring Boot"],
    liveUrl: "https://example.com", // Replace with actual link if available
    githubUrl: "https://github.com", // Replace with actual link if available
    fullDescription:
      "Designed and developed a feature-rich admin dashboard for overseeing product activities and managing surveys. The platform includes real-time analytics, secure authentication, and a responsive UI. Integrated with Spring Boot on the backend to ensure smooth data operations.",
    features: [
      "User authentication and role-based access",
      "Real-time data visualization",
      "Survey management portal",
      "Responsive design for various devices",
      "Integration with Spring Boot backend",
    ],
  },
  {
    id: 2,
    title: "Travel & Tour Application",
    description:
      "A collaborative React application for booking and managing travel and tour experiences.",
    image: "https://placehold.co/500x300?text=Travel+App&font=roboto",
    technologies: ["React", "Redux", "SCSS", "React Router"],
    liveUrl: "https://example.com", // Replace with actual link if available
    githubUrl: "https://github.com", // Replace with actual link if available
    fullDescription:
      "Developed as part of a team, this travel and tour app enables users to explore destinations and book tours with ease. Focused on front-end development to ensure a seamless and visually appealing user experience.",
    features: [
      "Responsive tour browsing interface",
      "Smooth navigation using React Router",
      "State management with Redux",
      "Collaborative design and scalability improvements",
      "Styled consistently with SCSS",
    ],
  },
  {
    id: 3,
    title: "Survey Application",
    description:
      "A web-based survey application for collecting and analyzing user feedback.",
    image: "https://placehold.co/500x300?text=Survey+App&font=roboto",
    technologies: ["React", "Redux", "SCSS", "React Router"],
    liveUrl: "https://example.com", // Replace with actual link if available
    githubUrl: "https://github.com", // Replace with actual link if available
    fullDescription:
      "A lightweight, responsive survey application built with React to streamline the process of collecting and analyzing feedback. Features include survey creation, real-time response collection, and analytics dashboards.",
    features: [
      "Dynamic survey creation and editing",
      "Real-time response tracking",
      "Analytics and visualization features",
      "Redux-based state management",
      "Clean and responsive SCSS styling",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section
      id="projects"
      className={`${styles.projectsSection} section-padding`}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          Projects
        </Typography>

        <Grid container spacing={4} marginTop={"20px"}>
          {projects.map((project) => (
            <Grid key={project.id} sx={{ maxWidth: "500px" }}>
              <Card className={styles.projectCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <CardContent className={styles.projectContent}>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={styles.projectTitle}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={styles.projectDescription}
                  >
                    {project.description}
                  </Typography>

                  <Box className={styles.techStack}>
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        className={styles.techChip}
                      />
                    ))}
                    {project.technologies.length > 4 && (
                      <Chip
                        label={`+${project.technologies.length - 4}`}
                        size="small"
                        variant="outlined"
                        className={styles.techChip}
                      />
                    )}
                  </Box>

                  <Box className={styles.projectActions}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleClickOpen(project)}
                      className={styles.detailsButton}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedProject && (
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            className={styles.projectDialog}
          >
            <DialogTitle className={styles.dialogTitle}>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className={styles.dialogImage}
                  />
                </Grid>
                <Grid>
                  <Typography variant="body1" paragraph>
                    {selectedProject.fullDescription}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Key Features
                  </Typography>
                  <ul className={styles.featuresList}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body2">{feature}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="h6" gutterBottom>
                    Technologies Used
                  </Typography>
                  <Box className={styles.dialogTechStack}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        className={styles.techChip}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        )}
      </Container>
    </section>
  );
}
