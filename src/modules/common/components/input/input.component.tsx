import { ErrorMessage, Field } from "formik";
import * as Styled from "./input.styled";

interface IInputProps {
  name: string;
  title?: string;
  type?: "textarea" | "input";
}
export const InputComponent = ({
  name,
  title,
  type = "input",
}: IInputProps) => (
  <Styled.FildWrapper>
    <Styled.Label htmlFor={name}>{title ?? name}</Styled.Label>
    {type === "input" && <Styled.FormField id={name} name={name} />}
    {type === "textarea" && (
      <Field as={Styled.TextArea} id={name} name={name} />
    )}
    <ErrorMessage component={Styled.Error} name={name} />
  </Styled.FildWrapper>
);
