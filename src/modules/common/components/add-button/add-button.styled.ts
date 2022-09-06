import styled from "styled-components";
import { IoMdAddCircle } from "react-icons/io";

export const AddIcon = styled(IoMdAddCircle)``;
export const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.blueGreen};
  cursor: pointer;
  background: inherit;
  border: none;
  border: 1 px solid ${({ theme }) => theme.COLORS.black};
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.green};
  }
`;
