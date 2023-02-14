import * as S from "./Header.styles";
import Logo from "../../assets/Logo.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  return (
    <S.Wrapper>
      <img src={Logo} />
      <ThemeSwitch />
    </S.Wrapper>
  );
};

export default Header;
