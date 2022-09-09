import styled from "styled-components";
import { BsFillCalendarDateFill } from "react-icons/bs";

export const DatePicker = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${({ theme }) => theme.SPACES.s};
  align-items: center;
  position: relative;
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  color: ${({ theme }) => theme.COLORS.secondary};
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.green};
  }
`;

export const TogleIcon = styled(BsFillCalendarDateFill)`
  width: 100%;
`;

export const Input = styled.input<{ size: number }>`
  position: absolute;
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  opacity: 0;
  cursor: pointer;

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
