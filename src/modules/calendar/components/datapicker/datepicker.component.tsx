import * as Styled from "./datepicker.styled";
interface IDatePicker {
  onPicked: (date: string) => void;
  size: number;
}

export const DatePickerComponent = ({ onPicked, size }: IDatePicker) => {
  return (
    <Styled.DatePicker>
      <Styled.TogleIcon size={size} />
      <Styled.Input
        size={size}
        type={"date"}
        onChange={(e) => onPicked(e.target.value as string)}
      ></Styled.Input>
    </Styled.DatePicker>
  );
};
