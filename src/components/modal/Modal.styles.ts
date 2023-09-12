import styled from "styled-components";

export const ModalBackdrop = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ zIndex }) => zIndex || 1040};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: start;
  align-items: center;
  padding: 2rem 10rem;
`;

export const ModalContainer = styled.div<{ zIndex?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex ? zIndex + 10 : 1050};
`;

export const ModalCard = styled.div<any>`
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "90%"};
  background: #f5f5f5;
  border-radius: ${({ fillScreen }) => fillScreen ? 0 : '1rem'};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  z-index: ${({ zIndex }) => zIndex + 20 || 1060};
  min-width: ${({ minWidth }) => minWidth || "auto"};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  overflow: auto;
  max-height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
