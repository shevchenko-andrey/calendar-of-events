import * as Styled from "./datepicker.styled";

interface IDatePicker {
  onPicked: (date: string) => void;
}

export const DatePickerComponent = ({ onPicked }: IDatePicker) => {
  return (
    <Styled.Input
      id="date"
      type={"date"}
      onChange={(e) => onPicked(e.target.value as string)}
    ></Styled.Input>
  );
};
