import { useEffect, useState } from "react";
import localStorageService from "../../../common/services/local-storage.service";
import { IDay } from "../../../common/types/day.types";
import { IEvent } from "../../../common/types/event.types";
import { EventComponent } from "../event";
import * as Styled from "./day.styled";

export const DayComponent = ({
  dayNumber,
  date,
  dayOfTheWeek,
  isCurrent,
  isDisable,
  isSelected,
  setSelected,
}: IDay) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  useEffect(() => {
    const events = localStorageService.getEventsByDate(date);
    if (events.length < 1) {
      return;
    }

    setEvents(events);
  }, [date]);

  const onClick = () => {
    setSelected(date);
  };
  return (
    <Styled.Day
      onClick={onClick}
      isSelected={isSelected}
      isDisable={isDisable}
      isCurrent={isCurrent}
    >
      <Styled.Wrapper>
        <Styled.DateWrapper>
          <Styled.DayNumber>{dayNumber}</Styled.DayNumber>

          <Styled.DayOfTheWeek>{dayOfTheWeek}</Styled.DayOfTheWeek>
        </Styled.DateWrapper>
        {events.map(({ title, id = "" }) => (
          <EventComponent
            setEvents={setEvents}
            key={id}
            id={id}
            title={title}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Day>
  );
};
