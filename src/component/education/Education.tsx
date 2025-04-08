"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from "@mui/material";
import { School, CalendarToday, LocationOn } from "@mui/icons-material";
import styles from "./education.module.scss";

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Arts",
    institution: "BRABU University",
    location: "Bihar",
    period: "2018 - 2022",
    description:
      "Graduated with honors in English Literature, focusing on critical analysis and communication skills.",
  },
];

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Zero to master web developement",
    issuer: "Udemy",
    date: "2022",
  },
  {
    id: 2,
    name: "Advance Javascript",
    issuer: "Udemy",
    date: "2022",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className={`${styles.educationSection} section-padding`}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          Education & Certifications
        </Typography>

        <Box className={styles.educationContainer}>
          <Typography
            variant="h4"
            component="h3"
            className={styles.sectionSubtitle}
          >
            Education
          </Typography>

          <Grid container spacing={4} sx={{ marginTop: "20px" }}>
            {educationData.map((item) => (
              <Grid key={item.id} sx={{ maxWidth: "500px" }}>
                <Card className={styles.educationCard}>
                  <CardContent>
                    <Box className={styles.cardHeader}>
                      <School className={styles.cardIcon} />
                      <Typography
                        variant="h6"
                        component="h4"
                        className={styles.degree}
                      >
                        {item.degree}
                      </Typography>
                    </Box>

                    <Typography
                      variant="subtitle1"
                      className={styles.institution}
                    >
                      {item.institution}
                    </Typography>

                    <Box className={styles.metaInfo}>
                      <Box className={styles.metaItem}>
                        <CalendarToday
                          fontSize="small"
                          className={styles.metaIcon}
                        />
                        <Typography variant="body2">{item.period}</Typography>
                      </Box>
                      <Box className={styles.metaItem}>
                        <LocationOn
                          fontSize="small"
                          className={styles.metaIcon}
                        />
                        <Typography variant="body2">{item.location}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" className={styles.description}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            component="h3"
            className={`${styles.sectionSubtitle} ${styles.certTitle}`}
            sx={{ marginTop: "20px" }}
          >
            Certifications
          </Typography>

          <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            {certifications.map((cert) => (
              <Grid key={cert.id}>
                <Card className={styles.certCard}>
                  <CardContent>
                    <Box className={styles.certHeader}>
                      <Chip
                        label={cert.date}
                        size="small"
                        className={styles.dateChip}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      className={styles.certName}
                    >
                      {cert.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className={styles.certIssuer}
                    >
                      Issued by {cert.issuer}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
