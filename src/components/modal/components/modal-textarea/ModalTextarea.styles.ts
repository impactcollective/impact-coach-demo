import styled from "styled-components";

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
`;

export const Input = styled.textarea`
  font-size: 1.5rem;
  width: 100%;
  height: 5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding-left: 1rem;
  padding-top: 1rem;
  min-height: 8rem;
  resize: vertical;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;
