import { useRef, useEffect } from "react";
import { ModalBackdrop, ModalCard, ModalContainer } from "./Modal.styles";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  height?: string;
  width?: string;
  backgroundColor?: string;
  children: JSX.Element | JSX.Element[];
  fillScreen?: boolean;
  minWidth?: string;
  minHeight?: string;
  zIndex?: number;
}

function Modal({
  isOpen,
  onClose,
  height,
  width,
  minWidth,
  backgroundColor,
  children,
  minHeight,
  fillScreen,
  zIndex,
}: Modal) {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect((): any => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <ModalContainer zIndex={zIndex}>
      <ModalBackdrop
        isOpen={isOpen}
        onClick={() => {
          onClose();
        }}
        zIndex={zIndex}
      />
      <ModalCard
        ref={modalRef}
        key="modal"
        id="modal"
        height={fillScreen ? '100vh' : height}
        width={fillScreen ? '100vw' : width}
        minWidth={minWidth}
        minHeight={minHeight}
        backgroundColor={backgroundColor}
        fillScreen={fillScreen}
        zIndex={zIndex}
      >
        {children}
      </ModalCard>
    </ModalContainer>
  );
}

export { Modal };
export * from "./components";
