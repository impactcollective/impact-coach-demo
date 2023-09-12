import styled from "styled-components";

interface Props {
  label: string | React.ReactNode;
  checked?: boolean;
  onCheck: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch = styled.label<any>`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input:checked + span:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
  }
`;

const Wrapper = styled.div<any>`
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  p {
    font-size: 1.6rem;
  }
`;

const ModalSwitch = ({ label, checked = false, onCheck, disabled }: Props) => {
  return (
    <Wrapper>
      <Switch disabled={disabled}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          style={{ cursor: "default" }}
          onChange={() => onCheck(!checked)}
        />
        <span />
      </Switch>
      <p>{label}</p>
    </Wrapper>
  );
};

export { ModalSwitch };
