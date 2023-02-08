import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  background-color: ${(props) => props.theme.colors.purple};
}

body,
input,
textarea,
button {
  font-weight: 400;
  font-size: 1rem;
}
`;
