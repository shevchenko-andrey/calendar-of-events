import styled from "styled-components";

interface ITdProps {
  isCurrent?: boolean;
  isSelected?: boolean;
  isDisable?: boolean;
}

export const Day = styled.td<ITdProps>`
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
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 4rem;
  padding: ${({ theme }) => theme.SPACES.s};

  justify-content: space-between;

  @media screen and (min-width: 768px) {
    min-height: 8rem;
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
