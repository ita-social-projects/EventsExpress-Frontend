import EventsExpressService from "./EventsExpressService";

const baseService = new EventsExpressService();

export default class EventScheduleService {
  getEventSchedule = id => baseService.getResource(`eventSchedule/${id}`);

  getAllEventSchedules = () => baseService.getResource(`eventSchedule/all`);

  setEventSchedule = data => {
    const file = new FormData();

    file.append("Id", data.id);
    file.append("Frequency", data.frequency);
    file.append("LastRun", data.lastRun);
    file.append("NextRun", data.nextRun);
    file.append("Periodicity", data.periodicity);
    file.append("IsActive", data.isActive);

    return baseService.setResourceWithData(
      `eventSchedule/${data.eventId}/edit`,
      file,
    );
  };

  setNextEventScheduleCancel = eventId =>
    baseService.setResourceWithData(`eventSchedule/${eventId}/CancelNextEvent`);

  setEventSchedulesCancel = eventId =>
    baseService.setResourceWithData(`eventSchedule/${eventId}/CancelAllEvents`);
}
