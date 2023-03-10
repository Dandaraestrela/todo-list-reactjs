import { useState } from "react";

import { ReactComponent as Sun } from "@/assets/sun.svg";
import { ReactComponent as Moon } from "@/assets/moon.svg";
import { useTheme } from "@/hooks/useTheme";
import * as S from "./ThemeSwitch.styles";

const ThemeSwitch = () => {
  const { toggleTheme, currentTheme } = useTheme();

  return (
    <S.ButtonWrapper
      isThemeLight={currentTheme.name === "lightTheme"}
      onClick={() => toggleTheme()}
    >
      <Sun /> <Moon />
    </S.ButtonWrapper>
  );
};

export default ThemeSwitch;
