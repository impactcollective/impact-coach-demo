import { InputWrapper, Input, Label } from "./ModalTextarea.styles";

interface Props {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  name: string;
  width?: string;
  flex?: number;
  disabled?: boolean;
}

const ModalTextArea = ({
  label,
  placeholder,
  onChange,
  value = "",
  name,
  width,
  flex = 1,
  disabled = false,
}: Props) => {
  return (
    <InputWrapper width={width} flex={flex}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name={name}
        disabled={disabled}
      />
    </InputWrapper>
  );
};

export { ModalTextArea };
