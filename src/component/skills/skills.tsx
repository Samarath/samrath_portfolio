"use client";

import type React from "react";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Paper,
  LinearProgress,
  Chip,
} from "@mui/material";
import { Code, Storage, Cloud, Build } from "@mui/icons-material";
import styles from "./skills.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Front-End",
    icon: <Code />,
    skills: [
      { name: "React", level: 90 },
      { name: "Redux", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "SCSS", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Material UI", level: 85 },
    ],
  },
  {
    name: "Back-End",
    icon: <Storage />,
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "RESTful APIs", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud />,
    skills: [
      { name: "Google Cloud Platform", level: 70 },
      { name: "Vercel", level: 50 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
  {
    name: "Tools & Others",
    icon: <Build />,
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Jest", level: 75 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
];

export default function Skills() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section id="skills" className={`${styles.skillsSection} section-padding`}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          Skills
        </Typography>

        <Box className={styles.skillsContainer}>
          <Box className={styles.tabsContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="skills tabs"
              className={styles.tabs}
            >
              {skillCategories.map((category, index) => (
                <Tab
                  key={index}
                  label={category.name}
                  className={styles.tab}
                  id={`skills-tab-${index}`}
                  aria-controls={`skills-tabpanel-${index}`}
                />
              ))}
            </Tabs>
          </Box>

          {skillCategories.map((category, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Grid container spacing={3}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid key={skillIndex}>
                    <Paper elevation={2} className={styles.skillCard}>
                      <Box className={styles.skillHeader}>
                        <Typography
                          variant="h6"
                          component="h3"
                          className={styles.skillName}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={styles.skillLevel}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        className={styles.skillProgress}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}

          <Box className={styles.allSkillsContainer}>
            <Typography
              variant="h6"
              component="h3"
              className={styles.allSkillsTitle}
            >
              All Technologies
            </Typography>
            <Box className={styles.allSkills}>
              {skillCategories.flatMap((category) =>
                category.skills.map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    className={styles.skillChip}
                  />
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
