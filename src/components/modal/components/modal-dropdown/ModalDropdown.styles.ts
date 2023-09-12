import styled, { css } from "styled-components";

export const Dropdown = styled.div<any>`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: ${({ width }) => width || "100%"};
  flex: ${({ flex }) => flex || 1};

  img {
    position: absolute;
    right: 2rem;
    top: 2.75rem;
  }
`;

export const DropdownInput = styled.input`
  border: none;
  background-color: transparent;
  border: none;
  height: 4rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding-left: 1rem;
  background: white;
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 600;
  left: 0;
`;

export const Menu = styled.div<any>`
  display: flex;
  opacity: 1;
  position: absolute;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 30vh;
  min-height: 6rem;
  overflow-y: auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  z-index: 10000;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
      opacity: 0;
    `};

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `};
`;

export const DropdownOption = styled.div<any>`
  display: flex;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #f5f5f5;
    `}

  &:hover {
    background: #f5f5f5;
  }
`;
