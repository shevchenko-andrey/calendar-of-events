import { useState } from "react";
import { ModalComponent } from "../../../common/components/modal";
import { ICON_SIZES } from "../../../common/consts/app-keys.const";
import localStorageService from "../../../common/services/local-storage.service";
import { IEvent } from "../../../common/types/event.types";
import { EventFormComponent } from "../../../home/components/event-form";
import * as Styled from "./event.styled";

interface IEventProps {
  title: string;
  id: string;
  setEvents: (event: IEvent[]) => void;
}

export const EventComponent = ({ title, id, setEvents }: IEventProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = (values: IEvent) => {
    const newEvents = localStorageService.changeById(id, values);
    setEvents(newEvents);
    handleModal();
  };

  const onDelete = () => {
    const newEvents = localStorageService.deleteById(id);
    setEvents(newEvents);
    handleModal();
  };

  return (
    <>
      <Styled.Event onClick={handleModal}>{title}</Styled.Event>
      <ModalComponent
        ariaHideApp={false}
        onRequestClose={handleModal}
        isOpen={isOpen}
      >
        <EventFormComponent
          onSubmit={onSubmit}
          initialValues={localStorageService.getById(id)}
        >
          <Styled.Button onClick={onDelete}>
            <Styled.IconDelete size={ICON_SIZES.SIZE_30} />
          </Styled.Button>
        </EventFormComponent>
      </ModalComponent>
    </>
  );
};
