import styled from "styled-components";

interface ITdProps {
  isCurrent?: boolean;
  isSelected?: boolean;
  isDisable?: boolean;
}

export const Day = styled.td<ITdProps>`
  cursor: pointer;

  overflow: auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.secondary};

  color: ${({ isCurrent, isDisable, theme }) =>
    isDisable
      ? theme.COLORS.secondary
      : isCurrent
      ? theme.COLORS.green
      : theme.COLORS.black};

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.COLORS.blue : "inherit"};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.COLORS.blue};
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.SPACES.s};

  justify-content: space-between;
`;

export const Wrapper = styled.div`
  max-height: 5rem;
  margin-left: ${({ theme }) => theme.SPACES.s};
  margin-right: ${({ theme }) => theme.SPACES.s};

  @media screen and (min-width: 768px) {
    min-height: 10rem;
  }
`;

export const DayNumber = styled.span`
  margin-right: ${({ theme }) => theme.SPACES.s};
`;
export const DayOfTheWeek = styled.span`
  opacity: 0;
  @media screen and (min-width: 768px) {
    opacity: 1;
  }
`;
