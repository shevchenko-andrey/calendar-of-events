import { ErrorMessage, Field } from "formik";
import * as Styled from "./input.styled";

interface IInputProps {
  name: string;
  placeholder?: string;
  title?: string;
  type?: "textarea" | "input" | "date" | "time";
}
export const InputComponent = ({
  name,
  placeholder,
  title,
  type = "input",
}: IInputProps) => (
  <Styled.FildWrapper>
    {(type === "input" || type === "textarea") && (
      <Styled.Label htmlFor={name}>{title ?? name}</Styled.Label>
    )}

    {type === "input" && (
      <Styled.FormField placeholder={placeholder} id={name} name={name} />
    )}

    {type === "textarea" && (
      <Field
        as={Styled.TextArea}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    )}

    {type === "date" && (
      <Styled.DateWrapper>
        <Styled.Label date htmlFor={name}>
          {title ?? name}
        </Styled.Label>
        <Field as={Styled.DateFild} type="date" id={name} name={name} />
      </Styled.DateWrapper>
    )}

    {type === "time" && (
      <Styled.DateWrapper>
        <Styled.Label date htmlFor={name}>
          {title ?? name}
        </Styled.Label>
        <Field as={Styled.DateFild} type="time" id={name} name={name} />
      </Styled.DateWrapper>
    )}
    <ErrorMessage component={Styled.Error} name={name} />
  </Styled.FildWrapper>
);
