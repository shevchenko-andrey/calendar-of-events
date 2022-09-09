import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const Event = styled.div`
  overflow: auto;
  max-width: 100%;
  padding: ${({ theme }) => theme.SPACES.s7};
  color: ${({ theme }) => theme.COLORS.white};
  background-color: ${({ theme }) => theme.COLORS.blueGreen};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.SPACES.s};
`;

export const Title = styled.span``;

export const Button = styled.button`
  cursor: pointer;
  background-color: inherit;
  margin-left: ${({ theme }) => theme.SPACES.s};
  border: none;
  color: ${({ theme }) => theme.COLORS.secondary};
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.red};
  }
`;

export const IconDelete = styled(MdDelete)``;
