const defaultColors = {
  purpleLight: "#EDEDFE",
  purple: "#8284FA",
  purpleDark: "#5E60CE",
  blue: "#4EA8DE",
  blueDark: "#1E6F9F",
  gray700: "#0D0D0D",
  gray600: "#1A1A1A",
  gray500: "#262626",
  gray400: "#333333",
  gray300: "#808080",
  gray200: "#D9D9D9",
  gray100: "#F2F2F2",
  dangerBackground: "#FCEEEE",
  danger: "#E25858",
};

export const lightTheme = {
  name: "lightTheme",
  colors: {
    ...defaultColors,
    backgroundLight: "#F2F2F2",
    headerBackground: "#808080",
    deleteBackground: "#FCEEEE",
    cardsBackground: "#EDEDFE",
  },
};

export const darkTheme = {
  name: "darkTheme",
  colors: {
    ...defaultColors,
    backgroundLight: "#1A1A1A",
    headerBackground: "#0D0D0D",
    deleteBackground: "#333333",
    cardsBackground: "#808080",
  },
};
