"use client";

import type React from "react";

import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
} from "@mui/icons-material";
import styles from "./contact.module.scss";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSnackbar({
          open: true,
          message: "Your message has been sent successfully!",
          severity: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <section
      id="contact"
      className={`${styles.contactSection} section-padding`}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" className="section-title">
          Contact Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box className={styles.contactInfo}>
              <Typography
                variant="h5"
                component="h3"
                className={styles.contactTitle}
              >
                Get In Touch
              </Typography>

              <Typography variant="body1" className={styles.contactText}>
                Feel free to reach out to me for any questions, project
                inquiries, or just to say hello. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of
                your vision.
              </Typography>

              <Box className={styles.contactDetails}>
                <Paper elevation={2} className={styles.contactItem}>
                  <Email className={styles.contactIcon} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className={styles.contactLabel}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" className={styles.contactValue}>
                      samrath@example.com
                    </Typography>
                  </Box>
                </Paper>

                <Paper elevation={2} className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className={styles.contactLabel}
                    >
                      Phone
                    </Typography>
                    <Typography variant="body2" className={styles.contactValue}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Paper>

                <Paper elevation={2} className={styles.contactItem}>
                  <LocationOn className={styles.contactIcon} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className={styles.contactLabel}
                    >
                      Location
                    </Typography>
                    <Typography variant="body2" className={styles.contactValue}>
                      New York, NY, USA
                    </Typography>
                  </Box>
                </Paper>
              </Box>

              <Box className={styles.socialLinks}>
                <IconButton
                  aria-label="GitHub"
                  className={styles.socialIcon}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  className={styles.socialIcon}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  className={styles.socialIcon}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper elevation={3} className={styles.formContainer}>
              <Typography
                variant="h5"
                component="h3"
                className={styles.formTitle}
              >
                Send Me a Message
              </Typography>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                      startIcon={<Send />}
                      className={styles.submitButton}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
}
