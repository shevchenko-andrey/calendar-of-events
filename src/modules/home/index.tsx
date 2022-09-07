import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarContainer from "../calendar";
import { MonthSelectorComponent } from "../calendar/components/month-selector";
import { AddButtonComponent } from "../common/components/add-button";
import * as Styled from "./home.styled";
import { ModalComponent } from "../common/components/modal";

const HomeContainer = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date>(new Date());

  const handleAddEvent = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handlePrevMonth = () => {
    setDate(subMonths(date, 1));
  };

  const handleNextMonth = () => {
    setDate(addMonths(date, 1));
  };

  return (
    <Styled.Home>
      <Styled.Menu>
        <AddButtonComponent onClick={handleAddEvent} size={30} />
        <MonthSelectorComponent
          iconSizes={30}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          date={date}
        />
      </Styled.Menu>
      <CalendarContainer
        selected={selected}
        setSelected={setSelected}
        date={date}
      />
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>Work</div>
      </ModalComponent>
    </Styled.Home>
  );
};

export default HomeContainer;
