import { format } from "date-fns";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputComponent } from "../../../common/components/input";
import { IEvent } from "../../../common/types/event.types";
import * as Styled from "./event-form.styled";
import { eventInitialState } from "../../../common/consts/initial-states";
import { DATE_FNS_PATTERNS } from "../../../common/consts/app-keys.const";

interface IEventFormProps {
  initialValues?: IEvent;
  onSubmit: (values: IEvent) => void;
  children?: JSX.Element;
}

const validationsShema = Yup.object({
  title: Yup.string().min(2).max(30).required(),
  description: Yup.string().min(10).max(100),
  date: Yup.date()
    .min(
      format(new Date(), DATE_FNS_PATTERNS.SEPARATED_DASHES),
      "you can't plan for the past"
    )
    .required(),
  time: Yup.string(),
});

export const EventFormComponent = ({
  initialValues = eventInitialState,
  onSubmit,
  children,
}: IEventFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationsShema}
      onSubmit={onSubmit}
    >
      <Styled.EventForm>
        <InputComponent
          placeholder="Title goes here"
          name="title"
          title="Title"
        />
        <InputComponent
          name="description"
          title="Description"
          type="textarea"
        />
        <Styled.DateWrapper>
          <InputComponent name="date" title="Date" type="date" />
          <InputComponent name="time" title="Time" type="time" />
        </Styled.DateWrapper>
        <Styled.ButtonGroup>
          <Styled.Button type="submit">Save</Styled.Button>
          {children}
        </Styled.ButtonGroup>
      </Styled.EventForm>
    </Formik>
  );
};
