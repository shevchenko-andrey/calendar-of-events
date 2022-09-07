import {
  startOfWeek,
  endOfWeek,
  eachWeekOfInterval,
  formatISO,
} from "date-fns";
import { useEffect, useState } from "react";
import { WeekComponent } from "../week";
import * as Styled from "./month.styled";
interface IMounthProps {
  startOfMonth: Date;
  endOfMonth: Date;
  selected: Date | null;
  setSelected: (date: Date) => void;
}

export const MonthComponent = ({
  endOfMonth,
  startOfMonth,
  selected,
  setSelected,
}: IMounthProps) => {
  const [months, setMonths] = useState<Date[] | []>([]);

  useEffect(() => {
    const newMonths = eachWeekOfInterval({
      start: startOfMonth,
      end: endOfMonth,
    });

    setMonths(newMonths);
  }, [endOfMonth, startOfMonth]);

  return (
    <Styled.Month>
      {months.map((date) => {
        return (
          <WeekComponent
            key={formatISO(date)}
            selected={selected}
            setSelected={setSelected}
            endOfWeek={endOfWeek(date)}
            endOfMonth={endOfMonth}
            startOfMonth={startOfMonth}
            startOfWeek={startOfWeek(date)}
          />
        );
      })}
    </Styled.Month>
  );
};
