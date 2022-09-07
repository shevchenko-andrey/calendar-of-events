import { useEffect, useState } from "react";
import { eachDayOfInterval, formatISO } from "date-fns";
import { DayComponent } from "../day/day.component";
import { IDay } from "../../../common/types/day.types";
import * as Styled from "./week.styled";
import { getDayInfo } from "../../../common/utils/get-day-info";

interface IWeekProps {
  startOfWeek: Date;
  endOfWeek: Date;
  endOfMonth: Date;
  startOfMonth: Date;
  selected: Date | null;
  setSelected: (date: Date) => void;
}

export const WeekComponent = ({
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  selected,
  setSelected,
}: IWeekProps) => {
  const [days, setDays] = useState<IDay[] | []>([]);
  useEffect(() => {
    const newDays: IDay[] = eachDayOfInterval({
      start: startOfWeek,
      end: endOfWeek,
    }).map((date) =>
      getDayInfo({
        date,
        startOfMonth,
        endOfMonth,
        selected,
        setSelected,
      })
    );

    setDays(newDays);
  }, [startOfWeek, endOfWeek, startOfMonth, endOfMonth, selected, setSelected]);

  return (
    <Styled.Week>
      {days.map(
        ({
          date,
          isCurrent,
          isDisable,
          isSelected,
          setSelected,
          dayNumber,
          dayOfTheWeek,
        }) => (
          <DayComponent
            key={formatISO(date)}
            date={date}
            isSelected={isSelected}
            setSelected={setSelected}
            isCurrent={isCurrent}
            isDisable={isDisable}
            dayNumber={dayNumber}
            dayOfTheWeek={dayOfTheWeek}
          />
        )
      )}
    </Styled.Week>
  );
};
