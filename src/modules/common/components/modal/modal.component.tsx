import ReactModal, { Props } from "react-modal";
import * as Styled from "./modal.styled";

interface ModalProps extends Props {}

export const ModalComponent = ({
  isOpen,
  onRequestClose,
  children,
  ariaHideApp,
}: ModalProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      <Styled.ModalWrapper>
        <Styled.CloseBtn onClick={onRequestClose}>
          <Styled.CloseIcon size={30} />
        </Styled.CloseBtn>
        {children}
      </Styled.ModalWrapper>
    </ReactModal>
  );
};
