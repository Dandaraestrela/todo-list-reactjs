import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./Checkbox.styles";

export type CheckboxProps = {
  title?: string;
  onClickFunc?: Function;
  isChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ title, onClickFunc = () => {}, isChecked, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.CheckLabel disabled={props.disabled}>
          <S.CheckInput
            ref={ref}
            type="checkbox"
            checked={isChecked}
            onChange={(e) => onClickFunc(e)}
            {...props}
          />
          <S.CheckSpan />
        </S.CheckLabel>
      </S.Wrapper>
    );
  }
);
