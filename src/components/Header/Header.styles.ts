import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 124px;
  padding: 20px 20% 0 20%;
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;
