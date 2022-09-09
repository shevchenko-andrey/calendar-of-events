import { useEffect, useState } from "react";
import { addMonths, subMonths, parse, format } from "date-fns";
import CalendarContainer from "../calendar";
import { MonthSelectorComponent } from "../calendar/components/month-selector";
import { AddButtonComponent } from "../common/components/add-button";
import * as Styled from "./home.styled";
import { ModalComponent } from "../common/components/modal";
import { EventFormComponent } from "./components/event-form";
import { IEvent } from "../common/types/event.types";
import localStorageService from "../common/services/local-storage.service";
import { DatePickerComponent } from "../calendar/components/datapicker";
import { eventInitialState } from "../common/consts/initial-states";
import { DATE_FNS_PATTERNS, ICON_SIZES } from "../common/consts/app-keys.const";

const HomeContainer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date>(
    localStorageService.getFilterDate() ?? new Date()
  );

  useEffect(() => {
    localStorageService.setFilterDate(selected);
  }, [selected]);

  const handleSubmitForm = (values: IEvent) => {
    localStorageService.setEvents(values);
    setModalIsOpen((prev) => !prev);
  };

  const handleToggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handlePrevMonth = () => {
    setSelected(subMonths(selected, 1));
  };

  const handleNextMonth = () => {
    setSelected(addMonths(selected, 1));
  };

  const onPicked = (date: string) => {
    const newDate = parse(date, "yyyy-MM-dd", new Date());
    setSelected(newDate);
  };

  return (
    <Styled.Home>
      <Styled.Menu>
        <AddButtonComponent
          onClick={handleToggleModal}
          size={ICON_SIZES.SIZE_30}
        />
        <Styled.DatePickerWrapper>
          <MonthSelectorComponent
            iconSizes={ICON_SIZES.SIZE_30}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            date={selected}
          />
          <DatePickerComponent size={ICON_SIZES.SIZE_30} onPicked={onPicked} />
        </Styled.DatePickerWrapper>
      </Styled.Menu>
      <CalendarContainer selected={selected} setSelected={setSelected} />
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={handleToggleModal}
        ariaHideApp={false}
      >
        <EventFormComponent
          initialValues={{
            ...eventInitialState,
            date: format(selected, DATE_FNS_PATTERNS.SEPARATED_DASHES),
          }}
          onSubmit={handleSubmitForm}
        />
      </ModalComponent>
    </Styled.Home>
  );
};

export default HomeContainer;
