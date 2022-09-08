import { IDay } from "../types/day.types";
import { format, isSameDay, isToday, isWithinInterval } from "date-fns";
import { DATE_FNS_PATTERNS } from "../consts/app-keys.const";

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
    dayNumber: format(date, DATE_FNS_PATTERNS.DAY_NUMBER),
    dayOfTheWeek: format(date, DATE_FNS_PATTERNS.DAY_OF_THE_WEEK),
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
