import styled from "styled-components";

import Logo from "@/assets/Logo.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 124px;
  padding: 30px 20%;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center 20px;
  button:last-child {
    margin-left: auto;
  }
`;
