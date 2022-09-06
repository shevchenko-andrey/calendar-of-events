export interface IDay {
  date: Date;
  dayNumber: string;
  dayOfTheWeek: string;
  isSelected: boolean;
  setSelected: (date: Date) => void;
  isCurrent: boolean;
  isDisable: boolean;
}
