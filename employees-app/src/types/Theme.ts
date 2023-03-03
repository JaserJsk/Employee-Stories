import { PaletteColor, TypeBackground, TypeText } from "@mui/material/styles";

export interface CustomPaletteColor extends PaletteColor {
  highContrast?: string;
}

export type CustomTypeBackground = TypeBackground & {
  highContrast?: string;
};

export type CustomTypeText = TypeText & {
  highContrast?: string;
};
