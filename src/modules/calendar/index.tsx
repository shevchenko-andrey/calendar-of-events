import { MonthComponent } from "./components/month";
import { startOfMonth, endOfMonth } from "date-fns";
import * as Styled from "./calendar.styled";

interface ICalendarProps {
  selected: Date;
  setSelected: (date: Date) => void;
}

export default function CalendarContainer({
  selected,
  setSelected,
}: ICalendarProps) {
  return (
    <Styled.Table>
      <MonthComponent
        selected={selected}
        setSelected={setSelected}
        startOfMonth={startOfMonth(selected)}
        endOfMonth={endOfMonth(selected)}
      />
    </Styled.Table>
  );
}
