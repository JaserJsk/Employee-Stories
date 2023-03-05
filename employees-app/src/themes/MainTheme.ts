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
  secondary: "#ff1744",
  textPrimary: "#222222",
  textSecondary: "#555555",
};

const MainTheme = createTheme({
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: "0 !important",
        },
      },
    },
  },
});

export default MainTheme;
