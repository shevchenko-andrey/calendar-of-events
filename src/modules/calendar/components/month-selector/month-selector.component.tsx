import { format } from "date-fns";
import { DATE_FNS_PATTERNS } from "../../../common/consts/app-keys.const";
import * as Styled from "./month-selector.styled";

interface MonthSelectorProps {
  iconSizes: number;
  date: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

export const MonthSelectorComponent = ({
  iconSizes,
  date,
  handleNextMonth,
  handlePrevMonth,
}: MonthSelectorProps) => {
  return (
    <Styled.Selector>
      <Styled.ArrowLeft onClick={handlePrevMonth} size={iconSizes} />

      <Styled.Date>
        {format(date, DATE_FNS_PATTERNS.MONTH_AND_YEAR)}
      </Styled.Date>

      <Styled.ArrowRight onClick={handleNextMonth} size={iconSizes} />
    </Styled.Selector>
  );
};
