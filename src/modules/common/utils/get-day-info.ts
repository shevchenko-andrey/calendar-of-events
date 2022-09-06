import { IDay } from "../types/day.types";
import { format, isSameDay, isToday, isWithinInterval } from "date-fns";

interface IGetdayInfoProps {
  date: Date;
  startOfMonth: Date;
  endOfMonth: Date;
  selected: Date | null;
  setSelected: (date: Date) => void;
}

export const getDayInfo = ({
  date,
  startOfMonth,
  endOfMonth,
  selected,
  setSelected,
}: IGetdayInfoProps) => {
  const isCurrent = isToday(date);
  const isSelected = selected ? isSameDay(date, selected) : isCurrent;

  const day: IDay = {
    date,
    dayNumber: format(date, "dd"),
    dayOfTheWeek: format(date, "cccccc"),
    setSelected,
    isSelected,
    isCurrent: isToday(date),
    isDisable: !isWithinInterval(date, {
      start: startOfMonth,
      end: endOfMonth,
    }),
  };
  return day;
};
