class LocalStoregeService {
  setEvents(events: string) {
    window.localStorage.setItem("events", events);
  }
  getEvents() {
    window.localStorage.getItem("events");
  }
}
export default new LocalStoregeService();
