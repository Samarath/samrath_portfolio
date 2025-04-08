"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Switch,
  Box,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Menu, Close, DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../theme/theme";
import styles from "./header.module.scss";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (href: string) => {
    if (isMobile) {
      setDrawerOpen(false);
    }

    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      className={`${styles.appBar} ${scrolled ? styles.scrolled : ""}`}
      elevation={scrolled ? 4 : 0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <Typography variant="h6" component="div" className={styles.logo}>
            Samrath
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
                <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                  {theme === "dark" ? (
                    <DarkMode fontSize="small" />
                  ) : (
                    <LightMode fontSize="small" />
                  )}
                  <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    color="primary"
                    size="small"
                  />
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <Menu />
                </IconButton>
              </Box>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                classes={{ paper: styles.drawerPaper }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton onClick={handleDrawerToggle}>
                    <Close />
                  </IconButton>
                </Box>
                <List>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className={styles.drawerItem}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              <Box className={styles.navItems}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    onClick={() => handleNavClick(item.href)}
                    className={styles.navButton}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                {theme === "dark" ? (
                  <DarkMode fontSize="small" />
                ) : (
                  <LightMode fontSize="small" />
                )}
                <Switch
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  color="primary"
                  size="small"
                />
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
