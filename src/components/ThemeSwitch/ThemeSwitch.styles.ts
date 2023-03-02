import styled, { css } from "styled-components";

interface SwitchProps {
  isThemeLight: boolean;
}

export const Wrapper = styled.button<SwitchProps>`
  display: flex;
  width: 60px;
  height: 30px;
  position: relative;

  padding: 3px 4px;
  gap: 12px;

  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 16px;
  border: none;

  cursor: pointer;

  :after {
    content: "";
    height: 24px;
    width: 24px;
    position: absolute;
    left: ${({ isThemeLight }) => (isThemeLight ? "calc(50% + 2px)" : "4px")};

    background-color: ${({ theme }) => theme.colors.headerBackground};
    border-radius: 50%;
    transition: left 0.5s;
  }

  svg path {
    transition: 0.4s;
  }

  svg:first-child {
    path {
      fill: ${({ theme, isThemeLight }) =>
        isThemeLight ? theme.colors.purple : theme.colors.inputBackground};
    }
  }

  svg:last-child {
    path {
      fill: ${({ theme, isThemeLight }) =>
        isThemeLight ? theme.colors.inputBackground : theme.colors.purple};
    }
  }
`;
