"use client";

import { Container, Typography, Box, Grid } from "@mui/material";
import { Person, Code, School, Work } from "@mui/icons-material";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about" className={`${styles.aboutSection} section-padding`}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          About Me
        </Typography>

        <div className={styles.aboutContent}>
          <Grid container spacing={4}>
            <Grid>
              <Box className={styles.aboutText}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={styles.aboutHeading}
                >
                  Web Developer
                </Typography>

                <Typography variant="body1" className={styles.aboutParagraph}>
                  I&lsquo;m a passionate web developer with expertise in
                  building responsive web applications. With I create seamless
                  user experiences that combine elegant front-end interfaces.
                </Typography>

                <Typography variant="body1" className={styles.aboutParagraph}>
                  My development philosophy centers around writing clean,
                  maintainable code that solves real-world problems. I believe
                  in continuous learning and staying updated with the latest
                  technologies and best practices in the ever-evolving field of
                  web development.
                </Typography>

                <Box className={styles.infoItems}>
                  <Grid container spacing={2}>
                    <Grid>
                      <Box className={styles.infoItem}>
                        <Person className={styles.infoIcon} />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className={styles.infoLabel}
                          >
                            Name
                          </Typography>
                          <Typography variant="body2">Samrath</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid>
                      <Box className={styles.infoItem}>
                        <Work className={styles.infoIcon} />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className={styles.infoLabel}
                          >
                            Experience
                          </Typography>
                          <Typography variant="body2">2+ Years</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid>
                      <Box className={styles.infoItem}>
                        <School className={styles.infoIcon} />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className={styles.infoLabel}
                          >
                            Education
                          </Typography>
                          <Typography variant="body2">
                            Bachelor of Arts (English Literature)
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid>
                      <Box className={styles.infoItem}>
                        <Code className={styles.infoIcon} />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className={styles.infoLabel}
                          >
                            Specialization
                          </Typography>
                          <Typography variant="body2">
                            React, javascript, Nextjs, python, java
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}
