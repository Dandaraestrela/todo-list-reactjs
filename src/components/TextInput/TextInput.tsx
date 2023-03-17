import { InputHTMLAttributes, forwardRef, ChangeEvent } from "react";

import * as S from "./TextInput.styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, placeholder, value, onChange, ...props }, ref) => (
    <S.Wrapper>
      {label}
      <S.Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        {...props}
      />
    </S.Wrapper>
  )
);
export default TextInput;
