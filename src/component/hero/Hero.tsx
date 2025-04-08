"use client";

import { Container, Typography, Button, Box } from "@mui/material";
import { GitHub, LinkedIn, ArrowDownward } from "@mui/icons-material";
import styles from "./hero.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Hero() {
  const techIcons = [SiHtml5, SiCss3, SiJavascript, SiReact, FaJava, SiPython];
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleScrollToContact = () => {
  //   const contactSection = document.querySelector("#contact");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section id="home" className={styles.heroSection}>
      <Container maxWidth="lg">
        <Box className={styles.heroContent}>
          <Box className={styles.textContent}>
            <Typography
              variant="h6"
              component="p"
              className={`${styles.greeting} slide-in-left`}
            >
              Hello, I&lsquo;m
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              className={`${styles.name} slide-in-left`}
              style={{ animationDelay: "0.1s" }}
            >
              Samrath kumar
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={`${styles.title} slide-in-left`}
              style={{ animationDelay: "0.2s" }}
            >
              Web developer
            </Typography>
            <Typography
              variant="body1"
              className={`${styles.tagline} slide-in-left`}
              style={{ animationDelay: "0.3s" }}
              sx={{ marginBottom: "15px" }}
            >
              Building responsive and scalable web applications with React and
              Java
            </Typography>

            <Box
              className={`${styles.buttonGroup} slide-in-left`}
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleScrollToProjects}
                className={styles.primaryButton}
              >
                View Projects
              </Button>
            </Box>

            <Box
              className={`${styles.socialLinks} slide-in-left`}
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                variant="text"
                color="inherit"
                startIcon={<GitHub />}
                href="https://github.com/Samarath"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="text"
                color="inherit"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/samrath007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </Box>
          </Box>

          <Box className={styles.imageContainer}>
            <div className={styles.heroImage}>
              <div className={styles.iconCarousel}>
                {techIcons.map((Icon, index) => (
                  <div
                    key={index}
                    className={styles.iconSlide}
                    style={{ animationDelay: `${index * 2}s` }}
                  >
                    <Icon size={150} />
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Box>

        <Box className={styles.scrollDown}>
          <Button
            variant="text"
            color="inherit"
            endIcon={<ArrowDownward />}
            onClick={() => {
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Scroll Down
          </Button>
        </Box>
      </Container>
    </section>
  );
}
