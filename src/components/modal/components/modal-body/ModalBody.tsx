import styled from "styled-components";

/* styles */
export const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  background: #f5f5f5;
  padding: 2rem;
  gap: 2rem;
  overflow-y: scroll;
`;

/* types */
interface Props {
  children: JSX.Element | JSX.Element[];
}

/* component */
function ModalBody({ children }: Props) {
  return (
    <Body>
      <Content>{children}</Content>
    </Body>
  );
}

/* export */
export { ModalBody };
