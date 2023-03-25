import styled, { css } from "styled-components";

type LegendType = {
  concludedTask?: boolean;
};

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

export const TaskCreatorForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -22px;
  gap: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const TaskListWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 8px;
  margin: 30px 0;
`;

export const LegendsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LegendWrapper = styled.div<LegendType>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme: { colors }, concludedTask }) =>
    concludedTask ? colors.purple : colors.blue};
  font-weight: bold;
`;

export const LegendNumberWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    background-color: ${colors.gray400};
    border-radius: 24px;
    color: ${colors.gray200};
    font-weight: bold;
  `}
`;
