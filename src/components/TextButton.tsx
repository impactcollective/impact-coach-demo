import styled from "styled-components";

export const TextButton = styled.button<any>`
  width: ${(props) => props.width || "auto"};
  height: 4.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  color: rgb(44, 87, 166);
  padding: 1.75rem;
  font-size: 1.1rem;
  border: 1px solid transparent;
  font-weight: 600;
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.25s ease-in-out 0s;
  outline: none;
  &:hover {
    background-color: transparent;
    border-color: transparent;
    color: rgb(37, 73, 140);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
