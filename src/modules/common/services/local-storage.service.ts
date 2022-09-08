import { IEvent } from "../types/event.types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

class LocalStoregeService {
  setEvents(event: IEvent) {
    const oldEvents = this.getEvents();

    window.localStorage.setItem(
      "events",
      JSON.stringify([...oldEvents, { ...event, id: nanoid() }])
    );
  }
  getEventsByDate(date: Date) {
    const formatedDate = format(date, "yyyy-MM-dd");
    return this.getEvents().filter((event) => event.date === formatedDate);
  }

  changeById(id: string, payload: IEvent) {
    const updatedEvents = this.getEvents().map((event) =>
      id === event.id ? payload : event
    );
    this.setAllEvents(updatedEvents);
    return updatedEvents;
  }

  deleteById(id: string) {
    const updatedEvents = this.getEvents().filter((event) => event.id !== id);
    this.setAllEvents(updatedEvents);
    return updatedEvents;
  }

  setAllEvents(events: IEvent[]) {
    window.localStorage.setItem("events", JSON.stringify(events));
  }

  getById(id: string) {
    return this.getEvents().find((event) => event.id === id);
  }

  getEvents(): IEvent[] {
    return JSON.parse(window.localStorage.getItem("events") ?? "[]");
  }
}
export default new LocalStoregeService();
