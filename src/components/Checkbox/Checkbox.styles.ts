import styled, { css } from "styled-components";
import { CheckboxProps } from "./Checkbox";

type labelProps = Pick<CheckboxProps, "disabled">;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckInput = styled.input`
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckSpan = styled.span`
  ${({ theme: { colors } }) => css`
    height: 18px;
    width: 18px;

    border: 2px solid ${colors.blue};
    border-radius: 20px;

    transition: all 80ms;

    ${CheckInput}:checked ~ & {
      background-color: ${colors.purpleDark};
      border-color: ${colors.purpleDark};
    }
    ${CheckInput}:focus ~ & {
      outline: 1px solid ${colors.purple};
    }
    :after {
      content: "";
      display: none;
      width: 4px;
      height: 7px;

      top: 6px;
      left: 6px;

      border: 1px solid ${colors.gray100};
      border-width: 0 2px 2px 0;

      position: absolute;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);

      ${CheckInput}:checked ~ & {
        display: block;
      }
    }
  `}
`;

export const CheckLabel = styled.label<labelProps>`
  ${({ theme: { colors }, disabled }) => css`
    display: flex;
    align-self: flex-start;
    align-items: center;
    height: 24px;

    color: ${disabled ? colors.gray300 : colors.gray700};

    position: relative;

    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `};
`;
