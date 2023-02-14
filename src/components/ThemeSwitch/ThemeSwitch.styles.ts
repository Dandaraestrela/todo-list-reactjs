import styled, { css } from "styled-components";

interface SwitchProps {
  isThemeLight: boolean;
}

export const Wrapper = styled.div<SwitchProps>`
  display: flex;
  width: 70px;
  height: 30px;
  padding: 4px;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  position: relative;
  :after {
    content: "";
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: pink;
  }
`;
