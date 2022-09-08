import { IEvent } from "../types/event.types";
import { nanoid } from "nanoid";
import { format, parse } from "date-fns";
import { DATE_FNS_PATTERNS, STORAGE_KEYS } from "../consts/app-keys.const";

class LocalStoregeService {
  setEvents(event: IEvent) {
    const oldEvents = this.getEvents();

    window.localStorage.setItem(
      STORAGE_KEYS.EVENTS,
      JSON.stringify([...oldEvents, { ...event, id: nanoid() }])
    );
  }
  getEventsByDate(date: Date) {
    const formatedDate = format(date, DATE_FNS_PATTERNS.SEPARATED_DASHES);
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
    window.localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }

  getById(id: string) {
    return this.getEvents().find((event) => event.id === id);
  }

  getEvents(): IEvent[] {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.EVENTS) ?? "[]");
  }

  setFilterDate(date: Date) {
    window.localStorage.setItem(
      STORAGE_KEYS.DATE,
      format(date, DATE_FNS_PATTERNS.SEPARATED_DASHES)
    );
  }

  getFilterDate() {
    try {
      const date = window.localStorage.getItem(STORAGE_KEYS.DATE);
      const result = date
        ? parse(date, DATE_FNS_PATTERNS.SEPARATED_DASHES, new Date())
        : null;
      return result;
    } catch (error) {
      return null;
    }
  }
}
export default new LocalStoregeService();
