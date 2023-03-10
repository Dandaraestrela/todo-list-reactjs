import * as S from "./TextInput.styles";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => (
  <S.Wrapper>
    {label}
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </S.Wrapper>
);
export default TextInput;
