import styled from "styled-components";

export const Button = styled.button<any>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "4.5rem"};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
  padding: ${(props) => props.padding || "1.75rem"};
  font-size: 1.1rem;
  border: 1px solid rgb(44, 87, 166);
  font-weight: 600;
  background-color: rgb(44, 87, 166);
  border-radius: 8px;
  transition: all 0.25s ease-in-out 0s;
  outline: none;

  &:hover:enabled {
    background-color: rgb(37, 73, 140);
    border-color: rgb(37, 73, 140);
    color: rgb(255, 255, 255);
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
