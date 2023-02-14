import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.background};
`;
