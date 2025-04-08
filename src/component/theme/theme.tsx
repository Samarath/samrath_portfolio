"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === "light" ? "#3f51b5" : "#5c6bc0",
      },
      secondary: {
        main: theme === "light" ? "#f50057" : "#ff4081",
      },
      background: {
        default: theme === "light" ? "#ffffff" : "#121212",
        paper: theme === "light" ? "#f5f5f5" : "#1e1e1e",
      },
      text: {
        primary: theme === "light" ? "#212121" : "#ffffff",
        secondary: theme === "light" ? "#757575" : "#b0b0b0",
      },
      divider: theme === "light" ? "#e0e0e0" : "#424242",
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
            padding: "8px 16px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            boxShadow:
              theme === "light"
                ? "0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)"
                : "0 4px 6px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow:
              theme === "light"
                ? "0 1px 3px rgba(0,0,0,0.1)"
                : "0 1px 3px rgba(0,0,0,0.3)",
          },
        },
      },
    },
  });

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
