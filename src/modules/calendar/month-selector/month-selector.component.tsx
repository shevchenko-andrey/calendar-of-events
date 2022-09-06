import { format } from "date-fns";
import * as Styled from "./month-selector.styled";

interface MonthSelectorProps {
  iconSize: number;
  date: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

export const MonthSelectorComponent = ({
  iconSize,
  date,
  handleNextMonth,
  handlePrevMonth,
}: MonthSelectorProps) => {
  return (
    <Styled.Selector>
      <Styled.ArrowLeft onClick={handlePrevMonth} size={iconSize} />

      <Styled.Date>{format(date, "MMMM yyyy")}</Styled.Date>

      <Styled.ArrowRight onClick={handleNextMonth} size={iconSize} />
    </Styled.Selector>
  );
};
