import { useState } from "react";
import * as S from "./ThemeSwitch.styles";

const ThemeSwitch = () => {
  const [isThemeLight, setIsThemeLight] = useState(true);
  return <S.Wrapper isThemeLight={isThemeLight}></S.Wrapper>;
};

export default ThemeSwitch;
