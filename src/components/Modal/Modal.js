import { useEffect, useState, useCallback } from "react";
import { Wrapper, ModalContent, Close } from "./style";

const Modal = ({ open, children, onClose, testId }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  if (!open) {
    return null;
  }

  return (
    <Wrapper data-testid={testId} open={isOpen} onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Close onClick={handleCloseModal}>&times;</Close>
        {children}
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;
