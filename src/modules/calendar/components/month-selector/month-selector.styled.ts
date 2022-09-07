import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Selector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.span`
  margin: ${({ theme }) => theme.SPACES.m};
`;

export const ArrowLeft = styled(IoIosArrowBack)`
  cursor: pointer;
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.green};
  }
`;

export const ArrowRight = styled(IoIosArrowForward)`
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  :hover,
  :focus {
    color: ${({ theme }) => theme.COLORS.green};
  }
`;
