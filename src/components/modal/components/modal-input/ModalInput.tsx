import styled from "styled-components";

interface Props {
  label: string;
  placeholder: string;
  onChange: (value: any) => void;
  onKeyPress?: (value: any) => void;
  onKeyUp?: (value: any) => void;
  value?: string | number;
  type?: string;
  width?: string;
  flex?: number;
  required?: boolean;
  disabled?: boolean;
  ref?: any;
}

/* styles */
export const InputWrapper = styled.div<any>`
  display: flex;
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 1rem;
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  left: 0;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  width: 100%;
  height: 6rem;
  border: 1px solid #E0E0E0;
  border-radius: 0.8rem;
  padding: 0 1rem;
`;

/* components */
const ModalInput = ({
  label,
  placeholder,
  onChange,
  onKeyPress,
  onKeyUp,
  value = "",
  type = "text",
  width,
  flex = 1,
  required = false,
  disabled = false,
  ref,
}: Props) => {
  return (
    <InputWrapper width={width} flex={flex}>
      <Label>{label}</Label>
      <Input
        required={required}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(
            type === "number" ? parseInt(e.target.value) : e.target.value
          )
        }
        onKeyPress={(e) => onKeyPress && onKeyPress(e)}
        onKeyUp={(e) => onKeyUp && onKeyUp(e)}
        value={value}
        type={type}
        disabled={disabled}
        min="0"
        ref={ref}
      />
    </InputWrapper>
  );
};

export { ModalInput };
