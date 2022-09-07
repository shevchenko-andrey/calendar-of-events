import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  position: absolute;
  right: 30px;
  top: 30px;
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  svg > {
    fill: ${({ theme }) => theme.COLORS.green};
  }
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.blueGreen};
  }
`;

export const CloseIcon = styled(IoMdClose)``;
