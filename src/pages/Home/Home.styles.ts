import styled, { css } from "styled-components";

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
