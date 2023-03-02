import * as S from "./Header.styles";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  return (
    <S.Wrapper>
      <ThemeSwitch />
    </S.Wrapper>
  );
};

export default Header;
