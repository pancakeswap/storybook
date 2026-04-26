import { lightColors, darkColors } from "../_pcs-shims";

export type ToggleTheme = {
  handleBackground: string;
};

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
};
