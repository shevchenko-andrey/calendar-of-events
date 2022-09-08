import { IEvent } from "../types/event.types";
import { APP_KEYS } from "../consts";
import { nanoid } from "nanoid";
import { format, parse } from "date-fns";

class LocalStoregeService {
  setEvents(event: IEvent) {
    const oldEvents = this.getEvents();

    window.localStorage.setItem(
      APP_KEYS.STORAGE_KEYS.EVENTS,
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
    window.localStorage.setItem(
      APP_KEYS.STORAGE_KEYS.EVENTS,
      JSON.stringify(events)
    );
  }

  getById(id: string) {
    return this.getEvents().find((event) => event.id === id);
  }

  getEvents(): IEvent[] {
    return JSON.parse(
      window.localStorage.getItem(APP_KEYS.STORAGE_KEYS.EVENTS) ?? "[]"
    );
  }

  setFilterDate(date: Date) {
    window.localStorage.setItem(
      APP_KEYS.STORAGE_KEYS.DATE,
      format(date, "yyyy-MM-dd")
    );
  }

  getFilterDate() {
    try {
      const date = window.localStorage.getItem(APP_KEYS.STORAGE_KEYS.DATE);
      const result = date ? parse(date, "yyyy-MM-dd", new Date()) : null;
      return result;
    } catch (error) {
      return null;
    }
  }
}
export default new LocalStoregeService();
