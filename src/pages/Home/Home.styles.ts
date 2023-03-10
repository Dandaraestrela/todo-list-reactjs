import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
