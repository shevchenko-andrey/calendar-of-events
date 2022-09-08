import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const Event = styled.div`
  list-style: none;
  overflow-y: auto;
  padding: ${({ theme }) => theme.SPACES.s7};
  color: ${({ theme }) => theme.COLORS.white};
  background-color: ${({ theme }) => theme.COLORS.blueGreen};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.SPACES.s};
`;

export const Button = styled.button``;

export const IconDelete = styled(MdDelete)``;
