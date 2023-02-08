import { lightTheme } from "../styles/theme";

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
