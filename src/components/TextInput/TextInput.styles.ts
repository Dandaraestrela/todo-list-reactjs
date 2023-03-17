import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    height: 44px;
    padding: 12px;
    background-color: ${colors.inputBackground};
    border: 1px solid ${colors.inputBorder};
    border-radius: 8px;
    color: ${colors.inputFontColor};
    font-size: 16px;
    ::placeholder {
      color: ${colors.gray300};
    }
    :focus,
    :focus-within {
      outline-style: solid;
      outline-color: ${colors.purple} !important;
    }
  `}
`;
