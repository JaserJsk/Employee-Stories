import { createTheme } from "@mui/material/styles";
import {
  CustomTypeBackground,
  CustomPaletteColor,
  CustomTypeText,
} from "../types/Theme";

const colors = {
  black: "#000000",
  white: "#ffffff",
  paper: "#f7f7f7",
  primary: "#3f51b5",
  secondary: "#f50057",
  textPrimary: "#222222",
  textSecondary: "#555555",
};

const MainTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: colors.white,
      paper: colors.paper,
      highContrast: colors.black,
    } as CustomTypeBackground,
    primary: {
      main: colors.primary,
      highContrast: colors.white,
    } as CustomPaletteColor,
    secondary: {
      main: colors.secondary,
      highContrast: colors.black,
    } as CustomPaletteColor,
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      highContrast: colors.white,
    } as CustomTypeText,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "primary.main",
          color: "primary.highContrast",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: "primary.highContrast",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          filter: "grayscale(100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "secondary.highContrast",
          borderColor: "secondary.highContrast",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "primary.highContrast",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "primary.highContrast",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "text.primary",
        },
        h1: {
          color: "text.primary",
        },
        h2: {
          color: "text.primary",
        },
        h3: {
          color: "text.primary",
        },
        h4: {
          color: "text.primary",
        },
        h5: {
          color: "text.primary",
        },
        h6: {
          color: "text.primary",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "secondary.main",
          "&:hover": {
            color: "secondary.highContrast",
          },
        },
      },
    },
  },
});

export default MainTheme;
