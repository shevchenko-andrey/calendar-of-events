import { IDay } from "../../../common/types/day.types";
import * as Styled from "./day.styled";

export const DayComponent = ({
  dayNumber,
  date,
  dayOfTheWeek,
  isCurrent,
  isDisable,
  isSelected,
  setSelected,
}: IDay) => {
  const onClick = () => {
    setSelected(date);
  };
  return (
    <Styled.Day
      onClick={onClick}
      isSelected={isSelected}
      isDisable={isDisable}
      isCurrent={isCurrent}
    >
      <Styled.Wrapper>
        <Styled.DayNumber>{dayNumber}</Styled.DayNumber>
        <Styled.DayOfTheWeek>{dayOfTheWeek}</Styled.DayOfTheWeek>
      </Styled.Wrapper>
    </Styled.Day>
  );
};
