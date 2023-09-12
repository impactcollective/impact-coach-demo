import styled from "styled-components";
import { Button } from "./Button";

export const ButtonSecondary = styled(Button)<any>`
  color: rgb(44, 87, 166);
  padding: ${(props) => props.padding || "1.75rem"};
  font-size: 1.1rem;
  border: 1px solid rgb(44, 87, 166);
  font-weight: 600;
  background-color: #ffffff;
  border-radius: 8px;
  transition: all 0.25s ease-in-out 0s;
  outline: none;

  &:hover:enabled {
    background-color: rgb(37, 73, 140);
    border-color: rgb(37, 73, 140);
    color: rgb(255, 255, 255);
  }
`;
