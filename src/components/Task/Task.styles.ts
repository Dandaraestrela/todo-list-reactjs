import styled, { css } from "styled-components";

type TaskStyleProps = { isChecked: boolean };

export const Wrapper = styled.div<TaskStyleProps>`
  ${({ theme: { colors }, isChecked }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    padding: 12px;
    gap: 12px;

    background-color: ${colors.inputBackground};
    border: 1px solid
      ${isChecked ? colors.taskDisabledColor : colors.inputBorder};
    border-radius: 8px;

    color: ${colors.inputFontColor};
    font-size: 14px;
    line-height: 18px;
  `}
`;

export const TaskText = styled.p<TaskStyleProps>`
  width: 100%;
  color: ${({ theme: { colors } }) => colors.inputFontColor};
  ${({ theme: { colors }, isChecked }) =>
    isChecked
      ? css`
          text-decoration: line-through;
          color: ${colors.taskDisabledColor};
        `
      : css``};
`;

export const TrashButton = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 6px;

    border: none;
    border-radius: 4px;

    background-color: transparent;

    cursor: pointer;

    svg {
      width: 50px;
      height: 50px;
    }

    :not(:disabled):hover {
      svg {
        path {
          fill: ${colors.danger};
        }
      }
    }
    :disabled {
      svg {
        path {
          fill: ${colors.taskDisabledColor};
        }
      }
    }
  `};
`;
