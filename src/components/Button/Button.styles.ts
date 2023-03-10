import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;

    padding: 14px;
    gap: 8px;

    border: none;
    border-radius: 8px;
    background-color: ${colors.blueDark};

    color: ${colors.gray100};
    font-weight: bold;

    cursor: pointer;

    transition: 0.1s;
    :hover {
      background-color: ${colors.blue};
    }
  `}
`;
