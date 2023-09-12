import styled, { type StyledComponentInnerAttrs } from "styled-components";

/* styles */
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  height: 8rem;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 1rem 1rem 0 0;

  h1 {
    font-size: 2.4rem;
  }

  span {
    display: flex;
    gap: 1rem;
  }
`;

/* types */
interface Props {
  title: string;
  buttons?: React.ReactNode;
}

/* component */
function ModalHeader({ title, buttons }: Props) {
  return (
    <Header>
      <h1>{title}</h1>
      <span>{buttons}</span>
    </Header>
  );
}

/* export */
export { ModalHeader };
