import { MonthComponent } from "./components/month";
import { startOfMonth, endOfMonth } from "date-fns";
import * as Styled from "./calendar.styled";

interface ICalendarProps {
  date: Date;
  selected: Date | null;
  setSelected: (date: Date) => void;
}

export default function CalendarContainer({
  date,
  selected,
  setSelected,
}: ICalendarProps) {
  return (
    <Styled.Table>
      <MonthComponent
        selected={selected}
        setSelected={setSelected}
        startOfMonth={startOfMonth(date)}
        endOfMonth={endOfMonth(date)}
      />
    </Styled.Table>
  );
}
