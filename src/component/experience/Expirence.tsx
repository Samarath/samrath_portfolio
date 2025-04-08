"use client";

import { Container, Typography, Box, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Work } from "@mui/icons-material";
import styles from "./experience.module.scss";

export default function Experience() {
  return (
    <section
      id="experience"
      className={`${styles.experienceSection} section-padding`}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          Experience
        </Typography>

        <Box className={styles.timelineContainer}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                Dec 2022 - Feb 2025
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Work />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={styles.timelineCard}>
                  <Typography variant="h6" component="h3">
                    Associate Software engineer
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Cognived Solutions
                  </Typography>
                  <Box className={styles.responsibilities}>
                    <Typography
                      variant="body2"
                      className={styles.responsibilityItem}
                    >
                      Developed and maintained responsive web applications using
                      React, Redux, and TypeScript
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.responsibilityItem}
                    >
                      Collaborated with UX/UI designers to implement
                      pixel-perfect interfaces
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.responsibilityItem}
                    >
                      Integrated RESTful APIs and optimized application
                      performance
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.responsibilityItem}
                    >
                      Implemented state management solutions and component
                      libraries
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.responsibilityItem}
                    >
                      Participated in code reviews and mentored junior
                      developers
                    </Typography>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </section>
  );
}
