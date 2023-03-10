import { ButtonHTMLAttributes, forwardRef } from "react";

import * as S from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary" }, ref) => (
    <S.ButtonWrapper ref={ref}>{children}</S.ButtonWrapper>
  )
);

export default Button;
