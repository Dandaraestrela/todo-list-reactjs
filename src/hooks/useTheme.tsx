import React, { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeContextData {
  toggleTheme: () => void;
  currentTheme: Theme;
}

interface Theme {
  name: string;
  colors: {
    purpleLight: string;
    purple: string;
    purpleDark: string;
    blue: string;
    blueDark: string;
    gray700: string;
    gray600: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
    dangerBackground: string;
    danger: string;
    background: string;
    headerBackground: string;
    deleteBackground: string;
    cardsBackground: string;
    inputBackground: string;
    inputBorder: string;
    inputFontColor: string;
    taskDisabledColor: string;
  };
}

interface ProviderProps {
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: ProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    if (currentTheme.name === "lightTheme") {
      setCurrentTheme(darkTheme);
      return;
    }

    if (currentTheme.name === "darkTheme") {
      setCurrentTheme(lightTheme);
      return;
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
