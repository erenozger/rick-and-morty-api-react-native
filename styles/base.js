import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
  primary: "#00b2cc", // green
  secondary: "#FFC664", // yellow

  cardBackground : "#EAF6FA",
  green : "#00FF64",
  red : "#FF000F",


  Warm: "#f34c16",
  Blue: "#285caa",
  lightBlue: "#8bbcd2",
  darkGray: "#eeeeee",

  linearRed: "#FF6764",
  linearOrange: "#FF844C",
  LightRed: "#df454d",
  rgbBackGround: "rgba(0,0,0,0.1)",
  rgbBackGround2: "rgba(0,0,0,0.05)",

  white: "#fff",
  black: "#000000",
  darkGreen: "#66D59A",
  gray: "#6A6A6A",
  lightGray: "#dbdbdb",
  lightGray1: "#f5f6fa",
  inputGray: "#898C95",

  darkModeBlack: "#121212",
  darkModeLightBlack: "#181818",
  darkModeGray: "#404040",
  darkModeDarkGray: "#282828",
  darkModeLightGray: "#B3B3B3",

  yellow: "#FFC664",
  lightyellow: "#FFF9EC",

  purple: "#6B3CE9",
  lightpurple: "#F3EFFF",

  green2: "#66D59A",
  lightGreen: "#E6FEF0",
};


export const SIZES = {
  HEADER_HEIGHT: Platform.OS === "ios" ? 44 : 56,
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 18,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const imageIcons = {
  logo: require("../assets/Logo/logo.png"),
  charactersIcon: require("../assets/Icons/characters-icon.png"),
  favIcon: require("../assets/Icons/fav-icon.png"),
  favFillIcon : require("../assets/Icons/fav-fill-icon.png"),
};