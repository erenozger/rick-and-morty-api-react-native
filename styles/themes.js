import { DefaultTheme } from "@react-navigation/native";
import { COLORS } from "../styles/base";


export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};