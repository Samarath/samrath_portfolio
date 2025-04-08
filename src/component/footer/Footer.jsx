"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, ArrowUpward } from "@mui/icons-material";
import styles from "./footer.module.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Box className={styles.scrollTop}>
          <IconButton
            aria-label="scroll to top"
            onClick={scrollToTop}
            className={styles.scrollButton}
          >
            <ArrowUpward />
          </IconButton>
        </Box>

        <Grid container spacing={4} className={styles.footerContent}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="h3"
              className={styles.footerTitle}
            >
              Samrath
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
              React & Full-Stack Developer building responsive and scalable web
              applications with modern technologies.
            </Typography>
            <Box className={styles.socialLinks}>
              <IconButton
                aria-label="GitHub"
                className={styles.socialIcon}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <GitHub fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                className={styles.socialIcon}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                className={styles.socialIcon}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <Twitter fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              component="h3"
              className={styles.footerTitle}
            >
              Quick Links
            </Typography>
            <Box className={styles.linkList}>
              <Link href="#home" className={styles.footerLink}>
                Home
              </Link>
              <Link href="#about" className={styles.footerLink}>
                About
              </Link>
              <Link href="#experience" className={styles.footerLink}>
                Experience
              </Link>
              <Link href="#projects" className={styles.footerLink}>
                Projects
              </Link>
              <Link href="#skills" className={styles.footerLink}>
                Skills
              </Link>
              <Link href="#contact" className={styles.footerLink}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              component="h3"
              className={styles.footerTitle}
            >
              Contact Info
            </Typography>
            <Box className={styles.contactInfo}>
              <Typography variant="body2" className={styles.contactItem}>
                <strong>Email:</strong> samrath@example.com
              </Typography>
              <Typography variant="body2" className={styles.contactItem}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" className={styles.contactItem}>
                <strong>Location:</strong> New York, NY, USA
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider className={styles.divider} />

        <Box className={styles.footerBottom}>
          <Typography variant="body2" className={styles.copyright}>
            &copy; {new Date().getFullYear()} Samrath. All rights reserved.
          </Typography>
          <Typography variant="body2" className={styles.credits}>
            Built with React & Material UI
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
